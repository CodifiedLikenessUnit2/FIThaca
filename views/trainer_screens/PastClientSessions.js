import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';

export default class PastClientSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Sessions'
    };

	constructor(props){
        super(props);

        const name = this.props.navigation.getParam('name', 'NO-NAME');

        //So the thing with this is that this gets all the session history for one client using the database
        this.state = {
            //lientID: name,
            isLoading: true,
        };
    }

    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

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
