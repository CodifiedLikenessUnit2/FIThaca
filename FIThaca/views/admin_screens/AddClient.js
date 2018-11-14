import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class AddClientScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Client',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Add Client</Text>
            </View>
        );
    }
}