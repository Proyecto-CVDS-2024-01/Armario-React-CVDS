import React from 'react';
import imagenM from '../../images/imagenM.avif';
import '../../styleSheets/Testimonio.css';

function Testimonios() {
  return (
    <div className='Testimonio' data-testid="testimonios-1">
      <div>
        <img src={imagenM} width='55%' height='40%' alt="Imagen de moda"/>
      </div>
      <div className='Contenedor-texto'>
        <p className='Texto-Testimonio'>
          ¡Finalmente encontré la solución perfecta para mis dilemas diarios de qué ponerme! Con esta aplicación de armario virtual, puedo organizar toda mi ropa de manera fácil y rápida. Ya no paso horas frente al armario tratando de decidir qué usar. Ahora, con solo unos pocos toques en mi teléfono, puedo ver todas mis opciones de ropa y armar el look perfecto en minutos. ¡Es como tener un estilista personal en mi bolsillo! ¡Gracias por simplificar mi vida diaria y hacer que vestirme sea divertido de nuevo!
        </p>
        <p className='Nombre-Persona'>- Juan García</p>
      </div>
    </div>
  );
}

export default Testimonios;
