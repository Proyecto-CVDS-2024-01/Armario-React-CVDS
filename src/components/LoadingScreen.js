// Importar los módulos necesarios
import React, { useState, useEffect } from 'react';
import '../styleSheets/LoadingScreen.css'; // Asegúrate de crear este archivo

// Componente de la pantalla de carga
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <div className="spinner-layer">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga con un timeout
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos
  }, []);

  return (
    <div className="app" data-testid="LoadingScreen-1">
      {loading ? <LoadingScreen /> : <div>Contenido de la aplicación</div>}
    </div>
  );
};

export default App;
