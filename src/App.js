import React, { Component } from 'react';
import './App.css';
import PlayerPage from './components/PlayerPage/PlayerPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>playNYTimes</h1>
        <PlayerPage />
        <footer> © 2017 Adriano Carmezim Filho. All articles material and logo belong to The New York Times Company. All Rights Reserved.</footer>
      </div>
    );
  }
}

export default App;
