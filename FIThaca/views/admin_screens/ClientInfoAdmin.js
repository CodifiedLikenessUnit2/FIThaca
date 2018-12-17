import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Button } from 'react-native';

import styles from '../../styles/styles';

export default class ClientInfoScreenAdmin extends React.Component {
    static navigationOptions = {
        title: 'Client Info',
    };

    constructor(props) {
        super(props);

        const name = this.props.navigation.getParam('name', 'NO-NAME');

        //query database for actual client information
        this.state = {
            name: name,
            type: 'client_type',
            contact: 'contact_info',
            current_package: 'package_identifier',
            past_packages: [
                {key: '1', id: 'past_package_identifier'},
                {key: '2', id: 'past_package_identifier_2'}
            ]
        };

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updatePackages
        );
    }

    _updatePackages = () => {
        //get packages from database
    }

    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('PackageInfo', {id: data.item.id})} underlayColor="#EDBB00">
		            <Text style={styles.row}>{data.item.id}</Text>
		        </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.contentHeader}>{this.state.name}</Text>
              <Text style={styles.text}>{this.state.type}</Text>
              <Text style={styles.text}>{this.state.contact}</Text>
              <Text style={styles.contentHeader}>Current Package: {'\n'}</Text>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('PackageInfo', {id: this.state.current_package})} underlayColor="#EDBB00">
                  <Text>{this.state.current_package}</Text>
              </TouchableHighlight>
              <FlatList style={{margin: 20}} data={this.state.past_packages} renderItem={this._renderItem}/>
              <Button title='Add Package' onPress={()=>this.props.navigation.navigate('AddPackage', {client: this.state.name})}/>
          </View>
        );
    }
}
