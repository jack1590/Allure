import React from 'react';
import './Fashion.css';
import fashion1 from '../assets/fashion1.jpg';
import fashion2 from '../assets/fashion2.jpg';
import fashion3 from '../assets/fashion3.jpg';

const images = [fashion1, fashion2, fashion3];

const Fashion = () => {
    return (
        <section id="fashion" className="fashion">
            <h2>Moda</h2>
            <div className="fashion-content">
                <div className="fashion-text">
                    <h3>Diseñadores Destacados</h3>
                    <p>Allure contará con la participación de algunos de los diseñadores más influyentes de la industria. Entre ellos se encuentran:</p>
                    <ul>
                        <li><strong>María García:</strong> Conocida por su estilo innovador y su habilidad para mezclar lo clásico con lo moderno.</li>
                        <li><strong>Carlos Pérez:</strong> Famoso por sus elegantes trajes de noche y su impecable atención al detalle.</li>
                        <li><strong>Lucía Fernández:</strong> Reconocida por sus diseños vanguardistas y su enfoque en la sostenibilidad.</li>
                    </ul>
                </div>
                <div className="fashion-text">
                    <h3>Pasarelas y Exhibiciones</h3>
                    <p>Durante el evento, se llevarán a cabo varias pasarelas donde los diseñadores mostrarán sus últimas colecciones. También habrá exhibiciones interactivas donde los asistentes podrán conocer más sobre el proceso creativo y la inspiración detrás de cada colección.</p>
                </div>
                <div className="fashion-text">
                    <h3>Experiencia VIP</h3>
                    <p>Los asistentes VIP tendrán acceso exclusivo a áreas detrás de escena, donde podrán conocer a los diseñadores y obtener una visión más profunda de la industria de la moda. También habrá eventos especiales, como sesiones de fotos y entrevistas con figuras clave de la moda.</p>
                </div>
            </div>
            <div className="fashion-images">
                    {images.map((image, index) => (
                        <div key={index} className="fashion-image-container">
                            <img src={image} alt={`Fashion ${index + 1}`} className="fashion-image" />
                        </div>
                    ))}
                </div>
        </section>
    );
};

export default Fashion;
