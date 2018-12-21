import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Alert } from 'react-native';

import styles from '../../styles/styles';

//This is used only on the admin side. We initially planned to give the trainer access to package information, but then had to change course
//For now, it's best for the trainer not to control packages, but that could change in the future. For that reason, we didn't want to mess with its location because 
export default class PackageSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Package Sessions',
    };

    constructor(props) {
        super(props);

        const id = this.props.navigation.getParam('id', 'NO-ID');

	this.state = {
            id: id,
            sessions: []
        };

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updatePackages
        );
    }

        //get packages from database
    _updatePackages = () => {
        var postHeaders = new Headers();
        postHeaders.append("Content-Type", "application/json");
	    
	 //get sessions in a specific package from the database
	//needs packageID
	//returns clientName, sessionID, time
        var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/packageSessions.php';
        var data = {packageID: this.state.id};

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: postHeaders,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ sessions: responseJson });
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        });

    }

    //This allows us to render information in the Flatlist
    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('SessionInfo', {id: data.item.sessionID, admin: true})} underlayColor="#EDBB00">
		            <Text style={styles.row}>{data.item.time}</Text>
		        </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list} data={this.state.sessions} renderItem={this._renderItem} keyExtractor={({sessionID}, index) => sessionID}/>
            </View>
        );
    }
}
