import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import LogInField from './LogInField';
import RegisterField from './RegisterField';
import './Authentication.css';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class Authentication extends Component {
    state = {
        value: 0
    };

    handleChange = value => {
        this.setState({
            value: value
        });
    };

    render() {
        return (
            <div className={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Tabs
                        className="Authentication"
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
                        <LogInField submit={this.props.submit} />
                    </TabContainer>
                )}
                {this.state.value === 1 && (
                    <TabContainer>
                        <h2 className="AuthenticationHeadline">New Users:</h2>
                        <RegisterField submit={this.props.submit} />
                    </TabContainer>
                )}
            </div>
            // {/* <Tabs
            //     className="Authentication"
            //     value={this.state.value}
            //     onChange={this.handleChange}
            // >
            //     <Tab label="Log In" >
            //         <div>
            //             <h2 className="AuthenticationHeadline">
            //                 Existing Users:
            //             </h2>
            //             <LogInField submit={this.props.submit} />
            //         </div>
            //     </Tab>
            //     <Tab label="Register" value="b">
            //         <div>
            //             <h2 className="AuthenticationHeadline">New Users:</h2>
            //             <RegisterField submit={this.props.submit} />
            //         </div>
            //     </Tab>
            // </Tabs> */}
        );
    }
}

export default Authentication;
