import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Alert, Dimensions, ImageBackground } from 'react-native';
import DatePicker from 'react-native-date-picker';
const { width, height } = Dimensions.get('window')
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Api } from '../Urls';
import StudentHeader from './StudentHeader';
const RequestLeave = ({navigation}) => {
    const [reason, setReason] = useState('');
    const [startcurrentdate, setStartCurrentDate] = useState(new Date());
    const [startopen, setStartOpen] = useState(false);
    const [endcurrentdate, setEndCurrentDate] = useState(new Date());
    const [endopen, setEndOpen] = useState(false);
    const [id, setId] = useState();
    useEffect(() => {
        //checkAttendance();
        retrieveData()
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
    const formdata = new FormData()
    formdata.append('reason', reason)
    formdata.append('start', startcurrentdate.toISOString())
    formdata.append('end', endcurrentdate.toISOString())
    const submitLeaveRequest = async () => {
        try {
            const response = await fetch(`${Api}/Student/RequestLeave/${id}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formdata
            });
            const data = await response.json()
            if (response.ok) {
                Alert.alert(data)
                setReason(''),
                    setStartCurrentDate(new Date()),
                    setEndCurrentDate(new Date())
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to submit leave request');
        }
    };
    return (
        <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
            <StudentHeader navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.title}>Request Leave</Text>

                <View style={styles.view}>
                    <Text style={styles.text}>Reason</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Reason for leave"
                        value={reason}
                        onChangeText={setReason}
                    />
                </View>

                <View style={styles.view}>
                    <Text style={styles.text}>Start Date</Text>
                    <Pressable onPress={() => setStartOpen(true)}>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={startcurrentdate.toDateString()}
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
                    <Text style={styles.text}>End Date</Text>
                    <Pressable onPress={() => setEndOpen(true)}>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={endcurrentdate.toDateString()}
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
                <Pressable style={styles.press} onPress={submitLeaveRequest}>
                    <Text style={styles.pressText}>Send Request</Text>
                </Pressable>
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
        alignItems: 'center',
    },
    container: {
        // backgroundColor: 'red',
        marginTop:width * 0.1,
        width: '90%',
        padding: width * 0.02,
        alignItems: 'center',
    },
    title: {
        fontSize: width * 0.1,
        marginBottom: 20,
        color: 'black',
        fontWeight:'500'
    },
    reasonInput: {
        width: '90%',
        height: height * 0.08,
        padding: width * 0.02,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        borderRadius: 5,
    },
    press: {
        backgroundColor: '#7E25D7',
        width: '60%',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: width * 0.02
    },
    pressText: {
        fontSize: width * 0.05,
        color: 'white',
        fontWeight: '400'
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
        backgroundColor: 'white',
        width: '75%',
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

export default RequestLeave;
