import { Animated, View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const { width, height } = Dimensions.get('window');

const Header = ({ navigation }) => {
  const [menu, setMenu] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width * 0.7)).current;

  const toggleMenu = (item) => {
    setMenu(!menu);
    if (item) {
      navigation.navigate(item);
    }
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menu ? 0 : -width * 0.7,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menu]);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />
          <Text style={styles.headerText}>Admin Portal</Text>
        </View>
        <Pressable onPress={() => toggleMenu()}>
          <Image source={require('../../assets/menu.png')} style={styles.menuIcon} />
        </Pressable>
      </View>
      <Animated.View style={[styles.menuView, { transform: [{ translateX: slideAnim }] }]}>
      <Pressable onPress={() => toggleMenu('Admin Portal')}>
          <Text style={styles.menuText}>Home</Text>
        </Pressable>
        <Pressable onPress={() => toggleMenu('Add Student')}>
          <Text style={styles.menuText}>Add Student</Text>
        </Pressable>
        <Pressable onPress={() => toggleMenu('Add Faculty')}>
          <Text style={styles.menuText}>Hire Professor</Text>
        </Pressable>
        <Pressable onPress={() => toggleMenu('departments')}>
          <Text style={styles.menuText}>Departments</Text>
        </Pressable>
        <Pressable onPress={() => toggleMenu('courses')}>
          <Text style={styles.menuText}>Courses</Text>
        </Pressable>
        <Pressable onPress={() => toggleMenu('students')}>
          <Text style={styles.menuText}>Students</Text>
        </Pressable>
        <Pressable onPress={() => toggleMenu('faculty')}>
          <Text style={styles.menuText}>Faculty</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.menuText}>Logout</Text>
        </Pressable>
      </Animated.View>
    </>
  );
}

export default Header;

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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: height * 0.07,
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
