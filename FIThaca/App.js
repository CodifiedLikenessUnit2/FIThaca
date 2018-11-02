import React, { Component } from 'react';
import {AppRegistry, Image, Text, StyleSheet, View, BackgroundImage } from 'react-native';

const remote = 'https://i.stack.imgur.com/6d1kC.jpg';

export default class DefaultApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewBox}>
          <Image style={styles.container}
            source={{ uri: remote }}
          />
        </View>
        
        <View style={styles.homeStyle}>
          <Text style={styles.textBox}>FIThaca</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeStyle:{
    flex: 1, 
    justifyContent: 'center'
  },
  textBox:{
    fontFamily:'Chalkduster',
    textAlign: 'center', 
    fontSize: 40
  },
  viewBox:{
    position: 'absolute', 
    width: '100%', 
    height: '100%'
  }
});