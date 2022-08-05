import React from 'react'
import { useEffect } from 'react'
import Headers from '../../component/header'
import Footer from '../../component/footer'
import Banner from '../../component/banner'
import Update from '../../component/update'
import { useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'

const Password = () => {
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
                        <Update />
                    </div>
                    <Footer />
                </div>

            </div>


        </>
    )

}

export default Password