import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

//ionicons but it's not working
//import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons from '@expo/vector-icons';

//import screens from other files
import AdminHomeScreen from './admin_screens/AdminHome';
import ReportsScreen from './admin_screens/Reports';

import TrainerListScreen from './admin_screens/TrainerList';
import TrainerInfoScreen from './admin_screens/TrainerInfo';
import AddTrainerScreen from './admin_screens/AddTrainer';

import ClientListScreen from './admin_screens/ClientList';
import ClientInfoScreenAdmin from './admin_screens/ClientInfoAdmin';
import AddClientScreen from './admin_screens/AddClient';
import AddPackageScreen from './admin_screens/AddPackage';

import PackageInfoScreen from './shared_screens/PackageInfo';
import PackageSessionsScreen from './shared_screens/PackageSessions';
import SessionInfoScreen from './shared_screens/SessionInfo';


const HomeStack = createStackNavigator(
    {
        Home: AdminHomeScreen,
        Reports: ReportsScreen,
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

const TrainerStack = createStackNavigator(
    {
        Trainers: TrainerListScreen,
        TrainerInfo: TrainerInfoScreen,
        AddTrainer: AddTrainerScreen,
    },
    {
      initialRouteName: 'Trainers',
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

const ClientStack = createStackNavigator(
    {
        Clients: ClientListScreen,
        ClientInfoA: ClientInfoScreenAdmin,
        AddClient: AddClientScreen,
        AddPackage: AddPackageScreen,
        PackageInfo: PackageInfoScreen,
        PackageSessions: PackageSessionsScreen,
        SessionInfo: SessionInfoScreen,
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
        },
    }
);



export default adminNav = createBottomTabNavigator(
    {
        Home: HomeStack,
        Trainers: TrainerStack,
        Clients: ClientStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-clipboard${focused ? '' : '-outline'}`;
            } else if (routeName === 'Trainers') {
                iconName = `ios-contact${focused ? '' : '-outline'}`;
            } else if (routeName === 'Clients') {
                iconName = `ios-body${focused ? '' : '-outline'}`;
            }
            //return <Ionicons name={iconName} size={25} color={tintColor} />
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
