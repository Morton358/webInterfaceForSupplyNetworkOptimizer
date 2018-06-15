export const entepreneur = {
    addNewForm: {
        country: {
            elementType: 'select',
            elementConfig: {
                select: true,
                required: true,
                margin: 'normal',
                disabled: true,
                options: [
                    { value: 'Poland', displayValue: 'Poland' }
                ]
            },
            value: 'Poland',
            label: 'Country:',
            validation: {},
            valid: true
        },
        city: {
            elementType: 'input',
            elementConfig: {
                autoFocus: true,
                required: true,
                type: 'text',
                placeholder: 'Warsaw'
            },
            value: '',
            label: 'City:',
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
                required: true,
                type: 'text',
                placeholder: 'Mickiewicza'
            },
            value: '',
            label: 'Street',
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
                required: true,
                type: 'text',
                placeholder: '54'
            },
            value: '',
            label: 'Number Of Building:',
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
                required: true,
                type: 'number',
                placeholder: '51211'
            },
            value: '',
            label: 'ZIP Code:',
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
            elementType: 'radio',
            elementConfig: {
                type: 'radio',
                name: 'preferContact'
            },
            value: 'phone',
            label: 'Prefer Phone For Contact:',
            validation: {},
            valid: true,
            touched: false
        },
        preferedEmail: {
            elementType: 'radio',
            elementConfig: {
                type: 'radio',
                name: 'preferContact'
            },
            value: 'email',
            label: 'Prefer Email For Contact:',
            validation: {},
            valid: true,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'email',
                placeholder: 'hortex@hortex.pl'
            },
            value: '',
            label: 'E-Mail:',
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
                required: true,
                type: 'number',
                placeholder: '722342892'
            },
            value: '',
            label: 'Phone Number:',
            validation: {
                required: true,
                minLength: 9,
                maxLength: 9,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        Gr: {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'number',
                placeholder: '300',
                helperText: 'Please enter amount between 10 and 999'
            },
            value: '',
            label: 'Production Capacity Of Plant per month: (thous. l.)',
            validation: {
                required: true,
                minValue: 10,
                maxValue: 999,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        Zr: {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'number',
                placeholder: '0',
                helperText: 'Please enter amount between 0 and 99999',
            },
            value: '',
            label: 'Available quantity of raw material at the plant: (kg.)',
            validation: {
                required: true,
                minValue: 0,
                maxValue: 99999,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        Vr: {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'number',
                placeholder: '2.5',
                helperText: 'Please enter amount between 1.0 and 10.0',
            },
            value: '',
            label: 'Kilograms of raw material for producing the 1l. of product',
            validation: {
                required: true,
                minValue: 1.0,
                maxValue: 10.0,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        Jr: {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'number',
                placeholder: '1.2',
                helperText: 'Please enter amount between 0.1 and 6.0',
            },
            value: '',
            label: 'Cost of producing product per unit (zł.)',
            validation: {
                required: true,
                minValue: 0.1,
                maxValue: 6.0,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        Sr: {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'number',
                placeholder: '3500',
                helperText: 'Please enter amount between 0 and 9999',
            },
            value: '',
            label: 'Start-up costs for the production at the plant (zł.)',
            validation: {
                required: true,
                minValue: 0,
                maxValue: 9999,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        Yr: {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'number',
                placeholder: '0',
                helperText: 'Please enter amount between 0 and 99999',
            },
            value: '',
            label: 'Available quantity of product (l.)',
            validation: {
                required: true,
                minValue: 0,
                maxValue: 9999,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
    },
    formIsValid: false,
    activeStep: 0,
    activeInputs: [
        [
            'country',
            'city',
            'street',
            'building',
            'zipCode',
            'preferedPhone',
            'preferedEmail'
        ],
        ['Gr', 'Zr', 'Vr', 'Jr', 'Sr', 'Yr'],
        []
    ],
    countFarmers: null,
    countClients: null,
    countFactories: null,
    error: null,
    errorOccured: false,
    loading: false
};
