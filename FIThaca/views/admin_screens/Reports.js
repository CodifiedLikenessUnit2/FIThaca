import React from 'react';
import { View, Text } from 'react-native';

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
        this.state = {
            date: 'date',
            time: 'time',
            trainer: 'trainer',
            ClientFirst: 'ClientFirst',
            ClientLast: 'ClientLast',
            ClientType: 'ClientType',
            ClientGender: 'ClientGender',
            PackageType: 'PackageType',

            //I was unsure how to write this, but we can discuss that later
            PastPackages: 'PastPackages',
        };

        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            this._updatePackages 
        );
    }

    _updatePackages = () => {
        //get packages from database
    }

    render() {
        return (
            <View>
                
            <Text> Report for {new Date()}</Text>
            <Text style={styles.row}>{this.state.date}</Text>
            {'\n'}
            <Text style={styles.row}>{this.state.time}</Text>
            {'\n'}
            <Text style={styles.row}>{this.state.trainer}</Text>
            {'\n'}
            <Text style={styles.row}>{this.state.ClientFirst}</Text>
            {'\n'}
            <Text style={styles.row}>{this.state.ClientLast}</Text>
            {'\n'}
            <Text style={styles.row}>{this.state.ClientType}</Text>
            {'\n'}
            <Text style={styles.row}>{this.state.ClientGender}</Text>
            {'\n'}
            <Text style={styles.row}>{this.state.PackageType}</Text>
            {'\n'}
        </View>
        );
    }
}
