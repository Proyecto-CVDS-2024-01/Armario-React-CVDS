import React from 'react';
import '../../styleSheets/SobreNosotros.css';
import { Router, Routes, Route } from 'react-router-dom';
 // Import the Contactanos component

const SobreNosotros = () => {
    return (
        <div> {/* Wrap the JSX elements inside a div */}
            <div className="sobre-nosotros">
                <div className="content">
                    <h1>SOBRE NOSOTROS</h1>
                    <p>Ofrecemos un servicio de armario virtual que te permite explorar y experimentar con estilos de moda desde la comodidad de tu hogar.</p>
                    <button onClick={() => window.location.href = '/contactanos'}>Más Información</button>
                </div>
            </div>
            
        </div>
    );
}

export default SobreNosotros;
