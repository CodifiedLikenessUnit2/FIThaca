import React from 'react';
import { View, Text, FlatList, Button, TouchableHighlight, Alert } from 'react-native';

import styles from '../../styles/styles';

//This exports a list of the trainers that is displayed in one of the main tabs
export default class TrainerListScreen extends React.Component {
    static navigationOptions = {
        title: 'Trainers',
    };

    constructor(props) {
        super(props);

	    this.state = {trainers: []};

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updateList
        );
    }

     //fetch data from database
    _updateList = () => {
	    //get list of all trainers
	   //returns userID, name, contactInfo, username
        return fetch('http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getAllTrainers.php')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ trainers: responseJson }, function(){});
        })
        .catch((error) =>{
            Alert.alert('Error:'+ error);
        });
    }

    //This is used to render the information for the Flatlist
    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('TrainerInfo', {id: data.item.userID})} underlayColor="#EDBB00">
		            <Text style={styles.row}>{data.item.name}</Text>
		        </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list} data={this.state.trainers} renderItem={this._renderItem} keyExtractor={({userID}, index) => userID}/>
                <Button title='Add Trainer' onPress={()=>this.props.navigation.navigate('AddTrainer')}/>
            </View>
        );
    }
}
