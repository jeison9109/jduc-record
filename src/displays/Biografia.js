import React from "react";
import { Parallax } from "react-parallax";

const image1 =
  "https://images.unsplash.com/photo-1558258021-971dd2148be5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";

const fondoStyle = {
  height: "400px",
};

const Biografia = () => {
  return (
    <div>
      <div className="titulo-biografia">
        <h1>MI HISTORIA QUIERO CONTARLES</h1>
      </div>
      <Parallax bgImage={image1} strength={500}>
        <div style={fondoStyle}>
          JDUC
          <div className="parrafo">
            <p>
              Mi nombre es Julián David Uribe Cruz soy un artista de música
              urbana me llamo en el gremio JDUC y esta es mi historia. Soy de
              una familia de clase baja que con esfuerzo y trabajo paso a paso
              salió adelante soy hijo de Ramiro Uribe y Helena Cruz, tengo 2
              hermosas hermanas llamadas Daniela Uribe y Paula Uribe. Mis
              inicios en la música comienzan en mi época de adolescente en el
              año 2005 donde estaba estudiando el bachillerato en el colegio
              INEM de la ciudad de Bucaramanga, un amigo de clase me presenta
              una serie de ritmos y rimas con las cuales el expresaba su
              talento, mi curiosidad musical inicia en ese momento junto con
              Yeyo mi amigo de colegio Sergio López.
            </p>
          </div>
        </div>
      </Parallax>
      <div className="parrafo2">
        <p>
          Realizamos una serie de videos caseros y letras con beats de Internet
          y escribíamos todo aquello que nos apasionaba y vivíamos. Canciones de
          amor y canciones de calle, siempre en compañía de mi mejor amigo que
          nos apoyaba en todo con videos, computador, edición y muchas cosas que
          nos motivaba a seguir en busca de nuestro camino musical, mi mejor
          amigo cuyo nombre es Yeison Serna era el promotor de todo este cuento
          de la música. Recuerdo que la primera vez que entre a un estudio de
          grabación fue en Girón Santander lleno de mucha ilusión por aprender
          más de este arte que me apasiona. Grabe mi primer tema con muchos
          nervios y con poco tiempo para grabar pues todo esto tenía un costo.
          Grabe luego en diferentes estudios de la ciudad de Bucaramanga, para
          luego decidir crear uno propio en forma casera. Realizamos diversas
          presentaciones en el colegio, auditorios y canchas de la ciudad.
        </p>
      </div>
      <div className="parrafo3">
        <p>
          Mi vivencia en un barrio popular marcó muchos temas y canciones que
          escribía en mi época de adolescente. Siempre he soñado con estar en el
          medio y vivir de mi música cosa que estoy determinado a lograr. Luego
          de tantos años transcurridos y de hacer música como pasatiempo, me
          senté un día y dije esto debe ser un proyecto de vida. En el año 2019
          inicie mi camino musical con gran aporte de personas profesionales en
          el arte, empecé a investigar a mirar la música como se dbe de manera
          profesional y con el más grande amor. Inicie a estudiar producción
          musical en el año 2020 y aprender todo acerca de esta industria.{" "}
        </p>
      </div>
      <div className="parrafo4">
        <p>
          Ya con una familia formada con un hijo hermoso y una mujer divina que
          me apoya, con esfuerzo estoy sacando mi proyecto adelante. Este año
          2021 iniciamos con muchos proyectos meternos en el cuento de expande
          la música a través de plataformas digitales, tener un estudio de
          grabación propio y con gran visión para apoyar nuevos artistas, seguir
          trabajando fuertemente hasta lograr posicionarme de una gran manera en
          este medio tan importante. Hoy comparto mi historia con agradecimiento
          y con muchas ganas de seguir aprendiendo, hoy nuevamente y junto a mi
          familia, mi hijo y mi mejor amigo Yeison Serna inicio mi camino mi
          construcción de un sueño que nació desde el 2005.{" "}
        </p>
      </div>
      <div className="parrafo5">
        <p>
          Gracias por estar conmigo te invito a que escuches mi música y apoyes
          compartiendo
        </p>
      </div>
      <div className="parrafo6">
        <p>Bendiciones Un gran abrazo JDUC</p>
      </div>

      <footer>
        <p>Julian David Uribe Cruz</p>
        <p class="copyrigth">&copy;Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Biografia;
