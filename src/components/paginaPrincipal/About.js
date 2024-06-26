import React from 'react';
import "../../styleSheets/About.css"
export function About(){
  const aboutUs = () => {
    return (
      <div data-testid="about-1">
        <h1>SOBRE NOSOTROS</h1>
        <h3>Celebramos el buen estilo</h3>
        <p>Tu armario virtual está aquí para ayudar a compradores como tú a encontrar la ropa que les gusta sin comprometer la calidad. Seleccionamos cuidadosamente cada pieza de nuestras colecciones a fin de que cumpla con nuestros altos estándares. Nuestra ropa se siente excepcional porque está diseñada por expertos para ajustarse bien, durar mucho y lucir genial. Compra hoy y compruébalo tú mismo.</p>
      </div>
    );
  };

  return (
    <div className="about-container">
      {aboutUs()}
    </div>
  );
};  
export default About;