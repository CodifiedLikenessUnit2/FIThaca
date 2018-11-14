
import React from 'react';
import { StyleSheet, TextInput, Alert, Text, FlatList, TouchableHighlight, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  constructor(props){
        super(props);

        this.state = { 
                data: [
                  { key: "a", name:"Client", time: "time"},    
		              { key: "b", name: "Client", time: "time" },     
                  { key: "c", name: "Client", time: "time" },           
                  { key: "d", name: "Client", time: "time" },
                  { key: "e", name: "Client", time: "time" },       
                  { key: "f", name: "Client", time: "time" },      
                  { key: "g", name: "Client", time: "time" },
                  { key: "h", name: "Client", time: "time" },
                  { key: "i", name: "Client", time: "time" },
                  { key: "j", name: "Client", time: "time" },
                  { key: "k", name: "Client", time: "time" },
                  { key: "l", name: "Client", time: "time" },
                  { key: "m", name: "Client", time: "time" },
                  { key: "n", name: "Client", time: "time" },
                  { key: "o", name: "Client", time: "time" },
                  { key: "p", name: "Client", time: "time" }
                ]   
          };  
  }

  _renderItem = data => {
        return( 
          <View>
    		<TouchableHighlight
    		  onPress={() => this._onPressButton(data.item.name)}
		  underlayColor="yellow">
		  <Text style={styles.row}>{data.item.name}, {data.item.time} 
		  </Text>
		</TouchableHighlight> 
    <Button
          title="Edit"
         onPress={() => this.props.navigation.navigate('EditSession')}
        />
        </View>
	)
  }; 

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={titleStyle.titleText}>Trainer Information{'\n'}</Text>
       <Text>Next Session</Text>
       <Text>Day, Month, Date</Text>
       <Text>Client Name</Text>
       <Button
          title="Complete"
        />
        <FlatList data={this.state.data} renderItem={this._renderItem} />
         <Button
          title="Add Session"
          onPress={() => this.props.navigation.navigate('AddSession')}
        />
         <Button
          title="Sessions Left"
          onPress={() => this.props.navigation.navigate('SessionsLeft')}
        />
         <Button
          title="Old Sessions"
          onPress={() => this.props.navigation.navigate('OldSessions')}
        />
      </View>
    );
  }
}

class ClientInfoScreen extends React.Component {
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
      <Text style={titleStyle.titleText}>Client Information{'\n'}</Text>
       <Text>Client Name</Text>
       <Text>Contact Information</Text>
       <Text>"Client's Trainers"</Text>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
        </View>
    );  
  }
}

class OldSessionsScreen extends React.Component {
  constructor(props){
        super(props);

        this.state = { 
                data: [
                  { key: "a", name:"Client", time: "time"},    
		              { key: "b", name: "Client", time: "time" },     
                  { key: "c", name: "Client", time: "time" },           
                  { key: "d", name: "Client", time: "time" },
                  { key: "e", name: "Client", time: "time" },       
                  { key: "f", name: "Client", time: "time" },      
                  { key: "g", name: "Client", time: "time" },
                  { key: "h", name: "Client", time: "time" },
                  { key: "i", name: "Client", time: "time" },
                  { key: "j", name: "Client", time: "time" },
                  { key: "k", name: "Client", time: "time" },
                  { key: "l", name: "Client", time: "time" },
                  { key: "m", name: "Client", time: "time" },
                  { key: "n", name: "Client", time: "time" },
                  { key: "o", name: "Client", time: "time" },
                  { key: "p", name: "Client", time: "time" }
                ]   
          };  
  }

  _renderItem = data => {
        return( 
          <View>
    		<TouchableHighlight
    		  onPress={() => this._onPressButton(data.item.name)}
		  underlayColor="yellow">
		  <Text style={styles.row}>{data.item.name}, {data.item.time} 
		  </Text>
		</TouchableHighlight> 
        </View>
	)
  }; 

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={titleStyle.titleText}>Old Sessions{'\n'}</Text>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );
  }
}

