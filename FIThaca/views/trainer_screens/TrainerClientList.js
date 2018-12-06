import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class TrainerClientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Clients',
    };
constructor(props){
    super(props);
    this.state = {key};
  }
    render() {
        return (
            <View style={styles.container}>  
                <Text>Trainer Clients</Text>
                <Text>this.state.data</Text>
				<Button
				title="Go Back"
				onPress={() => this.props.navigation.goBack()}/>
				<Button
          title="Go to Client Session Screen"
          onPress={() => this.props.navigation.navigate(PastClients:{key:""})}
        />
            </View>
        );
    }
}
