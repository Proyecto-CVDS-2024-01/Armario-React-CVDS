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
                <p className='TextoTestimonio'>
¡Claro!

"¡Finalmente encontré la solución perfecta para mis dilemas diarios de qué ponerme! Con esta aplicación de armario virtual, puedo organizar toda mi ropa de manera fácil y rápida. Ya no paso horas frente al armario tratando de decidir qué usar. Ahora, con solo unos pocos toques en mi teléfono, puedo ver todas mis opciones de ropa y armar el look perfecto en minutos. ¡Es como tener un estilista personal en mi bolsillo! ¡Gracias por simplificar mi vida diaria y hacer que vestirme sea divertido de nuevo!"</p>
            </div>
        </div>
        
    );
};

export default Testimonios;