import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';

//This exports the main stuff here
//This page gives the upcoming sessions that the Trainer will have, it includes every client they have sessions with
export default class UpcomingSessionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Sessions',
    };
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            name: 4,
        };
    }

    //The date picker stores rough data, we need to process it in order to make it presentable for use down below
    //This converts that military time into time that we are used to
    _getTime(time){
        var returntime;
        var timecopy=time;
        timecopy=timecopy.slice(0, -2);
        if(timecopy>=13){
            returntime=timecopy-12;
            returntime+=time.substring(2);
            returntime+="pm";
        }
        else{
            if(parseInt(timecopy)<10){
                returntime=time.substring(2);
            }
            else{
          returntime=time;
            }
            returntime+="am";
        }
        return(returntime);
    }

    //This converts the month we get from the date picker stored in the database to a string with the name of the month
    _getMonth(month){
        var returnmonth;
        if(month=="01"){
            returnmonth="January";
        }
        else if(month=="02"){
            returnmonth="February";
        }
        else if(month=="03"){
            returnmonth="March";
        }
        else if(month=="04"){
            returnmonth="April";
        }
        else if(month=="05"){
            returnmonth="May";
        }
        else if(month=="06"){
            returnmonth="June";
        }
        else if(month=="07"){
            returnmonth="July";
        }
        else if(month=="08"){
            returnmonth="August";
        }
        else if(month=="09"){
            returnmonth="September";
        }
        else if(month=="10"){
            returnmonth="October";
        }
        else if(month=="11"){
            returnmonth="November";
        }
        else if(month=="12"){
            returnmonth="December";
        }
        return(returnmonth);
    }

    //This just ensures things like 09 come out as 9
    _getDate(date){
        var returnDate;
        if(parseInt(date)<10){
            returndate=date.substring(1);
        }
        else{
            returndate=date;
        }
        return(date);
    }

    componentDidMount(){
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
        
    //get a trainer/admin’s upcoming sessions from the database
    //needs userID
    //returns clientID, clientName, time
    const url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~mogrady/fithaca/getUpcomingSessions.php'
    var data = {userID: this.state.name};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: myHeaders
        })
        .then((response) => response.json())
        .then(responseJson => {
          this.setState({
            dataSource: responseJson
          })
        })
        .catch(error => Alert.alert('Error:'+ error));
    }

//This allows us to render the stuff on the FlatList
    _renderItem = data => {
        var year = data.item.time;
        console.log(year)
            year=year.slice(0,-15);
        var month = data.item.time;
            month=month.slice(0,-12);
            month=month.substring(5);
        var date = data.item.time;
            date=date.slice(0,-8);
            date=date.substring(9);
        var time = data.item.time;
            time=time.slice(0, -3);          
            time=time.substring(10);
        
        return (
            <View>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('ClientInfoT', {name: data.item.clientID})} underlayColor="#EDBB00">
                    <Text style={styles.row2}>{data.item.clientName} </Text>
                </TouchableHighlight>
                <Text style={styles.row3}>{this._getMonth(month)} {this._getDate(date)} at {this._getTime(time)}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list} data={this.state.dataSource} renderItem={this._renderItem} keyExtractor={({time}, index) => time}/>
                <Button
                    title="Past Sessions"
                    onPress={() => this.props.navigation.navigate('PastSessions')}
                />
                <Button
                    title="Add Sessions"
                    onPress={() => this.props.navigation.navigate('AddSession')}
                />
            </View>
        );
    }
}
