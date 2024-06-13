import React from "react";
import Navbar from "../components/Navbar";

const Peliculas = () => {
  return (
    <>
      <Navbar />
      <div
        background="/imagenes/fondo.jpg"
        style={{
          paddingTop: "5px",
        }}
      >
        <div>
          <main className="holder">
            <div className="peliculas">
              <h2>PELICULAS</h2>
              <div className="cuadros">
                <div className="divito">
                  <div className="cuadro">
                    <a
                      href="https://www.youtube.com/watch?v=G9V2gN_a3P8"
                      target="_blank"
                    >
                      <img src="./imagenes/black rain.jpg" alt="" />
                    </a>
                    <h5>Black rain (1989)</h5>
                  </div>
                  <div className="cuadro-descripcion">
                    <p>
                      Nick Conklin y Charlie Vincent son dos policías de Nueva
                      York a los que asignan la misión de escoltar a un
                      peligroso asesino de la Yakuza hasta Japón; pero, una vez
                      en el aeropuerto de Osaka, el detenido se escapa.
                      Intentando atraparlo, van a parar a los bajos fondos de la
                      ciudad, donde se verán envueltos en una encarnizada guerra
                      entre bandas rivales de la mafia japonesa.
                    </p>
                  </div>
                </div>
                <div className="divito">
                  <div className="cuadro">
                    <a
                      href="https://www.youtube.com/watch?v=eogpIG53Cis"
                      target="_blank"
                    >
                      <img src="./imagenes/blade runner.jpg" alt="" />
                    </a>
                    <h5>Blade Runner (1982)</h5>
                  </div>
                  <div className="cuadro-descripcion">
                    <p>
                      Al final del siglo XX, miles de hombres y mujeres dejaron
                      la Tierra para conquistar el espacio y escapar de las
                      grandes ciudades, que se habían vuelto inhabitables. En
                      las colonias nació una nueva raza de esclavos androides
                      llamados "Replicantes". Los nuevos androides son parecidos
                      al hombre, pero superiores en fuerza y agilidad. Después
                      de una revolución, el antiguo policía Rick Deckard debe
                      encontrar y eliminar a los replicantes rebeldes.
                    </p>
                  </div>
                </div>
                <div className="divito">
                  <div className="cuadro">
                    <a
                      href="https://www.youtube.com/watch?v=KBiOF3y1W0Y"
                      target="_blank"
                    >
                      <img src="./imagenes/Drive.jpg" alt="" />
                    </a>
                    <h5>Drive</h5>
                    <h5>(2011)</h5>
                  </div>
                  <div className="cuadro-descripcion">
                    <p>
                      Un misterioso conductor especialista de cine y mecánico en
                      un taller, por la noche se convierte en un talentoso
                      chófer para delincuentes. Su jefe, Shannon le busca
                      trabajos en películas de Hollywood o fugas para
                      criminales. Sin embargo, su mundo cambia cuando conoce a
                      Irene, una madre solitaria que tiene al marido en la
                      cárcel, y se ve enredado en un robo que involucra a la
                      alta esfera de la mafia.
                    </p>
                  </div>
                </div>
                <div className="divito">
                  <div className="cuadro">
                    <a
                      href="https://www.youtube.com/watch?v=10OoccK7dIw"
                      target="_blank"
                    >
                      <img src="./imagenes/escape from new york.jpg" alt="" />
                    </a>
                    <h5>Escape From New york (1981)</h5>
                  </div>
                  <div className="cuadro-descripcion">
                    <p>
                      En el año 1997 el avión del presidente de los Estados
                      Unidos es secuestrado por un grupo radical. Sin embargo,
                      los pasajeros consiguen sobrevivir y se encuentran solos
                      en las calles de Nueva York, donde Manhattan se ha
                      convertido en una prisión de alta seguridad. Para rescatar
                      al presidente se debe enviar a un agente secreto. El
                      elegido es un conocido convicto al que todos daban por
                      muerto
                    </p>
                  </div>
                </div>

                <div className="divito">
                  <div className="cuadro">
                    <a
                      href="https://www.youtube.com/watch?v=nO_DIwuGBnA"
                      target="_blank"
                    >
                      <img src="./imagenes/kung fury.png" alt="" />
                    </a>
                    <h5>Kung fury (2015)</h5>
                  </div>
                  <div className="cuadro-descripcion">
                    <p>
                      El detective del Departamento de la Policía de Miami y
                      artista marcial, Kung Fury, retrocede en el tiempo de los
                      años 80 a la Segunda Guerra Mundial para matar a Adolf
                      Hitler, alias Kung Führer, y vengar la muerte de su amigo
                      en manos del líder nazi.
                    </p>
                  </div>
                </div>
                <div className="divito">
                  <div className="cuadro">
                    <a
                      href="https://www.youtube.com/watch?v=n74ibtuN9I4"
                      target="_blank"
                    >
                      <img src="./imagenes/running man.jpg" alt="" />
                    </a>
                    <h5>The Running Man (1987)</h5>
                  </div>
                  <div className="cuadro-descripcion">
                    <p>
                      En el año 2019, un policía injustamente acusado de un
                      terrible crimen, es obligado a luchar por su vida en un
                      sangriento concurso de televisión contra experimentados
                      asesinos.
                    </p>
                  </div>
                </div>
                <div className="divito">
                  <div className="cuadro">
                    <a
                      href="https://www.youtube.com/watch?v=AFlZ6pVtnv0"
                      target="_blank"
                    >
                      <img src="./imagenes/turbo kid.jpg" alt="" />
                    </a>
                    <h5>Turbo Kid (2015)</h5>
                  </div>
                  <div className="cuadro-descripcion">
                    <p>
                      Corre el año 1997, la lluvia ácida ha dejado la tierra
                      yerma y ha envenenado las aguas. Entre las ruinas del
                      antiguo mundo, sumido en un invierno nuclear perpetuo, un
                      joven y solitario huérfano vaga por el desierto con su
                      bicicleta BMX en busca de cómics y todo tipo de
                      cachivaches de la década de 1980 que después cambiará por
                      agua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Peliculas;
