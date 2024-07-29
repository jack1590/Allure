import React from 'react';
import './Fashion.css';
import fashion1 from '../assets/fashion1.jpg';
import fashion2 from '../assets/fashion2.jpg';
import fashion3 from '../assets/fashion3.jpg';

const Fashion = () => {
  return (
    <section id="fashion" className="fashion">
      <h2>Moda</h2>
      <div className="fashion-content">
        <div className="fashion-text">
          <p>Descubre las últimas tendencias en moda durante el evento Allure, donde el estilo se encuentra con la elegancia. Este evento presenta colecciones de diseñadores renombrados, mostrando lo mejor de la moda contemporánea.</p>
          <h3>Diseñadores Destacados</h3>
          <p>Allure contará con la participación de algunos de los diseñadores más influyentes de la industria. Entre ellos se encuentran:</p>
          <ul>
            <li><strong>María García:</strong> Conocida por su estilo innovador y su habilidad para mezclar lo clásico con lo moderno.</li>
            <li><strong>Carlos Pérez:</strong> Famoso por sus elegantes trajes de noche y su impecable atención al detalle.</li>
            <li><strong>Lucía Fernández:</strong> Reconocida por sus diseños vanguardistas y su enfoque en la sostenibilidad.</li>
          </ul>
          <h3>Pasarelas y Exhibiciones</h3>
          <p>Durante el evento, se llevarán a cabo varias pasarelas donde los diseñadores mostrarán sus últimas colecciones. También habrá exhibiciones interactivas donde los asistentes podrán conocer más sobre el proceso creativo y la inspiración detrás de cada colección.</p>
          <h3>Experiencia VIP</h3>
          <p>Los asistentes VIP tendrán acceso exclusivo a áreas detrás de escena, donde podrán conocer a los diseñadores y obtener una visión más profunda de la industria de la moda. También habrá eventos especiales, como sesiones de fotos y entrevistas con figuras clave de la moda.</p>
        </div>
        <div className="fashion-images">
          <div className="image-container">
            <img src={fashion1} alt="Fashion show 1" className="fashion-image" />
            <div className="image-caption">Tendencia 1</div>
          </div>
          <div className="image-container">
            <img src={fashion2} alt="Fashion show 2" className="fashion-image" />
            <div className="image-caption">Tendencia 2</div>
          </div>
          <div className="image-container">
            <img src={fashion3} alt="Fashion show 3" className="fashion-image" />
            <div className="image-caption">Tendencia 3</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fashion;
