/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/
import { updateObject } from '../../share/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    objective: null,
    primalSol: null,
    transportCostsEachPlant: null,
    productionCostsEachPlant: null,
    error: null,
    errorOccured: false,
    loading: false
};

const solveProblemStart = state => {
    return updateObject(state, { loading: true });
};

const solveProblemSuccess = (state, action) => {
    return updateObject(state, {
        objective: action.objective,
        primalSol: action.primalSol,
        transportCostsEachPlant: action.transportCostsEachPlant,
        productionCostsEachPlant: action.productionCostsEachPlant,
        error: null,
        errorOccured: false,
        loading: false
    });
};

const solveProblemFailed = (state, action) => {
    return updateObject(state, {
        error: action.solveProblemError,
        errorOccured: true,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SOLVE_PROBLEM_START:
            return solveProblemStart(state);
        case actionTypes.SOLVE_PROBLEM_SUCCESS:
            return solveProblemSuccess(state, action);
        case actionTypes.SOLVE_PROBLEM_FAILED:
            return solveProblemFailed(state, action);
        default:
            return state;
    }
};

export default reducer;
