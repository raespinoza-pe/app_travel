import React from "react"
import { FiEdit } from "react-icons/fi"
import { useEffect, useState } from 'react'
import { searchUsuarioById, saveImagen, updateField } from "../api/usuarioApi"
import imguser from "../img/user.png"


export default function Perfil(props) {

    const id = localStorage.getItem('id')
    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [imagen, setImagen] = useState()
    const [imagetemp, setImagenTemp] = useState()
    const [button, setButton] = useState(true)

    useEffect(() => {

        obtenerUsuario()

    }, []);

    const obtenerUsuario = async () => {

        let usuario = await searchUsuarioById(id)

        setNombre(usuario.nombre)
        setApellido(usuario.apellido)
        setEmail(usuario.email)
        setUsername(usuario.username)
        
        setImagenTemp(imguser)

    }

    const subirImagen = (e) => {
        const objectURL = window.URL.createObjectURL(e)
        setImagenTemp(objectURL)
        setImagen(e)
    }

    const insertarImagen = async () => {
        saveImagen(username, imagen)
    }

    const handleButton = async(e,opc) => {

        let objeto = e.parentElement.parentElement
        let datos = {};
        datos.id = id
        datos.nombre = nombre
        datos.apellido = apellido
        datos.email = email
        datos.username = username

        if (button) {
            e.classList.replace("btn-outline-primary", "btn-outline-success")
            e.textContent = "Guardar"
            objeto.querySelector('div').innerHTML = '<input type="text" class="form-control">'
            objeto.querySelector('label').style.display = 'none'
        } else {
            e.classList.replace("btn-outline-success", "btn-outline-primary")
            e.textContent = "Editar"
            let field = objeto.querySelector('input').value
            switch (opc) {
                case 1:
                    datos.nombre = field
                    await updateField(datos)
                    setNombre(field)
                    break
                case 2:
                    datos.apellido = field
                    await updateField(datos)
                    setApellido(field)
                    break
                case 3:
                    datos.username = field
                    await updateField(datos)
                    setUsername(field)
                    break
            }
            objeto.querySelector('div').innerHTML = ""
            objeto.querySelector('label').style.display = 'block'
        }

        setButton(!button)

    }



    return (

        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">PERFIL</h1>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card shadow mb-6">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">INFORMACIÓN DE LA CUENTA</h6>
                        </div>
                        <div className="card-body text-center">
                            <img src={imagetemp} alt="foto_perfil" className="rounded mx-auto d-block" width="150px" height="150px" />
                            <div className="file-input">
                                <label htmlFor="file">
                                    <i className="fa fa-2x fa-camera"></i>
                                </label>
                                <input type="file" id="file" className="file" accept="image/*" onChange={(e) => subirImagen(e.target.files[0])} />
                                <span>Maximo 2mb</span>
                            </div>
                            <br />
                            <button className="btn btn-primary" onClick={() => insertarImagen()}>Actualizar Foto</button>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table" id="dataTable" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>Nombres </td>
                                            <td><label >{nombre} </label><div></div></td>
                                            <td>    
                                            <button type="button" className="btn btn-outline-primary" onClick={(e) => handleButton(e.target,1)}> Editar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Apellidos </td>
                                            <td><label >{apellido} </label><div></div></td>
                                            <td><button type="button" className="btn btn-outline-primary" onClick={(e) => handleButton(e.target,2)}> Editar</button></td>
                                        </tr>
                                        <tr>
                                            <td>Username </td>
                                            <td><label >{username} </label><div></div></td>
                                            <td><button type="button" className="btn btn-outline-primary" onClick={(e) => handleButton(e.target,3)}> Editar</button></td>
                                        </tr>

                                        <tr>
                                            <td>Email </td>
                                            <td>{email}</td>
                                        </tr>
                                        <tr>
                                            <td>Contraseña</td>
                                            <td><FiEdit /></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )



}