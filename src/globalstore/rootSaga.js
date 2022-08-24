import { all, fork } from 'redux-saga/effects';

import * as authSaga from '../modules/auth/store/saga';
import * as dashboardSaga from '../modules/dashboard/store/saga';

export default function* rootSaga() {
    yield all([
        ...Object.values(authSaga),
        ...Object.values(dashboardSaga)
    ].map(fork))
} 