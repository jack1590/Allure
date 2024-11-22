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
                    <h3>Diseñadores que inspiran</h3>
                    <p>En Allure contaremos con la participación de grandes talentos de la moda que marcan tendencia:</p>
                    <ul>
                        <li><strong>María García:</strong> Conocida por su estilo innovador y su habilidad para mezclar lo clásico con lo moderno.</li>
                        <li><strong>Carlos Pérez:</strong> Famoso por sus elegantes trajes de noche y su impecable atención al detalle.</li>
                        <li><strong>Lucía Fernández:</strong> Reconocida por sus diseños vanguardistas y su enfoque en la sostenibilidad.</li>
                    </ul>
                </div>
                <div className="fashion-text">
                    <h3>Pasarelas y algo más</h3>
                    <p>Prepárate para disfrutar de desfiles espectaculares donde los diseñadores mostrarán sus colecciones más recientes. Además, podrás explorar exhibiciones interactivas que te llevarán detrás de cada diseño, para entender de cerca el proceso creativo y las inspiraciones de los artistas.</p>
                </div>
                <div className="fashion-text">
                    <h3>Un toque VIP</h3>
                    <p>Si buscas algo más exclusivo, nuestra experiencia VIP es para ti. Podrás acceder a las áreas detrás de escena, conocer a los diseñadores en persona y descubrir los secretos de la industria. Además, habrá sesiones de fotos y encuentros especiales con figuras importantes de la moda.</p>
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
