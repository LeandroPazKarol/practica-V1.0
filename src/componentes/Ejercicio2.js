import React, { useState } from "react";
import img1 from "../assets/imag1.png";
import img2 from "../assets/imag2.webp";
import img3 from "../assets/imag3.webp";

export const Ejercicio2 = () => {
  const imagenes = [img1, img2, img3];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div>
      <h2>Slider de Imágenes</h2>

      <img
        src={imagenes[indice]}
        width="200"
        alt="slider"
        style={{ display: "block", margin: "auto" }}
      />
      <button onClick={anterior}>Anterior</button>
      <button onClick={siguiente}>Siguiente</button>
    </div>
  );
};
