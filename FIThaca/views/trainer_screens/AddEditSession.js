import React from 'react';
import { View, Text, Button, Picker, Alert } from 'react-native';
import styles from '../../styles/styles';

export default class AddEditSessionScreen extends React.Component {

    static navigationOptions = {
        title: 'Edit Session',
    };

    constructor(props){
        super(props);
        this.state = {
            client: 'session_client',
            time: 'session_time',
            trainer: 'session_trainer',
            complete: false,

            //these lists should come from the database
            trainers: ['trainer_one', 'trainer_two', 'trainer_three'],
            clients: ['client_one', 'client_two', 'client_three']
        }   
    }


    _saveSession = () => {

        //add this or save changes to database - we don't have that in here just yet

        Alert.alert('session saved');

        //MIGHT NEED TO CHANGE IF PEOPLE DON'T LIKE THIS   - possibly add and link to TrainerHome page
        this.props.navigation.navigate('UpcomingSessions');
    }

    setComplete = () => {
        this.setState({complete: true})

    }

    setInComplete = () => {
        this.setState({complete: false})

    }

    setDate(newDate) {
        this.setState({time: newDate})
      }

    render() {

        // <DatePickerIOS
        //      date={this.state.chosenDate}
        //      onDateChange={this.setDate}
        // />

        let trainers = this.state.trainers.map( (trainer, i) => {
            return <Picker.Item key={i} value={trainer} label={trainer} />
        });

        let clients = this.state.clients.map( (client, i) => {
            return <Picker.Item key={i} value={client} label={client} />
        });

        // //I hope this is like a real thing
        // <view>
        // if(this.state.complete == false){
        //     <view>
        //     <text>Session Still Pending</text>
        //     <Button title='Complete' onPress={()=>this.setComplete}/>
        //     </view>
        // }
        // else{
        //     <view>
        //     <text>Session Complete</text>
        //     <Button title='Set Active Again' onPress={()=>this.setInComplete}/>
        //     </view>
        // }
        // </view>

        return (
            <View style={styles.container}>  

                //We are probably going to have to tweak this later on. I am envisioning a picker that displays the clients from the database
                <Picker selectedValue={this.state.client} style={{ height: 20, width: 100, margin: 20 }}   itemStyle={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                        <Picker.Item key='1' label="Client A" value="a" />
                        <Picker.Item key='2' label="Client B" value="b" />
                        <Picker.Item key='3' label="Client C" value="c" />
                        <Picker.Item key='4' label="Client D" value="d" />
                        <Picker.Item key='5' label="Client E" value="e" />
                        <Picker.Item key='6' label="Client F" value="f" />
                </Picker>


                <Picker selectedValue={this.state.client} style={{ height: 20, width: 100, margin: 20 }}   itemStyle={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                        <Picker.Item key='1' label="Upcoming" value="4i" />
                        <Picker.Item key='2' label="In Progress" value="7i" />
                        <Picker.Item key='3' label="Complete" value="10i" />
                </Picker>


                <Button title='Save Session' onPress={this._saveSession}/>
                <Button title='Cancel' onPress={()=>this.props.navigation.navigate('ClientInfoA')}/>
            </View>
        );
    }
}
