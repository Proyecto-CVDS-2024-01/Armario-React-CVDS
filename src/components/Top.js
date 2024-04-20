import React from 'react';
import Inicio from './Inicio';
import Contacto from './Contacto';
import AboutUs from './AboutUs';

export function Top(){
  return (
    <div>
      <h1 className='top-titulo'>TU ARMARIO VIRTUAL</h1>
      <div className='top-linea'></div>
      <div className='top-container'>
        <Inicio />
        <Contacto />
        <AboutUs />
      </div>
    </div>
  );
}
  
  export default Top;