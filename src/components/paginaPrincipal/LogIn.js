import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, Button,
  InputGroup,
  InputGroupText,
  Input
} from 'reactstrap';
import axios from 'axios';

export function LogIn(){
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =(e) =>{
    e.preventDefault();
    let data = JSON.stringify({
      "username": username,
      "password": password
    });
  
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      document.cookie = "authToken=" + JSON.stringify(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
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
