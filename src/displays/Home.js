import React from "react";
import logo from "../images/logo.jpg";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div className="titulo">
        <h1>BIENVENIDOS</h1>
      </div>

      <div className="intro">
        <div className="contenedor">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="parrafo-1">
            <p>"TODO ES CUESTION DE ENFOQUE"</p>
            <h3>MUSICA URBANA</h3>
            <p>Esfuerzo y Disciplina....</p>
            <p>
              Musica con vivencias, experiencias, alegrias, tristezas, amores,
              desamores. La linea no discrimina, esfuerzo y disciplina para
              llegar a la cima
            </p>
            <a href="">
              <FontAwesomeIcon
                icon={faMusic}
                style={{ fontSize: "1.50rem", color: "black" }}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faMusic}
                style={{ fontSize: "1.25rem", color: "black" }}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faMusic}
                style={{ fontSize: "1.50rem", color: "black" }}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faMusic}
                style={{ fontSize: "1.25rem", color: "black" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="twitter">
        <p> Social Feed</p>
        <TwitterTimelineEmbed
          sourceType="profile"
          // The preferred screen name goes next:
          screenName="TwitterDev"
          // Style options goes here:
          options={{ height: 500, width: 500 }}
        />
      </div>

      <footer>
        <p>Julian David Uribe Cruz</p>
        <p class="copyrigth">&copy;Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Home;
