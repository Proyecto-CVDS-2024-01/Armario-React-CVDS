import React from 'react';
import Inicio from './Inicio';
import Contacto from './Contacto';
import Aboutus from './Aboutus';

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
        justifyContent: 'center'
      };
  
      return (
        <div>
          <h1 style={estiloTitulo}>TU ARMARIO VIRTUAL</h1>
          <div style={estiloLinea}></div>
          <div style={estiloContenedor}>
            <Inicio />
            <Contacto />
            <Aboutus />
          </div>
        </div>
      );
    }
  }
  
  export default Top;