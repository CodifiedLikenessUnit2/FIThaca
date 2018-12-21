import React from 'react';
import { View, Text, TouchableHighlight, FlatList, Button, Alert } from 'react-native';

import styles from '../../styles/styles';

//This screen provides all the key information about the trainer, including their basic information, past clients, and current clients
//An important note is that when we say "userID" that refers to the trainer id
export default class TrainerInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Trainer Info',
    };

    constructor(props) {
        super(props);

        const trainerID = this.props.navigation.getParam('id', 'NO-ID');

        this.state = {
            id: trainerID,
            trainer: {},
            current_clients: [],
            past_clients: []
        };

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updateClients
        );
    }

        //get packages from database
    _updateClients = () => {

        var postHeaders = new Headers();
        postHeaders.append("Content-Type", "application/json");
	    
	    
	//gets trainer info from the database
	//needs userID (userID is the variable of the trainer identifier)
	//returns name, contactInfo, username
        var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/adminGetUser.php';
        var data= {userID: this.state.id};

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: postHeaders,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ trainer: responseJson[0],});
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        });

	    //get list of a a trainer’s current clients from the database
	    //needs userID (again the trainer id)
	    //returns clientID, clientName
        url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getTrainerClientList.php';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state.id),
            headers: postHeaders,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ current_clients: responseJson,});
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        });

	//get list of a trainer’s past clients from the database
	//needs userID
	//returns clientID, clientName
        url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getTrainerPastClients.php';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state.id),
            headers: postHeaders,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ past_clients: responseJson,});
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        });

    }

    //This renders the information from the database
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
                <Text style={styles.contentHeader}>{this.state.trainer.name}</Text>
                <Text style={styles.text}>{this.state.trainer.contactInfo}</Text>
                <Text style={styles.text}>{this.state.trainer.username}</Text>
                <Text style={styles.contentHeader}>Current Clients:</Text>
                <FlatList style={styles.list} data={this.state.current_clients} renderItem={this._renderItem} keyExtractor={({clientID}, index) => clientID}/>
                <Text style={styles.contentHeader}>Past Clients:</Text>
                <FlatList style={styles.list} data={this.state.past_clients} renderItem={this._renderItem} keyExtractor={({clientID}, index) => clientID}/>
            </View>
        );
    }
}
