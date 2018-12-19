import React from 'react';
import { View, Text, Button, TouchableHighlight, Alert } from 'react-native';

import styles from '../../styles/styles';

export default class PackageInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Package Info',
    };

    constructor(props) {
        super(props);

        const id = this.props.navigation.getParam('id', 'NO-ID');
       
        //query database for actual package information
        this.state = {
            id: id,
            package: {}
        };

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updatePackages
        );
    };

    _updatePackages = () => {
        //get packages from database
        var postHeaders = new Headers(); 
        postHeaders.append("Content-Type", "application/json");
        var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/packageInfo.php';
        var data = {currPackage: this.state.id}

        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: postHeaders,
        })
        .then((response) => response.json()) 
        .then((responseJson) => {
            this.setState({ package: responseJson[0] }); 
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        }); 

    }

    render() {
        return (
            <View style={styles.container}>  
                <Text style={styles.contentHeader}>{this.state.package.clientName}</Text>
                <Text style={styles.text}>Package Type: {this.state.package.type} Sessions</Text>
                <Text style={styles.text}>Sessions Remaining: {this.state.package.numSessionsLeft}</Text>
                <Button title='Sessions' onPress={()=>this.props.navigation.navigate('PackageSessions', {id: this.state.id})}/>
            </View>
        );
    }
}