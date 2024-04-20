import  '../styleSheets/Testimonio.css';
import React from 'react';
import imagenM from '../images/imagenM.avif'

export function Testimonios(){
    return (
        <div className='Testimonio'>
            <div width='500px'>
                <div className='Imagen' width='500px'>
                    <img src={imagenM} height='50%' width='30%' alt="Imgen de moda"/>
                </div>
            </div>
            <div className='Testimonio'>
                <p className='NombrePersona'>Nombre Persona</p>
                <p className='TextoTestimonio'>Descripción testimonio</p>
            </div>
        </div>
    );
};

export default Testimonios;