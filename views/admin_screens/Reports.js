import React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';

import styles from '../../styles/styles';

export default class ReportsScreen extends React.Component {
    static navigationOptions = {
        title: 'Reports',
    };

    constructor(props) {
        super(props);

        const name = this.props.navigation.getParam('name', 'NO-NAME');

        //I actually don't think this part will be necessary
        //but if we decide to keep this, the actual information will come from the database
        this.state = { data: [
          {key: '1', name: 'date'},
          {key: '2', name: 'time'},
          {key: '3', name: 'trainer'},
          {key: '4', name: 'ClientFirst'},
          {key: '5', name: 'ClientLast'},
          {key: '6', name: 'ClientType'},
          {key: '7', name: 'ClientGender'},
          {key: '8', name: 'PackageType'},
          //I was unsure how to write this, but we can discuss that later
          {key: '9', name: 'PastPackages'},
        ]};

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updatePackages
        );
    }

    _updatePackages = () => {
        //fetch data from database
    }

    _renderItem = data => {
        return (
            <View>
                <TouchableHighlight underlayColor="#EDBB00">
		            <Text style={styles.row}>{data.item.name}</Text>
		        </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
          <View style={styles.container}>
            <FlatList data={this.state.data} renderItem={this._renderItem}/>
          </View>
        );
    }
}
