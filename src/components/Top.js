import React from 'react';
import Menu from './Menu';
import '../styleSheets/header/Logo.css';

export function Top(){
  return (
    <header className='Encabezado'>
      <div className='top-container'>
        <Menu />
      </div>
      <div className='Logo'>
        <h1 className='top-titulo'>TU ARMARIO VIRTUAL</h1>
      </div>
    </header>
  );
}
  
  export default Top;