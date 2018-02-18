import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';

class NapText extends Component {
    render() {
        let { children, header } = this.props;
        let textStyles = header ? styles.header : styles.default;

        return (
            <Text style={ textStyles }>
                { children }
            </Text>
        );
    }
}

NapText.defaultProps = {
    header: false
};

NapText.propTypes = {
    header: PropTypes.bool
};

export default NapText;