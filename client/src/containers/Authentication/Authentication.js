import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import LogInField from '../../components/Authentication/LogInField/LogInField';
import RegisterField from '../../components/Authentication/RegisterField/RegisterField';
import styles from './Authentication.module.css';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

class Authentication extends Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleSubmit = event => {
        event.preventDefault();
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
                        <TabContainer>
                            {' '}
                            <h2 className="AuthenticationHeadline">
                                Existing Users:
                            </h2>
                            <LogInField submit={this.handleSubmit} />
                        </TabContainer>
                    )}
                    {this.state.value === 1 && (
                        <TabContainer>
                            <h2 className="AuthenticationHeadline">
                                New Users:
                            </h2>
                            <RegisterField submit={this.handleSubmit} />
                        </TabContainer>
                    )}
                </Paper>
            </div>
        );
    }
}

export default Authentication;
