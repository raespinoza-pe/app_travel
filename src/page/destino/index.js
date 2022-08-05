import React from "react"
import Headers from '../../component/header'
import Footer from '../../component/footer'
import Banner from '../../component/banner'
import { useEffect } from 'react'
import useUser from '../../hooks/useUser'
import { useNavigate } from 'react-router-dom'

const Destino = () => { 

    const { getToken } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        validarLogin()
    }, [getToken])

    const validarLogin = () => {
        if (!getToken) { navigate('/login') }
    }

    return (

        <>

            <div id="wrapper">
                <Headers />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Banner />
                        
                    </div>
                    <Footer />
                </div>

            </div>


        </>
    )

}

export default Destino;