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
            name: '',
            phone: '',
            type: ''
        }
    }

    _addClient = () => {
        if (this.state.name == '' || this.state.phone == '' || this.state.type == ''){
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
                <TextInput style={styles.input} onChangeText={(name) => this.setState({name})} placeholder={'Name'}/>
                <TextInput style={styles.input} onChangeText={(phone) => this.setState({phone})} placeholder={'Phone Number'}/>

                <Picker selectedValue={this.state.type} style={styles.picker} itemStyle={styles.item}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                        <Picker.Item label="Student" value="Student" />
                        <Picker.Item label="Faculty" value="Faculty" />
                        <Picker.Item label="Staff" value="Staff" />
                </Picker>

                <Button title='Add Client' onPress={this._addClient}/>
            </View>
        );
    }
}
