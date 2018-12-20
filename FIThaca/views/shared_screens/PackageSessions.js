import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Alert } from 'react-native';

import styles from '../../styles/styles';

export default class PackageSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Package Sessions',
    };

    constructor(props) {
        super(props);

        const id = this.props.navigation.getParam('id', 'NO-ID');

        //get list from database
        this.state = {
            id: id,
            sessions: []
        };

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updatePackages
        );
    }

    _updatePackages = () => {
        //get packages from database
        var postHeaders = new Headers();
        postHeaders.append("Content-Type", "application/json");
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
