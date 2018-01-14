import React, { Component } from 'react';
import './App.css';
import Authentication from './Authentication/Authentication.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <p>Some header</p>
          <Authentication />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
