import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';

export default class UpcomingSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Sessions',
    };
    constructor(props){
        super(props);

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
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('SessionInfo', {identifier: data.item.name})} underlayColor="blue">
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
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('SessionInfo', {identifier: this.state.next.session})} underlayColor="blue">
                    <Text style={styles.row}>
                        <Text>next_session.clientName{'\n'}</Text>
                        <Text>next_session.time</Text>
                    </Text>
                </TouchableHighlight>

                <Text>Upcoming Sessions</Text>
                <FlatList data={this.state.sessions} renderItem={this._renderItem}/>

            <Button
				title="Create a New Session"
				onPress={() => this.props.navigation.navigate('EditSession')}
					/>
            </View>
        );
    }
}
