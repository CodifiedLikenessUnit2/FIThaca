import React from 'react';
import { View, Text } from 'react-native';
import trainerNav from '../..views/Trainer.js';
import ClientStack from '../..views/Trainer.js';
import SessionStack from '../..views/Trainer.js';
import styles from '../../styles/styles';

export default class PastClientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Clients',
    };
constructor(props){
    super(props);
    this.state = {key};
  }

    render() {
        return (
            <View style={styles.container}>  
                <Text>Past Clients</Text>
            <Text>this.state.data</Text>
            <Button
          title="Go to Client Session Screen"
          onPress={() => this.props.navigation.navigate('PastClients',{key:""})}
        />
		<Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
            </View>
        );
    }
}
