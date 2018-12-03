import React from 'react';
import { View, Text } from 'react-native';

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
                <TextInput onChangeText={(first) => this.setState({first})} placeholder={'First Name'}/>
                <TextInput onChangeText={(last) => this.setState({last})} placeholder={'Last Name'}/>
                <TextInput onChangeText={(email) => this.setState({email})} placeholder={'Email Address'}/>
                <TextInput onChangeText={(phone) => this.setState({phone})} placeholder={'Phone Number'}/>


                <Button title='Add Trainer' onPress={this._addTrainer}/>
                <Button title='Cancel' onPress={()=>this.props.navigation.navigate('Trainers')}/>
            </View>
        );
    }
}
