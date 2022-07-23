import React from "react"
import { Link } from "react-router-dom"
import { savehUsuarios, buscarEmail } from "../api/usuarioApi"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast, Toaster } from "react-hot-toast"

const Register = () => {

    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        let datos = {};
        datos.nombre = nombre
        datos.apellido = apellido
        datos.email = email
        datos.password = password
        let valpassword = document.getElementById('txtValPassword').value
        let val = document.getElementById('avisoValidarContrasena')

        if (password !== valpassword) {
            val.innerHTML = "Las contraseñas son diferentes"
            return
        }

        let existUsuario = await buscarEmail(datos.email);

        if (existUsuario === "si") {
            toast.error("El email ya se encuentra registrado, intente nuevamente")
        } else if (existUsuario === "no") {
            toast.success('Email registrado correctamente')
            setTimeout(function(){ 
                savehUsuarios(datos)
                navigate("/login")
            }, 1000);
            
        }

    }

    return (

        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">!Crear una Nueva Contraseña!</h1>
                                </div>
                                <form className="user" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user" id="txtNombre"
                                                placeholder="Nombre" required onChange={({ target }) => setNombre(target.value)}></input>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user" id="txtApellido"
                                                placeholder="Apellidos" required onChange={({ target }) => setApellido(target.value)}></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" id="txtEmail"
                                            placeholder="Email Address" required onChange={({ target }) => setEmail(target.value)}></input>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user"
                                                id="txtPassword" placeholder="Password" autoComplete="true" required onChange={({ target }) => setPassword(target.value)}></input>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user"
                                                id="txtValPassword" placeholder="Repeat Password" autoComplete="true" required></input>
                                        </div>
                                    </div>
                                    <div className="aviso"><label className="avisoContrasena" id="avisoValidarContrasena"></label></div>
                                    <input type="submit" className="btn btn-primary btn-user btn-block" value="Register Account" />

                                </form>
                                <hr></hr>
                                <div className="text-center">
                                    <Link to="../forgot">Forgot Password?</Link>
                                </div>
                                <div className="text-center">
                                    <Link to="../login">Already have an account? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
            />
        </div>
    )

}

export default Register;