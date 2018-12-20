import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';

export default class UpcomingSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Sessions',
    };
    constructor(props){
        super(props);

        //this may have to be adjusted based on the database but right now it assumes that the sessions contain session identifiers of some sort
        //and you would grab the client name and time of the session based on that identifier
        //it's kind of a mess right now 
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount(){
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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

    _renderItem = data => {
        var str = data.item.time;
        str=str.slice(0, -3);
                    var time = str.toString();
                    time=time.substring(10);
                    str=str.slice(0, -5);
                


                    
                   
        return (
            <View>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoT', {name: data.item.clientName})} underlayColor="blue">
                    <Text style={styles.row}>{data.item.clientName}                             {str} at {time}</Text>
                </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>

                <Text>Upcoming Sessions</Text>
                <FlatList data={this.state.dataSource} renderItem={this._renderItem} keyExtractor={({time}, index) => time}/>

                <Button
                    title="Past Sessions"
                    onPress={() => this.props.navigation.navigate('PastSessions')}
                />
            </View>
        );
    }
}
