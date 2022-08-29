import React from "react"
import Headers from '../../component/header'
import Footer from '../../component/footer'
import Banner from '../../component/banner'
import DestinoUpdate from '../../component/destinoUpdate'
import useUser from '../../hooks/useUser'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const UpdateDestino = () => {

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
                        <DestinoUpdate />
                    </div>
                    <Footer />
                </div>

            </div>

        </>
    )

}

export default UpdateDestino;