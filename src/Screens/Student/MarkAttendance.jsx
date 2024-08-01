// screens/AttendanceScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert, ImageBackground, Pressable, Dimensions } from 'react-native';
//import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Api } from '../Urls';
import StudentHeader from './StudentHeader';
const { width, height } = Dimensions.get('window')
const MarkAttendance = ({navigation}) => {
  const [hasMarkedToday, setHasMarkedToday] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    //checkAttendance();
    retrieveData()
  }, []);
  useEffect(() => {
    checkAttendance();
    
  }, [id]);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('student');
      if (value !== null) {
        const parsedData = JSON.parse(value);
        console.log(parsedData);
        setId(parsedData.S_id);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  const checkAttendance = async () => {
    try {
      const response = await fetch(`${Api}/Student/GetTodayAttendance/${id}`);
      const data = await response.json()
      if (response.ok) {
         if (data == 'No attendance marked') {
             console.log(data);
         }
        else {
          setHasMarkedToday(true);
        }
      }

    } catch (error) {
      console.error(error);
    }
  };
  const formdata=new FormData()
  formdata.append('status','present')
  const markAttendance = async () => {
    try {
      const response= await fetch(`${Api}/Student/MarkAttendance/${id}`,{
        method:'POST',
        headers: {
          Accept: 'application/json',
        },
        body:formdata
      });
      const data=await response.json()
      if(response.ok){
          setHasMarkedToday(true);
          console.log(data);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to mark attendance');
    }
  };

  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.container}>
      <StudentHeader navigation={navigation} />
      <Text style={styles.title}>Mark Your Attendance</Text>
      {hasMarkedToday ? (
        <Text style={styles.attendanceText}>You have already marked your attendance today.</Text>
      ) : (
        <Pressable style={styles.press} onPress={markAttendance}>
          <Text style={styles.pressText}>Mark Attendance</Text>
        </Pressable>

      )}
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.075,
    marginTop: height*0.05,
    color: 'black',
    fontWeight: '500',
    marginBottom:height*0.03
  },
  press: {
    backgroundColor: '#7E25D7',
    width: '50%',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: width * 0.02
  },
  pressText: {
    fontSize: width * 0.05,
    color: 'white',
    fontWeight: '400'
  },
  attendanceText: {
    fontSize: width * 0.04,
    color: 'black',
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

export default MarkAttendance;
