import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../../pages/SearchScreen/SearchScreen'
import ExploreScreen from '../../pages/ExploreScreen/ExploreScreen';
import DetailScreen from '../../pages/DetailScreen/DetailScreen'

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SearchStack;
