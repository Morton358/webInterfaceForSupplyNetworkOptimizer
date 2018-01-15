import React from 'react';
import './Authentication.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const logInField = (props) => {
  return (
    <div>
      <TextField hintText="Email Field"
        floatingLabelText="Email" type="email"/>
      <br/>
      <TextField hintText="Password Field"
        floatingLabelText="Password" type="password"/>
      <br/>
      <RaisedButton label="Log In" primary={true} fullWidth={true}
        onClick={props.submit}/>
    </div>
  );
}

export default logInField;
