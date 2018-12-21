import React from 'react';
import { View, Text, Button, TouchableHighlight, FlatList, Alert} from 'react-native';
import styles from '../../styles/styles';

//This is a page that will provide a list of all the previous sessions the trainer had. It includes all clients
export default class PastSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Sessions',
    };
    constructor(props){
        super(props);

        this.state = {
            name: 2,
            isLoading: true,
        };
    }

    componentDidMount(){
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

        //get a trainer/admin’s past sessions from the database
        //needs userID
        //returns clientID, clientName, time
    const url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getPastSessions.php'
    var data = {userID: 2};

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

    //This allows us to render data to the Flatlist
    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoT', {name: data.item.clientID})} underlayColor="#EDBB00">
                    <Text style={styles.row}>{data.item.clientName}{'\n'}{data.item.time}</Text>
                </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list} data={this.state.dataSource} renderItem={this._renderItem} keyExtractor={({time}, index) => time}/>
            </View>
            );
        }
    }
