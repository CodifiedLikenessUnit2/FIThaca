import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class AddTrainerScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Trainer',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Add Trainer</Text>
            </View>
        );
    }
}