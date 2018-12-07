import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/styles';

export default class PastClientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Clients',
    };
constructor(props){
    super(props);
    this.state = {};
  }

    render() {
        return (
            <View style={styles.container}>
                <Text>Past Clients</Text>
            <Text>{this.state.data}</Text>
            <Button
          title="Go to Client Session Screen"
          onPress={() => this.props.navigation.navigate('PastClients')}
        />
		<Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
            </View>
        );
    }
}
