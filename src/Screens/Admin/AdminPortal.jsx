import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, Pressable, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';

const { width, height } = Dimensions.get('window');

const AdminPortal = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
      <Header navigation={navigation} />
      <Pressable style={styles.heading} onPress={() => navigation.navigate('viewrecord')}>
        <Text style={styles.headingText}>View Record</Text>
      </Pressable>
      <Pressable style={styles.heading} onPress={() => navigation.navigate('pendingrequests')}>
        <Text style={styles.headingText}>Leaves</Text>
      </Pressable>
      <Pressable style={styles.heading} onPress={() => navigation.navigate('grades')}>
        <Text style={styles.headingText}>Grades</Text>
      </Pressable>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>logout</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default AdminPortal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    //alignItems: 'center',
     width:'100%',
    height:'100%',
  },
  heading: {
    backgroundColor: 'white',
    width: '50%',
    marginHorizontal: width * 0.03,
    height: height * 0.05,
    marginVertical: width * 0.02,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: width * 0.045,
    color: 'black'
  },

  backButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: 'teal',
    borderRadius: 10,
    width: width * 0.2,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    fontSize: width * 0.05,
    color: '#fff',
    //fontWeight: 'bold',
  },
  
});
