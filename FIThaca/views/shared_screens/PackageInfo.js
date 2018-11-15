import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class PackageInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Package Info',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Package Info</Text>
            </View>
        );
    }
}