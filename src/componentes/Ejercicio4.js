import React, { useState, useEffect } from 'react';

import img1 from '../assets/imag1.png';
import img2 from '../assets/imag2.webp';
import img3 from '../assets/imag3.webp';

export const Ejercicio4 = () => {

    const imagenes = [img1, img2, img3];

    const [indice, setIndice] = useState(0);
    const [fade, setFade] = useState(true);

    
   useEffect(() => {
    const intervalo = setInterval(() => {

        setFade(false);

        setTimeout(() => {
            setIndice((prev) => (prev + 1) % imagenes.length);
            setFade(true);
        }, 500);

    }, 3000);

    return () => clearInterval(intervalo);
}, [imagenes.length]);

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Slider con Fade</h2>

            <img
                src={imagenes[indice]}
                alt="slider"
                width="250"
                style={{
                    opacity: fade ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out'
                }}
            />

        </div>
    );
};