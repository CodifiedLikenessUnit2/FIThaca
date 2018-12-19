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
            next: 'next_session',
            name: 6,
            isLoading: true,
        };
    }

    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

      var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getUpcomingSessions.php'
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

      myHeaders.append("Content-Type", "application/json");
      }

    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('SessionInfo', {identifier: data.item.session, admin: false})} underlayColor="blue">
                    <Text style={styles.row}>
                        <Text style={styles.row}>{data.item.clientID} {data.item.clientName}</Text>
                    </Text>
                </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Text>Next Session</Text>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('SessionInfo', {identifier: this.state.next.session, admin: false})} underlayColor="blue">
                    <Text style={styles.row}>
                    var number =1;
                    <Text style={styles.row}>{data.number.clientID} {data.number.clientName}</Text>

                    </Text>
                </TouchableHighlight>

                <Text>Upcoming Sessions</Text>
                <FlatList data={this.state.sessions} renderItem={this._renderItem}keyExtractor={({clientID}, index) => clientID}/>

                <Button
                    title="Past Sessions"
                    onPress={() => this.props.navigation.navigate('PastSessions')}
                />

                <Button
                    title="Create a New Session"
                    onPress={() => this.props.navigation.navigate('EditSession')}
                />
            </View>
        );
    }
}
