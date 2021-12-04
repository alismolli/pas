import React from 'react'
import './styles/Operations.css'
function OperationsFacturacion({monto, setMonto, resultado, setResultado}) {
    
    const handleMonto = (event)=>{
        setMonto(event.target.value)
    }
    return (
        <section className ="operation-container">
            <label htmlFor="nombre-cliente">Nombre</label>
            <input type="text" id="nombre-cliente" placeholder="Nombre del Cliente"/>
            <label htmlFor="producto">Producto</label>
            <input type="text" id="producto" placeholder="Nombre del producto"/>
            <label htmlFor="cantidad">Cantidad</label>
            <input type="text" id="cantidad" placeholder="Cantidad de productos"/>
            <label htmlFor="monto">Monto a pagar</label>
            <input type="text" id="monto" value={monto} onChange={handleMonto} placeholder="monto en Bs"/>
        </section>
    )
}

export  { OperationsFacturacion }