class SessionsLeftScreen extends React.Component {
  constructor(props){
        super(props);

        this.state = { 
                data: [
                  { key: "a", name:"Client", time: "time"},    
		              { key: "b", name: "Client", time: "time" },     
                  { key: "c", name: "Client", time: "time" },           
                  { key: "d", name: "Client", time: "time" },
                  { key: "e", name: "Client", time: "time" },       
                  { key: "f", name: "Client", time: "time" },      
                  { key: "g", name: "Client", time: "time" },
                  { key: "h", name: "Client", time: "time" },
                  { key: "i", name: "Client", time: "time" },
                  { key: "j", name: "Client", time: "time" },
                  { key: "k", name: "Client", time: "time" },
                  { key: "l", name: "Client", time: "time" },
                  { key: "m", name: "Client", time: "time" },
                  { key: "n", name: "Client", time: "time" },
                  { key: "o", name: "Client", time: "time" },
                  { key: "p", name: "Client", time: "time" }
                ]   
          };  
  }

  _renderItem = data => {
        return( 
          <View>
    		<TouchableHighlight
    		  onPress={() => this._onPressButton(data.item.name)}
		  underlayColor="yellow">
		  <Text style={styles.row}>{data.item.name}, {data.item.time} 
		  </Text>
		</TouchableHighlight> 
        </View>
	)
  }; 

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={titleStyle.titleText}>Sessions Left{'\n'}</Text>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );
  }
}


class SessionsWithClientScreen extends React.Component {
  constructor(props){
        super(props);

        this.state = { 
                data: [
                  { key: "a", name:"Client", time: "time"},    
		              { key: "b", name: "Client", time: "time" },     
                  { key: "c", name: "Client", time: "time" },           
                  { key: "d", name: "Client", time: "time" },
                  { key: "e", name: "Client", time: "time" },       
                  { key: "f", name: "Client", time: "time" },      
                  { key: "g", name: "Client", time: "time" },
                  { key: "h", name: "Client", time: "time" },
                  { key: "i", name: "Client", time: "time" },
                  { key: "j", name: "Client", time: "time" },
                  { key: "k", name: "Client", time: "time" },
                  { key: "l", name: "Client", time: "time" },
                  { key: "m", name: "Client", time: "time" },
                  { key: "n", name: "Client", time: "time" },
                  { key: "o", name: "Client", time: "time" },
                  { key: "p", name: "Client", time: "time" }
                ]   
          };  
  }

  _renderItem = data => {
        return( 
          <View>
    		<TouchableHighlight
    		  onPress={() => this._onPressButton(data.item.name)}
		  underlayColor="yellow">
		  <Text style={styles.row}>{data.item.name}, {data.item.time} 
		  </Text>
		</TouchableHighlight> 
        </View>
	)
  }; 

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={titleStyle.titleText}>Sessions With Client Name{'\n'}</Text>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );
  }
}

class AddSessionScreen extends React.Component {
   render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={titleStyle.titleText}>Add Session{'\n'}</Text>
        <Text>Client Name</Text>
        <Text>Drop-Down Menu</Text>
        <Button style={titleStyle.editButton} title="Add Client"></Button>

        <Text>Calendar Input</Text>
        <Text>Drop-Down Menu</Text>
        <Text>Choose a Time</Text>
        <Text>Drop-Down Calendar</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Notes"
        />
      </View>
    );
  }
}


class EditSessionScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={titleStyle.titleText}>Edit Client{'\n'}</Text>
        <Text>Client Name</Text>
        <Text>Drop-Down Menu</Text>
        <Text>Calendar Input</Text>
        <Text>Drop-Down Menu</Text>
        <Text>Choose a Time</Text>
        <Text>Drop-Down Calendar</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Notes"
        />
        <Button style={titleStyle.editButton} title="Cancel Session"></Button>
        <Button style={titleStyle.editButton} title="Complete"></Button>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    OldSessions: OldSessionsScreen,
    SessionsLeft: SessionsLeftScreen,
    ClientInfo: ClientInfoScreen,
    AddSession: AddSessionScreen,
    EditSession: EditSessionScreen,
    SessionsWithClient: SessionsWithClientScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
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
  //editButton: {
   // width: 60,
    //backgroundColor : '#4CAF50',
   // backgroundColor: "red",
    //justifyContent: "center",
    //alignItems: "center",
   // alignSelf: "center",
  //}
});