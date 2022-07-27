import React from "react"
import { Link } from "react-router-dom"
import { IoIosAirplane, IoIosGlobe, IoIosContact } from "react-icons/io"

export default function Header() {
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

                <Link to="" className="nav-link" href="charts.html">
                <IoIosContact/>
                <span> Perfil</span></Link>
                <Link to="" className="nav-link" href="charts.html">
                <IoIosAirplane/>
                <span> Destinos</span></Link>
                <Link to="" className="nav-link" href="charts.html">
                <IoIosGlobe/>
                <span> Lugares Turisticos</span></Link>
                
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    )



}