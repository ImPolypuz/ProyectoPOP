import React from "react";
import Navbar from "../components/Navbar";

const Musica = () => {
  return (
    <>
      <Navbar />
      <div>
        <main className="holder">
          <div className="letra">
            <h2>Musica</h2>
            <h3
              style={{
                backgroundColor: "aliceblue",
              }}
            >
              Desde el Synthwave hasta el Dark Synth, dias soleados a oscuras
              ciudades futuristas. Una playlist creada para todos los gustos
            </h3>
          </div>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/05IllTPaA0ReU2aBwU36JW?utm_source=generator"
            width="100%"
            heigth="600%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </main>
      </div>
    </>
  );
};

export default Musica;
