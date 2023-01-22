import React from 'react'
import { Link } from 'react-router-dom';

const Item = (props) => {

  const { nombre, precio, marca, imagen, id, categoria } = props

  return (

    <div key={id} id={id} categoria={categoria} className="card col-sm-12 col-lg-3 m-3" style={{ width: "18rem" }}>
      <img className="card-img-top" src={imagen} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h6 className="card-title">marca:{marca}</h6>
        <h6 className="card-title">id del articulo:{id}</h6>
        <h6 className="card-title">categoria:{categoria}</h6>
        <p className="card-text">${precio}</p>
        <Link to={`/item/detail/${id}/${nombre}/${precio}/${categoria}/${marca}`}>
          <a id="botonAccion" className="btn btn-success">ir al articulo</a>
        </Link>
      </div>
    </div>

  )
}

export default Item