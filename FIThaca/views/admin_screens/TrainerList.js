import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class TrainerListScreen extends React.Component {
    static navigationOptions = {
        title: 'Trainers',
    };

    render() {
        return (
            <View style={styles.container}> 
                <Text>Trainer List</Text>
            </View>
        );
    }
}