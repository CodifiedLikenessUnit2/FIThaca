import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class ReportsScreen extends React.Component {
    static navigationOptions = {
        title: 'Reports',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Reports</Text>
            </View>
        );
    }
}