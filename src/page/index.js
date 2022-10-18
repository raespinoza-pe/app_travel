import React from "react"
import '../css/style.css'
import logo1 from '../img/logo1.png'
import icon from '../img/icon.png'

const Destino = () => {

    return (

        <>

            <div className="banner">
                <div className="header">
                    <div className="container">
                        <div className="header-main">
                            <div className="logo wow bounceInLeft" data-wow-delay="0.3s">
                                <a href="index.html"><img src= {logo1} alt=""/></a>
                            </div>
                            <div className="top-navg">
                                <span className="menu"> <img src= {icon} alt="" /></span>
                                <nav className="cl-effect-13">
                                    <ul className="res">
                                        <li><a className="active" href="index.html">Home</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="hotel.html">Hotel</a></li>
                                        <li><a href="shortcodes.html">Shortcodes</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>

                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div className="banner-main">
                    <div className="slider-bann wow bounceInRight" data-wow-delay="0.3s">
                        <ul className="rslides" id="slider2">
                            <li>
                                <h3>Welcome To Our Travel</h3>
                                <h4>The Best Way To Be Lost</h4>
                                <div className="ban-btn">
                                    <a href="single.html" className="hvr-bounce-out">Load More</a>
                                </div>
                            </li>
                            <li>
                                <h3>Find Beautiful Place</h3>
                                <h4>The Best Way To Be Lost</h4>
                                <div className="ban-btn">
                                    <a href="single.html" className="hvr-bounce-out">Load More</a>
                                </div>
                            </li>
                            <li>
                                <h3>To travel is to live</h3>
                                <h4>The Best Way To Be Lost</h4>
                                <div className="ban-btn">
                                    <a href="single.html" className="hvr-bounce-out">Load More</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Destino;