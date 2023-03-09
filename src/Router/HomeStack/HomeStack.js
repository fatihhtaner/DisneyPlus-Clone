import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../pages/HomeScreen/HomeScreen';
import DetailScreen from '../../pages/DetailScreen/DetailScreen';
import StudioDetailScreen from '../../pages/StudioDetailScreen/StudioDetailScreen'

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StudioDetailScreen"
        component={StudioDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;