import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button,
  InputGroup,
  InputGroupText,
  Input
} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function chequearUsuarioPost(username, password){
  const url='http://localhost:8080/LogIn/chequearUsuario';
  const body ={
    id: '',
    username: username,
    password: password
  }
  console.log( axios.post(url,body));
}

export function LogIn(){
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [respuesta, setRespuesta] = useState(false);

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
            <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroupText>Password</InputGroupText>
            <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" tag={Link} to='/perfil' onClick={() => chequearUsuarioPost(username,password)}>
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

export default LogIn;
