import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class UpcomingSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Sessions',
    };
constructor(props){
    super(props);
    this.state = {key};
  }

    render() {
        return (
            <View style={styles.container}>  
                <Text>Upcoming Sessions</Text>
                <Text>{this.state.data}</Text>
            <Button
				title="Go Back"
				onPress={() => this.props.navigation.goBack()}
					/>
            </View>
        );
    }
}
