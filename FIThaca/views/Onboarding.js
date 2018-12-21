import React from 'react';
import { createBottomTabNavigator, createStackNavigator, StackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { View, Text, Button, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import styles from '../styles/styles';
import adminNav from './Admin';
import trainerNav from './Trainer';

//This class will give us the main part of the login page
class LogInScreen extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        username: '',
        password: '',
        dataSource: '',
      };
    }

  render() {
      return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <Text style={styles.loginHeader}> Log In</Text>
          <View style={styles.onboardContainer}>
            <Text style={styles.header}>FIThaca</Text>
            <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder='username'
            placeholderTextColor='#777777'
            onChangeText={(text) => {this.setState({username: text})}}
            />
            <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder='password'
            placeholderTextColor='#777777'
            secureTextEntry={true}
            onChangeText={(text) => {this.setState({password: text})}}
            />
            <Button
            color='white'
            title="Enter"
            onPress={this._login}
            />
          </View>
        </KeyboardAvoidingView>
      );
  }

  _login = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

 //We coded dummy login accounts in the database to allow for testing with the app, none of them have passwords
// trainer: arc
// admin: lincoln

    //This is submitting information to the login query from the database
    //Typically needs username, password but password not in effect at the moment because of encryption complications
    //returns userID, isAdmin //(1 = admin, 0 = trainer)
    var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/login.php'
    var data = {username: this.state.username, password: this.state.password};

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: myHeaders
    }).then(res => res.json())
    .then(responseJson => {
      this.setState({
        dataSource: responseJson[0],
      });
      this._checkUser();
    })
    .catch(error => Alert.alert('Error:'+ error));
  }

  _checkUser = () => {

    console.log("id: ", this.state.dataSource.userID);
    
    //this is the part that determines whether the send the user to the admin side or to the trainer side
    if (this.state.dataSource.isAdmin == 0) { // is not admin
      this.props.navigation.navigate('Trainer', {
        userID: this.state.dataSource.userID, // does not work
      });
    } else { // is Admin
      this.props.navigation.navigate('Admin', {
        userID: this.state.dataSource.userID // does not work
      });
    }
  }

}

//Of course, we need to export this
export default onboardNav = createStackNavigator(
  {
    Home: LogInScreen,
    Trainer: trainerNav,
    Admin: adminNav,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null
    },
  }
);
