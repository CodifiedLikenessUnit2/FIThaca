import React from 'react';
import { createBottomTabNavigator, createStackNavigator, StackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { View, Text, Button, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import styles from '../styles/styles';
import adminNav from './Admin';
import trainerNav from './Trainer';

/*
class SignUpScreen extends React.Component {

  render() {
      return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <View style={styles.onboardContainer}>
            <Text style={styles.header}>FIThaca</Text>
            <TextInput
            style={styles.input}
            placeholder='username'
            placeholderTextColor='#777777'
            />
            <TextInput
            style={styles.input}
            placeholder='password'
            placeholderTextColor='#777777'
            secureTextEntry={true}
            />
            <TextInput
            style={styles.input}
            placeholder='password'
            placeholderTextColor='#777777'
            secureTextEntry={true}
            />
            <Button
            color='white'
            title="Enter"
            onPress={() => this.props.navigation.navigate('SignedUp')}
            />
          </View>
          <View style={{marginTop:30}}>
            <Button
            style={styles.button}
            title="I have an account"
            onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
        </KeyboardAvoidingView>
      );
  }
}
*/
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

// trainer: arc
// admin: lincoln

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

export default onboardNav = createStackNavigator(
  {
    Home: LogInScreen,
    //Signup: SignUpScreen,
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
