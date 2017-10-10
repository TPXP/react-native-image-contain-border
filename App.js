import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Without border</Text>
        <Image source={{uri:'http://lorempixel.com/output/abstract-q-c-640-480-7.jpg'}} style={styles.image_noborder} />
        <Text>With border</Text>
        <Image source={{uri:'http://lorempixel.com/output/abstract-q-c-640-480-7.jpg'}} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:640,
    height:480,
    maxHeight:'40%',
    maxWidth:'90%',
    resizeMode:'contain',
    borderWidth:1,
    borderColor:'black',
  },
  image_noborder: {
    width:640,
    height:480,
    maxHeight:'40%',
    maxWidth:'90%',
    resizeMode:'contain',
  }
});
