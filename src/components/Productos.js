import { Header } from './Header'
import { MainProductos } from './MainProductos'
import { ButtonsProductos } from './ButtonsProductos'
import './styles/Productos.css'

function Productos() {
    return (
        <article className="productos-card">
            <Header/>
            <MainProductos/>
            <ButtonsProductos/>
        </article>
    )
}

export { Productos }
