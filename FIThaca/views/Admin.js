import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

//We are importing all the screens from different files to make this work
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


// const HomeStack = createStackNavigator(
//     { 
//         Home: AdminHomeScreen,
//         Reports: ReportsScreen,
//     },
//     {
//         initialRouteName: 'Home',
//         navigationOptions: {
//             headerStyle: {
//                 //backgroundColor: 'blue',
//             },
//             headerTintColor: 'blue',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         },
//     }
// );

//The trainer stack is the main tab on the admin side and will show a list of all the trainers
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

//The clientStack will serve as the second tab on the admin side and will show a list of the clients
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


//Again, we need to export all this to make it work, so this is the part that uses the above stacks to create the tabs
export default adminNav = createBottomTabNavigator(
    {
        //Home: HomeStack,
        Trainers: TrainerStack,
        Clients: ClientStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            /*if (routeName === 'Home') {
                iconName = `ios-clipboard${focused ? '' : '-outline'}`;
            } else*/ if (routeName === 'Trainers') {
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
