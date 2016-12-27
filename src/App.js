import React, { Component } from 'react';
import './App.css';
import PlayerPage from './components/PlayerPage/PlayerPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>playNYTimes</h1>
        <PlayerPage />
      </div>
    );
  }
}

export default App;
