import React from 'react';
import './Authentication.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const logInField = props => {
    return (
        <div>
            <TextField
                hintText="Email Field"
                floatingLabelText="Email"
                type="email"
            />
            <br />
            <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
            />
            <br />
            <Button
                variant="raised"
                color="primary"
                fullWidth
                onClick={props.submit}
            >
                Log In
            </Button>
        </div>
    );
};

export default logInField;
