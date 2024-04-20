import React from 'react';

class Inicio extends React.Component {
    render() {
      const estiloBotones = {
        display: 'flex',
      };
  
      return (
        <div style={estiloBotones}>
          <button>Inicio</button>
        </div>
      );
    }
  }

export default Inicio;