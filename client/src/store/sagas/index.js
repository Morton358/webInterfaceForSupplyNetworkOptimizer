import { takeEvery } from 'redux-saga/effects';

import { solveProblemSaga } from './app';
import * as actionTypes from '../actions/actionTypes';

export function* watchApp() {
    yield takeEvery(actionTypes.SOLVE_PROBLEM_INITIAL, solveProblemSaga);
}
