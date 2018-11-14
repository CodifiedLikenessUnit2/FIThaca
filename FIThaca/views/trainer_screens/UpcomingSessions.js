import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class UpcomingSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Sessions',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Upcoming Sessions</Text>
            </View>
        );
    }
}