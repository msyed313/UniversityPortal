import { Animated, View, Text, ImageBackground, StyleSheet, TextInput, Dimensions, Image, Pressable, TouchableOpacity, Platform } from 'react-native';
import React from 'react';

import Header from './Header';
const { width, height } = Dimensions.get('window')
const EditStudent = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
            <Header navigation={navigation} />
            <View style={styles.v1}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.v1}>
                <Text style={styles.text}>Semester</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.v1}>
                <Text style={styles.text}>Ph no</Text>
                <TextInput style={styles.input} />
            </View>
            <Pressable style={styles.addButton} >
                <Text style={styles.addButtonText}>Edit Student</Text>
            </Pressable>
        </ImageBackground>
    )
}

export default EditStudent
const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    v1: {
        //flex:0.1,
        width: '100%',
        height: height * 0.09,
        //backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        marginVertical: width * 0.01,
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#7a6f78',
        width: '65%',
        //padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        color: 'white',
        fontSize: 18
    },
    text: {
        //flex:1,
        fontSize: width * 0.06,
        color: 'black',
        fontWeight: '500'
    },
    addButton: {
        right: 30,
        backgroundColor: 'teal',
        borderRadius: 10,
        width: width * 0.4,
        height: width * 0.12,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginVertical: height * 0.04
    },
    addButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '500',
    },
})