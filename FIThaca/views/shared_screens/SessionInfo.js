import React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';

import styles from '../../styles/styles';

export default class SessionInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Session Info',
    };

    constructor(props) {
        super(props);

        const session_id = this.props.navigation.getParam('identifier', 'NO-SESSION');
        const admin = this.props.navigation.getParam('admin', false);
       
        //query database for actual session information
        this.state = {
            id: session_id,
            client: 'client_name',
            date: 'session_date',
            time: 'session_time',
            status: 'session_status',
            package: 'session_package_id',
            isAdmin: admin
        };
    }

    render() {
        if(this.state.isAdmin) {
            return (
                <View style={styles.container}>  
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoA', {name: this.state.client})} underlayColor="blue">
                        <Text>{this.state.client}</Text>
                    </TouchableHighlight>
                    <Text>Date: {this.state.date}</Text>
                    <Text>Time: {this.state.time}</Text>
                    <Text>Status: {this.state.status}</Text>
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