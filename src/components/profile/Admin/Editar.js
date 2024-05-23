import { useState, useEffect } from 'react';
import  axios  from 'axios';
import {Row, 
    Col, FormGroup, 
    Label, Input, Button} from 'reactstrap';
import { Link, useParams } from 'react-router-dom';

function Crear(){
    const [data, setData] = useState([]);
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
    return(
        <div>
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
                <Link to={`/actualizar/${id}`} ></Link>
            </div>
        </div>
        )
}

export default Crear;