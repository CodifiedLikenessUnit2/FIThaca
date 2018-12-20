import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight, Alert } from 'react-native';
import styles from '../../styles/styles';

export default class TrainerClientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Clients',
    };
constructor(props){
    super(props);
    //const name = this.props.navigation.getParam('name', 'NO-NAME');

   this.state = {
            name: 6,
            isLoading: true,
        };
    }

    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

      var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getTrainerClientList.php'
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


    /** const willFocusSubscription = this.props.navigation.addListener(
        'willFocus',
        this._updateList
    );
}**/

_updateList = () => {
    //fetch data from database
}

_renderItem = data => {
    return (
        <View>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoT', {name: data.item.clientID})} underlayColor="blue">
                <Text style={styles.row}>{data.item.clientID} {data.item.clientName}</Text>
            </TouchableHighlight>
        </View>
    );
};

render() {
    return (
        <View style={styles.container}>
            <FlatList data={this.state.dataSource} renderItem={this._renderItem} keyExtractor={({clientID}, index) => clientID}/>
            <Button title='Past Clients' onPress={() => this.props.navigation.navigate('PastClients')}/>
        </View>
        );
    }
}
