import React from 'react';
import { Button } from 'reactstrap';
import '../../../../../styleSheets/ProductPage.css';

const Semiformal = ({ onClick, selected }) => {
  return (
      <Button data-testid="Semiformal-1"
        className={selected ? "btn-conjuntos1 btn-top selected" : "btn-conjuntos1 btn-top"} 
        color="link" 
        onClick={onClick}
      >
        <h1 className="letra-conjuntos2">Semiformal</h1>
        <h1 className="letra-conjuntos1">Story</h1>
      </Button>
  )
}

export default Semiformal;
