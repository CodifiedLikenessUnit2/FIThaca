import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

//ionicons but it's not working

//import screens from other files - again, we used this file system to make the development process better
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

//This file creates two nav stacks for the trainer side of the app

//This is the first stack, it will serve as the main tab/home page of the trainer side of the app
const SessionStack = createStackNavigator(
    {
        Home: UpcomingSessionsScreen,
        ClientInfoT: ClientInfoScreenTrainer,
        PastSessions: PastSessionsScreen,
        SessionInfo: SessionInfoScreen,
        EditSession: AddEditSessionScreen,
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
            headerMode: 'none',
        },
    }
);

//This is the second stack, it will serve as the second tab and give the trainers a list of their clients
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
      initialRouteName: 'Clients',
      navigationOptions: {
          headerStyle: {
            backgroundColor: '#0F1667',
          },
          headerTintColor: '#EDBB00',
          headerTitleStyle: {
              fontSize: 29,
              fontWeight: '300',
          },
          headerMode: 'none',
      },
    }
);

//For any of this to work, we have to export it, so that's what this does
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
          style: { backgroundColor: '#0F1667' },
          activeTintColor: '#EDBB00',
          inactiveTintColor: 'white',
      },
    }
);
