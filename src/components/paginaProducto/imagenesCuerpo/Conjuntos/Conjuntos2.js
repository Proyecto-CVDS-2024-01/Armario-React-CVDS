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
    <div className='clean-container' data-testid="Conjuntos2-1">
      <Semiformal 
        onClick={() => handleStyleClick("semiformal")} 
        selected={selectedStyle === "semiformal"} 
      />
      <Deportivo 
        onClick={() => handleStyleClick("deportivo")} 
        selected={selectedStyle === "deportivo"} 
      />
    </div>
  )
}

export default Conjuntos2;
