import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Dimensions} from 'react-native';

import HomeStack from '../Router/HomeStack/HomeStack';
import SearchStack from '../Router/SearchStack/SearchStack'
import DownloadScreen from '../pages/DownloadScreen/DownloadScreen';
import ProfileScreen from '../pages/ProfileScreen/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#201f24',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name="ios-home" color={'#a8a7a2'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name="ios-search" color={'#a8a7a2'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Download"
          component={DownloadScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name="ios-download" color={'#a8a7a2'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={require('../assets/images/profiles/darth-vader.png')}
                style={{
                  resizeMode: 'center',
                  width: Dimensions.get('window').width / 12,
                  height: Dimensions.get('window').height / 20,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
