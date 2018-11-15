import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class PastClientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Clients',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Past Clients</Text>
            </View>
        );
    }
}