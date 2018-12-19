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
      var data = {userID: 2, ClientID: name};

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
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('SessionInfo', {identifier: data.item.session, admin: false})} underlayColor="blue">
                    <Text style={styles.row}>


                    //UPDATE THIS PART WHEN SHE ADDS THE THING IN
                        <Text>{data.item.time}</Text>
                    </Text>
                </TouchableHighlight>
            </View>
        );
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>Past Sessions</Text>
                <FlatList data={this.state.sessions} renderItem={this._renderItem} keyExtractor={({clientID}, index) => clientID}/>
                //ensure this key extractor is configured properly
            </View>
        );
    }
}
    
