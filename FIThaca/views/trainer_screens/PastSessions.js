import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class PastSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Sessions',
    };
constructor(props){
    super(props);
    this.state = {key};
  }

    render() {
        return (
            <View style={styles.container}>  
                <Text>Past Sessions</Text>
            <Button
				title="Go Back"
				onPress={() => this.props.navigation.goBack()}
					/>
				<Text>data</Text>
            </View>
        );
    }
}
