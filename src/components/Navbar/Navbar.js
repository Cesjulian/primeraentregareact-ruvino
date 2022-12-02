import React from 'react'
import './Navbar.css'
import logotienda2 from './logotienda2.gif'
import Cartwidget from '../Cartwidget/Cartwidget'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg flex-wrap bgColor">
            <span><img className='logoTienda' src={logotienda2} alt="" /></span>
            <div className="container-fluid justify-content-center p-3">
                <form className="d-flex" role="search">
                    <input className="form-control me-2 inputWidth" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
            <div className="container-fluid justify-content-center p-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="#">Iphone</a>
                        <a className="nav-link active" href="#">MacBook</a>
                        <a className="nav-link active" href="#">Ipad</a>
                        <a className="nav-link active" href="#">AppleWatch</a>
                        <Cartwidget/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar