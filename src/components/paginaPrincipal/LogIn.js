import React, { useState } from 'react';
import {
  Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
  Button,
  InputGroup,
  InputGroupText,
  Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <Input placeholder="username" />
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroupText>Password</InputGroupText>
            <Input placeholder="password" />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" tag={Link} to='/perfil'>
              Aceptar
            </Button>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}