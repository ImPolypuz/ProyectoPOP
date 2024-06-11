import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="holder">
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Un poco de historia
        </h2>
        <div
          style={{
            backgroundColor: "aliceblue",
          }}
          className="home"
        >
          <p>
            Mas allá de no haber formado parte y aunque naci bastante cerca de
            su final, los años 80 golpearon muy fuerte en mi vida.
          </p>
          <p>
            Todavia no sabia lo que iba a descubrir pero mas alla de la musica
            que escuchaba con mis padres como Depeche Mode o Erasure, habia
            mucha mas historia que no murio a finales de diciembre de 1989.
          </p>
          <p>
            Desde la vestimenta hasta la forma de hablar, cada vez que veia algo
            de esa epoca sentia que habia nacido en el momento equivocado.
          </p>
          <p>
            No supe que hacer con esta nostalgia que en parte no era propia
            hasta cumplir los 20, edad en la que descubri el mundo del
            vaporwave.
          </p>
          <p>
            {" "}
            Sonidos que recordaban a aquellas peliculas de ciencia ficcion y
            terror que tanto me gustaban, colores llamativos, un estilo que me
            enamoro desde la primera vez que la vi y una comunidad enorme en
            internet que hizo de esta experiencia una gran parte de mi vida.
          </p>
          <p>
            Agarren su bebida favorita y unanse al hermoso mundo de la nostalgia
            a los años 80
          </p>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <iframe
            width="560"
            height="315"
            className="center"
            src="https://www.youtube.com/embed/u1QUSCzBGGY?si=HME3Jhg03hS24tWR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default Home;
