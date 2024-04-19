import  '../styleSheets/Testimonio.css';

export function Testimonios(){
    return (
        <div className='Testimonio'>
            <div className='Imagen'>
                <img src={require('../Images/imagenM.avif')} height='90%' width='90%' alt='imagenTestimonio'/>
            </div>
            <div className='Testimonio'>
                <p className='NombrePersona'>Nombre Persona</p>
                <p className='TextoTestimonio'>Descripción testimonio</p>
            </div>
        </div>
    );
}

