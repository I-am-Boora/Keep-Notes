import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {color} from '../src/constants/color';
import imagePath from '../src/constants/imagePath';

const CreateTodoBottomTab = () => {
  const data = [
    {
      id: 0,
      title: 'add',
      path: imagePath.add,
    },

    {
      id: 1,
      title: 'color',
      path: imagePath.color,
    },
    {
      id: 2,
      title: 'edit',
      path: imagePath.aLetter,
    },
    {
      id: 3,
      title: 'undo',
      path: imagePath.undo,
    },
    {
      id: 4,
      title: 'redo',
      path: imagePath.redo,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.mainImageContainer}>
        <View style={styles.leftContainer}>
          {data.map(item => {
            return (
              <TouchableOpacity key={item.id} activeOpacity={0.6}>
                <Image source={item.path} style={styles.img} />
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity>
          <Image source={imagePath.more} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateTodoBottomTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.mediumGrey,
    height: 40,
    // alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  img: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  leftContainer: {
    flexDirection: 'row',
    columnGap: 20,
  },
  mainImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
