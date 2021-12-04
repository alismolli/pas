import React from 'react'
import { OperationsFacturacion } from './OperationsFacturacion'
import './styles/Main.css'
function MainFacturacion(props) {
    return (
        <main>
            <h1>Registro de datos</h1>
            <p> Factura</p>
            <OperationsFacturacion
            monto={props.monto}
            setMonto={props.setMonto}
            resultado={props.resultado}
            setResultado={props.setResultado}
            />
        </main>
    )
}

export {MainFacturacion}
