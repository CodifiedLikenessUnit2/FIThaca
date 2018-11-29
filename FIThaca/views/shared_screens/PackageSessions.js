import React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';

import styles from '../../styles/styles';

export default class PackageSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Package Sessions',
    };

    constructor(props) {
        super(props);

        //get list from database
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
                <TouchableHighlight onPress={() => this.props.navigation.navigate('SessionInfo', {identifier: data.item.session})} underlayColor="blue">
		            <Text style={styles.row}>{data.item.session}</Text>
		        </TouchableHighlight> 
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>  
                <FlatList data={this.state.sessions} renderItem={this._renderItem}/>
            </View>
        );
    }
}