import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class SessionInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Session Info',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Session Info</Text>
            </View>
        );
    }
}