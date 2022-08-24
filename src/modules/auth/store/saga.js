import { takeLatest } from 'redux-saga/effects'


function* setUserSaga({ payload }) {
    try {

        //more logic here
        if(payload) {
            localStorage.setItem('RBW5_user', JSON.stringify(payload));
        } else {
            localStorage.setItem('RBW5_user', '');
        }

    } catch(error) {

    }
}

export function* watchDashboard() {
    yield takeLatest('SETUSER', setUserSaga)
}