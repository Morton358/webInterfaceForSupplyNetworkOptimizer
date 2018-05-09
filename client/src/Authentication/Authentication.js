import React, { Component } from 'react';
import './Authentication.css';
import { Tabs, Tab } from 'material-ui/Tabs';
import LogInField from './LogInField';
import RegisterField from './RegisterField';

class Authentication extends Component {
    state = {
        value: 'a'
    };

    handleChange = value => {
        this.setState({
            value: value
        });
    };

    render() {
        return (
            <Tabs
                className="Authentication"
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Log In" value="a">
                    <div>
                        <h2 className="AuthenticationHeadline">
                            Existing Users:
                        </h2>
                        <LogInField submit={this.props.submit} />
                    </div>
                </Tab>
                <Tab label="Register" value="b">
                    <div>
                        <h2 className="AuthenticationHeadline">New Users:</h2>
                        <RegisterField submit={this.props.submit} />
                    </div>
                </Tab>
            </Tabs>
        );
    }
}

export default Authentication;
