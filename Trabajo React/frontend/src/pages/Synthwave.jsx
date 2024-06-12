import React from "react";
import Navbar from "../components/Navbar";

const Synthwave = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="holder header">
          <img
            src="./imagenes/logo.png"
            width="70%"
            alt="logo"
            className="center"
          />
        </div>
      </header>
      <main className="holder" />

      <h2
        style={{
          textAlign: "center",
        }}
      >
        Synthwave
      </h2>
      <div>
        <div className="synth ">
          <img src="./imagenes/synth1.jpg" alt="synth" width="20%" />
          <p>
            Synthwave es un género de música electrónica influenciado por las
            bandas sonoras de películas, música y videojuegos de los años
            ochenta, así como en compositores como John Carpenter, Jean-Michel
            Jarre, Vangelis y Tangerine Dream
          </p>
        </div>
        <div className="synth">
          <img src="./imagenes/synth2.jpg" alt="synth" width="20%" />
          <p>
            Se impregna de la estética y la nostalgia de la cultura pop de esos
            años. También se caracteriza por su estilo retrofuturista, inspirado
            por las películas de ciencia ficción futurista de la época, como
            Blade Runner o Tron, en las que nos presentan mundos plagados de
            tecnología, luces de neón y hologramas, muy al estilo del cyberpunk
          </p>
        </div>
        <div className="synth">
          <img src="./imagenes/synth3.png" alt="synth" width="20%" />
          <p>
            {" "}
            Al ser parte de la electrónica, está mayormente basado en el uso de
            sintetizadores, pero también hay piezas complementadas por el uso de
            guitarras eléctricas, saxo y otros instrumentos muy utilizados en
            los ochenta. Aunque comenzó siendo un género mayormente
            instrumental, en la actualidad es habitual que una gran parte de los
            artistas pongan voz a sus obras, influenciándose cada vez más del
            pop
          </p>
        </div>
      </div>
    </>
  );
};

export default Synthwave;
