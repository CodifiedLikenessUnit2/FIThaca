import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/styles';

export default class PastClientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Clients',
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
}

_updateList = () => {
    //fetch data from database
}

_renderItem = data => {
    return (
        <View>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('TraingerInfo', {name: data.item.name})} underlayColor="blue">
                <Text style={styles.row}>{data.item.name}</Text>
            </TouchableHighlight>
        </View>
    );
};

render() {
    return (
        <View style={styles.container}>
           <Text>Past Clients</Text>
            <Text>{this.state.data}</Text>
            <Button
          title="Go to Client Session Screen"
          onPress={() => this.props.navigation.navigate('PastClients')}
        />
		<Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
				title="Go Back"
				onPress={() => this.props.navigation.goBack()}/>
            <FlatList data={this.state.clients} renderItem={this._renderItem}/>
            </View>
        );
    }
}
