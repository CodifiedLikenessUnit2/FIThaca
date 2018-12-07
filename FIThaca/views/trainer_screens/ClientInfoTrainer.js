import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/styles';

export default class ClientInfoScreenTrainer extends React.Component {
    static navigationOptions = {
        title: 'Client Info',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Client Info Trainer</Text>
            	<Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
            </View>
        );
    }
}
