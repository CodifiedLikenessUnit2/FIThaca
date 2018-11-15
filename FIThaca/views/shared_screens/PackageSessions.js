import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class PackageSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Package Sessions',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Package Sessions</Text>
            </View>
        );
    }
}