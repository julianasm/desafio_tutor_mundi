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
        <img className="star" src={ star } alt="estrela"/>
        <img className="star" src={ star } alt="estrela"/>
        <img className="star" src={ star } alt="estrela"/>
        <img className="star" src={ star } alt="estrela"/>
        <img className="star" src={ star } alt="estrela"/>
      </div>
        <Compliments />
      <div className="skip__compliment">
        <p className="skip"> PULAR </p>
      </div>
      <div className="confirm__compliment"></div>
        <p className="confirm">CONFIRMAR</p>
    </div>
    )
  }
}


export default App;
