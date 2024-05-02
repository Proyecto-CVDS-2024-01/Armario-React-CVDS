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
import Perfil from './components/paginaProducto/Perfil';


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
      <div className='Bottom'>
        <Prueba />
      </div>
      <div className='Prueba'>
        <Perfil />
      </div>
    </div>
  );
} 

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PaginaPrincipal />} />
        <Route path='/producto1' element={<OtraPagina />} />
        <Route path='/camisas' element={<PaginaCamisas />} />
        <Route path='/chaquetas' element={<PaginaChaquetas />} />
        <Route path='/pantalones' element={<PaginaPantalones />} />
        <Route path='/zapatos' element={<PaginaZapatos />} />
        <Route path='/sobreNosotros' element={<SobreNosotros />} />	
        <Route path='/perfil' element={<Perfil />} />
        
      </Routes>
    </Router>
    
  );
}
export default App;