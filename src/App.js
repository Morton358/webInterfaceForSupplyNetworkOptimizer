import React, { Component } from 'react';
import './App.css';
import Authentication from './Authentication/Authentication.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Some header</p>
        <Authentication />

      </div>
    );
  }
}

export default App;
