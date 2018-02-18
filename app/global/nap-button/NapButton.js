import React, { Component } from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

class NapButton extends Component {
    render(){
        let { accessibilityLabel, disabled, onPress, title, type } = this.props;
        let buttonColor = type === 'primary' ? '008296' : 'aab7b8';

        return(
            <Button 
                accessibilityLabel={ accessibilityLabel }
                color={ `#${buttonColor}` }
                disabled={ disabled }
                onPress={ onPress }
                title={ title } />
        );
    }
}

NapButton.defaultProps = {
    disabled: false,
    path: null
};

NapButton.propTypes = {
    accessibilityLabel: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['', 'primary'])
};

export default NapButton;