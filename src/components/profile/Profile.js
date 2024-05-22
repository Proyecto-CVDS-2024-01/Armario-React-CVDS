import { Link } from 'react-router-dom';
import '../../styleSheets/Profile.css';
import React, { useState, useEffect } from 'react';
import Top from '../paginaPrincipal/Top';
import axios from 'axios';
//import LoadingScreen from '../LoadingScreen';
const Profile = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedShirt, setSelectedShirt] = useState(null);
    const [selectedPants, setSelectedPants] = useState(null);
    const [selectedJacket, setSelectedJacket] = useState(null);
    const authToken = sessionStorage.getItem('authToken');
    const [inventory, setInventory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user/client/prendas', {
                    headers: {
                        'authToken': authToken
                    }
                });
                const listaPrendas = response.data;
                console.log(listaPrendas);
                setInventory({
                    camisas: listaPrendas
                        .filter((prenda) => prenda.tipo === "CAMISA")
                        .map((prenda, index) => ({
                            name: `camisa ${index + 1}`,
                            imageUrl: `data:image/jpeg;base64,${prenda.imageUrlBase64}`,
                        })),
                    pantalones: listaPrendas
                        .filter((prenda) => prenda.tipo === "PANTALON")
                        .map((prenda, index) => ({
                            name: `pantalon ${index + 1}`,
                            imageUrl: `data:image/jpeg;base64,${prenda.imageUrlBase64}`,
                        })),
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [authToken]);

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

    if (!inventory) {
        return <div> cargando... </div>;
    }

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
