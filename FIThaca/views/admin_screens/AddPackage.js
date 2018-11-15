import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class AddPackageScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Package',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Add Package</Text>
            </View>
        );
    }
}