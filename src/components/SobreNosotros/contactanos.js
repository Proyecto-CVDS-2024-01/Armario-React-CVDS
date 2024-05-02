import React, { useState } from 'react';
import '../../App.css';
import '../../styleSheets/contactanos.css';
function App() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    origen: '',
    mensaje: ''
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el correo
    console.log(form);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="origen" placeholder="¿Dónde escuchaste de nosotros?" onChange={handleChange} required />
        <textarea name="mensaje" placeholder="Mensaje" onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
