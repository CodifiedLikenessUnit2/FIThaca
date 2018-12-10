import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/styles';

export default class UpcomingSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Sessions',
    };
constructor(props){
    super(props);

    this.state = {upcomingSessions: [
        {key: '1', client: 'Frank', time: 'Some random time'},
        {key: '2', client: 'Harry', time: 'Some random time'},
        {key: '3', client: 'Billy', time: 'Some random time'},
        {key: '4', client: 'Meg', time: 'Some random time'},
        {key: '5', client: 'Pax', time: 'Some random time'},
        {key: '6', client: 'Kate', time: 'Some random time'},
        {key: '7', client: 'Mike', time: 'Some random time'},
        {key: '8', client: 'Ryan', time: 'Some random time'},
    ],
    PastSessions: [
        {key: '1', client: 'Frank', time: 'Some random time'},
        {key: '2', client: 'Harry', time: 'Some random time'},
        {key: '3', client: 'Billy', time: 'Some random time'},
        {key: '4', client: 'Meg', time: 'Some random time'},
        {key: '5', client: 'Pax', time: 'Some random time'},
        {key: '6', client: 'Kate', time: 'Some random time'},
        {key: '7', client: 'Mike', time: 'Some random time'},
        {key: '8', client: 'Ryan', time: 'Some random time'},
    ]

};
  }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Text>Next Session</Text>

                <Text>Upcoming Sessions</Text>

                //this is coming from the database
                <Text>Name of the next client</Text>
                <Text>Date of the next session</Text>

//this would take from the database
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('TraingerInfo', {name: upcomingSessions.item.client})} underlayColor="blue">
                <Text style={styles.row}>{data.item.client}</Text>
                <Text style={styles.row}>{data.item.time}</Text>
                </TouchableHighlight>

                <Text>Past Sessions</Text>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('TraingerInfo', {name: PastSessions.item.client})} underlayColor="blue">
                <Text style={styles.row}>{data.item.client}</Text>
                <Text style={styles.row}>{data.item.time}</Text>
                </TouchableHighlight>
            <Button
				title="Create a New Session"
				onPress={() => this.props.navigation.navigate('AddEditSession')}
					/>
            </View>
        );
    }
}
