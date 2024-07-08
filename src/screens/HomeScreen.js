import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-screens';
import SearchHeader from '../../components/SearchHeader';
import CreateNoteBtn from '../../components/CreateNoteBtn';
import {useRoute} from '@react-navigation/native';

const HomeScreen = () => {
  const [list, setList] = useState([]);

  const route = useRoute();
  useEffect(() => {
    if (route?.params?.note) {
      console.log('route-----', route?.params?.note);
      setList(prevNotes => [...prevNotes, route?.params?.note]);
      // Handle the received params (title and note)
      console.log('list data ------', list);
    } else {
      console.log('no route found---------');
    }
  }, [route.params]);

  //   console.log('list data ------', list);
  if (list) {
    console.log('list data ------', list);
  }

  const renderItem = ({item}) => (
    <View style={styles.noteContainer}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteContent}>{item.note}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <SearchHeader />
      <CreateNoteBtn />
      {/* <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {list.map((item, index) => {
          return (
            <View style={styles.noteContainer} key={index}>
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteContent}>{item.note}</Text>
            </View>
          );
        })}
      </View>

      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  noteContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    width: '45%',
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noteContent: {
    fontSize: 16,
  },
});
