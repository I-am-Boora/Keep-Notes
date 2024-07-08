import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color} from '../constants/color';
import CreateTodoBottomTab from '../../components/CreateTodoBottomTab';

const CreateNotesScreen = () => {
  const [noteData, setNoteData] = useState({title: '', note: ''});
  const navigation = useNavigation();

  const handleBackNavigation = () => {
    navigation.navigate('Home', {note: noteData});
  };

  const handleInputChange = (name, value) => {
    setNoteData(prevData => ({...prevData, [name]: value}));
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={handleBackNavigation} activeOpacity={0.6}>
            <Text style={styles.backTxt}>Back</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Title"
            style={styles.titleField}
            onChangeText={text => handleInputChange('title', text)}
          />
          <TextInput
            placeholder="Note"
            style={styles.noteField}
            onChangeText={text => handleInputChange('note', text)}
            multiline={true}
          />
        </View>
      </View>
      <CreateTodoBottomTab />
    </>
  );
};

export default CreateNotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  textInputContainer: {
    marginTop: 20,
  },
  backTxt: {
    fontSize: 20,
    color: color.black,
  },
  titleField: {
    fontSize: 30,
    color: color.black,
  },
  noteField: {
    fontSize: 20,
    color: color.black,
    marginTop: 10,
  },
});
