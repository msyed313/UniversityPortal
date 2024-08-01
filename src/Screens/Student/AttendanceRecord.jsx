import { View, Text, ImageBackground, StyleSheet,Pressable, Dimensions, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import StudentHeader from './StudentHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
import { Api } from '../Urls';

const AttendanceRecord = ({ navigation }) => {
  const [attendance, setAttendance] = useState([]);
  const [id, setId] = useState();
  useEffect(() => {
    retrieveData();
  }, []);

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
  useEffect(() => {
    GetRecord()
  }, [id])
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  const GetRecord = async () => {
    try {
      const response = await fetch(`${Api}/Student/GetAttendance/${id}`);
      const data = await response.json();
      if (response.ok) {
        setAttendance(data)
      }

    } catch (error) {
      console.log('Error', 'An error occurred while logging in.');
      console.error('Login Error:', error);
    }
  };
  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
      <StudentHeader navigation={navigation} />
      <View style={styles.tableContainer}>
        <View style={styles.tableHeaderView}>
          <Text style={styles.tableHeaderText}>Srno</Text>
          <Text style={styles.tableHeaderText}>Date</Text>
          <Text style={styles.tableHeaderText}>Status</Text>
        </View>
        <ScrollView>
        {attendance.map((item, index) => (
          
          <View key={index} style={[styles.tableRowView, index % 2 && styles.tableRowAlt]}>
            <Text style={styles.tableRowText}>{index + 1}</Text>
            <Text style={styles.tableRowText}>{formatDate(item.AttendanceDate)}</Text>
            <Text style={styles.tableRowText}>{item.IsPresent}</Text>
          </View>
         
        ))}
         </ScrollView>
      </View>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back</Text>
            </Pressable>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  scrollView: {
    width: '100%',
  },
  tableContainer: {
    width: '90%', // Ensures the content is wider than the screen to enable horizontal scrolling
    //flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    //overflow: 'hidden',
    elevation: 5, // for Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginVertical: height * 0.1,
  },
  tableHeaderView: {
    flexDirection: 'row',
    backgroundColor: '#28b5b5',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.03,
    justifyContent: 'space-around',
  },
  tableHeaderText: {
    fontSize: width * 0.06,
    color: 'black',
    fontWeight: 'bold',
    width: '40%',
    textAlign: 'center',
  },
  tableRowView: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.03,
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // backgroundColor:'red'
  },
  tableRowAlt: {
    backgroundColor: '#f2f2f2',
  },
  tableRowText: {
    fontSize: width * 0.05,
    color: 'black',
    width: '40%',
    textAlign: 'center',
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

export default AttendanceRecord;
