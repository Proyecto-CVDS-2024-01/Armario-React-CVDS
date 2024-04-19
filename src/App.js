import React from 'react';

class App extends React.Component {
  render() {
    const estiloTitulo = {
      textAlign: 'center',
      color: 'green'
    };

    return (
      <div>
        <h1 style={estiloTitulo}>TU ARMARIO VIRTUAL</h1>
      </div>
    );
  }
}

export default App;
