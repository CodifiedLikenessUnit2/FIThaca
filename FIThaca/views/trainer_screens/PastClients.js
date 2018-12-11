import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';

export default class PastClientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Clients',
    };
constructor(props){
    super(props);
    this.state = {trainers: [
        {key: '1', name: 'past_client_one'},
        {key: '2', name: 'past_client_two'},
        {key: '3', name: 'past_client_three'},
        {key: '4', name: 'past_client_four'}
    ]};
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
        </View>
        );
    }
}
