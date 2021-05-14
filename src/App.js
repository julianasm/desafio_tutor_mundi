import React, { Component } from 'react';
import Compliments from './components/Compliments'
import book from './images/livro.png'
import star from './images/estrela.svg'

import './App.css';

class App extends Component {
   render() {
    return (
      <div className="App">
      <div className="book">
        <img className="book__image" src={ book }></img>
      </div>
      <div className="tutor">
          Como foi a ajuda do tutor?
      </div>
      <div className="stars">
        <img className="star__1" src={ star } alt="estrela"/>
        <img className="star__2" src={ star } alt="estrela"/>
        <img className="star__3" src={ star } alt="estrela"/>
        <img className="star__4" src={ star } alt="estrela"/>
        <img className="star__5" src={ star } alt="estrela"/>
      </div>
      <div className="skip__compliment">
        <p>Pular</p>
      </div>
      <div className="cancel__compliment"></div>
      <p>Cancelar</p>
    </div>
    )
  }
}


export default App;
