import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../src/constants/color';
import {useNavigation} from '@react-navigation/native';

const CreateNoteBtn = () => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate('CreateNotes');
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={handleOnPress}>
      <Text style={styles.plusTxt}>+</Text>
    </TouchableOpacity>
  );
};

export default CreateNoteBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.blue,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    borderRadius: 15,
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
  plusTxt: {
    fontSize: 40,
  },
});
