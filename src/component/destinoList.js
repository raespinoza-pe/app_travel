import React from "react"
import { useEffect, useState } from 'react'
import '../css/destino.css'
import { IoAddCircleSharp } from "react-icons/io5"
import { AiTwotoneDelete } from "react-icons/ai"
import { BsPencilSquare } from "react-icons/bs"
import { searchDestinosbyUser , removeDestinos} from "../api/destinoApi"
import {  Link , useNavigate} from 'react-router-dom'


export default function DestinoList() {

    const id = localStorage.getItem('id')
    const [destinos, setDestinos] = useState([])
    const navigate = useNavigate()
    const style = { color: "red", fontSize: "1.5em", padding: "2px" , cursor: "pointer" }
    const style2 = { color: "blue", fontSize: "1.5em", padding: "2px" , cursor: "pointer" }

    useEffect(() => {
        obtenerDestinos()
    }, []);

    const obtenerDestinos = async () => {

        let destinoList = await searchDestinosbyUser(id)
        setDestinos(destinoList)

    }

    const revoveDestino = async (id) => {

        await removeDestinos(id)
        navigate("/destino")
        obtenerDestinos()
    }

    const updateDestino = async (id) => {

        console.log("hola")
    }


    const listItems = destinos.map((destino) =>
        <tr key={destino.id}>
            <td>{destino.nombre} </td>
            <td>{destino.descripcion}</td>
            <td><div className="centrar_center">{destino.dia_viaje} d.</div></td>
            <td><div className="centrar_center">{destino.hora_viaje} h.</div></td>
            <td><div className="centrar_center">{destino.presupuesto}</div></td>
            <td> <BsPencilSquare style={style2} onClick={() => updateDestino(destino.id)} />  &nbsp; <AiTwotoneDelete style={style} onClick={() => revoveDestino(destino.id)} /></td>
        </tr>
    )

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Mis Destinos</h1>
            <div className="row">
                <div className="card">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Listado de Destinos</h6>
                    </div>
                    <div className="centrar_left"><Link to="/destino/new"><button type="button" className="btn btn-primary"><IoAddCircleSharp /> Nuevo destino</button></Link></div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover" id="dataTable" width="100%">
                                <tbody>
                                    <tr>
                                        <th>NOMBRE </th>
                                        <th>DESCRIPCIÓN</th>
                                        <th>DIAS</th>
                                        <th>HORAS </th>
                                        <th>PRESUPUESTO</th>
                                        <th>ACCIONES</th>
                                    </tr>
                                    {listItems}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )



}