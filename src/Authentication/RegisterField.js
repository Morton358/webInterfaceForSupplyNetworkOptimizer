import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class RegisterField extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField floatingLabelText="Choose your role:"
          value={this.state.value}
          onChange={this.handleChange}>
           <MenuItem value={1} primaryText="Farmer" />
           <MenuItem value={2} primaryText="Entepreneur" />
           <MenuItem value={3} primaryText="Client" />
         </SelectField>
         <br />
         <TextField hintText="First Name" floatingLabelText="First Name"
           type="text"/>
         <br />
         <TextField hintText="Last Name" floatingLabelText="Last Name"
           type="text"/>
         <br />
         <TextField hintText="Organization" floatingLabelText="Organization"/>
         <br />
         <TextField hintText="Email Field"
           floatingLabelText="Email" required type="email"/>
         <br/>
         <TextField hintText="Password Field"
           floatingLabelText="Password" required type="password"/>
         <br/>
         <TextField hintText="Confirm Password Field"
           floatingLabelText="Confirm Password" required type="password"/>
         <br/>
         <br/>
         <br/>
         <RaisedButton label="Register" primary={true} fullWidth={true}
           onClick={this.props.submit}/>
      </div>
    );
  }

}

export default RegisterField;
