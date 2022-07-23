import React from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const registrarUsuario = () => {

        let datos = {};
        datos.nombre = document.getElementById('txtNombre').value;
        datos.apellido = document.getElementById('txtApellido').value;
        datos.email = document.getElementById('txtEmail').value;
        datos.password = document.getElementById('txtPassword').value;
        console.log(datos.nombre)

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
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form className="user">
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user" id="txtNombre"
                                                placeholder="Nombre"></input>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user" id="txtApellido"
                                                placeholder="Apellidos"></input>
                                        </div>
                                    </div>
                                    <div className="aviso"><label className="avisoNomrbres" id="avisoNomrbres"></label></div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" id="txtEmail"
                                            placeholder="Email Address"></input>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user"
                                                id="txtPassword" placeholder="Password" autoComplete="true"></input>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user"
                                                id="txtValPassword" placeholder="Repeat Password" autoComplete="true"></input>
                                        </div>
                                    </div>
                                    <Link to="" onClick={registrarUsuario} className="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </Link>
                                    <hr></hr>
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

        </div>
    )

}

export default Register;