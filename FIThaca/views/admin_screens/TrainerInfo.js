import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class TrainerInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Trainer Info',
    };

    render() {
        return (
            <View style={styles.container}> 
                <Text>Trainer Info</Text>
            </View>
        );
    }
}