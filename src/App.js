// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Registration from './pages/Registration';
import ErrorPage from './pages/Error';
import User from './pages/User';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import LoggedNavbar from './components/userComponents/LoggedNavbar';
import Clicker from './pages/userPages/ClickerCount';
import Calculadora from './pages/userPages/Calculadora';
import Lista from './pages/userPages/Tareas'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      {!isLoggedIn && <Navbar isLoggedIn={!isLoggedIn}/>}
      {isLoggedIn && <LoggedNavbar isLoggedIn={isLoggedIn}/>}
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/registration" element={ <Registration/> }/>
        <Route path="/user" element={ <User/> } />
        <Route path="/login"
        element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/clicker" element={ <Clicker/> } />
        <Route path="/Calculadora" element={ <Calculadora/>}/>
        <Route path="/tareas" element={ <Lista/> } />
        <Route path="*" element={ <ErrorPage/> } />
      </Routes>
    </Router>
  );
}

export default App;