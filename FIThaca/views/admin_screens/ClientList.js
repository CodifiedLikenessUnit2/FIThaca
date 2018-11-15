import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class ClientListScreen extends React.Component {
    static navigationOptions = {
        title: 'Clients',
    };

    render() {
        return (
            <View style={styles.container}> 
                <Text>Client List</Text>
            </View>
        );
    }
}