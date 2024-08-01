import { Animated, View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const { width, height } = Dimensions.get('window');

const Header = ({ navigation }) => {
  return (
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />
          <Text style={styles.headerText}>Admin Panel</Text>
        </View>
        </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: height * 0.02,
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
    zIndex: 1000,
  },
  menuText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    marginVertical: height * 0.01,
  },
});
