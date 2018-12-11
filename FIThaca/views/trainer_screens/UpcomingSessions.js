import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';

export default class UpcomingSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Sessions',
    };
    constructor(props){
        super(props);

        //this may have to be adjusted based on the database but right now it assumes that the sessions contain session identifiers of some sort
        //and you would grab the client name and time of the session based on that identifier
        //it's kind of a mess right now 
        this.state = {
            next: 'next_session',
            sessions: [
                {key: '1', session: 'session_one'},
                {key: '2', session: 'session_two'},
                {key: '3', session: 'session_three'},
                {key: '4', session: 'session_four'},
                {key: '5', session: 'session_five'} 
            ],
        };
    }

    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('SessionInfo', {identifier: data.item.session, admin: false})} underlayColor="blue">
                    <Text style={styles.row}>
                        <Text>data.item.client{'\n'}</Text>
                        <Text>data.item.time</Text>
                    </Text>
                </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Text>Next Session</Text>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('SessionInfo', {identifier: this.state.next.session, admin: false})} underlayColor="blue">
                    <Text style={styles.row}>
                        <Text>next_session.clientName{'\n'}</Text>
                        <Text>next_session.time</Text>
                    </Text>
                </TouchableHighlight>

                <Text>Upcoming Sessions</Text>
                <FlatList data={this.state.sessions} renderItem={this._renderItem}/>

                <Button
                    title="Past Sessions"
                    onPress={() => this.props.navigation.navigate('PastSessions')}
                />

                <Button
                    title="Create a New Session"
                    onPress={() => this.props.navigation.navigate('EditSession')}
                />
            </View>
        );
    }
}
