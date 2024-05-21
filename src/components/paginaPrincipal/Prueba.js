import React from 'react';
import "../../styleSheets/Prueba.css";
export function Prueba(){

  const goToProductPage = () => {
    window.location.href="/producto1";
  }
  return (
    <div data-testid="prueba-1">
      <div className="Invitacion">
    <h3>¡Qué esperas!</h3>
    <p>Tu armario virtual está esperando para simplificar tu vida diaria. Organiza tu ropa, descubre nuevos looks y ahorra tiempo cada mañana.</p>
    <button onClick={goToProductPage}>Pruebalo Ahora</button>
    </div>

    </div>
  );
};  
export default Prueba;