import React, { Component } from 'react';
import './Authentication.css';
import RaisedButton from 'material-ui/RaisedButton';

const authentication = () => {
  return (
    <div className="Authentication">
      <RaisedButton label="LogIn" primary={true} className="AuthenticationLogInTab"/>
      <RaisedButton label="Register" primary={true} className="AuthenticationRegisterTab"/>
    </div>
  )
};

export default authentication;
