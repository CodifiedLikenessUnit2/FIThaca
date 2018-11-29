import React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';

import styles from '../../styles/styles';

export default class PackageInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Package Info',
    };

    constructor(props) {
        super(props);

        const identifier = this.props.navigation.getParam('identifier', 'NO-PACKAGE');
       
        //query database for actual package information
        this.state = {
            id: identifier,
            client: 'package_client',
            type: 'package_type',
            remaining: 'num_sessions_remaining',
            partner: 'partner_if_applicable',
            trainer: 'trainer_name'
        };
    };

    render() {
        return (
            <View style={styles.container}>  
                <Text>Client: {this.state.client}</Text>
                <Text>Package Type: {this.state.type}</Text>
                <Text>Sessions Remaining: {this.state.remaining}</Text>
                <Text>Partner: {this.state.partner}</Text>
                <Text>Trainer:
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('TrainerInfo', {name: this.state.trainer})} underlayColor="blue"> 
                        <Text>{this.state.partner}</Text>
                    </TouchableHighlight>
                </Text> 
                <Button title='Sessions' onPress={()=>this.props.navigation.navigate('PackageSessions', {package_id: this.identifier})}/>
            </View>
        );
    }
}