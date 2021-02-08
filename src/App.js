import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Heroes from './components/Heroes'
import Inicio from './components/Inicio'
function App() {
  return (
    <div className = 'App'>
      <NavBar/>
      <Route exact path= '/' component={Inicio}></Route>
      <Route path ='/Heroes' component ={Heroes}></Route>
    </div>
  )
}

export default App;
