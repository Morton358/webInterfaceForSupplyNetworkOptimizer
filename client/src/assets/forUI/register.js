export const register = {
    registerForm: {
        user: {
            elementType: 'select',
            elementConfig: {
                autoFocus: true,
                options: [
                    { value: 'entepreneur', displayValue: 'Entepreneur' },
                    { value: 'farmer', displayValue: 'Farmer' },
                    { value: 'client', displayValue: 'Client' }
                ]
            },
            value: 'entepreneur',
            validation: {},
            valid: true
        },
        first_name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your First Name'
            },
            value: '',
            validation: {
                required: true,
                isText: true
            },
            valid: false,
            touched: false
        },
        last_name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Last Name'
            },
            value: '',
            validation: {
                required: true,
                isText: true
            },
            valid: false,
            touched: false
        },
        organization: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Name Of Your Organization'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
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
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Your Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
                maxLength: 24
            },
            valid: false,
            touched: false
        },
        confirm_password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Confirm Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
                maxLength: 24
            },
            valid: false,
            touched: false
        },
    },
    formIsValid: false
};
