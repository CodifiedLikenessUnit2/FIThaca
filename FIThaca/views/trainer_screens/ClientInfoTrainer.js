import React from 'react';
import { View, Text, Button, TouchableHighlight, FlatList, Alert } from 'react-native';
import styles from '../../styles/styles';

export default class ClientInfoScreenTrainer extends React.Component {
    static navigationOptions = {
        title: 'Client Info',
    };

    constructor(props) {
        super(props);

        const name = this.props.navigation.getParam('name', 'NO-NAME');

        //query database for actual client information
        this.state = {
            renderCheck:false,
            isLoading: true,
        };
    }
    
    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        const url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/trainerGetClient.php'
        var data = {clientID: 2};
    
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: myHeaders
            })
            .then((response) => response.json())
            .then(responseJson => {
              this.setState({
                dataSource: responseJson,
              })
            })
            .catch(error => Alert.alert('Error:'+ error));
        }

        _renderItem = data => {
            if(this.state.renderCheck==false){
            return (
                <View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoT', {name: data.item.name})} underlayColor="blue">
                        <Text>{data.item.clientID} {data.item.clientName} {'\n'}{data.item.clientType} {'\n'}{data.item.time}</Text>
                    </TouchableHighlight>
                </View>
            );
            }
            this.state.renderCheck=true;
        };
        
        render() {
            return (
                <View style={styles.container}>
                    <FlatList data={this.state.dataSource} renderItem={this._renderItem} keyExtractor={({time}, index) => time}/>
    </View>
);
}
}
