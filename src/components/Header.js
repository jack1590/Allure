import React from 'react';
import logo from '../assets/logo.jpeg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Allure Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#fashion">Moda</a></li>
          <li><a href="#gastronomy">Gastronomía</a></li>
          <li><a href="#entertainment">Entretenimiento</a></li>
          <li><a href="#location">Ubicación</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;