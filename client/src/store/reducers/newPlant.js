/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/
import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';
import { entepreneur } from '../../assets/forUI/enterpreneur';

const initialState = { ...entepreneur };

// const getClientsAndFarmersStart = state => {
//     return updateObject(state, { loading: true });
// };

const getInitialStateStart = state => {
    return updateObject(state, { loading: true });
};

const getClientsAndFarmersSuccess = (state, action) => {
    const updatedAddNewForm = { ...state.addNewForm };
    const updatedActiveInputs = [...state.activeInputs];
    let updatedActiveInputsTransportation = [...updatedActiveInputs[2]];
    for (let i = 1; i <= action.countFarmers; i++) {
        const identifier = i.toString() + (action.countFactories + 1);
        updatedActiveInputsTransportation.push(`J'${identifier}`);
        updatedActiveInputsTransportation.push(`M'${identifier}`);
        updatedAddNewForm[`J'${identifier}`] = {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'number',
                placeholder: '3.2',
                helperText: 'Please enter amount between 0.1 and 10.0'
            },
            value: '',
            label: `Cost for transportation raw material from farmer №${i} per 1 kilometr (zł.)`,
            validation: {
                required: true,
                minValue: 0.1,
                maxValue: 10.0,
                isNumeric: true
            },
            valid: false,
            touched: false
        };
        updatedAddNewForm[`M'${identifier}`] = {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'number',
                placeholder: '42',
                helperText: 'Please enter amount between 0 and 500'
            },
            value: '',
            label: `Distance from farmer №${i} to production unit (km.)`,
            validation: {
                required: true,
                minValue: 0,
                maxValue: 500,
                isNumeric: true
            },
            valid: false,
            touched: false
        };
    }
    for (let e = 1; e <= action.countClients; e++) {
        const identifier = (action.countFactories + 1) + e.toString();
        updatedActiveInputsTransportation.push(`J''${identifier}`);
        updatedActiveInputsTransportation.push(`M${identifier}`);
        updatedAddNewForm[`J''${identifier}`] = {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'number',
                placeholder: '1.9',
                helperText: 'Please enter amount between 0.1 and 10.0'
            },
            value: '',
            label: `Cost for transportation product to client №${e} per 1 kilometr (zł.)`,
            validation: {
                required: true,
                minValue: 0.1,
                maxValue: 10.0,
                isNumeric: true
            },
            valid: false,
            touched: false
        };
        updatedAddNewForm[`M${identifier}`] = {
            elementType: 'input',
            elementConfig: {
                required: true,
                type: 'number',
                placeholder: '5',
                helperText: 'Please enter amount between 0 and 200'
            },
            value: '',
            label: `Distance from production unit to client №${e} (km.)`,
            validation: {
                required: true,
                minValue: 0,
                maxValue: 200,
                isNumeric: true
            },
            valid: false,
            touched: false
        };
    }
    updatedActiveInputs[2] = updatedActiveInputsTransportation;
    return updateObject(state, {
        addNewForm: updatedAddNewForm,
        activeInputs: updatedActiveInputs,
        error: null,
        errorOccured: false,
        loading: false
    });
};

const getClientsAndFarmersFailed = (state, action) => {
    return updateObject(state, {
        error: action.getClientsAndFarmersError,
        errorOccured: true,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INITIAL_STATE_START:
            return getInitialStateStart(state);
        case actionTypes.GET_CLIENTS_AND_FARMERS_SUCCESS:
            return getClientsAndFarmersSuccess(state, action);
        case actionTypes.GET_CLIENTS_AND_FARMERS_FAILED:
            return getClientsAndFarmersFailed(state, action);
        // case actionTypes.GET_CLIENTS_AND_FARMERS_START:
        //     return getClientsAndFarmersStart(state);
        // case actionTypes.GET_CLIENTS_AND_FARMERS_SUCCESS:
        //     return getClientsAndFarmersSuccess(state, action);
        // case actionTypes.GET_CLIENTS_AND_FARMERS_FAILED:
        //     return getClientsAndFarmersFailed(state, action);
        default:
            return state;
    }
};

export default reducer;
