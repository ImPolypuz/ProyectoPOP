import React from "react";
import Navbar from "../components/Navbar";

const Vaporwave = () => {
  return (
    <div>
      <>
        <Navbar />
        <header>
          <div className="holder header">
            <img
              src={"./imagenes/logo.png"}
              width="70%"
              alt="logo"
              className="center"
            />
          </div>
        </header>
        <main className="holder">
          <h2
            style={{
              backgroundColor: "aliceblue",
            }}
          >
            {" "}
            ¿Que es el Vaporwave?
          </h2>
          <img
            src={"./imagenes/vaporwave1.jpg"}
            width="50%"
            alt="vaporwave"
            className="center"
          />

          <p
            style={{
              backgroundColor: "aliceblue",
            }}
          >
            El vaporwave es un género de música electrónica, un estilo artístico
            y un meme de internet que surgió a mediados de la década de 2010.
            Musicalmente, se caracteriza por la remasterización de muchos otros
            géneros musicales como el indie, seapunk, witch house, ambient y
            chillwave con estilos de otras décadas, principalmente de finales de
            los años 70 y los años 80 (como el funk, el New Age o el city pop).
            Artísticamente, incorpora elementos tan dispares como el software y
            diseño web de finales de los años 90, las imágenes pixeladas, la
            escultura griega clásica, la pintura renacentista, el anime, el uso
            de la música y lengua japonesa en general, la publicidad de épocas
            pasadas, el renderizado 3D y colores vivos, con temáticas de ciencia
            ficción y ciberpunk.
          </p>

          <audio
            className="center"
            controls
            autoplay
            src="./macintosh.mp3"
          ></audio>
        </main>
      </>
    </div>
  );
};

export default Vaporwave;
