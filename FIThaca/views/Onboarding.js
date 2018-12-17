import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { View, Text, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from '../styles/styles';
import adminNav from './Admin';
import trainerNav from './Trainer';

class SignUpScreen extends React.Component {

  static navigationOptions = {
      title: 'Sign Up',
      headerLeft: null,
  };

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

class LogInScreen extends React.Component {

  static navigationOptions = {
      title: 'Login',
      headerLeft: null,
  };

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
            <Button
            color='white'
            title="Enter"
            onPress={() => this.props.navigation.navigate('LoggedIn')}
            />
          </View>
          <View style={{marginTop:30}}>
            <Button
            title="I don't have an account"
            onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        </KeyboardAvoidingView>
      );
  }
}

export default onboardNav = createStackNavigator(
  {
    Home: SignUpScreen,
    Login: LogInScreen,
    SignedUp: trainerNav,
    LoggedIn: adminNav,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
          backgroundColor: '#0F1667',
        },
        headerTintColor: '#EDBB00',
        headerTitleStyle: {
          fontSize: 29,
          fontWeight: '300',
        },
    },
  }
);
