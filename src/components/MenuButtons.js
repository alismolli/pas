import React from 'react'
import './styles/Buttons.css'
import { Link } from 'react-router-dom'
function MenuButtons() {
    return (
        <section className="button-container">
            <Link to='/productos'> 
                <button className="button-container__payment">Productos</button>
            </Link>
            <Link to='/facturacion'> 
                <button className="button-container__payment">Facturacion</button>
            </Link>
        </section>
    )
}

export { MenuButtons }