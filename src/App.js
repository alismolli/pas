import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Facturacion } from './components/Facturacion'
import { Productos } from './components/Productos'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/facturacion" element={<Facturacion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
