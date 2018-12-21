import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight, Alert } from 'react-native';
import styles from '../../styles/styles';

//This gives a list of all the trainer's clients, it will be the second tab on the trainer side
export default class TrainerClientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Clients',
    };
constructor(props){
    super(props);
    const name = this.props.navigation.getParam('name', 'NO-NAME');

   this.state = {
            name: 4,
            isLoading: true,
        };
    }

    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

      //get list of a a trainer’s current clients from the database
      //needs a userID
      //returns clientID, clientName
      var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getTrainerClientList.php'
      var data = {userID: this.state.name};

      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: myHeaders
      }).then(res => res.json())
      .then(responseJson => { this.setState({
         isLoading: false,
         dataSource: responseJson,
        });
          })
      .catch(error => Alert.alert('Error:'+ error));
      }

//This allows us to render the stuff from the Flatlist
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
            <Button title='Past Clients' onPress={() => this.props.navigation.navigate('PastClients')}/>
        </View>
        );
    }
}
