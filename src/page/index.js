import React from "react"



const Destino = () => {

    return (

        <>

            <div class="banner">
                <div class="header">
                    <div class="container">
                        <div class="header-main">
                            <div class="logo wow bounceInLeft" data-wow-delay="0.3s">
                                <a href="index.html"><img src="images/logo1.png" alt=""/></a>
                            </div>
                            <div class="top-navg">
                                <span class="menu"> <img src="images/icon.png" alt="" /></span>
                                <nav class="cl-effect-13">
                                    <ul class="res">
                                        <li><a class="active" href="index.html">Home</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="hotel.html">Hotel</a></li>
                                        <li><a href="shortcodes.html">Shortcodes</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>

                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div class="banner-main">
                    <div class="slider-bann wow bounceInRight" data-wow-delay="0.3s">
                        <ul class="rslides" id="slider2">
                            <li>
                                <h3>Welcome To Our Travel</h3>
                                <h4>The Best Way To Be Lost</h4>
                                <div class="ban-btn">
                                    <a href="single.html" class="hvr-bounce-out">Load More</a>
                                </div>
                            </li>
                            <li>
                                <h3>Find Beautiful Place</h3>
                                <h4>The Best Way To Be Lost</h4>
                                <div class="ban-btn">
                                    <a href="single.html" class="hvr-bounce-out">Load More</a>
                                </div>
                            </li>
                            <li>
                                <h3>To travel is to live</h3>
                                <h4>The Best Way To Be Lost</h4>
                                <div class="ban-btn">
                                    <a href="single.html" class="hvr-bounce-out">Load More</a>
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