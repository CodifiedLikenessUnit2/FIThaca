import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';

//This returns a list of past sessions that the trainer had with a given client
export default class PastClientSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Sessions'
    };

	constructor(props){
        super(props);

        const name = this.props.navigation.getParam('name', 'NO-NAME');

        this.state = {
            userID: name,
            isLoading: true,
        };
    }

    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

	 //get a trainer/admin’s past sessions with a specific client from the database
	//needs userID, clientID
	//returns clientName, time
      var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getClientPastSessions.php'
      var data = {userID: 4, ClientID: 4};

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

	//This is the thing that is needed to render information for the Flatlist
    _renderItem = data => {
        return (
            <View>
                <Text style={styles.row}>{data.item.clientName}{'\n'}{data.item.time}</Text>
            </View>
        );
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>Past Sessions</Text>
                <FlatList style={styles.list} data={this.state.dataSource} renderItem={this._renderItem} keyExtractor={({time}, index) => time}/>
            </View>
        );
    }
}
