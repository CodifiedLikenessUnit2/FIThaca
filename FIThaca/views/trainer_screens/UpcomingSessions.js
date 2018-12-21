import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';

//This exports the main stuff here
//This page gives the upcoming sessions that the Trainer will have, it includes every client they have sessions with
export default class UpcomingSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Sessions',
    };
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount(){
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
        
    //get a trainer/admin’s upcoming sessions from the database
    //needs userID
    //returns clientID, clientName, time
    const url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getUpcomingSessions.php'
    var data = {userID: 4};

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

//This allows us to render the stuff on the FlatList
    _renderItem = data => {
        var str = data.item.time;
        str=str.slice(0, -3);
                    var time = str.toString();
                    time=time.substring(10);
                    str=str.slice(0, -5);

        return (
            <View>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoT', {name: data.item.clientID})} underlayColor="#EDBB00">
                    <Text style={styles.row}>{data.item.clientName}                             {str} at {time}</Text>
                </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list} data={this.state.dataSource} renderItem={this._renderItem} keyExtractor={({time}, index) => time}/>
                <Button
                    title="Past Sessions"
                    onPress={() => this.props.navigation.navigate('PastSessions')}
                />
            </View>
        );
    }
}
