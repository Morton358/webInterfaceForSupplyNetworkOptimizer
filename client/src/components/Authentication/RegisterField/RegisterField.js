import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    item: {
        margin: theme.spacing.unit
    },
    select: {
        width: '100%'
    }
});

class RegisterField extends Component {
    state = {
        typeOfUser: 'entepreneur'
    };

    handleChange = event => {
        const val = event.target.value;
        this.setState({ typeOfUser: val });
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} autoComplete="off">
                <select
                    className={classes.select}
                    value={this.state.typeOfUser}
                    onChange={this.handleChange}
                >
                    <option value="entepreneur">Entepreneur</option>
                    <option value="farmer">Farmer</option>
                    <option value="client">Client</option>
                </select>
                <TextField
                    className={classes.item}
                    fullWidth
                    required
                    id="first_name"
                    label="First Name"
                    placeholder="Ivan"
                    type="text"
                />
                <TextField
                    className={classes.item}
                    fullWidth
                    required
                    id="last_name"
                    label="Last Name"
                    placeholder="Fedorov"
                    type="text"
                />
                <TextField
                    className={classes.item}
                    fullWidth
                    id="organization_name"
                    label="Organization"
                    placeholder="HORTEX"
                    type="text"
                />
                <TextField
                    className={classes.item}
                    fullWidth
                    required
                    id="email"
                    label="Email"
                    placeholder="hortex@hortex.com"
                    type="email"
                />
                <TextField
                    className={classes.item}
                    fullWidth
                    required
                    id="password"
                    label="Password Field"
                    type="password"
                />
                <TextField
                    className={classes.item}
                    fullWidth
                    required
                    id="confirm_password"
                    label="Confirm Password Field"
                    type="password"
                />
                <Button
                    className={classes.item}
                    variant="raised"
                    color="primary"
                    style={{backgroundColor: '#7a8ebb'}}
                    fullWidth
                    onClick={this.props.submit}
                >
                    Register
                </Button>
            </form>
        );
    }
}

RegisterField.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterField);
