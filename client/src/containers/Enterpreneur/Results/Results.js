import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

import styles from './Results.module.css';
import withErrorHandler from '../../withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import Plant from '../Plant/Plant';

class Results extends Component {

    componentDidMount() {
        this.props.onSolveProblem();
    }

    render() {
        let result = null;

        if (this.props.loading) {
            result = (
                <center>
                    <CircularProgress size={150} />
                </center>
            );
        }

        if (this.props.objective) {
            result = (
                <Paper elevation={3} className={styles.paper}>
                    <Typography variant="display1" align="left" gutterBottom>
                        Total costs:{' '}
                        {Number(this.props.objective).toFixed(2) + '  zł.'}
                    </Typography>
                    <Typography variant="headline" align="left" gutterBottom>
                        Total costs for transportation is:{' '}
                        {this.props.transportationCostsOfEachPlant.reduce(
                            (acc, cur) => {
                                return Number((acc + cur).toFixed(2));
                            },
                            0
                        ) + '  zł.'}
                    </Typography>
                    <Typography variant="headline" align="left" gutterBottom>
                        Total production costs is:{' '}
                        {this.props.productionCostsOfEachPlant.reduce(
                            (acc, cur) => {
                                return Number((acc + cur).toFixed(2));
                            },
                            0
                        ) + '  zł.'}
                    </Typography>
                    {/* {this.props.primalSolutions.map((primalSolution, index) => {
                            return (
                                <Typography component="p">
                                    Primal solutions №{index}: {primalSolution}
                                </Typography>
                            );
                        })} */}
                    {this.props.totalCostsOfEachPlant.map(
                        (totalCostPlant, index) => {
                            return (
                                <Plant
                                    index={index}
                                    totalCostPlant={totalCostPlant}
                                    productionCost={
                                        this.props.productionCostsOfEachPlant[
                                            index
                                        ]
                                    }
                                    transpCost={
                                        this.props
                                            .transportationCostsOfEachPlant[
                                                index
                                            ]
                                    }
                                />
                            );
                        }
                    )}
                </Paper>
            );
        }
        return (
            <div>
                {result}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        objective: state.objective,
        primalSolutions: state.primalSol,
        transportationCostsOfEachPlant: state.transportCostsEachPlant,
        productionCostsOfEachPlant: state.productionCostsEachPlant,
        totalCostsOfEachPlant: state.totalCostsEachPlant,
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
    withErrorHandler(Results, axios)
);
