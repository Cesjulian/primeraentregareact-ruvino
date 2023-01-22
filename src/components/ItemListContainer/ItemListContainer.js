import React from 'react'
import './ItemListContainer.css'
import { useEffect } from 'react';
import useFirebase from '../hook/useFirebase';
import Item from '../Item/Item';

const ItemListContainer = () => {

    const { productos, getProductos } = useFirebase();

    useEffect(() => {
        getProductos();
        return () => {

        }
    }, [])

    return (

        <div className="container-fluid row justify-content-center me-0 ms-0">
            {productos.map(
                ({ nombre, precio, marca, imagen, id, categoria }, indice) => (
                    <Item key={id} id={id} nombre={nombre} precio={precio} marca={marca} imagen={imagen} categoria={categoria} />
                )
            )}
        </div>

    )
}

export default ItemListContainer