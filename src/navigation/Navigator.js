import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateNotesScreen from '../screens/CreateNotesScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Root = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateNotes" component={CreateNotesScreen} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
export default Navigator;
