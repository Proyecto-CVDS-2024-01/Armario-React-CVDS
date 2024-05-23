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
          Nombre de usuario:<input type="text" name="username" value={form.username} onChange={handleChange} required />
          {errors.username && <p>{errors.username}</p>}
        </label>
        <label>
          Correo electrónico:<input type="email" name="email" value={form.email} onChange={handleChange} required />
          {errors.email && <p>{errors.email}</p>}
        </label>
        <label>
          Contraseña:<input type="password" name="password" value={form.password} onChange={handleChange} required />{errors.password && <p>{errors.password}</p>}
        </label>
        <label>
          Confirmar contraseña:<input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required /> {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
const USERNAME_MIN_LENGTH = 5;
const PASSWORD_MIN_LENGTH = 8;
const USERNAME_ERROR_MESSAGE = 'El nombre de usuario debe tener al menos 5 caracteres';
const EMAIL_ERROR_MESSAGE = 'El correo electrónico no es válido';
const PASSWORD_LENGTH_ERROR_MESSAGE = 'La contraseña debe tener al menos 8 caracteres';
const PASSWORD_MATCH_ERROR_MESSAGE = 'Las contraseñas no coinciden';
const emailRegex = new RegExp(/\S+@\S+\.\S+/);  

const validate = (form) => {
  let errors = {};
  if (form.username.length < USERNAME_MIN_LENGTH) {
    errors.username = USERNAME_ERROR_MESSAGE;
  }
  if (!emailRegex.test(form.email))  {
    errors.email = EMAIL_ERROR_MESSAGE;
  }
  if (form.password.length < PASSWORD_MIN_LENGTH) {
    errors.password = PASSWORD_LENGTH_ERROR_MESSAGE;
  }
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = PASSWORD_MATCH_ERROR_MESSAGE;
  }
  return errors;
};

export default Register;
