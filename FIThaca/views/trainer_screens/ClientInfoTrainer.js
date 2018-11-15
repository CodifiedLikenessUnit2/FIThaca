import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class ClientInfoScreenTrainer extends React.Component {
    static navigationOptions = {
        title: 'Client Info',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Client Info Trainer</Text>
            </View>
        );
    }
}