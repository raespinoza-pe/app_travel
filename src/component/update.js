import React from "react"
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from "react-hot-toast"
import { updatePassword } from "../api/usuarioApi"

export default function Update() {

    const id = localStorage.getItem('id')
    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault()
        let password = document.getElementById('txPassword').value
        let newPassword = document.getElementById('txtNewPassword').value
        let valpassword = document.getElementById('txtValPassword').value
        let val = document.getElementById('avisoValidarContrasena')

        if (newPassword !== valpassword) {
            val.innerHTML = "Las contraseñas son diferentes"
            return
        }

        let datos = {}
        datos.id = id
        datos.password = password
        datos.username = newPassword

        const respuesta = await updatePassword(datos)

        if (respuesta != 'fail') {
            toast.success("Contraseña actualizado correctamente")
            setTimeout(function () {
                navigate('/usuario')
            }, 1000);
        } else {
            toast.error("La Contraseña actual es incorrecta")
        }
    
    
    }

    return (

        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">PERFIL</h1>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card shadow mb-6">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Actualizar Contraseña</h6>
                        </div>
                        <div className="card-body">
                            <form className="user" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-user" id="txPassword"
                                        placeholder="Contraseña Actual" required autoComplete="on"></input>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="txtNewPassword" placeholder="Nueva Contraseña" autoComplete="on" required></input>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="txtValPassword" placeholder="Repetir Contraseña" autoComplete="on" required></input>
                                    </div>
                                </div>
                                <div className="aviso"><label className="avisoContrasena" id="avisoValidarContrasena"></label></div>
                                <input type="submit" className="btn btn-primary btn-user btn-block" value="Actualizar Contraseña" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
            />
        </div>
    )



}