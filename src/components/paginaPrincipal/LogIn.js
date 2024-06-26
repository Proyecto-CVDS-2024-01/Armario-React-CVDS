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
  const [log, setLog] = useState(false);
  
  const handleSubmit =(e) =>{
    e.preventDefault();
    let data = JSON.stringify({
      "username": username,
      "password": password
    });
  
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://basecvds.azurewebsites.net/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    }; 
    axios.request(config)
    .then((response) => {
      setLog(true);
      sessionStorage.setItem('authToken', response.data.token);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleDelete =(e) =>{
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://basecvds.azurewebsites.net/login/logout',
      headers: { 
        'authToken': sessionStorage.getItem('authToken')
      },
    }; 
    axios.request(config)
    .then((response) => {
      setLog(false);
      sessionStorage.setItem('authToken', "");
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div data-testid="LogIn-1">
      {!log ? <Button color='blue' onClick={toggle}>Inicio Sesion</Button>: <Button color='blue' onClick={handleDelete}>Cerrar Sesion</Button>}
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
              <Input placeholder="password" onChange={(e) => setPassword(e.target.value)} type="password"/>
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
