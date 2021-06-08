import React from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './displays/Home';
import Biografia  from './displays/Biografia';
import  Contacto  from './displays/Contacto';
import  Videos  from './displays/Videos';
import './App.css';



function App () {
        return (
            <>
        <Router> 
            <Navbar/>
            <div className='pages'>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/Biografia' component={Biografia}></Route>
                <Route path='/Contacto'  component={Contacto}></Route>
                <Route path='/Videos'    component={Videos}></Route>
            </Switch>
            </div>
        </Router>
       </>

    );
}
    
export default App;
