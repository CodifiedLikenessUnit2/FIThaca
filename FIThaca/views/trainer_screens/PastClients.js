import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight, Alert } from 'react-native';
import styles from '../../styles/styles';

//This will provide a list of clients that the trainer has had previously
export default class PastClientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Clients',
    };
constructor(props){
    super(props);
    this.state = {
        name: 4,
        isLoading: true,
    };
}

componentDidMount(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //get list of a trainer’s past clients from the database
    //needs userID
    //returns clientID, clientName
    const url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getTrainerPastClients.php'
    var data = {userID: this.state.name};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: myHeaders
        })
        .then((response) => response.json())
        .then(responseJson => {
          this.setState({
            dataSource: responseJson
          })
        })
        .catch(error => Alert.alert('Error:'+ error));
    }

//This allows us to render information from the database
_renderItem = data => {
    return (
        <View>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoT', {name: data.item.clientID})} underlayColor="#EDBB00">
                <Text style={styles.row}>{data.item.clientName}</Text>
            </TouchableHighlight>
        </View>
    );
};

render() {
    return (
        <View style={styles.container}>
            <FlatList style={styles.list} data={this.state.dataSource} renderItem={this._renderItem} keyExtractor={({clientID}, index) => clientID}/>
        </View>
        );
    }
}
