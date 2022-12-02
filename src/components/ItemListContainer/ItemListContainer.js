import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

    const { greeting } = props

    return (
        <div>
            <h1 className='tituloBienvenida'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer