import React from "react";
import { useNavigate , Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUser from '../../hooks/useUser'

export default function Login() {

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate();
    const { islogged, getToken, login } = useUser();
 

    useEffect(() => {
        validarToker()

    }, [getToken]);

    const validarToker = () => {
        
        if(getToken) { navigate('/usuario') }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password)
    }

    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">¡Formulario de Login! {islogged} </h1>
                                        </div>

                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." onChange={({ target }) => setEmail(target.value)}></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" autoComplete="" onChange={({ target }) => setPassword(target.value)}></input>
                                            </div>
                                            <div className="aviso"><label className="avisoContrasena" id="avisoContrasena"></label></div>
                                            <input type="submit" className="btn btn-primary btn-user btn-block" value="Login" />
                                        </form>

                                        <hr></hr>
                                        <div className="text-center">
                                            <Link to="../forgot">Forgot Password?</Link>
                                        </div>
                                        <div className="text-center">
                                            <Link to="../register">Create an Account!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )



}