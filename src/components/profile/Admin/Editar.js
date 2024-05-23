import { useState, useEffect } from 'react';
import  axios  from 'axios';
import {Row, Col, FormGroup, ModalBody, ModalHeader,
    Label, Input, Modal, Button} from 'reactstrap';
import { useParams } from 'react-router-dom';

function Crear(){
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const {id} = useParams();
    useEffect(() => {
        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://basecvds.azurewebsites.net/user/admin/username/' + id,
        headers: { 
            'authToken': sessionStorage.getItem('authToken')
        },
            };
        axios.request(config)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }, []);
        const handleSubmit =(e) =>{
            e.preventDefault();
            let data = JSON.stringify({
                "username": username,
                "password": password,
                "role": role,
                "email": email
            });
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: 'https://basecvds.azurewebsites.net/user/admin/actualizarUsuario/' + id,
                headers: { 
                    'Content-Type': 'application/json',
                    'authToken': sessionStorage.getItem('authToken')
                },
                data : data
            }; 
            axios.request(config)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    return(
        <div data-testid="Editar-1">
            <div>
                <h3>Detail of User</h3>
                <div>
                    <strong>Name: {data.username}</strong>
                </div>
                <div>
                    <strong>Email: {data.password}</strong>
                </div>
                <div>
                    <strong>password: {data.password}</strong>
                </div>
                <div>
                    <strong>Rol: {data.role}</strong>
                </div>
            </div>
            <Button className='btn btn-primary' onClick={toggle}>Editar</Button>
            <Modal isOpen={modal} toggle={toggle} centered backdrop={false} size='sm'>
                <ModalHeader toggle={toggle}>Actualizar Usuario</ModalHeader>
                <ModalBody>
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
                </ModalBody>
            </Modal>
        </div>
        )
}

export default Crear;