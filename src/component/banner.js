import React from "react"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchUsuarioById } from "../api/usuarioApi"
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

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


                    <Dropdown>
                        <Dropdown.Toggle variant="Info" id="dropdown-button-dark"  size="sm">
                            <Link to="" className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{email}</span>
                                <img className="img-profile rounded-circle" src={imagetemp} alt="" />
                            </Link>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Profile</Dropdown.Item>
                            <Dropdown.Item href="#">Activity Log</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </li>
            </ul>
        </nav>
    )



}