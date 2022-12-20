import React from 'react'
import './Cartwidget.css'
import { NavLink } from 'react-router-dom'

const Cartwidget = () => {
    return (
        <NavLink to="/cart" className="nav-link active row align-items-center">
            <i class="fa-solid fa-cart-shopping fa-shake fa-xl"></i>
            <span class="cantidadIcono">5</span>
        </NavLink>
    )
}

export default Cartwidget