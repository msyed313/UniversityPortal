import { Animated, View, Text, ImageBackground, StyleSheet, TextInput, Dimensions, Image, Pressable, TouchableOpacity, Platform } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';

const { width, height } = Dimensions.get('window');

const AddStudents = ({ navigation }) => {
  const [menu, setMenu] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width * 0.7)).current; // Initial value for the menu position
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menu ? 0 : -width * 0.7,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menu]);

  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />
          <Text style={styles.headerText}>Admin Portal</Text>
        </View>
        <Pressable onPress={toggleMenu}>
          <Image source={require('../../assets/menu.png')} style={styles.menuIcon} />
        </Pressable>
      </View>

      <View style={styles.view}>
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Reg No</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Phone No</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Dept</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Gender</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Address</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Date of Birth</Text>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <TextInput
            style={styles.input}
            editable={false}
            value={date.toDateString()}
            placeholder="Select Date"
          />
        </TouchableOpacity>
      </View>

      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      {/* Menu Bar */}
      <Animated.View style={[styles.menuView, { transform: [{ translateX: slideAnim }] }]}>
        <Pressable onPress={() => [toggleMenu, navigation.navigate('Add Student')]}>
          <Text style={styles.menuText}>Add Student</Text>
        </Pressable>
        <Pressable onPress={toggleMenu}>
          <Text style={styles.menuText}>Add Professor</Text>
        </Pressable>
        <Pressable onPress={toggleMenu}>
          <Text style={styles.menuText}>Departments</Text>
        </Pressable>
        <Pressable onPress={toggleMenu}>
          <Text style={styles.menuText}>Courses</Text>
        </Pressable>
        <Pressable onPress={toggleMenu}>
          <Text style={styles.menuText}>Students</Text>
        </Pressable>
        <Pressable onPress={toggleMenu}>
          <Text style={styles.menuText}>Faculty</Text>
        </Pressable>
        <Pressable onPress={toggleMenu}>
          <Text style={styles.menuText}>Logout</Text>
        </Pressable>
      </Animated.View>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Add</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default AddStudents;

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
  view: {
    width: '100%',
    height: width * 0.15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
    justifyContent: 'space-between',
    marginBottom: height * 0.01,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  input: {
    backgroundColor: 'teal',
    width: '75%',
    //padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color:'white',
    fontSize:18
  },
  menuView: {
    backgroundColor: 'skyblue',
    height: height * 0.8,
    width: width * 0.7,
    position: 'absolute',
    left: 0,
    marginVertical: height * 0.07,
    padding: width * 0.1,
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
});
