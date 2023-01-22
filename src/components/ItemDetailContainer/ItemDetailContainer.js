import React from 'react'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const { nombre, precio, marca, imagen, id, categoria } = useParams()

  return (
    <div className='container-fluid row justify-content-center'>
      <div key={id} id={id} categoria={categoria} className="card col-sm-12 col-lg-3 m-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={imagen} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <h6 className="card-title">marca:{marca}</h6>
          <h6 className="card-title">id del articulo:{id}</h6>
          <h6 className="card-title">categoria:{categoria}</h6>
          <p className="card-text">${precio}</p>
          <a id="botonAccion" className="btn btn-success">sumar al carrito</a>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer