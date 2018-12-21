import React from 'react';
import { View, Text, Button, TouchableHighlight, Alert } from 'react-native';

import styles from '../../styles/styles';

//This is used only on the admin side. We initially planned to give the trainer access to package information, but then had to change course
//For now, it's best for the trainer not to control packages, but that could change in the future. For that reason, we didn't want to mess with its location because 
//This gives the specific details of individual packages
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
        //get packages from database
    _updatePackages = () => {
        var postHeaders = new Headers();
        postHeaders.append("Content-Type", "application/json");
        
        //gets package info from the database
        //needs currPackage
        //returns clientName, type, numSessionsLeft
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
