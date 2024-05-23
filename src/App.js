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
import Contactanos from './components/SobreNosotros/contactanos';
import Profile from './components/profile/Profile';
import Register from './components/paginaPrincipal/register';
import Admin from './components/profile/Admin/Admin';
import Crear from './components/profile/Admin/Crear';
import Editar from './components/profile/Admin/Editar';
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
        <Route path='/contactanos' element={<Contactanos />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/crear' element={<Crear />} />
        <Route path='/editar/:id' element={<Editar />} />
      </Routes>
    </Router>
    
  );
}
export default App;