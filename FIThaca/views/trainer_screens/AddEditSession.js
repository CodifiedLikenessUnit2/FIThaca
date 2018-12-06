import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/styles';

export default class AddEditSessionScreen extends React.Component {
    static navigationOptions = {
        title: 'Edit Session',
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Add/Edit Session</Text>
            <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
		<Button
          title="Add Session"
          onPress={() => ()}
        />
		<Button
          title="Edit Session"
          onPress={() => ()}
        />
            </View>
        );
    }
}
