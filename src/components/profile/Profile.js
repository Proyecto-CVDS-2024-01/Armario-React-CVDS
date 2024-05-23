import { Link } from 'react-router-dom';
import '../../styleSheets/Profile.css';
import React, { useState, useEffect } from 'react';
import Top from '../paginaPrincipal/Top';
import axios from 'axios';

const Profile = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedShirt, setSelectedShirt] = useState(null);
    const [selectedPants, setSelectedPants] = useState(null);
    const [selectedJacket, setSelectedJacket] = useState(null);
    const [selectedShoes, setSelectedShoes] = useState(null);
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
                    chaquetas: listaPrendas
                        .filter((prenda) => prenda.tipo === "CHAQUETA")
                        .map((prenda, index) => ({
                            name: `chaqueta ${index + 1}`,
                            imageUrl: `data:image/jpeg;base64,${prenda.imageUrlBase64}`,
                        })),
                    zapatos: listaPrendas
                        .filter((prenda) => prenda.tipo === "ZAPATOS")
                        .map((prenda, index) => ({
                            name: `zapato ${index + 1}`,
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
            case 'zapatos':
                setSelectedShoes(item);
                break;
            default:
                break;
        }
    };

    const saveSelection = async () => {
        if (selectedShirt && selectedPants && selectedJacket && selectedShoes) {
            setSelectedItems([...selectedItems, [selectedShirt, selectedPants, selectedJacket, selectedShoes]]);
            setSelectedShirt(null);
            setSelectedPants(null);
            setSelectedJacket(null);
            setSelectedShoes(null);

            // Enviar el conjunto a la URL especificada
            try {
                const response = await axios.post('http://localhost:8080/user/client/conjuntos', {
                    camisa: selectedShirt,
                    pantalon: selectedPants,
                    chaqueta: selectedJacket,
                    zapatos: selectedShoes
                }, {
                    headers: {
                        'authToken': authToken
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }

            // Comprobar si ya existen conjuntos creados por el usuario
            try {
                const response = await axios.get('https://basecvds.azurewebsites.net/user/client/conjuntos', {
                    headers: {
                        'authToken': authToken
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Por favor, selecciona una prenda de cada categoría.');
        }
    };

    if (!inventory || Object.keys(inventory).length === 0) {
        return <div className="no-items">No hay prendas aún de este usuario.</div>;
    }
    return (
        <div className="profile">
            <Link to="/profile" className="profile-button"></Link>
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
        <div className='ProfilePage' data-testid="profile-1">
            <Top />
            <Profile />
        </div>
    );
}

export default ProfilePage;
