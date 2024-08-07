import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <section id="contact" className="contact">
            <h2>Contáctanos</h2>
            <div className="contact-content">
                <p>¡Nos encantaría saber de ti! Si tienes alguna pregunta, comentario o necesitas más información sobre la Feria Allure, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.</p>
                <div className="contact-info">
                    <p><strong>Correo Electrónico:</strong> info@feriaallure.com</p>
                    <p><strong>Teléfono:</strong> +57 (1) 234 5678</p>
                    <p><strong>Dirección:</strong> Calle 123 #45-67, Bogotá, Colombia</p>
                    <p><strong>Redes Sociales:</strong></p>
                    <ul>
                        <li>Instagram: @feriaallure</li>
                        <li>Facebook: Feria Allure Bogotá</li>
                        <li>Twitter: @FeriaAllure</li>
                    </ul>
                </div>
                <p>Por favor, completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.</p>
                {formSubmitted ? (
                    <p>Tus comentarios han sido enviados</p>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Nombre" required />
                        <input type="email" name="email" placeholder="Correo Electrónico" required />
                        <input type="tel" name="phone" placeholder="Teléfono" required />
                        <textarea name="message" placeholder="Mensaje" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
