import React from 'react';
import '../styleSheets/header/Buttons.css';
import { Button } from 'reactstrap';

export function InicioButton(){
    return (
        <div>
            <Button color='transparent'>
                Inicio
            </Button>
            <Button color="warning">
                Precios
            </Button>
            <Button color="success">
                Contacto
            </Button>
        </div>
    );
    }

    export default InicioButton;