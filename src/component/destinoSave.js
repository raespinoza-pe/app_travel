import React from "react"
import '../css/sb-admin-2.min.css'
import '../css/destino.css'
import { AiFillSave } from "react-icons/ai"
import { useState } from 'react'
import { saveDestinos } from "../api/destinoApi"
import { useNavigate } from "react-router-dom"
import { ImCancelCircle } from "react-icons/im"
import Button from 'react-bootstrap/Button'

export default function DestinoSave() {

    const [nombre, setNombre] = useState()
    const [descripion, setDescripion] = useState()
    const [dia, setDia] = useState()
    const [hora, setHora] = useState()
    const [presupuesto, setPresupuesto] = useState()
    const id = localStorage.getItem('id')
    const email = localStorage.getItem('email')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        let datos = {}
        let usuario = {}
        datos.nombre = nombre
        datos.descripcion = descripion
        datos.dia_viaje = dia
        datos.hora_viaje = hora
        datos.presupuesto = presupuesto
        usuario.id = id
        usuario.email = email
        datos.id_usuario = usuario
        await saveDestinos(datos)   
        navigate('/destino') 

    }

    const regresar = () => {
        navigate('/destino') 
    }


    return (
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Mis Destinos</h1>
            <div className="row">
                <div className="card">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Añadir Nuevo Destino</h6>
                    </div>
                    <div className="card-body">
                        <form className="form-group" onSubmit={handleSubmit}>
                            <div className="table-responsive">
                                <table className="table table-hover" id="dataTable" width="100%">
                                    <tbody>
                                        <tr>
                                            <th>NOMBRE</th>
                                            <th>DESCRIPCIÓN</th>
                                            <th>DIAS VIAJE</th>
                                            <th>HORAS VIAJE</th>
                                            <th>PRESUPUESTO</th>
                                        </tr>
                                        <tr>
                                            <td><input type="text" className="form-control form-control-user" id="txtNombre" placeholder="Nombre" required onChange={({ target }) => setNombre(target.value)}></input></td>
                                            <td><input type="text" className="form-control form-control-user" id="txtDescripcion"
                                                placeholder="Maximo 225 caracteres" required maxLength="225" onChange={({ target }) => setDescripion(target.value)}></input></td>
                                            <td> <div className="input-group">
                                                <input type="number" className="form-control form-control-user" id="txtDiaViaje" 
                                                placeholder="Maximo 30 dias" required max="30" onChange={({ target }) => setDia(Number(target.value))}></input>
                                                <div className="input-group-prepend"><span className="input-group-text" >Dias</span></div>
                                            </div></td>
                                            <td> <div className="input-group">
                                                <input type="number" className="form-control form-control-user" id="txtHoraViaje" 
                                                placeholder="Maximo 23 horas" required max="23" onChange={({ target }) => setHora(Number(target.value))}></input>
                                                <div className="input-group-prepend"><span className="input-group-text" >Horas</span></div>
                                            </div></td>
                                            <td><div className="input-group">
                                                <input type="number" className="form-control form-control-user" id="txtPresupuesto"
                                                placeholder="Maximo 1000" required max="1000" onChange={({ target }) => setPresupuesto(target.value)}></input>
                                                <div className="input-group-prepend"><span className="input-group-text" >Soles</span></div>
                                            </div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="centrar_left">
                                <Button variant="primary" onClick={() =>regresar()}> <ImCancelCircle /> Regresar</Button>
                                <button type="submit" className="btn btn-success"><AiFillSave /> Guardar destino</button>
                            </div>
                        </form>
                    </div>
                    <br />
                </div>
            </div>
        </div >
    )



}