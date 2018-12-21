import React from 'react';
import { View, Text, Button, DatePickerIOS, Picker, Alert } from 'react-native';
import styles from '../../styles/styles';

//Exports the add Session Screen. This screen is currently only used for adding a new session to the database
export default class AddSessionScreen extends React.Component {

    static navigationOptions = {
        title: 'Add Session',
    };

    constructor(props){
        super(props);
        this.state = {
            client: '',
            name: 4,
            complete: false,
            selecteddate: new Date(),
        }
    }

    //This is the function that would add to the database
    //We didn't include that functionality, because we couldn't figure out a method of keeping a consistent time between mySQL and react
    _saveSession = () => {
        if(this.state.client!=='' && this.state.chosenDate!==new Date()){
            this.props.navigation.navigate('Home');
            this.setState({complete: true});
            Alert.alert('Session Saved');
            
        }
        else{
            Alert.alert('Session not saved                     Entry incomplete!');
        }
    }

    //Changes the date in keeping with the datepicker
    onDateChange(date) {
        this.setState({
          selecteddate: date
        });
      }

    render() {
        return (
        <View style={styles.container}>

        <View style={styles.container}>
            <Text style={styles.contentHeader}>Choose a Date: {this.state.data}</Text>
                <DatePickerIOS
                    date={this.state.selecteddate}
                    mode="datetime"
                    onDateChange={(date) => this.onDateChange(date)}
                    style={{ height: 100, width: 300 }}
                />
                </View>
                
              <Text style={styles.contentHeader}>Client List: {this.state.data}</Text>

                //We gave up trying to get this data dynamically from the database, so it's hardcoded in unfortunately
                <Picker selectedValue={this.state.client} style={styles.picker} itemStyle={styles.item}
                    onValueChange={(itemValue, itemIndex) => this.setState({client: itemValue})}>
                        <Picker.Item key='0' label="Choose a Client" value="" />
                        <Picker.Item key='1' label="Ben Watson" value="6" />
                        <Picker.Item key='2' label="Philip DeFranco" value="5" />
                        <Picker.Item key='3' label="Amy Schumer" value="4" />
                        <Picker.Item key='4' label="John Bar" value="3" />
                        <Picker.Item key='5' label="Toby Dragon" value="2" />
                        <Picker.Item key='6' label="Barry Allen" value="1" />
                </Picker>
                <Button title='Save Session' onPress={this._saveSession}/>
            </View>
        );
    }
}
