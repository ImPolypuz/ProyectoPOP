import React from "react";

const Navbar = () => {
  return (
    <div>
      {" "}
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
      <nav>
        <div className="holder">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="vaporwave.html">Vaporwave</a>
            </li>
            <li>
              <a href="synthwave.html">Synthwave</a>
            </li>
            <li>
              <a href="peliculas.html">Peliculas</a>
            </li>
            <li>
              <a href="musica.html">Musica</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
