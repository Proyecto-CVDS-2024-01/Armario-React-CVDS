import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './components/paginaPrincipal/Top';
import SliderBox from './components/paginaPrincipal/SliderBox';
import About from './components/paginaPrincipal/About';
import Prueba from './components/paginaPrincipal/Prueba';
import Testimonios from './components/paginaPrincipal/Testimonios';
import './App.css';
import OtraPagina from './components/paginaProducto/OtraPagina';
import PaginaCamisas from './components/paginaProducto2/paginaCamisas';
import PaginaChaquetas from './components/paginaProducto2/paginaChaquetas';
import PaginaPantalones from './components/paginaProducto2/paginaPantalones';
import PaginaZapatos from './components/paginaProducto2/paginaZapatos';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';


function PaginaPrincipal() {
  return (
    <div className='App'>
      <div className='Header'>
        <Top />
      </div>
      <div className='ImagesHeader'>
        <SliderBox />
      </div>
      <div className='Body'>
        <About />
      </div>
      <div className='Footer'>
        <Testimonios />
      </div>
      <div className='Body'>
        <Prueba />
      </div>
    </div>
  );
} 

function PaginaProducto() {
  return (
    <div>
      <OtraPagina />
    </div>
  );
}

function PaginaProducto2Camisas() {
  return (
        <div>
          <Top />
          <div className='Body'>
            <PaginaCamisas/>
          </div>
        </div>
  )
}

function PaginaProducto2Chaquetas() {
  return (
    <div>
      <Top />
      <div className='Body'>
        <PaginaChaquetas />
      </div>
    </div>
  )
}

function PaginaProducto2Pantalones() {
  return (
    <div>
      <Top />
      <div className='Body'>
        <PaginaPantalones />
      </div>
    </div>
  )
}


function PaginaProducto2Zapatos() {
  return (
    <div>
      <Top />
      <div className='Body'>
        <PaginaZapatos />
      </div>
    </div>
  )
}


function SobreNosotrosPag() {
  return (
    <div>
      <top />
      <div className='Body'>
        <SobreNosotros />
      </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='Header'>
        </div>
        
      </div>
      <Routes>
        <Route path='/' element={<PaginaPrincipal />} />
        <Route path='/producto1' element={<PaginaProducto />} />
        <Route path='/camisas' element={<PaginaProducto2Camisas />} />
        <Route path='/chaquetas' element={<PaginaProducto2Chaquetas />} />
        <Route path='/pantalones' element={<PaginaProducto2Pantalones />} />
        <Route path='/zapatos' element={<PaginaProducto2Zapatos />} />
        <Route path='/sobreNosotros' element={<SobreNosotrosPag />} />	
      </Routes>
    </Router>
  );
}
export default App;
