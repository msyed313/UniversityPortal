import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, Pressable, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';

const { width, height } = Dimensions.get('window');

const AdminPortal = ({ navigation }) => {
 return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
      <Header navigation={navigation}/>
      <View style={styles.v1}>
        <Text style={styles.infoText}>Total Students</Text>
        <Text style={styles.infoNumber}>1100</Text>
      </View>
      <View style={styles.v1}>
        <Text style={styles.infoText}>Total Teachers</Text>
        <Text style={styles.infoNumber}>32</Text>
      </View>
      
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default AdminPortal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Add a background to the header for better visibility
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  logo: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    resizeMode: 'contain',
  },
  menuIcon: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
  },
  v1: {
    width: '80%', // Make the containers wider
    height: height * 0.15,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  infoNumber: {
    fontSize: 24,
    color: '#000',
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
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  menuView: {
    backgroundColor: 'skyblue',
    height: height * 0.8,
    width: width * 0.7,
    position: 'absolute',
    left: 0,
    marginVertical: height * 0.07,
    padding: width * 0.07,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    marginVertical: height * 0.01,
  },
});
