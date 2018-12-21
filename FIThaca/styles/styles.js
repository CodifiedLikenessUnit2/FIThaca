import { StyleSheet } from 'react-native';

//This exports a bunch of different styles that are used all throughout the app
export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      //justifyContent: 'center',
      alignItems: 'center',
      padding: 42,
    },
    loginHeader: {
      color: '#0F1667',
      fontSize: 30,
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 75,
    },
    header: {
      color: '#EDBB00',
      fontSize: 30,
      textAlign: 'center',
    },
    contentContainer: {
      flex: 1,
      backgroundColor: '#A7BCC4',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
    contentHeader: {
      color: '#0F1667',
      fontSize: 25,
      fontWeight: '500',
      textAlign: 'center',
      marginTop: 20,
    },
    contentSubhHeader: {
      color: '#FFFFFF',
      fontSize: 18,
      textAlign: 'center',
    },
    input: {
      height: 35,
      width: 150,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 5,
      borderColor: 'gray',
      borderWidth: 1,
      color: 'white'
    },
    onboardContainer: {
      backgroundColor: '#0F1667',
      marginLeft: 10,
      marginRight: 10,
      height: 300,
      width: 300,
      borderRadius: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      fontSize: 17,
      fontWeight: '400',
      marginTop: 10,
      marginBottom: 10,
      textAlign: 'center',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    row2: {
      fontSize: 17,
      fontWeight: '400',
      textAlign: 'center',
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    row3: {
      fontSize: 17,
      fontWeight: '400',
      marginBottom: 10,
      textAlign: 'center',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
      marginLeft: 20,
      marginRight: 20,

    },
    text: {
      fontSize: 17,
      fontWeight: '400',
      marginTop: 10,
      textAlign: 'center',
    },
    picker: {
      height: 75,
      width: 200,
      margin: 20,
      borderRadius: 5,
      borderColor: 'gray',
      borderWidth: 1,
    },
    item: {
      height: 75,
      fontSize: 17,
      fontWeight: '400',
    }
});
