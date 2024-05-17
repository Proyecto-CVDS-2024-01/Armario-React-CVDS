import { Link } from 'react-router-dom';
import '../../styleSheets/Profile.css';
import React, { useState } from 'react';
import Top from '../paginaPrincipal/Top';
const Profile = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedShirt, setSelectedShirt] = useState(null);
    const [selectedPants, setSelectedPants] = useState(null);
    const [selectedJacket, setSelectedJacket] = useState(null);
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

    const inventory = {
        camisas: [
            { name: 'Camisa 1', imageUrl: 'https://static.zara.net/assets/public/0104/e156/740f49cf80e7/706cc377c701/08574456614-e1/08574456614-e1.jpg?ts=1710779479317&w=275' },
            { name: 'Camisa 2', imageUrl: 'https://static.zara.net/assets/public/48d0/421f/5f2242cab576/1fdbc4d48a5e/06518505401-e1/06518505401-e1.jpg?ts=1712218824552&w=275' },
            // Añade más camisas aquí
        ],
        pantalones: [
            { name: 'Pantalón 1', imageUrl: 'https://static.zara.net/assets/public/5b00/6436/e03c471ba043/858735d7f7b0/04432485401-e1/04432485401-e1.jpg?ts=1710954757003&w=275' },
            {name: "Pantalón 2", imageUrl: "https://static.zara.net/assets/public/1a04/371c/949c44b9b9b6/9a2ba049bec3/06786400707-e1/06786400707-e1.jpg?ts=1709822870697&w=275"},
        ],
        chaquetas: [
            { name: 'Chaqueta 1', imageUrl: '/images/chaqueta1.jpg' },
            // Añade más chaquetas aquí
        ],
        // Añade más categorías aquí
    };

    const selectItem = (category, item) => {
        switch (category) {
            case 'camisas':
                setSelectedShirt(item);
                break;
            case 'pantalones':
                setSelectedPants(item);
                break;
            case 'chaquetas':
                setSelectedJacket(item);
                break;
            default:
                break;
        }
    };

    const saveSelection = () => {
        if (selectedShirt && selectedPants && selectedJacket) {
            setSelectedItems([...selectedItems, [selectedShirt, selectedPants, selectedJacket]]);
            setSelectedShirt(null);
            setSelectedPants(null);
            setSelectedJacket(null);
        } else {
            alert('Por favor, selecciona una prenda de cada categoría.');
        }
    };

    return (
        <div className="profile">
            <Link to="/profile" className="profile-button"><h1>Mi Perfil</h1></Link>
            <h2>Mi Armario</h2>
            {Object.keys(inventory).map((category) => (
                <div key={category}>
                    <h3>{category}</h3>
                    <div className="category-container">
                        <div className="category">
                            {inventory[category].map((item) => (
                                <div key={item.name} className="item" onClick={() => selectItem(category, item)}>
                                    <img src={item.imageUrl} alt={item.name} />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <button onClick={saveSelection}>Guardar Conjunto Actual</button>
            <h2>Mis Conjuntos</h2>
            <div className="selections">
                {selectedItems.map((selection, index) => (
                    <div key={index} className="selected-item">
                        {selection.map((item, index) => (
                            <div key={index}>
                                <img src={item.imageUrl} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProfilePage = () => {
    return (
        <div className='ProfilePage'>
            <Top />
            <Profile />
        </div>
    );
}

export default ProfilePage;

