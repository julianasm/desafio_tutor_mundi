import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import React, { Component } from 'react';
import Compliments from './components/Compliments'
import book from './images/livro.png'

import './App.css';

class App extends Component {
   render() {
    return (
      <div className="App">
      <div className="book">
        <img className="book__image" src={ book }></img>
      </div>
      <div className="tutor">
        <p className="tutor__help">
          Como foi a ajuda do tutor?
        </p>
      </div>
      <Router>
      <div className="compliments">
        <Link to='/elogios'>
         <p className="compliments__button" href='./components/elogios'>Elogios</p>
        </Link>
      </div>
      <div className="confirm">
        <p className="confirm__button">Confirmar</p> 
      </div>
      <div className="skip">
        <p className="skip__button">Pular</p>
      </div>
        <Switch>
          <Route path='/elogios' component={ Compliments }/>
        </Switch>
      </Router>
    </div>
    )
  }
}


export default App;
