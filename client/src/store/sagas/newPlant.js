import { put } from 'redux-saga/effects';

// import axios from 'axios';
import * as actions from '../actions/index';

export function* getInitialStateSaga() {
    yield put(actions.getInitialStateStart());
    try {
        // const response = yield axios.get('/api/counts');
        const response = {
            data: {
                count_farmers: 3,
                count_clients: 5,
                count_factories: 2
            }
        };
        yield console.log(response);
        const countFarmers = response.data.count_farmers;
        const countClients = response.data.count_clients;
        const countFactories = response.data.count_factories;
        yield put(
            actions.getClientsAndFarmersSuccess(
                countFarmers,
                countClients,
                countFactories
            )
        );
    } catch (error) {
        yield put(actions.getClientsAndFarmersFailed(error));
    }
}

// export function* getClientsAndFarmersSaga() {
//     yield put(actions.getClientsAndFarmersStart());
//     try {
//         const response = yield axios.get('/api/counts');
//         yield console.log(response)
//         const countFarmers = response.data.count_farmers;
//         const countClients = response.data.count_clients;
//         const countFactories = response.data.count_factories;
//         yield put(
//             actions.getClientsAndFarmersSuccess(
//                 countFarmers,
//                 countClients,
//                 countFactories
//             )
//         );
//     } catch (error) {
//         yield put(actions.getClientsAndFarmersFailed(error));
//     }
// }
