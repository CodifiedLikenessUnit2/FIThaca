import React from 'react';
import { View, Text, Button, TouchableHighlight, Alert } from 'react-native';

import styles from '../../styles/styles';

//This screen gives the user information about sessions
export default class SessionInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Session Info',
    };

    constructor(props) {
        super(props);

        const session_id = this.props.navigation.getParam('id', 'NO-SESSION');
        const admin = this.props.navigation.getParam('admin', false);

        //query database for actual session information
        this.state = {
            id: session_id,
            session: {},
            complete: 'Not Complete',
            isAdmin: admin
        };

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updatePackages
        );
    }

        //get information from database
    _updatePackages = () => {
        var postHeaders = new Headers();
        postHeaders.append("Content-Type", "application/json");
        
        //get session information from the database
        //needs sessionID
        //returns clientName, name, time, complete
	    //{0 = not complete, 1 = complete}
        var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/sessionInfo.php';
        var data = {sessionID: this.state.id}

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: postHeaders,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ session: responseJson[0] });
            if (this.state.session.complete) {
                this.setState({complete: 'Complete'});
            }
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        });

    }

    render() {
        //We check whether or not the user is an admin or a trainer and then give them the most appropriate information
        if(this.state.isAdmin) {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Client: {this.state.session.clientName}</Text>
                    <Text style={styles.text}>Trainer: {this.state.session.name}</Text>
                    <Text style={styles.text}>Time: {this.state.session.time}</Text>
                    <Text style={styles.text}>Status: {this.state.complete}</Text>
                    <Button title='Related Package' onPress={()=>this.props.navigation.navigate('PackageInfo', {identifier: this.state.package})} underlayColor="#EDBB00"/>
                </View>
            );
        } else /*trainer is logged in*/ {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Client: {this.state.client}</Text>
                    <Text style={styles.text}>Trainer: {this.state.client}</Text>
                    <Text style={styles.text}>Date: {this.state.date}</Text>
                    <Text style={styles.text}>Time: {this.state.time}</Text>
                    <Text style={styles.text}>Status: {this.state.status}</Text>
                    <Button title='Related Package' onPress={()=>this.props.navigation.navigate('PackageInfo', {identifier: this.state.package})}/>
                    <Button title='Edit Session' onPress={()=>this.props.navigation.navigate('EditSession', {identifier: this.state.id, existing: true})}/>
                </View>
            );
        }

    }
}
