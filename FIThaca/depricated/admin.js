// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { StyleSheet, Button, TextInput, Text, View, FlatList, Alert, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class TrainerScreen extends React.Component {
   constructor(props){
        super(props);

        this.state = { 
                data: [
                  { key: "a", name:"John"},    
                  { key: "b", name: "Jesse" },     
                  { key: "c", name: "Julie" },           
                  { key: "d", name: "Jim" },
                  { key: "a longer example", name: "Joe" },      
                  { key: "e", name: "Josephine" },       
                  { key: "f", name: "Jerry" },      
                  { key: "g", name: "Julianna" },
                  { key: "h", name: "Jessica" },
                  { key: "i", name: "Jennifer" },
                  { key: "j", name: "Jasmine" },
                  { key: "k", name: "Julia" },
                  { key: "l", name: "John" },
                  { key: "m", name: "Jay" },
                  { key: "n", name: "Jayden" },
                  { key: "o", name: "Jeret" },
                  { key: "p", name: "Judah" }
                ]   
          };  
  }

  _onPressButton(name) {
    Alert.alert('You pressed the button ' + name);
  }

  _renderItem = data => {
        return( 
    		<TouchableHighlight
    		  onPress={() => this._onPressButton(data.item.name)}
		  underlayColor="yellow">
		  <Text style={styles.row}>{data.item.key}: {data.item.name} 
		  </Text>
		</TouchableHighlight> 
	)
  };  

  render() {
    return (
      <View style={styles.container}>
      <Text style={titleStyle.titleText}>Trainers{'\n'}</Text>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
        <Button style={titleStyle.editButton} onPress={() => this.props.navigation.navigate('AddClient')} title="Add Client"></Button><Button style={titleStyle.editButton} onPress={() => this.props.navigation.navigate('AddPackage')} title="Add Package"></Button>

      </View>
    );  
  }
}

class ClientScreen extends React.Component {
  
     constructor(props){
        super(props);

        this.state = { 
                data: [
                  { key: "a", name:"Jovcbxcvhn"},    
		              { key: "b", name: "xcvbxcvb" },     
                  { key: "c", name: "Ju57657lie" },           
                  { key: "d", name: "dfj670" },
                  { key: "a longer example", name: "Jasdfasfoe" },      
                  { key: "e", name: "Josephine" },       
                  { key: "f", name: "sdaffd" },      
                  { key: "g", name: "Julianna" },
                  { key: "h", name: "dsafadsf" },
                  { key: "i", name: "Jennifer" },
                  { key: "j", name: "Jasmsdfasdine" },
                  { key: "k", name: "sadfasd" },
                  { key: "l", name: "John" },
                  { key: "m", name: "Jaffgjy" },
                  { key: "n", name: "Jaklyiuloyden" },
                  { key: "o", name: "Jeret" },
                  { key: "p", name: "cvxb" }
                ]   
          };  
  }

  _onPressButton(name) {
    Alert.alert('You pressed the button ' + name);
  }

  _renderItem = data => {
        return( 
    		<TouchableHighlight
    		  onPress={() => this._onPressButton(data.item.name)}
		  underlayColor="yellow">
		  <Text style={styles.row}>{data.item.key}: {data.item.name} 
		  </Text>
		</TouchableHighlight> 
	)
  };  

  render() {
    return (
      <View style={styles.container}>
       <Text style={titleStyle.titleText}>Clients{'\n'}</Text>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
        <Button onPress={() => this.props.navigation.navigate('AddTrainer')} style={titleStyle.editButton} title="Add Trainer"></Button><Button 
        onPress={() => this.props.navigation.navigate('AddPackage')}
        style={titleStyle.editButton} title="Add Package"></Button></View>
    );  
  }
}

class AddClientScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Clienter Screen</Text>

        <Text>First Name</Text>
        <TextInput
          style={{height: 40}}
          placeholder="First Name"
        />
        <Text>Last Name</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Last Name"
        />
        <Text>Client Type</Text>
        <Text>Drop-Down Menu</Text>
        <Text>Contact Info</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Contact Info."
        />
      </View>
    );
  }
}

class AddTrainerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Trainer Screen</Text>

        <TextInput
          style={{height: 40}}
          placeholder="First Name"
        />
        <TextInput
          style={{height: 40}}
          placeholder="Last Name"
        />
        <TextInput
          style={{height: 40}}
          placeholder="Contact Info."
        />
      </View>
    );
  }
}

class AddPackageScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Package Screen</Text>
        <Text>Choose a Client</Text>
        <Text>Drop-Down Menu</Text>
         <Button style={titleStyle.editButton} onPress={() => this.props.navigation.navigate('AddClient')} title="Add Client"></Button>
      <Text>Choose a Trainer</Text>
        <Text>Drop-Down Menu</Text>
        <Text>Choose a Package Type</Text>
        <Text>Drop-Down Menu</Text>
      </View>
    );
  }
}

const TrainerStack = createStackNavigator({
  Home: TrainerScreen,
  AddTrainer: AddTrainerScreen,
  AddPackage: AddPackageScreen,
  AddClient: AddClientScreen,
});

const ClientStack = createStackNavigator({
  Clients: ClientScreen,
  AddClient: AddClientScreen,
  AddPackage: AddPackageScreen,
});

export default createBottomTabNavigator(
  {
    Trainers: TrainerStack,
    Clients: ClientStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Trainers') {
          iconName = `person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Clients') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 30,
    padding: 42,
  },
   row: {
     fontSize: 24, 
     padding: 15, 
     borderWidth: 1,
     borderColor: "#DDDDDD",
 }
});

const titleStyle = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
  editButton: {
    width: 60,
    backgroundColor : '#4CAF50',
   // backgroundColor: "red",
    //justifyContent: "center",
    //alignItems: "center",
   // alignSelf: "center",
  }
});