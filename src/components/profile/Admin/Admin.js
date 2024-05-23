import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
<<<<<<< HEAD
import {Navigate} from 'react-router-dom';
=======
import {Navigation} from 'react-router-dom';
>>>>>>> 6389c20ecbe1dcb98b5969fad7c55fbe9ca89f76
import Crear from './Crear';

import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'; 

function Admin() {
    const [users, setUsers] = useState();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    useEffect(() => {
        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://basecvds.azurewebsites.net/user/admin/users',
        headers: { 
            'authToken': sessionStorage.getItem('authToken')
        },
            };
            axios.request(config)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }, []);
    const handleDelete = (id) =>{
        const confirm = window.confirm('Are you sure to delete this user?');
        if(confirm){
            let config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: 'https://basecvds.azurewebsites.net/user/admin/eliminarUsuario/' + id,
                headers: { 
                    'authToken': sessionStorage.getItem('authToken')
                },
            }; 
            axios.request(config)
                .then((response) => {
<<<<<<< HEAD
                    console.log(response)
=======
                    Navigation(/admin)
>>>>>>> 6389c20ecbe1dcb98b5969fad7c55fbe9ca89f76
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return(
        <div className='Admin' data-testid="Admin-1">
            <Link className='btn btn-success' to={"/crear"}>Agregar</Link>
            <br /><br />
            <table className='table'>
            <thead>
                <tr>
                    <th>ID</th><th>Username</th><th>Email</th><th>Password</th><th>Role</th>
                </tr>
            </thead>
            <tbody>
                {users?.map(user => {
                    return(
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.role}</td>
                            <td>
                                <Link to={`/editar/${user.userId}`} className='btn btn-primary'>EDITAR</Link>
                                <button className='btn btn-danger' onClick={handleDelete}>ELIMINAR</button>
                            </td>
                        </tr>
                    )})}
            </tbody>
            </table>
            <Modal isOpen={modal} toggle={toggle} centered backdrop={false} size='sm'>
                <ModalHeader toggle={toggle}>Agregar Usuario</ModalHeader>
                <ModalBody>
                    <Crear/>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Admin;
