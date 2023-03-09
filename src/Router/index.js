import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from '../Router/HomeStack/HomeStack'
import SearchScreen from '../pages/SearchScreen/SearchScreen';
import DownloadScreen from '../pages/DownloadScreen/DownloadScreen';
import ProfileScreen from '../pages/ProfileScreen/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          showLabel: false,
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
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Download"
          component={DownloadScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;