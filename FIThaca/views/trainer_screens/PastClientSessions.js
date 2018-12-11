import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';

export default class PastClientSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Sessions'
    };

	constructor(props){
        super(props);

        const name = this.props.navigation.getParam('name', 'NO-NAME');
    
        //So the thing with this is that this gets all the session history for one client using the database
        this.state = {sessions: [
            {key: '1', session: 'session_one'},
            {key: '2', session: 'session_two'},
            {key: '3', session: 'session_three'},
            {key: '4', session: 'session_four'},
            {key: '5', session: 'session_five'} 
        ]};
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
                <Text>Past Sessions</Text>
                <FlatList data={this.state.sessions} renderItem={this._renderItem}/>
            </View>
        );
    }
}
    
