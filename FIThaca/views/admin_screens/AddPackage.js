import React from 'react';
import { View, Text, Picker, Alert, Button, TextInput, FlatList } from 'react-native';

import styles from '../../styles/styles';

export default class AddPackageScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Package',
    };

    constructor(props) {
        super(props);

        const id = this.props.navigation.getParam('id', 'NO-ID');
        const client = this.props.navigation.getParam('client', 'NO-CLIENT');

        this.state = {
            id: id,
            client: client,
            type: '',
            userID: '',

            //these lists should come from the database
            trainers: [],
        }

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updateList
        );
    }

    _updateList = () => {
        //fetch data from database
        return fetch('http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getAllTrainers.php')
        .then((response) => response.json()) 
        .then((responseJson) => {
            this.setState({ trainers: responseJson }, function(){}); 
        }) 
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        });  
    }

    _renderItem = data => {
        return (
            <View>
		        <Text style={styles.row}>{data.item.name}, ID: {data.item.userID}</Text>
            </View>
        );
    };

    _addPackage = () => {
        //add package to database
        if (this.state.userID == '' || this.state.type == ''){
            Alert.alert("Please fill out all fields");
            return;
        }
        else {
            var postHeaders = new Headers(); 
            postHeaders.append("Content-Type", "application/json");
            var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/newPackage.php';
            var data = {type: this.state.type, userID: this.state.userID}
    
            fetch(url, {
                method: 'POST', 
                body: JSON.stringify(data),
                headers: postHeaders,
            })
            .then((response) => response.json()) 
            .then((responseJson) => {

                console.log(responseJson[0]);
                console.log(this.state.id);

                var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/theClientToPackageConnection.php';
                var data = {clientID: this.state.id, packageID: responseJson[0]}
        
                fetch(url, {
                    method: 'POST', 
                    body: JSON.stringify(data),
                    headers: postHeaders,
                })
                .then((response) => {
                    Alert.alert('Package Added');
                    this.props.navigation.navigate('ClientInfoA', {id: this.state.id});
                })
                .catch((error) =>{
                    Alert.alert('Error:'+ error);
                }); 
            })
            .catch((error) =>{
                Alert.alert('Error:'+ error);
            }); 
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.contentHeader}>Client: {this.state.client} </Text>

                <TextInput style={styles.input} onChangeText={(type) => this.setState({type})} placeholder={'Number of Sessions'}/>

                <Text style={styles.contentHeader}>Choose Trainer</Text>
                <FlatList data={this.state.trainers} renderItem={this._renderItem} keyExtractor={({userID}, index) => userID}/>
                
                <TextInput style={styles.input} onChangeText={(userID) => this.setState({userID})} placeholder={'Trainer ID'}/>
                
                <Button title='Add Package' onPress={this._addPackage}/>
            </View>
        );
    }
}
