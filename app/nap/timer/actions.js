const START_TIMER = 'START_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const SET_TIME = 'SET_TIME';
const TICK = 'TICK';

let timer = null;;

const startTimer = () => dispatch => {
    clearInterval(timer);
    timer = setInterval(() => dispatch(tick()), 1000);
    dispatch({ type: START_TIMER, timeRunning: true });
    dispatch(tick());
};

const stopTimer = () => {
    clearInterval(timer);
    return {
        type: STOP_TIMER,
        timeRunning: false
    };
};

const tick = () => { type: TICK };

const setTime = timeLeft => {
    return {
        type: SET_TIME,
        timeLeft
    };
};

export {
    START_TIMER,
    STOP_TIMER,
    SET_TIME,
    TICK,
    startTimer,
    stopTimer,
    setTime,
    tick
};