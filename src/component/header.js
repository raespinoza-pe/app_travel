import React from "react";
import { Link } from "react-router-dom";

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
                <Link to={'/'} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link to={'/'} className="collapse-item" href="buttons.html">Buttons</Link>
                        <Link to={'/'} className="collapse-item" href="cards.html">Cards</Link>
                    </div>
                </div>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    )



}