import React from 'react'
import './Navbar.css'
import logotienda2 from './logotienda2.gif'
import Cartwidget from '../Cartwidget/Cartwidget'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Navbar = () => {

    const { categoria } = useParams()

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
                        <NavLink to="/" className="nav-link active">Home</NavLink>
                        <NavLink to="/categoria/Iphone" className="nav-link active">Iphone</NavLink>
                        <NavLink to="/categoria/Mac" className="nav-link active">MacBook</NavLink>
                        <NavLink to="/categoria/Ipad" className="nav-link active">Ipad</NavLink>
                        <NavLink to="/categoria/Watch" className="nav-link active">AppleWatch</NavLink>
                        <Cartwidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar