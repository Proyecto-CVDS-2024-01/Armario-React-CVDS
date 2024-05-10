import React from 'react';
import '../../../../styleSheets/ProductPage.css';
import Semiformal from '../Conjuntos/Botones/Semiformal';
import Deportivo from '../Conjuntos/Botones/Deportivo';

const Conjuntos2 = ({ onStyleSelect, selectedStyle }) => {
  const handleStyleClick = (style) => {
    if (selectedStyle === style) {
      onStyleSelect(null); // Deselecciona el estilo si ya está seleccionado
    } else {
      onStyleSelect(style); // Selecciona el estilo si no está seleccionado
    }
  };

  return (
    <div className='clean-container' data-testid="tshirt-1">
      <Semiformal 
        onClick={() => handleStyleClick("Semiformal")} 
        selected={selectedStyle === "Semiformal"} 
      />
      <Deportivo 
        onClick={() => handleStyleClick("Deportivo")} 
        selected={selectedStyle === "Deportivo"} 
      />
    </div>
  )
}

export default Conjuntos2;
