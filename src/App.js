import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './components/paginaPrincipal/Top';
import SliderBox from './components/paginaPrincipal/SliderBox';
import About from './components/paginaPrincipal/About';
import Testimonios from './components/paginaPrincipal/Testimonios';
import './App.css';
import OtraPagina from './components/paginaProducto/OtraPagina';



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
    </div>
  );
} 
function OtraPagina1() {
  return (
    <div>
      <OtraPagina />
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
        <Route path='/producto1' element={<OtraPagina1 />} />
      </Routes>
    </Router>
  );
}
export default App;
