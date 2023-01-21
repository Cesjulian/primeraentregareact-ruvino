import { useEffect } from 'react';
import useFirebase from '../hook/useFirebase';

const Cards = () => {

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
                    <div className="card col-sm-12 col-lg-3 m-3" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={imagen} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <h6 className="card-title">marca:{marca}</h6>
                            <h6 className="card-title">id del articulo:{id}</h6>
                            <h6 className="card-title">categoria:{categoria}</h6>
                            <p className="card-text">${precio}</p>
                            <a id="botonAccion" className="btn btn-success">Comprar</a>
                        </div>
                    </div>
                )
            )}
        </div>
    );

}

export default Cards