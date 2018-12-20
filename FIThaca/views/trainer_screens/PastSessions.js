import React from 'react';
import { View, Text, Button, TouchableHighlight, FlatList, Alert} from 'react-native';
import styles from '../../styles/styles';

export default class PastSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Sessions',
    };
    constructor(props){
        super(props);
    
        this.state = {
            name: 6,
            isLoading: true,
        };
    }

    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

      var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getPastSessions.php'
      var data = {userID: 2};

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
                    <Text style={styles.row}>{data.item.clientID} {data.item.clientName}</Text>
                </TouchableHighlight>
            </View>
        );
    };


    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.sessions} renderItem={this._renderItem} keyExtractor={({clientID}, index) => clientID}/>
            </View>
        );
    }
}
