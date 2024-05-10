import React from 'react';
import { Button } from 'reactstrap';
import '../../../../../styleSheets/ProductPage.css';

const Formal = ({ onClick, selected }) => {
  return (
    <Button 
      className={selected ? "btn-conjuntos1 btn-top selected" : "btn-conjuntos1 btn-top"} 
      color="link" 
      onClick={onClick}
    >
      <h1 className="letra-conjuntos2">Formal</h1>
      <h1 className="letra-conjuntos1">Story</h1>
    </Button>
  )
}

export default Formal;