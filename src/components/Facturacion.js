import React, { useState } from 'react'
import { Header } from './Header'
import { MainFacturacion } from './MainFacturacion'
import { ButtonsFacturacion } from './ButtonsFacturacion'
import './styles/Facturacion.css'

function Facturacion() {
    const [monto, setMonto]=useState('')
    const [resultado, setResultado] = useState(0)
    return (
        <article className="facturacion-card">
            <Header/>
            <MainFacturacion
            monto={monto}
            setMonto={setMonto}
            resultado={resultado}
            setResultado={setResultado}/>
            <ButtonsFacturacion
            monto={monto}
            setMonto={setMonto}
            setResultado={setResultado}
            />
        </article>
    )
}

export { Facturacion }
