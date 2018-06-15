import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


import styles from './Input.module.css';
import { filterObjByKeys } from '../../../share/utility';
/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/

class Input extends Component {

    render() {
        let inputElement = null;
        let selectAttr = {};
        const inputStyles = [styles.InputElement];
        const allowedForSelect = ['autofucus', 'disabled', 'multiple', 'required', 'size', 'select', 'margin', 'helperText', 'required'];

        if (this.props.invalid && this.props.shouldValidate && this.props.touched) {
            inputStyles.push(styles.Invalid);
        }
        // if (!this.props.activate) {
        //     inputStyles.push(styles.Deactivate)
        // }

        switch (this.props.elementType) {
            case 'input':
                inputElement = (
                    // <input
                    //     className={inputStyles.join(' ')}
                    //     {...this.props.elementConfig}
                    //     value={this.props.value}
                    //     onChange={this.props.changed}
                    // />
                    <TextField
                        fullWidth
                        error={this.props.invalid && this.props.shouldValidate && this.props.touched}
                        label={this.props.label}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.changed}
                    />
                );
                break;
            case 'textarea':
                inputElement = (
                    <TextField
                        multiline
                        className={inputStyles.join(' ')}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.changed}
                    />
                );
                break;
            case 'radio':
                inputElement = (
                    <React.Fragment>
                        <label className={styles.Label}>{this.props.label}</label>
                        <input
                            className={inputStyles.join(' ')}
                            {...this.props.elementConfig}
                            value={this.props.value}
                            onChange={this.props.changed}
                        />
                    </React.Fragment>
                );
                break;
            case 'select':
                selectAttr = filterObjByKeys(this.props.elementConfig, allowedForSelect)
                inputElement = (
                    <TextField
                        fullWidth
                        error={this.props.invalid && this.props.shouldValidate && this.props.touched}
                        value={this.props.value}
                        label={this.props.label}
                        onChange={this.props.changed}
                        {...selectAttr}
                    >
                        {this.props.elementConfig.options.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.displayValue}
                            </MenuItem>
                        ))}
                    </TextField>
                );
                break;
            default:
                inputElement = (
                    // <input
                    //     className={inputStyles.join(' ')}
                    //     {...this.props.elementConfig}
                    //     value={this.props.value}
                    //     onChange={this.props.changed}
                    // />
                    <TextField
                        fullWidth
                        error={this.props.invalid && this.props.shouldValidate && this.props.touched}
                        label={this.props.label}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.changed}
                    />
                );
        }
        return (
            <div className={styles.Input}>
                {inputElement}
            </div>
        );
    }

}

Input.propTypes = {
    changed: PropTypes.func.isRequired,
    elementConfig: PropTypes.object.isRequired,
    elementType: PropTypes.string.isRequired,
    invalid: PropTypes.bool.isRequired,
    label: PropTypes.string,
    shouldValidate: PropTypes.object.isRequired,
    touched: PropTypes.bool
};

export default Input;
