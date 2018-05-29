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
    }
});

class LogInField extends Component {
    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container}>
                <TextField
                    className={classes.item}
                    fullWidth
                    id="email_field"
                    label="Email"
                    placeholder="something@something.com"
                    required
                    type="email"
                />
                <TextField
                    className={classes.item}
                    fullWidth
                    id="password_field"
                    label="Password"
                    required
                    type="password"
                />
                <Button
                    className={classes.item}
                    color="primary"
                    style={{backgroundColor: '#7a8ebb'}}
                    fullWidth
                    onClick={this.props.submit}
                    variant="raised"
                >
                    Log In
                </Button>
            </form>
        );
    }
}

LogInField.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogInField);
