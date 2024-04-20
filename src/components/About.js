import React from 'react';
class About extends React.Component {
    render() {
      const estiloBotones = {
        display: 'flex',
      };
  
      return (
        <div style={estiloBotones}>
          <button>Sobre Nosotros</button>
        </div>
      );
    }
  }

export default About;
  