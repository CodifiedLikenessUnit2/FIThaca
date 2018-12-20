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
            clientName: '',
            contactInfo: '',
            clientType: 'student',
        }
    }

    _addClient = () => {
        if (this.state.clientName == '' || this.state.contactInfo == '' || this.state.clientType == ''){
            Alert.alert("Please fill out all fields");
            return;
        }
        else {
            var postHeaders = new Headers(); 
            postHeaders.append("Content-Type", "application/json");
            var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/newClient.php';
    
            fetch(url, {
                method: 'POST', 
                body: JSON.stringify(this.state),
                headers: postHeaders,
            })
            .then((response) => {
                Alert.alert("Client Added");
                this.props.navigation.navigate('Clients');
            })
            .catch((error) =>{
                Alert.alert('Error:'+ error);
            }); 
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={(clientName) => this.setState({clientName})} placeholder={'Name'}/>
                <TextInput style={styles.input} onChangeText={(contactInfo) => this.setState({contactInfo})} placeholder={'Phone Number'}/>

                <Picker selectedValue={this.state.clientType} style={styles.picker} itemStyle={styles.item}
                    onValueChange={(itemValue, itemIndex) => this.setState({clientType: itemValue})}>
                        <Picker.Item label="Student" value="student" />
                        <Picker.Item label="Faculty" value="faculty" />
                        <Picker.Item label="Staff" value="staff" />
                </Picker>

                <Button title='Add Client' onPress={this._addClient}/>
            </View>
        );
    }
}
