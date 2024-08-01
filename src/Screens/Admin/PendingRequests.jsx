import { View, Text, ImageBackground, StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Api } from '../Urls';
const { width, height } = Dimensions.get('window');

const PendingRequests = ({ navigation }) => {
    const [pendingrequests, setPendingRequests] = useState([]);

    useEffect(() => {
        GetPendingRequests();
    }, []);

    const GetPendingRequests = async () => {
        try {
            const response = await fetch(`${Api}/Student/GetLeaveRequests`);
            const data = await response.json();
            if (response.ok) {
                setPendingRequests(data);
                console.log(data);
            }
        } catch (error) {
            console.log('Error', 'An error occurred while fetching the leave requests.');
            console.error('Fetch Error:', error);
        }
    };

    const UpdatePendingRequest = async (l_id, status) => {
        const formdata = new FormData();
        formdata.append('status', status);
        try {
            const response = await fetch(`${Api}/Student/UpdateLeaveRequests/${l_id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                },
                body: formdata
            });
            const data = await response.json();
            if (response.ok) {
                setPendingRequests((prevRequests) => 
                    prevRequests.filter((request) => request.LeaveID !== l_id)
                );
                console.log(data);
            }
        } catch (error) {
            console.log('Error', 'An error occurred while updating the request.');
            console.error('Update Error:', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
            <Header navigation={navigation} />
            <View style={styles.tableView}>
                <ScrollView horizontal>
                    <View style={styles.table}>
                        <View style={styles.tableHeaderView}>
                            <Text style={styles.tableHeaderText}>Name</Text>
                            <Text style={styles.tableHeaderText}>Reason</Text>
                            <Text style={styles.tableHeaderText}>Start</Text>
                            <Text style={styles.tableHeaderText}>End</Text>
                            <Text style={styles.tableHeaderText}>Actions</Text>
                        </View>
                        {pendingrequests?.map((item, index) => (
                            <View key={index} style={styles.tableRowView}>
                                <Text style={styles.tableRowText}>{item.Sname}</Text>
                                <Text style={styles.tableRowText}>{item.Reason}</Text>
                                <Text style={styles.tableRowText}>{formatDate(item.StartDate)}</Text>
                                <Text style={styles.tableRowText}>{formatDate(item.EndDate)}</Text>
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
        alignItems: 'center',
    },
    tableView: {
        width: '100%',
        height: height * 0.8,
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
    }
});

export default PendingRequests;
