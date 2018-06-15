import { takeEvery } from 'redux-saga/effects';

import { solveProblemSaga } from './results';
// import { getClientsAndFarmersSaga } from './newPlant';
import { getInitialStateSaga } from './newPlant';
import * as actionTypes from '../actions/actionTypes';

export function* watchApp() {
    yield takeEvery(actionTypes.SOLVE_PROBLEM_INITIAL, solveProblemSaga);
    yield takeEvery(actionTypes.GET_INITIAL_STATE_INITIAL, getInitialStateSaga)
    // yield takeEvery(
    //     actionTypes.GET_CLIENTS_AND_FARMERS_INITIAL,
    //     getClientsAndFarmersSaga
    // );
}
