import { View, Text, ImageBackground, StyleSheet, TextInput, Dimensions, Pressable, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from './Header';
const { width, height } = Dimensions.get('window')
import { Api } from '../Urls';

const ViewRecord = ({ navigation }) => {
    const [attendance, setAttendance] = useState([]);
    const [id, setId] = useState('');

    const GetRecord = async () => {
        try {
            const response = await fetch(`${Api}/Student/GetAttendance/${id}`);
            const data = await response.json();
            if (response.ok) {
                setAttendance(data);
                console.log('Attendance Data:', data);
            } else {
                console.log('Failed to fetch attendance records');
            }
        } catch (error) {
            console.error('Error fetching attendance records:', error);
        }
    };

    const UpdateMarkAttendance = async (a_id) => {
        try {
            const response = await fetch(`${Api}/Student/UpdateMarkAttendance/${a_id}`, {
                method: 'PUT',
            });
            const data = await response.json();
            if (response.ok) {
                setAttendance((prevRequests) =>
                    prevRequests.filter((request) => request.AttendanceID !== a_id)
                );
                console.log('Updated Attendance Data:', data);
            } else {
                console.log('Failed to update attendance record');
            }
        } catch (error) {
            console.error('Error updating attendance record:', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
            <Header navigation={navigation} />
            <View style={styles.view}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter ID to get record"
                    value={id}
                    onChangeText={setId}
                />
                <Pressable style={styles.press} onPress={GetRecord}>
                    <Text style={styles.text}>Search</Text>
                </Pressable>
            </View>
            <View style={styles.tableContainer}>
                <View style={styles.tableHeaderView}>
                    <Text style={styles.tableHeaderText}>Srno</Text>
                    <Text style={styles.tableHeaderText}>Date</Text>
                    <Text style={styles.tableHeaderText}>Status</Text>
                    <Text style={styles.tableHeaderText}>Action</Text>
                </View>
                <ScrollView>
                    {attendance.map((item, index) => (
                        <View key={index} style={[styles.tableRowView, index % 2 && styles.tableRowAlt]}>
                            <Text style={styles.tableRowText}>{index + 1}</Text>
                            <Text style={styles.tableRowText}>{formatDate(item.AttendanceDate)}</Text>
                            <Text style={styles.tableRowText}>{item.IsPresent ? 'Present' : 'Absent'}</Text>
                            <Pressable
                                style={styles.deleteButton}
                                onPress={() => UpdateMarkAttendance(item.AttendanceID)}
                            >
                                <Text style={styles.deleteButtonText}>Delete</Text>
                            </Pressable>
                        </View>
                    ))}
                </ScrollView>

            </View>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back</Text>
            </Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center'
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
        color: 'white',
    },
    input: {
        backgroundColor: 'white',
        width: '60%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        color: 'black',
        fontSize: 18
    },
    press: {
        backgroundColor: '#7E25D7',
        width: '30%',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: width * 0.02
    },
    tableContainer: {
        width: '95%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginVertical: height * 0.05,
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
    },
    tableRowAlt: {
        backgroundColor: '#f2f2f2',
    },
    tableRowText: {
        fontSize: width * 0.05,
        color: 'black',
        width: '25%',
        textAlign: 'center',
    },
    deleteButton: {
        width: '25%',
        backgroundColor: '#7E25D7',
        alignItems: 'center',
        height: '100%',
        borderRadius: 30
    },
    deleteButtonText: {
        color: 'white',
        fontSize: width * 0.05,
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
    }
});

export default ViewRecord;
