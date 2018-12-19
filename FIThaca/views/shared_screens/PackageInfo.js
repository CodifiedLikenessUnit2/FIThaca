import React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';

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

        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(this.state.id),
            headers: postHeaders,
        })
        .then((response) => response.json()) 
        .then((responseJson) => {
            this.setState({ package: responseJson[0] }); 
        })
        .catch((error) =>{
            console.error(error); 
        }); 

    }

    render() {
        return (
            <View style={styles.container}>  
                <Text>Client: {this.state.client}</Text>
                <Text>Package Type: {this.state.package.type} Sessions Total</Text>
                <Text>Sessions Remaining: {this.state.package.numSessionsLeft} Sessions Remaining</Text>
                <Button title='Sessions' onPress={()=>this.props.navigation.navigate('PackageSessions', {package_id: this.identifier})}/>
            </View>
        );
    }
}