// LoginForm.js
import React from 'react';

const LoginForm = ({ handleLogin }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const success = await handleLogin(username, password);
    if (!success) {
      // Aquí puedes mostrar un mensaje de error al usuario si el inicio de sesión falla
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
