import { connect } from 'react-redux';
import { startTimer, stopTimer, setTime } from './timer/actions';
import Nap from './Nap';

const mapStateToProps = (state) => {
    let { timeLeft, timeRunning } = state.timer;

    return {
        timeLeft,
        timeRunning
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startTimer: () => dispatch(startTimer()),
        stopTimer: () => dispatch(stopTimer()),
        setTime: time => dispatch(setTime(time))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nap);