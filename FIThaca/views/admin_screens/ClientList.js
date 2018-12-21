import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Button, Alert } from 'react-native';

import styles from '../../styles/styles';

//This provides the admin with a list of all the clients taht are currently recieving some kind of service
export default class ClientListScreen extends React.Component {
    static navigationOptions = {
        title: 'Clients',
    };

    constructor(props) {
        super(props);

        this.state = {clients: []};

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updateList
        );
    }

        //fetch data from database
    _updateList = () => {
	    //get list of all clients from the database 
	   //returns clientID, clientName
        return fetch('http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getAllClients.php')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ clients: responseJson }, function(){});
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        });
    }

    //Allows the flatlist to render each item
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
