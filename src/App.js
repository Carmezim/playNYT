import React, { Component } from 'react';
//import './App.css';
import PlayerPage from './components/PlayerPage/PlayerPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>playNYT <img src={require('./icon.png')} alt="logo"/></h1>
        <div className="moto bottom">Same Iconic <br></br> Content</div>
        <div className="moto top">New <br></br> Experience</div>
        <PlayerPage />
        <footer> © 2017 Adriano Carmezim Filho. All articles material and logo belong to The New York Times Company. All Rights Reserved. Font made by <a href="http://www.onlinewebfonts.com">Online Web Fonts</a> is licensed by CC BY 3.0.
        </footer>
      </div>
    );
  }
}

export default App;
