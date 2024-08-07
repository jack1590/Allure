import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpeg'; // Ensure the path to your logo is correct

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Allure Event Logo" /> {/* Add the logo */}
                <h1>Allure Event</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#fashion">Fashion</a></li>
                    <li><a href="#gastronomy">Gastronomy</a></li>
                    <li><a href="#entertainment">Entertainment</a></li>
                    <li><a href="#location">Press Kit</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
