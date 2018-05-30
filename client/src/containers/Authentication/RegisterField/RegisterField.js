import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


import { checkValidity } from '../../../share/utility';
import { register } from '../../../assets/forUI/register';
import Input from '../../../components/UI/Input/Input';
import styles from './RegisterFiels.module.css';


class RegisterField extends Component {
    state = { ...register };

    handleRegister = event => {
        event.preventDefault();
        // const formData = {...this.state.registerForm};
        // this.props.onRegister(formData);
        this.props.submit();
    };

    handleInput = (event, inputIdentifier) => {
        const updatedRegisteForm = { ...this.state.registerForm };
        const updatedFormElem = { ...updatedRegisteForm[inputIdentifier] };

        if (inputIdentifier === 'confirm_password') {
            updatedFormElem.value = event.target.value;
            updatedFormElem.valid =
                updatedFormElem.value ===
                this.state.registerForm.password.value
                    ? true
                    : false;
            updatedFormElem.touched = true;
        } else {
            updatedFormElem.value = event.target.value;
            updatedFormElem.valid = checkValidity(
                updatedFormElem.value,
                updatedFormElem.validation
            );
            updatedFormElem.touched = true;
        }

        updatedRegisteForm[inputIdentifier] = updatedFormElem;

        let formIsValid = true;
        for (let inputIdentifier of Object.keys(updatedRegisteForm)) {
            formIsValid =
                updatedRegisteForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            registerForm: updatedRegisteForm,
            formIsValid: formIsValid
        });
    };

    render() {
        const formElementsArray = [];
        for (let key of Object.keys(this.state.registerForm)) {
            formElementsArray.push({
                id: key,
                config: this.state.registerForm[key]
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
                    Please insert your credentials for successfull Registration:{' '}
                </Typography>
                {form}
                <Button
                    disabled={!this.state.formIsValid}
                    variant="raised"
                    color="primary"
                    style={{ backgroundColor: '#7a8ebb' }}
                    fullWidth
                    onClick={this.handleRegister}
                >
                    Register
                </Button>
            </div>
        );
    }
}

export default RegisterField;
