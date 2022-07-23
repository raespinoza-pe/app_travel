import React from 'react'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import Headers from '../component/header'
import { useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser'


const Usuario = () => { 

    const [email, setEmail] = useState()
    const navigate = useNavigate()
    const { getToken } = useUser()


    useEffect(() => {
        validarLogin()
    },[getToken]) 

    const validarLogin = () => {
        setEmail(localStorage.getItem('email'))
        if(!getToken) { navigate('/login') }
    }

    const logout = () => {

        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')

    }

    return (

        <>

            <div id="wrapper">
                <Headers/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <ul className="navbar-nav ml-auto">
                                <div className="topbar-divider d-none d-sm-block"></div>
                                <li className="nav-item dropdown no-arrow">
                                    <Link to="" className="nav-link dropdown-toggle" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{email}</span>
                                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg" alt="" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <Link to="" className="dropdown-item" >
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile 
                                        </Link>
                                        <Link to="" className="dropdown-item">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </Link>
                                        <Link to="" className="dropdown-item" >
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="" className="dropdown-item" data-toggle="modal" data-target="#logoutModal" onClick={logout}>
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="container-fluid">
                            <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
                        </div>
                    </div>
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2020</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>


        </>
    )

}

export default Usuario