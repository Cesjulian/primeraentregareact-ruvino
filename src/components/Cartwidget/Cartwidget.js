import React from 'react'
import './Cartwidget.css'

const Cartwidget = () => {
    return (
        <a className="nav-link active row align-items-center" href="#">
            <i class="fa-solid fa-cart-shopping fa-shake fa-xl"></i>
            <span class="cantidadIcono">5</span>
        </a>
    )
}

export default Cartwidget