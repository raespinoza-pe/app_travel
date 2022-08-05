import React from 'react'
import { useEffect } from 'react'
import Headers from '../../component/header'
import Footer from '../../component/footer'
import Banner from '../../component/banner'
import Perfil from '../../component/perfil'
import { useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'

const Usuario = () => {
    const navigate = useNavigate()
    const { getToken } = useUser()


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
                        <Perfil  />
                    </div>
                    <Footer />
                </div>

            </div>


        </>
    )

}

export default Usuario