import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import MobileStepper from '@material-ui/core/MobileStepper';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import axios from 'axios';

import { checkValidity } from '../../../share/utility';
import withErrorHandler from '../../withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
// import { entepreneur } from '../../../assets/forUI/enterpreneur';
import Fieldset from '../../../components/UI/Fieldset/Fieldset';
import styles from './NewPlant.module.css';
/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/

class NewPlant extends Component {
    state = { ...this.props.stateNewPlant };

    componentDidMount() {
        this.props.onGetInitialState();
        // let changeStateTransport = new Promise((resolve) => {
        //     resolve(this.props.onGetClientsAndFarmers())
        // })
        // changeStateTransport
        //     .then(window.setTimeout(this.handleAddTransportInputs, 1000)
        //     .catch(err => console.log(err))
    }

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        });
    };

    handleAddNew = event => {
        event.preventDefault();
        const formData = {};
        const transpInputs = [...this.state.activeInputs[2]];
        const prodInputs = [...this.state.activeInputs[1]];
        const addrInputs = this.state.activeInputs[0].filter(el => {
            return el !== 'preferedPhone' && el !== 'preferedEmail';
        });
        const inputs = prodInputs.concat(addrInputs).concat(transpInputs);
        for (let formElemIndentifier of inputs) {
            formData[formElemIndentifier] = this.state.addNewForm[
                formElemIndentifier
            ].value;
        }
        this.props.onAddNew(formData);
    };

    // handleAddTransportInputs = () => {
    //     const updatedAddNewForm = { ...this.state.addNewForm };
    //     const updatedActiveInputs = [...this.state.activeInputs];
    //     let updatedActiveInputsTransportation = [...updatedActiveInputs[2]];
    //     for (let i = 1; i <= this.props.countFarmers; i++) {
    //         const identifier = i.toString() + (this.props.countFactories + 1);
    //         updatedActiveInputsTransportation.push(`J${identifier}`);
    //         updatedActiveInputsTransportation.push(`M${identifier}`);
    //         updatedAddNewForm[`J${identifier}`] = {
    //             elementType: 'input',
    //             elementConfig: {
    //                 required: true,
    //                 type: 'number',
    //                 placeholder: '3.2',
    //                 helperText: 'Please enter amount between 1.0 and 10.0'
    //             },
    //             value: '',
    //             label: `Cost for transportation raw material from farmer №${i} per 1 kilometr (zł.)`,
    //             validation: {
    //                 required: true,
    //                 minValue: 1.0,
    //                 maxValue: 10.0,
    //                 isNumeric: true
    //             },
    //             valid: false,
    //             touched: false
    //         };
    //         updatedAddNewForm[`M${identifier}`] = {
    //             elementType: 'input',
    //             elementConfig: {
    //                 required: true,
    //                 type: 'number',
    //                 placeholder: '3.2',
    //                 helperText: 'Please enter amount between 0 and 500.0'
    //             },
    //             value: '',
    //             label: `Distance from farmer №${i} to production unit (km.)`,
    //             validation: {
    //                 required: true,
    //                 minValue: 0,
    //                 maxValue: 500.0,
    //                 isNumeric: true
    //             },
    //             valid: false,
    //             touched: false
    //         };
    //     }
    //     updatedActiveInputs[2] = updatedActiveInputsTransportation;
    //     this.setState({
    //         addNewForm: updatedAddNewForm,
    //         activeInputs: updatedActiveInputs
    //     });
    // };

    handleInput = (event, inputIdentifier) => {
        const updatedAddNewForm = { ...this.state.addNewForm };
        const updatedFormElem = { ...updatedAddNewForm[inputIdentifier] };
        const updatedActiveInputs = [...this.state.activeInputs];
        let updatedActiveInputsAddress = [...updatedActiveInputs[0]];

        if (event.target.value === 'email') {
            updatedActiveInputsAddress = updatedActiveInputsAddress.filter(
                inp => {
                    return inp !== 'phone';
                }
            );
            updatedActiveInputsAddress.push('email');
            updatedFormElem.touched = true;
        } else if (event.target.value === 'phone') {
            updatedActiveInputsAddress = updatedActiveInputsAddress.filter(
                inp => {
                    return inp !== 'email';
                }
            );
            updatedActiveInputsAddress.push('phone');
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
        updatedActiveInputs[0] = updatedActiveInputsAddress;

        let formIsValid = true;
        for (const index in updatedActiveInputs) {
            for (let inputIdentifier of updatedActiveInputs[index]) {
                formIsValid =
                    updatedAddNewForm[inputIdentifier].valid &&
                    formIsValid &&
                    (updatedAddNewForm.preferedPhone.touched ||
                        updatedAddNewForm.preferedEmail.touched);
            }
        }

        this.setState({
            addNewForm: updatedAddNewForm,
            activeInputs: updatedActiveInputs,
            formIsValid: formIsValid
        });
    };

    render() {
        let fieldset = null;
        switch (this.state.activeStep) {
            case 0:
                fieldset = (
                    <Fieldset
                        headline="Address"
                        keys={this.state.activeInputs[0]}
                        stateOfInputs={this.state.addNewForm}
                        handleInput={(event, id) => this.handleInput(event, id)}
                    />
                );
                break;
            case 1:
                fieldset = (
                    <Fieldset
                        headline="Production data"
                        keys={this.state.activeInputs[1]}
                        stateOfInputs={this.state.addNewForm}
                        handleInput={(event, id) => this.handleInput(event, id)}
                    />
                );
                break;
            case 2:
                fieldset = (
                    <React.Fragment>
                        <Fieldset
                            headline="Transporatation data"
                            keys={this.state.activeInputs[2]}
                            stateOfInputs={this.state.addNewForm}
                            handleInput={(event, id) =>
                                this.handleInput(event, id)
                            }
                        />
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
                    </React.Fragment>
                );
                break;
            default:
                fieldset = (
                    <Fieldset
                        headline="Address"
                        keys={this.state.activeInputs[0]}
                        stateOfInputs={this.state.addNewForm}
                        handleInput={(event, id) => this.handleInput(event, id)}
                    />
                );
        }

        if (this.props.loading) {
            fieldset = <CircularProgress size={150} />;
        }

        return (
            <div className={styles.container}>
                <Typography variant="display2"> Add New Plant: </Typography>
                <MobileStepper
                    variant="progress"
                    steps={3}
                    position="static"
                    activeStep={this.state.activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={this.handleNext}
                            disabled={this.state.activeStep === 2}
                        >
                            Next
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={this.handleBack}
                            disabled={this.state.activeStep === 0}
                        >
                            Back
                        </Button>
                    }
                />
                <form>{fieldset}</form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stateNewPlant: state.newPlant,
        error: state.newPlant.error,
        errorOccured: state.newPlant.errorOccured,
        loading: state.newPlant.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetInitialState: () => dispatch(actions.getInitialState()),
        // onGetClientsAndFarmers: () => dispatch(actions.getClientsAndFarmers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withErrorHandler(NewPlant, axios)
);
