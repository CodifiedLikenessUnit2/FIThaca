import React from 'react';
import { View, Text, Picker, Alert, Button } from 'react-native';

import styles from '../../styles/styles';

export default class AddPackageScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Package',
    };

    constructor(props) {
        super(props);

        const client = this.props.navigation.getParam('client', 'NO-CLIENT');

        this.state = {
            client: client,
            type: '',
            partner: '',
            trainer: '',

            //these lists should come from the database
            trainers: ['trainer_one', 'trainer_two', 'trainer_three'],
            clients: ['client_one', 'client_two', 'client_three']
        }
    }

    _addPackage = () => {
        //add package to database
        Alert.alert('package added');
        this.props.navigation.navigate('ClientInfoA');
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
                <Text style={styles.contentHeader}>Client: {this.state.client} </Text>

                <Picker selectedValue={this.state.type} style={styles.picker} itemStyle={styles.item}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                        <Picker.Item key='1' label="4 Session Individual" value="4i" />
                        <Picker.Item key='2' label="7 Session Individual" value="7i" />
                        <Picker.Item key='3' label="10 Session Individual" value="10i" />
                        <Picker.Item key='4' label="4 Session Partnered" value="4p" />
                        <Picker.Item key='5' label="7 Session Partnered" value="7p" />
                        <Picker.Item key='6' label="10 Session Partnered" value="10p" />
                </Picker>

                <Picker selectedValue={this.state.partner} style={styles.picker} itemStyle={styles.item}
                    onValueChange={(itemValue, itemIndex) => this.setState({partner: itemValue})}>
                        {clients}
                </Picker>

                <Picker selectedValue={this.state.trainer} style={styles.picker} itemStyle={styles.item}
                    onValueChange={(itemValue, itemIndex) => this.setState({trainer: itemValue})}>
                        {trainers}
                </Picker>

                <Button title='Add Package' onPress={this._addPackage}/>
                <Button title='Cancel' onPress={()=>this.props.navigation.navigate('ClientInfoA')}/>
            </View>
        );
    }
}
