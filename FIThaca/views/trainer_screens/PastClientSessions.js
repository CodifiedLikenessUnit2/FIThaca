import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/styles';

export default class PastClientSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Sessions'
    };

	constructor(props){
        super(props);
    
        //So the thing with this is that this gets all the session history for one client using the database
        this.state = {PastSessions: [
            {key: '1', time: 'Some random time'},
            {key: '2', time: 'Some random time'},
            {key: '3', time: 'Some random time'},
            {key: '4', time: 'Some random time'},
            {key: '5', time: 'Some random time'},
            {key: '6', time: 'Some random time'},
            {key: '7', time: 'Some random time'},
            {key: '8', time: 'Some random time'},
        ]};
    }


    render() {
        return (
            <View style={styles.container}>
              <Text>Past Client Sessions</Text>
              <Button
                title="Go Back"
                onPress={() => this.props.navigation.goBack()}
                />
              <Text>Past Sessions</Text>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('TraingerInfo', {name: PastSessions.item.client})} underlayColor="blue">
                <Text style={styles.row}>{data.item.time}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
    
