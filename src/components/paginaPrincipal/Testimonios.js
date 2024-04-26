import  '../../styleSheets/Testimonio.css';
import React from 'react';
import imagenM from '../../images/imagenM.avif'

export function Testimonios(){
    return (
        <div className='Testimonio' data-testid = "testimonios-1">
                <div className='Imagen'>
                    <img src={imagenM} height='40%' width='55%'alt = "Imagen de moda"/>
                </div>
            <div className='Contenedor-texto'>
                <p className='NombrePersona'>Nombre Persona</p>
                <p className='TextoTestimonio'>Descripción testimonio</p>
            </div>
        </div>
        
    );
};

export default Testimonios;