import { put } from 'redux-saga/effects';

import axios from 'axios';
import * as actions from '../actions/index';

export function* solveProblemSaga() {
    yield put(actions.solveProblemStart());
    try {
        const response = yield axios.get('/api/solve');
        const objective = response.data.objective;
        const primalSol = response.data.primalSolutions;
        yield put(actions.solveProblemSuccess(objective, primalSol));
    } catch (error) {
        yield put(actions.solveProblemFailed(error));
    }
}
