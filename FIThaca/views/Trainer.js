import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

//ionicons but it's not working
//import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons from '@expo/vector-icons';

//import screens from other files
import UpcomingSessionsScreen from './trainer_screens/UpcomingSessions';
import PastSessionsScreen from './trainer_screens/PastSessions';
import AddEditSessionScreen from './trainer_screens/AddEditSession';

import TrainerClientsScreen from './trainer_screens/TrainerClientList';
import PastClientsScreen from './trainer_screens/PastClients';
import ClientInfoScreenTrainer from './trainer_screens/ClientInfoTrainer';
import PastClientSessionsScreen from './trainer_screens/PastClientSessions';

import PackageInfoScreen from './shared_screens/PackageInfo';
import PackageSessionsScreen from './shared_screens/PackageSessions';
import SessionInfoScreen from './shared_screens/SessionInfo';

const SessionStack = createStackNavigator(
    { 
        Home: UpcomingSessionsScreen,
        PastSessions: PastSessionsScreen,
        SessionInfo: SessionInfoScreen,
        EditSession: AddEditSessionScreen,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                //backgroundColor: 'blue',
            },
            headerTintColor: 'blue',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const ClientStack = createStackNavigator(
    { 
        Clients: TrainerClientsScreen,
        PastClients: PastClientsScreen,
        ClientInfoT: ClientInfoScreenTrainer,
        ClientPastSessions: PastClientSessionsScreen,
        PackageInfo: PackageInfoScreen,
        PackageSessions: PackageSessionsScreen,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                //backgroundColor: 'blue',
            },
            headerTintColor: 'blue',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default trainerNav = createBottomTabNavigator (
    {
        Home: SessionStack,
        Clients: ClientStack
    },
    {
        navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-calendar${focused ? '' : '-outline'}`;
            } else if (routeName === 'Clients') {
                iconName = `ios-contact${focused ? '' : '-outline'}`;
            } 
            //return <Ionicons name={iconName} size={25} color={tintColor} />;
            return 'idk why this is not working';
        },
        }),
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
        },
    }
);