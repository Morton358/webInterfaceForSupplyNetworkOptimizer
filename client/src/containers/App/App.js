import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import axios from 'axios';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';

import styles from './App.module.css';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import headerImage from '../../assets/images/header.png';
import footerImage from '../../assets/images/footer.png';
// import Authentication from './Authentication/Authentication.js';
// import Entepreneur from './Entepreneur/Entepreneur';

class App extends Component {
    state = {};

    handleSolveProblem = event => {
        event.preventDefault();
        this.props.onSolveProblem();
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

        if (this.props.loading) {
            result = (
                <center>
                    <CircularProgress size={100} />
                </center>
            );
        }

        if (this.props.objective) {
            result = (
                <Paper elevation={6} className={styles.Paper__resultOfSolving}>
                    <Typography variant="headline" component="h3">
                        The result of solving this problem is:
                    </Typography>
                    <Typography component="p">
                        Objective is: {this.props.objective}
                    </Typography>
                    {this.props.primalSolutions.map((primalSolution, index) => {
                        return (
                            <Typography component="p">
                                Primal solutions №{index}: {primalSolution}
                            </Typography>
                        );
                    })}
                </Paper>
            );
        }

        return (
            <div className={styles.App}>
                <Grid
                    container
                    spacing={16}
                    direction="column"
                    justify="space-between"
                    alignItems="stretch"
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

const mapStateToProps = state => {
    return {
        objective: state.objective,
        primalSolutions: state.primalSol,
        error: state.error,
        errorOccured: state.errorOccured,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSolveProblem: () => dispatch(actions.solveProblem())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withErrorHandler(App, axios)
);
