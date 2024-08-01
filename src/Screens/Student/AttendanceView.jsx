import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
//import axios from 'axios';

const AttendanceView = () => {
  const [attendance, setAttendance] = useState([]);
  const data = [
    { srno: '1', Date: 'jul/06/2024' , Status:'present' },
    { srno: '2', Date: 'jul/06/2024' , Status:'absent' },
    { srno: '3', Date: 'jul/06/2024' , Status:'absent' },
    { srno: '4', Date: 'jul/06/2024' , Status:'present' },
    { srno: '5', Date: 'jul/06/2024' , Status:'absent' },
    { srno: '6', Date: 'jul/06/2024' , Status:'present' },
    { srno: '7', Date: 'jul/06/2024' , Status:'present' },

    // Add more rows as needed
];
  {/*useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await axios.get('http://your-backend-url/attendance');
      setAttendance(response.data);
    } catch (error) {
      console.error(error);
    }
  };*/}

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.Date}: {item.Status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance History</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.Date}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default AttendanceView;
