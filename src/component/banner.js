import React from "react"
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imguser from "../img/user.png"
import { searchUsuarioById } from "../api/usuarioApi"

export default function Banner() {

    const navigate = useNavigate()
    const email = localStorage.getItem('email')
    const id = localStorage.getItem('id')
    const [imagetemp, setImagenTemp] = useState()
    const url_img = "http://localhost:8080/img/perfil/"

    useEffect(() => {

        obtenerImagen()

    }, []);

    const obtenerImagen = async () => {

        let usuario = await searchUsuarioById(id)
        setImagenTemp(url_img + usuario.username + ".jpg")

    }



    const logout = () => {

        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('id')
        navigate('/')

    }


    return (

        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>
                <li className="nav-item dropdown no-arrow">
                    <Link to="" className="nav-link dropdown-toggle" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{email}</span>
                        <img className="img-profile rounded-circle" src={imagetemp} alt="" />
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
    )



}