import React from 'react';
import { View, Text, Button, TouchableHighlight, FlatList, Alert } from 'react-native';
import styles from '../../styles/styles';

//This is the thing that gets the trainer information stored in the database about a given client
export default class ClientInfoScreenTrainer extends React.Component {
    static navigationOptions = {
        title: 'Client Info',
    };

    constructor(props) {
        super(props);

        const name = this.props.navigation.getParam('name', 'NO-NAME');

        this.state = {
            clientID: name,
            renderCheck:false,
            isLoading: true,
        };
    }

    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        //get client information from the database
       //needs clientID
        //returns clientName, contactInfo, clientType, time
            //time was returned to be used as a key for the Flatlist because it needed something unique
        const url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/trainerGetClient.php'
        var data = {clientID: this.state.clientID};

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: myHeaders
            })
            .then((response) => response.json())
            .then(responseJson => {
              this.setState({
                dataSource: responseJson,
              })
            })
            .catch(error => Alert.alert('Error:'+ error));
        }

        //This allows the Flatlist to render information
        _renderItem = data => {
            if(this.state.renderCheck==false){
            return (
                <View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoT', {name: data.item.name})} underlayColor="#EDBB00">
                        <Text style={styles.row2}>Contact Name: {data.item.clientName}</Text>
                    </TouchableHighlight>
                    <Text style={styles.row2}>Client Type: {data.item.clientType}</Text>
                    <Text style={styles.row3}> Contact Info: {data.item.contactInfo}</Text>
                </View>
            );
            }
            this.state.renderCheck=true;
        };

        render() {
            return (
                <View style={styles.container}>
                    <FlatList style={styles.list} data={this.state.dataSource} renderItem={this._renderItem} keyExtractor={({time}, index) => time}/>
    </View>
);
}
}
