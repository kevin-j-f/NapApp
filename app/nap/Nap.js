import React, { Component } from 'react';
import { View } from 'react-native';
import NapButton from '../global/nap-button/NapButton';
import NapText from '../global/nap-text/NapText';
import globalStyles from '../styles';

class Nap extends Component {
    constructor() {
        super();

        this.startNap = this.startNap.bind(this);
    }
    addTime(time) {
        let { setTime } = this.props;
        setTime(time);
    }
    startNap() {
        let { startTimer } = this.props;
        startTimer();
    }
    render() {
        let { timeLeft } = this.props;

        return (
            <View style={ globalStyles.container }>
                <NapText header={ true }>
                    Nap Time!
                </NapText>
                <NapText>
                    { timeLeft }
                </NapText>
                <NapButton 
                    accessibilityLabel={ 'Add 5 minutes to nap' }
                    onPress={ this.addTime.bind(this, 5) }
                    title={ '5 Minutes' } />
                <NapButton
                    accessibilityLabel={ 'Start the timer and your nap' }
                    onPress={ this.startNap }
                    title={ 'Start nap!' }
                    type={ 'primary' } />
            </View>
        );
    }
}

export default Nap;