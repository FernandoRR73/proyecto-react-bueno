import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Aquí puedes realizar la lógica para enviar los datos de registro al servidor
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      if (response.ok) {
        // Registro exitoso, redirigir al usuario a la página "/home"
        navigate('/');
      } else {
        // Manejar errores de registro
        const data = await response.json();
        if (response.status === 409) {
          alert(data.message); // Muestra el mensaje de error del servidor en un alert
        } else {
          console.error('Error en el registro');
        }
      }
    } catch (error) {
      console.error('Error al enviar datos de registro:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
