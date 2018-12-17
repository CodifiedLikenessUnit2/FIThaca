import React from 'react';
import { View, Text, TextInput, Picker, Button, Alert } from 'react-native';

import styles from '../../styles/styles';

export default class AddClientScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Client',
    };

    constructor(props) {
        super(props);

        this.state = {
            first: '',
            last: '',
            email: '',
            phone: '',
            type: ''
        }
    }

    _addClient = () => {
        //add client to database
        Alert.alert("client added");
        this.props.navigation.navigate('Clients');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={(first) => this.setState({first})} placeholder={'First Name'}/>
                <TextInput style={styles.input} onChangeText={(last) => this.setState({last})} placeholder={'Last Name'}/>
                <TextInput style={styles.input} onChangeText={(email) => this.setState({email})} placeholder={'Email Address'}/>
                <TextInput style={styles.input} onChangeText={(phone) => this.setState({phone})} placeholder={'Phone Number'}/>

                <Picker selectedValue={this.state.type} style={styles.picker} itemStyle={styles.item}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                        <Picker.Item label="Student" value="Student" />
                        <Picker.Item label="Faculty" value="Faculty" />
                        <Picker.Item label="Staff" value="Staff" />
                </Picker>

                <Button title='Add Client' onPress={this._addClient}/>
                <Button title='Cancel' onPress={() => this.props.navigation.navigate('Clients')}/>
            </View>
        );
    }
}
