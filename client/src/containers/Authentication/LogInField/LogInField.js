import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import { checkValidity } from '../../../share/utility';
import { login } from '../../../assets/forUI/login';
import Input from '../../../components/UI/Input/Input';
import styles from './LogInField.module.css';


class LogInField extends Component {
    state = { ...login };

    handleLogIn = event => {
        event.preventDefault();
        // const formData = {...this.state.logInForm};
        // this.props.onLogIn(formData);
        this.props.submit();
    };

    handleInput = (event, inputIdentifier) => {
        const updatedLogInForm = { ...this.state.logInForm };
        const updatedFormElem = { ...updatedLogInForm[inputIdentifier] };

        updatedFormElem.value = event.target.value;
        updatedFormElem.valid = checkValidity(
            updatedFormElem.value,
            updatedFormElem.validation
        );
        updatedFormElem.touched = true;

        updatedLogInForm[inputIdentifier] = updatedFormElem;

        let formIsValid = true;
        for (let inputIdentifier of Object.keys(updatedLogInForm)) {
            formIsValid =
                updatedLogInForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            logInForm: updatedLogInForm,
            formIsValid: formIsValid
        });
    };

    render() {
        const formElementsArray = [];
        for (let key of Object.keys(this.state.logInForm)) {
            formElementsArray.push({
                id: key,
                config: this.state.logInForm[key]
            });
        }

        let form = (
            <div className={styles.fieldset}>
                <form>
                    {formElementsArray.map(formElem => {
                        return (
                            <Input
                                key={formElem.id}
                                elementType={formElem.config.elementType}
                                elementConfig={formElem.config.elementConfig}
                                value={formElem.config.value}
                                invalid={!formElem.config.valid}
                                shouldValidate={formElem.config.validation}
                                touched={formElem.config.touched}
                                label={formElem.config.label}
                                changed={event =>
                                    this.handleInput(event, formElem.id)
                                }
                            />
                        );
                    })}
                </form>
            </div>
        );

        if (this.props.loading) {
            form = <CircularProgress size={150} />;
        }

        return (
            <div className={styles.container}>
                <Typography variant="title" color="textSecondary">
                    {' '}
                    Please insert your credentials for successfull Log In:{' '}
                </Typography>
                {form}
                <Button
                    disabled={!this.state.formIsValid}
                    variant="raised"
                    color="primary"
                    style={{ backgroundColor: '#7a8ebb' }}
                    fullWidth
                    onClick={this.handleLogIn}
                >
                    Log In
                </Button>
            </div>
        );
    }
}

export default LogInField;
