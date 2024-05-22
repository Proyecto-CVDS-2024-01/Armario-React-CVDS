import React, { useState } from 'react';
import Top from '../paginaPrincipal/Top';
import '../../styleSheets/contactanos.css';
function Contactanos() {
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
    <div className="Contactanos">
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

function PaginaContactanos() {
  return (
    <div className="PaginaContactanos" data-testid='contactanos-1'>
      <Top />
      <Contactanos />
    </div>
  );
}

export default PaginaContactanos;
