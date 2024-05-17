import {
	OffcanvasBody,
	} from 'reactstrap';
import React, { useState } from 'react';
import axios from 'axios';
import '../../styleSheets/Perfil.css';

function Perfil(){
	const [user, setUser] = useState([]);
	let config = {
		method: 'get',
		maxBodyLength: Infinity,
		url: 'http://localhost:8080/user/userId',
		withCredentials: true,
		headers: { 
			'Content-Type': 'application/json'
		},
	};
	axios.request(config).then((response) => {
		console.log(response.data);
		setUser(JSON.stringify(response.data));
	})
	.catch((error) => {
		console.log(error);});
	return(
			<OffcanvasBody>
				<h1>USER</h1>
				<strong>
					<p>{user.data}</p>
				</strong>
			</OffcanvasBody>
	);
};
export default Perfil;