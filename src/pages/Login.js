// Login.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';


const Login = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();
  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        // Si el inicio de sesión es exitoso, redireccionar a la página de usuario
        setIsLoggedIn(true);
        navigate('/user');
        
      } else {
        // Si hay un error en el inicio de sesión, lanzar un error
        throw new Error('Credenciales inválidas');
      }
    } catch (error) {
      // Capturar y manejar errores de red o del servidor
      console.error('Error en el inicio de sesión:', error.message);
    }
  };

  return (
    <>
      <h1>Inicio de sesión</h1>
      <LoginForm handleLogin={handleLogin}/>
    </>
  );
};

export default Login;
