import React, { useState } from 'react';
import {
  Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
  Button
} from 'reactstrap';

export function LogIn(){
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='blue' onClick={toggle}>
        Inicio Sesion
      </Button>
      <Modal isOpen={modal} toggle={toggle} centered backdrop={false} size='sm'>
        <ModalHeader toggle={toggle}>Inicio Sesion</ModalHeader>
        <ModalBody>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Aceptar
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}