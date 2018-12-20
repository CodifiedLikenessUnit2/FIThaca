import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Button, Alert } from 'react-native';

import styles from '../../styles/styles';

export default class ClientListScreen extends React.Component {
    static navigationOptions = {
        title: 'Clients',
    };

    constructor(props) {
        super(props);

        //get list from database
        this.state = {clients: []};

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updateList
        );
    }

    _updateList = () => {
        //fetch data from database
        return fetch('http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getAllClients.php')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ clients: responseJson }, function(){});
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        });
    }

    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('ClientInfoA', {id: data.item.clientID})} underlayColor="#EDBB00">
		            <Text style={styles.row}>{data.item.clientName}</Text>
		        </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list} data={this.state.clients} renderItem={this._renderItem} keyExtractor={({clientID}, index) => clientID}/>
                <Button title='Add Client' onPress={() => this.props.navigation.navigate('AddClient')}/>
            </View>
        );
    }
}
