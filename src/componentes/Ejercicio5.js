import React, { useState, useEffect } from 'react';

import img1 from '../assets/imag4.png';
import img2 from '../assets/imag5.png';
import img3 from '../assets/imag6.png';

export const Ejercicio5 = () => {

    const imagenes = [img1, img2, img3];

    const [indice, setIndice] = useState(0);
    const [fade, setFade] = useState(true);

   useEffect(() => {
    const intervalo = setInterval(() => {
        setIndice((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
}, [imagenes.length]);


    const cambiarImagen = (nuevoIndice) => {

        setFade(false); // desaparece

        setTimeout(() => {
            setIndice((nuevoIndice + imagenes.length) % imagenes.length);
            setFade(true); // aparece
        }, 400);
    };

    const siguiente = () => {
        cambiarImagen(indice + 1);
    };

    const anterior = () => {
        cambiarImagen(indice - 1);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Slider Completo</h2>

            <img
                src={imagenes[indice]}
                alt="slider"
                width="250"
                style={{
                    opacity: fade ? 1 : 0,
                    transition: 'opacity 0.4s ease-in-out',
                    borderRadius: '10px'
                }}
            />

            <div style={{ marginTop: '10px' }}>
                <button onClick={anterior}>Anterior</button>
                <button onClick={siguiente}>Siguiente</button>
            </div>
        </div>
    );
};