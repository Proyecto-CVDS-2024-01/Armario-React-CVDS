import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, Button,
  InputGroup,
  InputGroupText,
  Input
} from 'reactstrap';
//import { Link } from 'react-router-dom';
import Perfil from '../paginaProducto/Perfil';
import axios from 'axios';

export function LogIn(){
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const handleSubmit =(e) =>{
    e.preventDefault();
    if (chequearUsuarioPost(username,password)){
      <Perfil/>
    }else{
      alert('')
    }
  }

  const chequearUsuarioPost= async (username, password)=>{
    const url='http://basecvds.azurewebsites.net/login';
    const body ={
      username: username,
      password: password
    }
    setRespuesta(axios.post(url,body));
    console.log(respuesta);
    return respuesta
  }

  return (
    <div>
      <Button color='blue' onClick={toggle}>
        Inicio Sesion
      </Button>
      <Modal isOpen={modal} toggle={toggle} centered backdrop={false} size='sm'>
        <ModalHeader toggle={toggle}>Inicio Sesion</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroupText>@</InputGroupText>
              <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            </InputGroup>
            <br/>
            <InputGroup>
              <InputGroupText>Password</InputGroupText>
              <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            </InputGroup>
            <br/>
            <Button color="primary">
              Iniciar Sesion
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default LogIn;
