import React from 'react';
import { View, Text, FlatList, Button, TouchableHighlight } from 'react-native';

import styles from '../../styles/styles';

export default class TrainerListScreen extends React.Component {
    static navigationOptions = {
        title: 'Trainers',
    };

    constructor(props) {
        super(props);

        //get list from database
        this.state = {trainers: []};

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updateList
        );
    }

    _updateList = () => {
        //fetch data from database
        return fetch('http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getAllTrainers.php')
        .then((response) => response.json()) 
        .then((responseJson) => {
            this.setState({ trainers: responseJson }, function(){}); 
        }) 
        .catch((error) =>{
            console.error(error); 
        });  
    }

    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('TrainerInfo', {name: data.item.name})} underlayColor="blue">
		            <Text style={styles.row}>{data.item.name}</Text>
		        </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.trainers} renderItem={this._renderItem} keyExtractor={({userID}, index) => userID}/>
                <Button title='Add Trainer' onPress={()=>this.props.navigation.navigate('AddTrainer')}/>
            </View>
        );
    }
}
