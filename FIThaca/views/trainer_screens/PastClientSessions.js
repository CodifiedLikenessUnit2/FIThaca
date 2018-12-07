import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/styles';

export default class PastClientSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Sessions',
    };

	constructor(props){
    super(props);
    this.state = {};
  }

    render() {
        return (
            <View style={styles.container}>
              <Text>Past Client Sessions</Text>
              <Button
                title="Go Back"
                onPress={() => this.props.navigation.goBack()}
                />
              <Text>{this.state.data}</Text>
            </View>
        );
    }
}
