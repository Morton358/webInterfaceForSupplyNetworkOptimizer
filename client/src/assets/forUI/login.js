export const login = {
    logInForm: {
        email: {
            elementType: 'input',
            elementConfig: {
                required: true,
                margin: 'normal',
                type: 'email',
                placeholder: 'some@some.com'
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
            label: 'Your Password:',
            validation: {
                required: true,
                minLength: 6,
                maxLength: 24
            },
            valid: false,
            touched: false
        }
    },
    formIsValid: false
};
