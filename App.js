import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';

const App = () => {
  return (
    <>
      <Navigator />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
