import { takeLatest } from 'redux-saga/effects'

function* incrementSaga({ payload }) {
    try {
        
        //more logic here

    } catch(error) {

    }
}

export function* watchDashboard() {
    yield takeLatest('INCREMENT', incrementSaga)
}