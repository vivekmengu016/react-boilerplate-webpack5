import { combineReducers } from 'redux';

import authReducer from '../modules/auth/store/reducer';
import dashboardReducer from '../modules/dashboard/store/reducer';

const RootReducer = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer
})

export default RootReducer; 