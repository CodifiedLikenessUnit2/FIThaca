import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Button, Alert } from 'react-native';

import styles from '../../styles/styles';

//This gives detailed information about an individual client including personal information, their package information, and who's training them
export default class ClientInfoScreenAdmin extends React.Component {
    static navigationOptions = {
        title: 'Client Info',
    };

    constructor(props) {
        super(props);

        const clientId = this.props.navigation.getParam('id', 'NO-ID');

        //query database for actual client information
        this.state = {
            id: clientId,
            client: {},
            current_package: {},
            past_packages: []
        };

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updatePackages
        );
    }

    _updatePackages = () => {
        //get packages from database
        var postHeaders = new Headers();
        postHeaders.append("Content-Type", "application/json");
	    
	    //get client information from the database
	    //needs clientID
	    //returns clientName, contactInfo, clientType, currPackage, time, name
	    //’name’ refers to the name of the trainer 
        var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/adminGetClient.php';
        var data = {clientID: this.state.id};

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: postHeaders,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ client: responseJson[0] });
            console.log(this.state.id);
            console.log(this.state.client);

            if (this.state.client.currPackage == null) {
                this.setState({ current_package: {type:'No'} });
                return;
            }

		//gets package info from the database
		//needs currPackage
		//returns clientName, type, numSessionsLeft
            url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/packageInfo.php';
            var data = {currPackage: this.state.client.currPackage};

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: postHeaders,
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ current_package: responseJson[0],});
            })
            .catch((error) =>{
                Alert.alert('Error:'+ error);
            });
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        });
    }

    //Allows the flatlist to render information from the database
    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('PackageInfo', {id: data.item.clientID})} underlayColor="#EDBB00">
		            <Text style={styles.row}>{data.item.id}</Text>
		        </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.contentHeader}>{this.state.client.clientName}</Text>
              <Text style={styles.text}>{this.state.client.clientType}</Text>
              <Text style={styles.text}>{this.state.client.contactInfo}</Text>

              <Text style={styles.contentHeader}>Current Package:</Text>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('PackageInfo', {id: this.state.client.currPackage})} underlayColor="#EDBB00">
                  <Text style={styles.text}>{this.state.current_package.type} Sessions</Text>
              </TouchableHighlight>
              <FlatList style={styles.list} data={this.state.past_packages} renderItem={this._renderItem}/>
              <Button title='Add Package' onPress={()=>this.props.navigation.navigate('AddPackage', {client: this.state.client.clientName, id: this.state.id})}/>
          </View>
        );
    }
}
