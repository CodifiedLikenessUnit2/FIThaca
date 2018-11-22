import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../../styles/styles';

export default class SessionInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Session Info',
    };

    constructor(props) {
        super(props);

        const session_id = this.props.navigation.getParam('identifier', 'NO-SESSION');
       
        //query database for actual session information
        this.state = {
            id: session_id,
            client: 'client_name',
            date: 'session_date',
            time: 'session_time',
            status: 'session_status',
            package: 'session_package_id'
        };
    }

    render() {
        if(/*admin is logged in*/ true) {
            return (
                <View style={styles.container}>  
                    <Text>{this.state.client}</Text>
                    <Text>Date: {this.state.date}</Text>
                    <Text>Time: {this.state.time}</Text>
                    <Text>Status: {this.state.status}</Text>
                    <Button title='Related Package' onPress={()=>this.props.navigation.navigate('PackageInfo', {identifier: this.state.package})}/>
                </View>
            );
        } else /*trainer is logged in*/ {
            return (
                <View style={styles.container}>  
                    <Text>{this.state.client}</Text>
                    <Text>Date: {this.state.date}</Text>
                    <Text>Time: {this.state.time}</Text>
                    <Text>Status: {this.state.status}</Text>
                    <Button title='Related Package' onPress={()=>this.props.navigation.navigate('PackageInfo', {identifier: this.state.package})}/>
                    <Button title='Edit Session' onPress={()=>this.props.navigation.navigate('EditSession', {identifier: this.state.id})}/>
                </View>
            );
        }
        
    }
}