import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Button } from 'react-native';

import styles from '../../styles/styles';

export default class ClientListScreen extends React.Component {
    static navigationOptions = {
        title: 'Clients',
    };

    constructor(props) {
        super(props);

        //get list from database
        this.state = {clients: [
            {key: '1', name: 'client_one'},
            {key: '2', name: 'client_two'},
            {key: '3', name: 'client_three'},
            {key: '4', name: 'client_four'},
            {key: '5', name: 'client_five'}
        ]};

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updateList
        );
    }

    _updateList = () => {
        //fetch data from database
    }

    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('ClientInfoA', {name: data.item.name})} underlayColor="blue">
		            <Text style={styles.row}>{data.item.name}</Text>
		        </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.clients} renderItem={this._renderItem}/>
                <Button title='Add Client' onPress={() => this.props.navigation.navigate('AddClient')}/>
            </View>
        );
    }
}
