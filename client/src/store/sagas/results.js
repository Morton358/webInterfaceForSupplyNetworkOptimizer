import { put } from 'redux-saga/effects';

import axios from 'axios';
import * as actions from '../actions/index';

export function* solveProblemSaga() {
    yield put(actions.solveProblemStart());
    try {
        const response = yield axios.get('/api/solve');
        const objective = response.data.objective;
        const primalSol = response.data.primalSolutions;
        const transportCostsEachPlant =
            response.data.transportationCostsEachPlant;
        const productionCostsEachPlant = response.data.productionCostsEachPlant;
        const totalCostsEachPlant = transportCostsEachPlant.map(
            (cost, index) => {
                return cost + productionCostsEachPlant[index];
            }
        );
        yield put(
            actions.solveProblemSuccess(
                objective,
                primalSol,
                transportCostsEachPlant,
                productionCostsEachPlant,
                totalCostsEachPlant
            )
        );
    } catch (error) {
        yield put(actions.solveProblemFailed(error));
    }
}
