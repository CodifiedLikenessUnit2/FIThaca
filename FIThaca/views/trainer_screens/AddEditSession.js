import React from 'react';
import { View, Text, Button, Picker, Alert, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from '../../styles/styles';

export default class AddEditSessionScreen extends React.Component {

    static navigationOptions = {
        title: 'Edit Session',
    };

    constructor(props){
        super(props);

        //because this is for adding and editing sessions, we need to know if the session already exists
        const existing = this.props.navigation.getParam('existing', false);

        this.state = {
            client: 'session_client',
            time: 'Choose A Time',
            trainer: 'session_trainer',
            complete: false,

            //these lists should come from the database
            trainers: ['trainer_one', 'trainer_two', 'trainer_three'],
            clients: ['client_one', 'client_two', 'client_three'],

            isDateTimePickerVisible: false,
            existing: existing
        }   
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = (date) => {
        var dateString = date.toString();
        this.setState({time: dateString});
        this._hideDateTimePicker();
    };

    _saveSession = () => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        
            const url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/newSession.php '
            var data = {userID: 4};
        
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: myHeaders
                })
                .then((response) => response.json())
                .then(responseJson => {
                  this.setState({
                    dataSource: responseJson
                  })
                })
                .catch(error => Alert.alert('Error:'+ error));
            
        Alert.alert('session saved');

        //MIGHT NEED TO CHANGE IF PEOPLE DON'T LIKE THIS   - possibly add and link to TrainerHome page
        this.props.navigation.navigate('Home');
    }

    render() {

        let trainers = this.state.trainers.map( (trainer, i) => {
            return <Picker.Item key={i} value={trainer} label={trainer} />
        });

        let clients = this.state.clients.map( (client, i) => {
            return <Picker.Item key={i} value={client} label={client} />
        });


        return (
            <View style={styles.container}>  

                <Text>Choose a Client:</Text>
                <Picker selectedValue={this.state.client} style={{ height: 20, width: 100, margin: 20 }}   itemStyle={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                        <Picker.Item key='1' label="Dwigt Rotugal" value="a" />
                        <Picker.Item key='2' label="Kenn Kitvarn" value="b" />
                        <Picker.Item key='3' label="Donny Olerberz" value="c" />
                </Picker>

                <Text>{'\n'}{'\n'}{'\n'}</Text>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <Text>{this.state.time}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode='datetime'
                />
                
                <Text>{'\n'}{'\n'}{'\n'}Status:</Text>
                <Picker selectedValue={this.state.client} style={{ height: 20, width: 100, margin: 20 }}   itemStyle={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                        <Picker.Item key='1' label="Upcoming" value="u" />
                        <Picker.Item key='2' label="In Progress" value="p" />
                        <Picker.Item key='3' label="Complete" value="c" />
                </Picker>

                <Button title='Save Session' onPress={this._saveSession}/>
                <Button title='Cancel' onPress={()=>this.props.navigation.goBack()}/>

            </View>
        );
    }
}
