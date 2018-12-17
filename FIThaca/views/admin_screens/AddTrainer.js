import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

import styles from '../../styles/styles';

export default class AddTrainerScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Trainer',
    };

    constructor(props) {
        super(props);

        this.state = {
            first: '',
            last: '',
            email: '',
            phone: ''
        }
    }

    _addTrainer = () => {
        //add trainer to database
        Alert.alert("trainer added");
        this.props.navigation.navigate('Trainers');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={(first) => this.setState({first})} placeholder={'First Name'}/>
                <TextInput style={styles.input} onChangeText={(last) => this.setState({last})} placeholder={'Last Name'}/>
                <TextInput style={styles.input} onChangeText={(email) => this.setState({email})} placeholder={'Email Address'}/>
                <TextInput style={styles.input} onChangeText={(phone) => this.setState({phone})} placeholder={'Phone Number'}/>
                <Button title='Add Trainer' onPress={this._addTrainer}/>
            </View>
        );
    }
}
