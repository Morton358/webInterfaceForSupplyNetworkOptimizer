import * as actionTypes from './actionTypes';

// export const getClientsAndFarmersStart = () => {
//     return {
//         type: actionTypes.GET_CLIENTS_AND_FARMERS_START
//     };
// };

export const getClientsAndFarmersSuccess = (
    countFarmers,
    countClients,
    countFactories
) => {
    return {
        type: actionTypes.GET_CLIENTS_AND_FARMERS_SUCCESS,
        countFarmers: countFarmers,
        countClients: countClients,
        countFactories: countFactories
    };
};

export const getClientsAndFarmersFailed = error => {
    return {
        type: actionTypes.GET_CLIENTS_AND_FARMERS_FAILED,
        getClientsAndFarmersError: error
    };
};

// export const getClientsAndFarmers = () => {
//     return {
//         type: actionTypes.GET_CLIENTS_AND_FARMERS_INITIAL
//     };
// };

export const getInitialStateStart = () => {
    return {
        type: actionTypes.GET_INITIAL_STATE_START
    };
};

// export const getInitialStateSuccess = (
//     countFarmers,
//     countClients,
//     countFactories
// ) => {
//     return {
//         type: actionTypes.GET_CLIENTS_AND_FARMERS_SUCCESS,
//         countFarmers: countFarmers,
//         countClients: countClients,
//         countFactories: countFactories
//     };
// };

// export const getInitialStateFailed = error => {
//     return {
//         type: actionTypes.GET_CLIENTS_AND_FARMERS_FAILED,
//         getClientsAndFarmersError: error
//     };
// };

export const getInitialState = () => {
    return {
        type: actionTypes.GET_INITIAL_STATE_INITIAL
    };
};
