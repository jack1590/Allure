import React, { useEffect } from 'react';
import introImage from '../assets/intro-image.jpg';
import './Intro.css';

const Intro = ({ onFinish }) => {
    useEffect(() => {
        const introElement = document.getElementById("intro");
        const introImageElement = document.getElementById("intro-image");

        if (introImageElement) {
            introImageElement.onload = function() {
                introImageElement.classList.add("visible");
            };
        }

        const timer = setTimeout(() => {
            introElement.classList.add("fade-out");
            const fadeOutTimer = setTimeout(() => {
                onFinish();
            }, 1000); // Match this to the CSS transition duration
            return () => clearTimeout(fadeOutTimer);
        }, 3000); // Display the intro for 3 seconds

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div id="intro">
            <img src={introImage} alt="Intro Image" id="intro-image" />
        </div>
    );
};

export default Intro;
