import { combineReducers } from 'redux';

import timerReducer from './nap/timer/reducer';

const napAppReducer = combineReducers({
    timer: timerReducer
});

export default napAppReducer;