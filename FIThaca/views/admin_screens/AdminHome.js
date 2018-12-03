import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
import styles from '../../styles/styles';

export default class AdminHomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Admin Home',
    };

    render() {
        return (
            <View style={styles.container}> 
                <Text>Home</Text>
                {'\n'}
                {'\n'}
                {'\n'}
                <Text>Welcome</Text>
                {'\n'}
                {'\n'}
                <Button
                     onPress = {this.props.navigation.navigate('Reports')}
                       title = "Reports"
                       color = "blue"
               />

            </View>
        );
    }
}
