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
            name: '',
            contactInfo: '',
            username: '',
            password: ''
        }
    }

    _addTrainer = () => {
        //add trainer to database
        if (this.state.name == '' || this.state.contactInfo == '' || this.state.username == '' || this.state.password == ''){
            Alert.alert("Please fill out all fields");
            return;
        }
        else {
            var postHeaders = new Headers(); 
            postHeaders.append("Content-Type", "application/json");
            var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/newUser.php';
    
            fetch(url, {
                method: 'POST', 
                body: JSON.stringify(this.state),
                headers: postHeaders,
            })
            .then((response) => {
                Alert.alert("Trainer Added");
                this.props.navigation.navigate('Trainers');
            })
            .catch((error) =>{
                Alert.alert('Error:'+ error);
            }); 
        }
       
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={(name) => this.setState({name})} placeholder={'Name'}/>
                <TextInput style={styles.input} onChangeText={(contactInfo) => this.setState({contactInfo})} placeholder={'Phone Number'}/>
                <TextInput style={styles.input} onChangeText={(username) => this.setState({username})} placeholder={'Username'}/>
                <TextInput style={styles.input} onChangeText={(password) => this.setState({password})} placeholder={'Password'}/>
                <Button title='Add Trainer' onPress={this._addTrainer}/>
            </View>
        );
    }
}
