import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class PastClientSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Sessions',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Past Client Sessions</Text>
            </View>
        );
    }
}