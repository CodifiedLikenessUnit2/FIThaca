import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';

export default class TrainerClientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Clients',
    };
constructor(props){
    super(props);
    this.state = {trainers: [
        {key: '1', name: 'Fake Name'},
        {key: '2', name: 'Joe From Somewhere'},
        {key: '3', name: 'Bob'},
        {key: '4', name: 'Evil Person'},
        {key: '5', name: 'No One'},
        {key: '6', name: 'Bob'},
        {key: '7', name: 'Evil Person'},
        {key: '8', name: 'No One'}
    ]};

    const willFocusSubscription = this.props.navigation.addListener(
        'willFocus',
        this._updateList
    );
}

_updateList = () => {
    //fetch data from database
}

_renderItem = data => {
    return (
        <View>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoT', {name: data.item.name})} underlayColor="blue">
                <Text style={styles.row}>{data.item.name}</Text>
            </TouchableHighlight>
        </View>
    );
};

render() {
    return (
        <View style={styles.container}>
            <FlatList data={this.state.trainers} renderItem={this._renderItem}/>
            <Button title='Past Clients' onPress={() => this.props.navigation.navigate('PastClients')}/>
        </View>
        );
    }
}
