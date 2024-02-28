// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav style={{ display: isLoggedIn ? 'block' : 'none' }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
        <Link to="/clicker">Contador de Clics</Link>
        </li>
        <li>
        <Link to="/calculadora">Calculadora</Link>
        </li>
        <li>
        <Link to="/tareas">Lista de Tareas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;