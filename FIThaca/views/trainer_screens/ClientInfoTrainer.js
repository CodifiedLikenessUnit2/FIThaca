import React from 'react';
import { View, Text } from 'react-native';
import trainerNav from '../..views/Trainer.js';
import ClientStack from '../..views/Trainer.js';
import SessionStack from '../..views/Trainer.js';
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
            
			<Button
          title="Get Info"
          onPress={() => ()}
        />
            </View>
        );
    }
}
