import React from 'react';
import { View, Text, TouchableHighlight, FlatList, Button, Alert } from 'react-native';

import styles from '../../styles/styles';

export default class TrainerInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Trainer Info',
    };

    constructor(props) {
        super(props);

        const trainerID = this.props.navigation.getParam('id', 'NO-ID');

        //query database for actual trainer information
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

    _updateClients = () => {
        //get packages from database

        var postHeaders = new Headers(); 
        postHeaders.append("Content-Type", "application/json");
        var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/adminGetUser.php';

        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(this.state.id),
            headers: postHeaders,
        })
        .then((response) => response.json()) 
        .then((responseJson) => {
            this.setState({ trainer: responseJson[0],}); 
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        }); 

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
                <Text style={styles.contentHeader}>{this.state.name}</Text>
                <Text style={styles.text}>{this.state.trainer.name}</Text>
                <Text style={styles.text}>{this.state.trainer.contactInfo}</Text>
                <Text style={styles.text}>{this.state.trainer.username}</Text>
                <Text style={styles.contentHeader}>Current Clients:</Text>
                <FlatList data={this.state.current_clients} renderItem={this._renderItem} keyExtractor={({clientID}, index) => clientID}/>
                <Text style={styles.contentHeader}>Past Clients:</Text>
                <FlatList data={this.state.past_clients} renderItem={this._renderItem} keyExtractor={({clientID}, index) => clientID}/>
            </View>
        );
    }
}
