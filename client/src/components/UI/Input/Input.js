import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';
import { filterObjByKeys } from '../../../share/utility';
/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/

class Input extends Component {

    render() {
        let inputElement = null;
        let selectAttr = {};
        const inputStyles = [styles.InputElement];
        const allowedForSelect = ['autofucus', 'disabled', 'multiple', 'required', 'size'];

        if (this.props.invalid && this.props.shouldValidate && this.props.touched) {
            inputStyles.push(styles.Invalid);
        }
        // if (!this.props.activate) {
        //     inputStyles.push(styles.Deactivate)
        // }

        switch (this.props.elementType) {
            case 'input':
                inputElement = (
                    <input
                        className={inputStyles.join(' ')}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.changed}
                    />
                );
                break;
            case 'textarea':
                inputElement = (
                    <textarea
                        className={inputStyles.join(' ')}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.changed}
                    />
                );
                break;
            case 'select':
                selectAttr = filterObjByKeys(this.props.elementConfig, allowedForSelect)
                inputElement = (
                    <select
                        className={inputStyles.join(' ')}
                        value={this.props.value}
                        onChange={this.props.changed}
                        {...selectAttr}
                    >
                        {this.props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
                );
                break;
            default:
                inputElement = (
                    <input
                        className={inputStyles.join(' ')}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.changed}
                    />
                );
        }
        return (
            <div className={styles.Input}>
                <label className={styles.Label}>{this.props.label}</label>
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
