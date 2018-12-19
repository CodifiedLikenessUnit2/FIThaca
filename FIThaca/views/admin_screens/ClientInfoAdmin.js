import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Button } from 'react-native';

import styles from '../../styles/styles';

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
        var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/adminGetClient.php';

        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(this.state.id),
            headers: postHeaders,
        })
        .then((response) => response.json()) 
        .then((responseJson) => {
            this.setState({ client: responseJson[0] }); 


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
                console.error(error); 
            });  
        })
        .catch((error) =>{
            console.error(error); 
        }); 

        

        // url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getTrainerClientList.php';

        // fetch(url, {
        //     method: 'POST', 
        //     body: JSON.stringify(this.state.id),
        //     headers: postHeaders,
        // })
        // .then((response) => response.json()) 
        // .then((responseJson) => {
        //     this.setState({ current_clients: responseJson,}); 
        // })
        // .catch((error) =>{
        //     console.error(error); 
        // });  
        
        // url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getTrainerPastClients.php';

        // fetch(url, {
        //     method: 'POST', 
        //     body: JSON.stringify(this.state.id),
        //     headers: postHeaders,
        // })
        // .then((response) => response.json()) 
        // .then((responseJson) => {
        //     this.setState({ past_clients: responseJson,}); 
        // })
        // .catch((error) =>{
        //     console.error(error); 
        // });   
    }

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
              <Text style={styles.text}>Trainer: {this.state.client.name}</Text>
              <Text style={styles.contentHeader}>Current Package: {'\n'}</Text>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('PackageInfo', {id: this.state.client.currPackage})} underlayColor="#EDBB00">
                  <Text>{this.state.current_package.type} Sessions</Text>
              </TouchableHighlight>
              <FlatList style={{margin: 20}} data={this.state.past_packages} renderItem={this._renderItem}/>
              <Button title='Add Package' onPress={()=>this.props.navigation.navigate('AddPackage', {client: this.state.name})}/>
          </View>
        );
    }
}
