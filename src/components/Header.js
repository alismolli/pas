import React from 'react'
import PasteleriaHero from '../assets/imagenPas.jpg'
function Header() {
    return (
        <header>
            <img src={PasteleriaHero} alt="Pasteleria Karla"/>
        </header>
    )
}

export { Header }
