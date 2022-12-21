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
                console.log(data)
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
        
        <div className="card col-sm-12 col-lg-3 m-3" style={{ width: "18rem" }}>
            <img className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">$</h5>
                <h6 className="card-title">marca: $</h6>
                <p className="card-text">$$</p>
                <a id="botonAccion" className="btn btnColor" onClick="agregado(${indice})">Comprar</a>
            </div>
        </div>
    );

}

export default Cards