import React, {useState} from 'react';
import axios from 'axios';
import {Row, 
    Col, FormGroup, 
    Label, Input, Button} from 'reactstrap';
import { Navigate } from 'react-router-dom';

function Editar(){
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const handleSubmit =(e) =>{
        e.preventDefault();
        let data = JSON.stringify({
            "username": username,
            "email": email,
            "password": password,
            "role": role
        });
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://basecvds.azurewebsites.net/user/admin/adicionarUsuario',
        headers: { 
            'Content-Type': 'application/json',
            'authToken': sessionStorage.getItem('authToken')
        },
        data : data
        }; 
        axios.request(config).then((response) => {
            Navigate("/admin")
        })
        .catch((error) => {
            console.log(error);
        });
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" name="username" placeholder="username" 
                        onChange={(e) => setUsername(e.target.value)}/>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="Email"> Email
                        </Label>
                        <Input id="email" name="email" placeholder="email" type="email" 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="Password"> Password
                        </Label>
                        <Input id="password" name="password" placeholder="password" type="password" 
                        onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="role"> Role
                        </Label>
                        <Input id="role" name="role" placeholder="role" type="role" 
                        onChange={(e) => setRole(e.target.value)}/>
                    </FormGroup>
                    </Col>
                </Row>
                <Button>Actualizar</Button>
            </form>
        </div>
    )
}

export default Editar;