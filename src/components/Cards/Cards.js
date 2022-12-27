import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Cards = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function getData() {

            try {
                const { data } = await axios.get(`data.json`)
                setData(data)
            } catch (error) {
                console.log("error")
            }
            return () => {
                setData(data)
            }
        }

        getData();
    }, []);

    return (

        <div className="row justify-content-center">
            {data.map(
                ({ nombre, precio, marca, imagen, id , categoria}, indice) => (
                    <div className="card col-sm-12 col-lg-3 m-3" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={imagen} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <h6 className="card-title">marca:{marca}</h6>
                            <h6 className="card-title">id del articulo:{id}</h6>
                            <h6 className="card-title">categoria:{categoria}</h6>
                            <p className="card-text">${precio}</p>
                            <a id="botonAccion" className="btn btnColor" onClick="agregado({indice})">Comprar</a>
                        </div>
                    </div>
                )
            )}
        </div>
    );

}

export default Cards