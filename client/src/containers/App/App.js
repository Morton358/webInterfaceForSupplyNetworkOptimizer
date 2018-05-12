import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import axios from 'axios';

import styles from './App.module.css';
import headerImage from '../../assets/images/header.png';
import footerImage from '../../assets/images/footer.png';
// import Authentication from './Authentication/Authentication.js';
// import Entepreneur from './Entepreneur/Entepreneur';

class App extends Component {
    state = {
        content: 'authentication',
        response: null
    };

    handleSolveProblem = event => {
        event.preventDefault();
        axios.get('/api/solve').then(response => {
            console.log('response from server:', response);
            this.setState({ response: response.data });
        });
    };

    // handleSubmit = event => {// eslint-disable-line
    //     this.setState({ content: 'entepreneur' });
    // };
    render() {
        // let content = null;
        // if (this.state.content === 'authentication') {
        //     content = <Authentication submit={this.handleSubmit} />;
        // }
        // if (this.state.content === 'entepreneur') {
        //     content = <Entepreneur />;
        // }

        let result = null;
        if (this.state.response !== null) {
            result = (
                <Paper elevation={6}>
                    <Typography variant="headline" component="h3">
                        The result of solving this problem is:
                    </Typography>
                    <Typography component="p">
                        Objective is: {this.state.response.objective}
                    </Typography>
                    {/* <Typography component="p">Primal solutions is: {this.state.response.primalSolutions}</Typography> */}
                </Paper>
            );
        }

        return (
            <div className={styles.App}>
                <Grid
                    container
                    spacing={16}
                    direction='column'
                    justify='space-between'
                    alignItems='stretch'
                >
                    <Grid item>
                        <img
                            src={headerImage}
                            className={styles.headerImage}
                            alt="header"
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="raised"
                            color="primary"
                            onClick={this.handleSolveProblem}
                        >
                            Solve Problem
                        </Button>
                        {result}
                    </Grid>
                    <Grid item>
                        <img
                            src={footerImage}
                            className={styles.footerImage}
                            alt="footer"
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
