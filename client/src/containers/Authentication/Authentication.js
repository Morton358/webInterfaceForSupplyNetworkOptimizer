import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import LogInField from './LogInField/LogInField';
import RegisterField from './RegisterField/RegisterField';
import styles from './Authentication.module.css';


class Authentication extends Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleSubmit = () => {
        this.props.history.push('/entepreneur');
    };

    render() {
        return (
            <div className={styles.root}>
                <Paper elevation={4}>
                    <AppBar style={{backgroundColor: '#7a8ebb'}} position="static">
                        <Tabs
                            className={styles.auth}
                            value={this.state.value}
                            onChange={this.handleChange}
                            fullWidth
                        >
                            <Tab label="Log In" />
                            <Tab label="Register" />
                        </Tabs>
                    </AppBar>
                    {this.state.value === 0 && (
                        <LogInField submit={this.handleSubmit} />
                    )}
                    {this.state.value === 1 && (
                        <RegisterField submit={this.handleSubmit} />
                    )}
                </Paper>
            </div>
        );
    }
}

export default Authentication;
