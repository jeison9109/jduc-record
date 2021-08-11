import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./displays/Home";
import Biografia from "./displays/Biografia";
import Contacto from "./displays/Contacto";
import Videos from "./displays/Videos";
import "./App.css";
import firebase from "./firebase";

function App() {
  /*const [Noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("Noticias");

    function getNoticias() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setNoticias(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getNoticias();

    }, []);


    if (loading) {
        return <h1>loading...</h1>;
    }*/

  return (
    <>
      <Router>
        <Navbar />

        {/* <div className="pages">
             <div>
         {Noticias.map((jduc) => (
              <div key={jduc.id}>
                <h2>{jduc.title}</h2>
                <p>{jduc.desc}</p>
              </div>
            ))}
          </div>*/}

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Biografia" component={Biografia}></Route>
          <Route path="/Contacto" component={Contacto}></Route>
          <Route path="/Videos" component={Videos}></Route>
        </Switch>

        {/*</div>*/}
      </Router>
    </>
  );
}

export default App;
