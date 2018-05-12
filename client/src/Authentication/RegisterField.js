import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Button from 'material-ui/Button';

class RegisterField extends Component {
    state = {
        typeOfUser: 'entepreneur'
    };

    handleClickMenuItem = (event, user) => this.setState({ typeOfUser: user });

    render() {
        return (
            <div className={{ display: 'flex' }}>
                <MenuList>
                    <MenuItem onClick={this.handleClickMenuItem('farmer')}>
                        Farmer
                    </MenuItem>
                    <MenuItem onClick={this.handleClickMenuItem('entepreneur')}>
                        Entepreneur
                    </MenuItem>
                    <MenuItem onClick={this.handleClickMenuItem('client')}>
                        Client
                    </MenuItem>
                </MenuList>
                {/* <SelectField
                    floatingLabelText="Choose your role:"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={1} primaryText="Farmer" />
                    <MenuItem value={2} primaryText="Entepreneur" />
                    <MenuItem value={3} primaryText="Client" />
                </SelectField> */}
                <br />
                <TextField
                    hintText="First Name"
                    floatingLabelText="First Name"
                    type="text"
                />
                <br />
                <TextField
                    hintText="Last Name"
                    floatingLabelText="Last Name"
                    type="text"
                />
                <br />
                <TextField
                    hintText="Organization"
                    floatingLabelText="Organization"
                />
                <br />
                <TextField
                    hintText="Email Field"
                    floatingLabelText="Email"
                    required
                    type="email"
                />
                <br />
                <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    required
                    type="password"
                />
                <br />
                <TextField
                    hintText="Confirm Password Field"
                    floatingLabelText="Confirm Password"
                    required
                    type="password"
                />
                <Button
                    variant="raised"
                    color="primary"
                    fullWidth
                    onClick={this.props.submit}
                >
                    Register
                </Button>
            </div>
        );
    }
}

export default RegisterField;
