import React from 'react'
import { Header } from './Header'
import { MenuButtons } from './MenuButtons'
import './styles/Main.css'
import './styles/Facturacion.css'
function Menu() {
    return (
        <article className = "facturacion-card">
            <Header/>
            <main>
                <h1>PASTELERIA KARLA</h1>
                <p>Menu de opciones : </p>
            </main>
            <MenuButtons/>
        </article>
    )
}

export { Menu }
