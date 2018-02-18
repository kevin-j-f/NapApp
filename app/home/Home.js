import React, { Component } from 'react';
import { View } from 'react-native';
import { withRouter } from 'react-router';
import NapButton from '../global/nap-button/NapButton';
import NapText from '../global/nap-text/NapText';
import globalStyles from '../styles';

class Home extends Component {
    constructor(){
        super();

        this.goToNap = this.goToNap.bind(this);
    }
    goToNap(){
        let { history } = this.props;
        history.push('/nap');
    }
    render(){
        return (
            <View style={ globalStyles.container }>
                <NapText header={ true }>
                    NapApp
                </NapText>
                <NapText>
                    Welcome blah blah blah
                </NapText>
                <NapText>
                    Say hello to the old you
                </NapText>
                <NapButton 
                    accessibilityLabel={ 'Go to nap screen' }
                    onPress={ this.goToNap }
                    title={ 'Continue' }
                    type={ 'primary' } />
            </View>
        );
    }
}

export default withRouter(Home);