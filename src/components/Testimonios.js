import React from 'react';
import imagenM from '../Images/imagenM.avif'

export function Testimonios(){
    return (
        <div className='Testimonio'>
            <div width='500px'>
                <div className='Imagen' width='500px'>
                    <img src={imagenM} height='50%' width='30%'/>
                </div>
            </div>
            <div className='Testimonio'>
                <p>Descripción testimonio</p>
            </div>
        </div>
    );
}

export default Testimonios;