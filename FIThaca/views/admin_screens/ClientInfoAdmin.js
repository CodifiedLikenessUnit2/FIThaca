import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class ClientInfoScreenAdmin extends React.Component {
    static navigationOptions = {
        title: 'Client Info',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Client Info Admin</Text>
            </View>
        );
    }
}