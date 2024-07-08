import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../src/constants/color';
import imagePath from '../src/constants/imagePath';
import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const CreateTodoBottomTab = ({colorPicker}) => {
  const [isModalVisible, setModalVisible] = useState(true);
  const [isColor, setIsColor] = useState(false);

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

  const colors = [
    {
      id: 0,
      color: '#9e0c39',
    },
    {
      id: 1,
      color: '#4d6160',
    },
    {
      id: 2,
      color: '#d6a692',
    },
    {
      id: 3,
      color: '#028f76',
    },
    {
      id: 4,
      color: '#355c7d',
    },
    {
      id: 5,
      color: '#f67280',
    },
    {
      id: 6,
      color: '#493736',
    },
    {
      id: 7,
      color: '#e2ddd9',
    },
  ];
  const handleBottomClick = title => {
    if (title === 'color') {
      console.log('clicked');
      setModalVisible(true);
    }
  };
  const handleColorPicker = color => {
    colorPicker(color);
  };
  const ColorModalView = () => {
    return (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        // deviceWidth={deviceWidth}
        // deviceHeight={deviceHeight}
        backdropOpacity={0}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.colorContainer} horizontal>
            {colors.map(item => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleColorPicker(item.color)}
                  style={[styles.colorPicker, {backgroundColor: item.color}]}
                  key={item.id}
                />
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainImageContainer}>
        <View style={styles.leftContainer}>
          {data.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.6}
                onPress={() => handleBottomClick(item.title)}>
                <Image source={item.path} style={styles.img} />
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity>
          <Image source={imagePath.more} style={styles.img} />
        </TouchableOpacity>
      </View>
      {isModalVisible && ColorModalView()}
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
  modalContainer: {
    flex: 1,
    backgroundColor: color.mediumGrey,
    width: deviceWidth,
    height: '20%',
    borderRadius: 15,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -30,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20,
    paddingHorizontal: 10,
  },
  colorPicker: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: color.white,
  },
});
