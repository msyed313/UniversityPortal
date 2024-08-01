import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput, Button, FlatList, Alert, ImageBackground, Pressable } from 'react-native';
import Header from './Header';
import DatePicker from 'react-native-date-picker';
import { Api } from '../Urls';
const { width, height } = Dimensions.get('window')
const Grades = ({ navigation }) => {
  const [grades, setGrades] = useState([]);
  const [days, setDays] = useState('');
  const [grade, setGrade] = useState('');
  const [startcurrentdate, setStartCurrentDate] = useState(new Date());
  const [startopen, setStartOpen] = useState(false);
  const [endcurrentdate, setEndCurrentDate] = useState(new Date());
  const [endopen, setEndOpen] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [pendingrequests, setPendingRequests] = useState([]);
  useEffect(() => {
    if (studentName && startcurrentdate && endcurrentdate) {
      fetchAttendanceSummary();
    }
  }, [startcurrentdate, endcurrentdate, studentName]);

  const fetchAttendanceSummary = async () => {
    try {
      // Construct the query parameters
      const params = new URLSearchParams({
        studentName,
        start: startcurrentdate.toISOString().split('T')[0], // Format as YYYY-MM-DD
        end: endcurrentdate.toISOString().split('T')[0]
      });

      // Fetch the attendance summary
      const response = await fetch(`${Api}/Student/GetAttendanceSummary?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response as JSON
      const data = await response.json();
      const { TotalPresents, TotalAbsents } = data;

      // Determine the grade based on the total presents
      let grade = '';
      if (TotalPresents >= 26) grade = 'A';
      else if (TotalPresents >= 20) grade = 'B';
      else if (TotalPresents >= 15) grade = 'C';
      else if (TotalPresents >= 10) grade = 'D';
      else grade = 'F'; // Optional: Handle cases with less than 10 presents

      // Update the state with the fetched data
      setGrades([{ studentName, TotalPresents, TotalAbsents, grade }]);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch attendance summary');
    }
  };

  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
      <Header navigation={navigation} />

      <Text style={styles.title}>Generate Grade Report</Text>
      <View style={styles.view}>
        <Text style={styles.text}>Start Month</Text>
        <Pressable onPress={() => setStartOpen(true)}>
          <TextInput
            style={styles.input}
            editable={false}
            value={startcurrentdate.toLocaleDateString()}
            placeholder="Select Date"
          />
        </Pressable>
      </View>
      <DatePicker
        modal
        mode="date"
        open={startopen}
        date={startcurrentdate}
        onConfirm={(date) => {
          setStartOpen(false);
          setStartCurrentDate(date);
        }}
        onCancel={() => {
          setStartOpen(false);
        }}
      />
      <View style={styles.view}>
        <Text style={styles.text}>End Month</Text>
        <Pressable onPress={() => setEndOpen(true)}>
          <TextInput
            style={styles.input}
            editable={false}
            value={endcurrentdate.toLocaleDateString()}
            placeholder="Select Date"
          />
        </Pressable>
      </View>
      <DatePicker
        modal
        mode="date"
        open={endopen}
        date={endcurrentdate}
        onConfirm={(date) => {
          setEndOpen(false);
          setEndCurrentDate(date);
        }}
        onCancel={() => {
          setEndOpen(false);
        }}
      />
      <View style={styles.view}>
        <Text style={styles.text}>Student Name</Text>
        <TextInput
          style={[styles.input, { width: '50%' }]}
          placeholder="student name"
          value={studentName}
          onChangeText={setStudentName}
        />
      </View>
      <View style={styles.table}>
        <View style={styles.tableHeaderView}>
          <Text style={styles.tableHeaderText}>Name</Text>
          <Text style={styles.tableHeaderText}>Presents</Text>
          <Text style={styles.tableHeaderText}>Absents</Text>
          <Text style={styles.tableHeaderText}>Grade</Text>
          <Text style={styles.tableHeaderText}>Actions</Text>
        </View>
        {grades?.map((item, index) => (
          <View key={index} style={styles.tableRowView}>
            <Text style={styles.tableRowText}>{item.studentName}</Text>
            <Text style={styles.tableRowText}>{item.TotalPresents}</Text>
            <Text style={styles.tableRowText}>{item.TotalAbsents}</Text>
            <Text style={styles.tableRowText}>{item.grade}</Text>
            <View style={styles.tableButtonView}>
              <Pressable style={[styles.tableButton]} onPress={() => { UpdatePendingRequest(item.LeaveID, 'approve') }}>
                <Text style={[styles.editText,]}>Approve</Text>
              </Pressable>
              <Pressable style={[styles.tableButton]} onPress={() => { UpdatePendingRequest(item.LeaveID, 'reject') }}>
                <Text style={[styles.viewText]}>Reject</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: width * 0.08,
    marginBottom: 20,
    color:'blue',
    fontWeight:'500'
  },
  view: {
    width: '90%',
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
    backgroundColor: 'white',
    width: '100%',
    //padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: 'black',
    fontSize: 18
  },
  table: {
    width: '100%',
  },
  tableHeaderView: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#28b5b5',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.02,
  },
  tableHeaderText: {
    fontSize: width * 0.05,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    width: width * 0.25, // Adjusted width for consistent spacing
  },
  tableRowView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableRowText: {
    fontSize: width * 0.045,
    color: 'black',
    textAlign: 'center',
    width: width * 0.25, // Adjusted width for consistent spacing
  },
  tableButtonView: {
    flexDirection: 'column',
    width: width * 0.25,
    alignItems: 'center'
  },
  tableButton: {
    padding: width * 0.02,
  },
  editText: {
    textDecorationLine: 'underline',
    color: 'red',
    fontSize: width * 0.045
  },
  viewText: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: width * 0.045
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
})
export default Grades