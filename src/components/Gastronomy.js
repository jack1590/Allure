import React from 'react';
import './Gastronomy.css';
import gastronomy1 from '../assets/gastronomy-1.png';
import gastronomy2 from '../assets/gastronomy-2.png';
import gastronomy3 from '../assets/gastronomy-3.png';

const images = [gastronomy1, gastronomy2, gastronomy3];

const Gastronomy = () => {
    return (
        <section id="gastronomy" className="gastronomy">
            <h2>Gastronomía</h2>
            <div className="gastronomy-content">
                <p>En la Feria Allure, la gastronomía es una experiencia de lujo que deleitará todos tus sentidos. Disfruta de una selección exclusiva de platos gourmet preparados por chefs de renombre, quienes te llevarán en un viaje culinario a través de sabores exquisitos y presentaciones impecables. Desde degustaciones de alta cocina hasta maridajes con vinos y licores premium, cada bocado será una celebración del arte culinario.</p>
                <div className="gastronomy-images">
                    {images.map((image, index) => (
                        <div key={index} className="gastronomy-image-container">
                            <img src={image} alt={`Gastronomy ${index + 1}`} className="gastronomy-image" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gastronomy;
