import React from 'react'
import './styles/Buttons.css'
function ButtonsFacturacion({precioProducto,monto,setResultado}) {
    const calcularCambio = (precioProducto,monto)=>{
        const cambio = parseFloat(monto-precioProducto)
        setResultado(cambio)
    }
    return (
        <section className ="button-container">
            <button className="button-container__payment"onClick={() => calcularCambio(precioProducto,monto)}>Generar Factura</button>
            <a href="/">
              <button className="button-container__cancel">Volver</button>
            </a>
        </section>
        
    )
}

export { ButtonsFacturacion }
