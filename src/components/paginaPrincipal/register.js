// Importar los módulos necesarios
import React, { useState } from 'react';
import axios from 'axios';
import '../../styleSheets/Register.css'; // Asegúrate de crear este archivo

// Componente de registro
const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Configuración de la solicitud
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/register', // Asegúrate de cambiar la URL a la correcta
        headers: { 
          'Content-Type': 'application/json'
        },
        data : form
      }; 

      // Enviar la solicitud
      try {
        const response = await axios.request(config);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <div className="register-container">
      <h2>Registro de usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de usuario:
          <input type="text" name="username" value={form.username} onChange={handleChange} required />
          {errors.username && <p>{errors.username}</p>}
        </label>
        <label>
          Correo electrónico:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
          {errors.email && <p>{errors.email}</p>}
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
          {errors.password && <p>{errors.password}</p>}
        </label>
        <label>
          Confirmar contraseña:
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

// Función de validación
const validate = (form) => {
  let errors = {};
  if (form.username.length < 5) {
    errors.username = 'El nombre de usuario debe tener al menos 5 caracteres';
  }
  if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'El correo electrónico no es válido';
  }
  if (form.password.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres';
  }
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden';
  }
  return errors;
};

export default Register;
