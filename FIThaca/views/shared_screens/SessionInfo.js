import React from 'react';
import { View, Text, Button, TouchableHighlight, Alert } from 'react-native';

import styles from '../../styles/styles';

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

    _updatePackages = () => {
        //get packages from database
        var postHeaders = new Headers(); 
        postHeaders.append("Content-Type", "application/json");
        var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/sessionInfo.php';
        var data = {sessionID: this.state.isAdmin}

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
        if(this.state.isAdmin) {
            return (
                <View style={styles.container}>  
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoA', {id: this.state.client})} underlayColor="blue">
                        <Text>{this.state.session.clientName}</Text>
                    </TouchableHighlight>
                    <Text>Time: {this.state.session.time}</Text>
                    <Text>Status: {this.state.complete}</Text>
                    <Button title='Related Package' onPress={()=>this.props.navigation.navigate('PackageInfo', {identifier: this.state.package})} underlayColor="blue"/>
                </View>
            );
        } else /*trainer is logged in*/ {
            return (
                <View style={styles.container}>  
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoT', {name: this.state.client})}>
                        <Text>{this.state.client}</Text>
                    </TouchableHighlight>
                    <Text>Date: {this.state.date}</Text>
                    <Text>Time: {this.state.time}</Text>
                    <Text>Status: {this.state.status}</Text>
                    <Button title='Related Package' onPress={()=>this.props.navigation.navigate('PackageInfo', {identifier: this.state.package})}/>
                    <Button title='Edit Session' onPress={()=>this.props.navigation.navigate('EditSession', {identifier: this.state.id, existing: true})}/>
                </View>
            );
        }
        
    }
}