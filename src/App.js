import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className = 'App'>
      <Route path='/' component={NavBar}/>
    </div>
  )
}

export default App;
