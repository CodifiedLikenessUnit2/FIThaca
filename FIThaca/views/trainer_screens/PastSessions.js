import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/styles';

export default class PastSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Sessions',
    };
    constructor(props){
        super(props);
    
        this.state = {PastSessions: [
            {key: '1', client: 'Frank', time: 'Some random time'},
            {key: '2', client: 'Harry', time: 'Some random time'},
            {key: '3', client: 'Billy', time: 'Some random time'},
            {key: '4', client: 'Meg', time: 'Some random time'},
            {key: '5', client: 'Pax', time: 'Some random time'},
            {key: '6', client: 'Kate', time: 'Some random time'},
            {key: '7', client: 'Mike', time: 'Some random time'},
            {key: '8', client: 'Ryan', time: 'Some random time'},
        ]};
    }


    render() {
        return (
            <View style={styles.container}>
              <Text>Past  Sessions</Text>
              <Button
                title="Go Back"
                onPress={() => this.props.navigation.goBack()}
                />
              <Text>Past Sessions</Text>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('TraingerInfo', {name: PastSessions.item.client})} underlayColor="blue">
                <Text style={styles.row}>{data.item.client}</Text>
                <Text style={styles.row}>{data.item.time}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
