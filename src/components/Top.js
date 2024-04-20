import React from 'react';
import Inicio from './Inicio';
import Contacto from './Contacto';
import About from './About';

class Top extends React.Component {
    render() {
      const estiloTitulo = {
        textAlign: 'center',
        color: 'green'
      };
      const estiloLinea = {
        width: '50%',
        margin: '0 auto',
        borderBottom: '1px solid green',
        marginBottom: '20px'
      };
      const estiloContenedor = {
        display: 'flex',
        justifyContent: 'center' // Centra los elementos horizontalmente
      };
  
      return (
        <div>
          <h1 style={estiloTitulo}>TU ARMARIO VIRTUAL</h1>
          <div style={estiloLinea}></div>
          <div style={estiloContenedor}>
            <Inicio />
            <Contacto />
            <About />
          </div>
        </div>
      );
    }
  }
  
  export default Top;
