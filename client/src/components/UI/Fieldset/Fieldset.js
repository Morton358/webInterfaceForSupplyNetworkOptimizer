import React from 'react';
import Typography from '@material-ui/core/Typography';

import Input from '../../UI/Input/Input';
import styles from './Fieldset.module.css';

const fieldset = props => {
    let form = null;

    const formElementsArray = [];
    for (let key of props.keys) {
        formElementsArray.push({
            id: key,
            config: props.stateOfInputs[key]
        });
    }


    form = (
        <div>
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
                        changed={event => props.handleInput(event, formElem.id)}
                    />
                );
            })}
        </div>
    );
    return (
        <div className={styles.fieldset}>
            <Typography variant="headline" style={{ width: '100%' }}>
                {props.headline}:
            </Typography>
            <br />
            {form}
        </div>
    );
};
export default fieldset;
