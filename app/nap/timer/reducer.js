import createReducer from '../../util/createReducer';
import {
    START_TIMER,
    STOP_TIMER,
    SET_TIME,
    TICK
} from './actions';

const INITIAL_STATE = {
    timeRunning: false,
    timeLeft: 0
};

const startTimer = (state, action) => {
    return {
        ...state,
        timeRunning: action.timeRunning
    };
};

const stopTimer = (state, action) => {
    return {
        ...state,
        timeRunning: action.timeRunning
    };
};

const setTime = (state, action) => {
    return {
        ...state,
        timeLeft: action.timeLeft
    };
};

const tick = (state, action) => {
    return {
        ...state,
        timeLeft: action.timeLeft - 1
    };
};

const timerReducer = createReducer(INITIAL_STATE, {
    START_TIMER: startTimer,
    STOP_TIMER: stopTimer,
    SET_TIME: setTime
});

export default timerReducer;