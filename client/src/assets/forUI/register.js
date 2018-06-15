export const register = {
    registerForm: {
        user: {
            elementType: 'select',
            elementConfig: {
                autoFocus: true,
                select: true,
                required: true,
                margin: 'normal',
                options: [
                    { value: 'entepreneur', displayValue: 'Entepreneur' },
                    { value: 'farmer', displayValue: 'Farmer' },
                    { value: 'client', displayValue: 'Client' }
                ]
            },
            value: 'entepreneur',
            label: 'Please Choose Of What Kind Of User You Are:',
            validation: {},
            valid: true
        },
        first_name: {
            elementType: 'input',
            elementConfig: {
                required: true,
                margin: 'normal',
                type: 'text',
                placeholder: 'Georg'
            },
            value: '',
            label: 'Your First Name:',
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
                required: true,
                margin: 'normal',
                type: 'text',
                placeholder: 'Laslo'
            },
            value: '',
            label: 'Your Last Name:',
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
                required: true,
                margin: 'normal',
                type: 'text',
                placeholder: 'Hortex'
            },
            value: '',
            label: 'Name Of Your Organization:',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                required: true,
                margin: 'normal',
                type: 'email',
                placeholder: 'hortex@hortex.pl'
            },
            value: '',
            label: 'Your E-Mail:',
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
                required: true,
                margin: 'normal',
                type: 'password'
            },
            value: '',
            label: 'Your Password',
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
                required: true,
                margin: 'normal',
                type: 'password'
            },
            value: '',
            label: 'Confirm Password:',
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
