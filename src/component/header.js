import React from "react"
import { Link } from "react-router-dom"
import { IoIosAirplane, IoIosGlobe, IoIosContact } from "react-icons/io"

export default function Header() {

    const id = localStorage.getItem('id')

    return (

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">RaeMiv<sup>tm</sup></div>
            </a>
            <hr className="sidebar-divider my-0"></hr>
            <li className="nav-item">

                <Link to="/usuario" className="nav-link" >
                <IoIosContact/>
                <span> Perfil</span></Link>
                <Link to="/destino" className="nav-link" >
                <IoIosAirplane/>
                <span> Destinos</span></Link>
                <Link to="/destino" className="nav-link" >
                <IoIosGlobe/>
                <span> Lugares Turisticos</span></Link>
                
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    )



}