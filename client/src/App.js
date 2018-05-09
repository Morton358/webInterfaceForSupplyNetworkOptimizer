import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Authentication from './Authentication/Authentication.js';
import Entepreneur from './Entepreneur/Entepreneur';

class App extends Component {
    state = {
        content: 'authentication'
    };

    handleSubmit = event => { // eslint-disable-line
        this.setState({ content: 'entepreneur' });
    };
    render() {
        let content = null;
        if (this.state.content === 'authentication') {
            content = <Authentication submit={this.handleSubmit} />;
        }
        if (this.state.content === 'entepreneur') {
            content = <Entepreneur />;
        }

        return (
            <div className="App">
                <MuiThemeProvider>
                    <p>Some header</p>
                    {content}
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
