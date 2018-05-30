import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import { checkValidity } from '../../../share/utility';
import { entepreneur } from '../../../assets/forUI/enterpreneur';
import Input from '../../../components/UI/Input/Input';
import styles from './NewPlant.module.css';


class NewPlant extends Component {

    state = {...entepreneur};

    handleAddNew = event => {
        event.preventDefault();
        const formData = {};
        const inputs = this.state.activeInputs.filter(el => {
            return el !== 'preferedPhone' && el !== 'preferedEmail';
        });
        for (let formElemIndentifier of inputs) {
            formData[formElemIndentifier] = this.state.addNewForm[
                formElemIndentifier
            ].value;
        }
        this.props.onAddNew(formData);
    };

    handleInput = (event, inputIdentifier) => {
        const updatedAddNewForm = { ...this.state.addNewForm };
        const updatedFormElem = { ...updatedAddNewForm[inputIdentifier] };
        let updatedActiveInputs = [...this.state.activeInputs];

        if (event.target.value === 'email') {
            updatedActiveInputs = updatedActiveInputs.filter(inp => {
                return inp !== 'phone';
            });
            updatedActiveInputs.push('email');
            updatedFormElem.touched = true;
        } else if (event.target.value === 'phone') {
            updatedActiveInputs = updatedActiveInputs.filter(inp => {
                return inp !== 'email';
            });
            updatedActiveInputs.push('phone');
            updatedFormElem.touched = true;
        } else {
            updatedFormElem.value = event.target.value;
            updatedFormElem.valid = checkValidity(
                updatedFormElem.value,
                updatedFormElem.validation
            );
            updatedFormElem.touched = true;
        }
        updatedAddNewForm[inputIdentifier] = updatedFormElem;

        let formIsValid = true;
        for (let inputIdentifier of updatedActiveInputs) {
            formIsValid =
                updatedAddNewForm[inputIdentifier].valid &&
                formIsValid &&
                (updatedAddNewForm.preferedPhone.touched ||
                    updatedAddNewForm.preferedEmail.touched);
        }

        this.setState({
            addNewForm: updatedAddNewForm,
            activeInputs: updatedActiveInputs,
            formIsValid: formIsValid
        });
    };

    render() {
        const formElementsArray = [];
        for (let key of this.state.activeInputs) {
            formElementsArray.push({
                id: key,
                config: this.state.addNewForm[key]
            });
        }

        let form = (
            <div className={styles.fieldset}>
                <Typography variant="headline" style={{ width: '100%' }}>
                    Address:
                </Typography>
                <br />
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
                <Typography variant="display2"> Add New Plant: </Typography>
                {form}
                <Button
                    disabled={!this.state.formIsValid}
                    variant="raised"
                    color="primary"
                    style={{ backgroundColor: '#7a8ebb' }}
                    fullWidth
                    onClick={this.handleAddNew}
                >
                    Submit
                </Button>
            </div>
        );
    }
}

export default NewPlant;
