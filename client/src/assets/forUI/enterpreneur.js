export const entepreneur = {
    addNewForm: {
        country: {
            elementType: 'select',
            elementConfig: {
                disabled: true,
                options: [{ value: 'Poland', displayValue: 'Poland' }]
            },
            value: 'Poland',
            validation: {},
            valid: true
        },
        city: {
            elementType: 'input',
            elementConfig: {
                autoFocus: true,
                type: 'text',
                placeholder: 'Your City'
            },
            value: '',
            validation: {
                required: true,
                isText: true
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true,
                isText: true
            },
            valid: false,
            touched: false
        },
        building: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Number Of Building'
            },
            value: '',
            validation: {
                required: true,
                minLength: 1,
                maxLength: 4
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        preferedPhone: {
            elementType: 'input',
            elementConfig: {
                type: 'radio',
                name: 'preferContact'
            },
            value: 'phone',
            label: 'Prefer Phone For Contact',
            validation: {},
            valid: true,
            touched: false
        },
        preferedEmail: {
            elementType: 'input',
            elementConfig: {
                type: 'radio',
                name: 'preferContact'
            },
            value: 'email',
            label: 'Prefer Email For Contact',
            validation: {},
            valid: true,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        phone: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Your Phone Number'
            },
            value: '',
            validation: {
                required: true,
                minLength: 9,
                maxLength: 9,
                isNumeric: true
            },
            valid: false,
            touched: false
        }
    },
    formIsValid: false,
    activeInputs: [
        'country',
        'city',
        'street',
        'building',
        'zipCode',
        'preferedPhone',
        'preferedEmail'
    ]
};
