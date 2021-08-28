import React from "react";
import logo from "../images/jduc19.jpeg";
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
      </div>{" "}
      <h2>Social Feed</h2>
      <div className="flexbox-container">
        <div className="container-tw">
          <TwitterTimelineEmbed
            sourceType="profile"
            // The preferred screen name goes next:
            screenName="JDUC191"
            // Style options goes here:
            options={{ height: 700, width: 350 }}
          />
        </div>

        <div className="container-fb">
          <div
            className="fb-page container-fb"
            href="https://www.facebook.com/jduc19/"
            tabs="timeline"
            width="350"
            height="700"
            small_header="true"
            adapt_container_width="false"
            data_hide_cover="true"
            data_show_facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/jduc19/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/jduc19/">Talento de Barrio</a>
            </blockquote>
          </div>
        </div>
      </div>
      <footer>
        <p>Julian David Uribe Cruz</p>
        <p class="copyrigth">&copy;Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Home;
