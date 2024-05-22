import {
	Button, 
	OffcanvasBody,
	} from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styleSheets/DatosUsuario.css';

function Perfil(){
	const [user, setUser] = useState([]);
	useEffect(() => {
		let config = {
		  method: 'get',
		  maxBodyLength: Infinity,
		  url: 'https://basecvds.azurewebsites.net/user/client/userId',
		  headers: { 
			'authToken': sessionStorage.getItem('authToken')
		  },
		};
		axios.request(config)
		.then((response) => {
			setUser(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	  }, []);
	return(
		<OffcanvasBody className='offcanvasBody'>
			<div className="user-data">
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
						<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 9.858 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664h10z"/>
					</svg>
			</div>
			<p>Nombre: {user.username}</p>
			<p>Email: {user.password}</p>
			<Link to="/profile" className="profile-button"><h1>Mi Perfil</h1></Link>
		</OffcanvasBody>
	);
};
export default Perfil;