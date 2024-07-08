import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {color} from '../src/constants/color';

const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search your notes"
        style={styles.textInput}
        placeholderTextColor={color.black}
      />
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lightGrey,
    borderRadius: 50,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 18,
    color: color.black,
  },
});
