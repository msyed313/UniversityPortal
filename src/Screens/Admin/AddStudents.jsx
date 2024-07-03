import { Animated, View, Text, ImageBackground, StyleSheet, TextInput, Dimensions, Image, Pressable, TouchableOpacity, Platform } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';
import Header from './Header';

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
      <Header navigation={navigation}/>

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
        <Text style={styles.text}>Ph No</Text>
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
     <Pressable style={styles.addButton} >
        <Text style={styles.addButtonText}>Add Student</Text>
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
    backgroundColor: '#7a6f78',
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
  addButton: {
    right: 30,
    backgroundColor: 'teal',
    borderRadius: 10,
    width: width * 0.4,
    height: width * 0.12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-end',
    marginVertical:height*0.04
  },
  addButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
});
