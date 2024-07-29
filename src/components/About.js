import React from 'react';
import './About.css';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import about3 from '../assets/about3.png';

const About = () => {
    return (
      <section id="about" className="about">
        <h2>Sobre Nosotros</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Bienvenidos a Allure, el evento de lujo que combina moda, gastronomía y entretenimiento en Bogotá, Colombia.</p>
            <p>Nuestra misión es ofrecer una experiencia inolvidable donde el lujo y la exclusividad se unen para crear momentos mágicos. En Allure, descubrirás las últimas tendencias en moda, disfrutarás de la mejor gastronomía y vivirás experiencias de entretenimiento únicas.</p>
          </div>
          <div className="about-images">
            <div className="image-container">
              <img src={about1} alt="Fashion show" className="about-image" />
            </div>
            <div className="image-container">
              <img src={about2} alt="Gastronomy" className="about-image" />
            </div>
            <div className="image-container">
              <img src={about3} alt="Entertainment" className="about-image" />
            </div>
          </div>
        </div>
      </section>
    );
  }
export default About;
