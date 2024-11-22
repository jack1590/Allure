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
            <p>¡Bienvenidos a Allure!, El evento que combina moda, gastronomía y entretenimiento para ofrecerte una experiencia única en Bogotá, Colombia.</p>
            <p>En Allure queremos que vivas momentos inolvidables donde el lujo y la exclusividad se fusionan para sorprenderte. Aquí podrás descubrir las últimas tendencias en moda, disfrutar de platillos increíbles y dejarte llevar por experiencias de entretenimiento únicas que hemos preparado para ti.</p>
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
