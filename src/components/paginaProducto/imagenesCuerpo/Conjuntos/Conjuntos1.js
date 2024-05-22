import React from 'react';
import '../../../../styleSheets/ProductPage.css';
import Casual from '../Conjuntos/Botones/Casual';
import Formal from '../Conjuntos/Botones/Formal';

const Conjuntos1 = ({ onStyleSelect, selectedStyle }) => {
  const handleStyleClick = (style) => {
    if (selectedStyle === style) {
      onStyleSelect(null); // Deselecciona el estilo si ya está seleccionado
    } else {
      onStyleSelect(style); // Selecciona el estilo si no está seleccionado
    }
  };

  return (
    <div className='clean-container' data-testid="Conjuntos1-1">
      <Formal 
        onClick={() => handleStyleClick("formal")} 
        selected={selectedStyle === "formal"} 
      />
      <Casual 
        onClick={() => handleStyleClick("casual")} 
        selected={selectedStyle === "casual"} 
      />
    </div>
  )
}

export default Conjuntos1;
