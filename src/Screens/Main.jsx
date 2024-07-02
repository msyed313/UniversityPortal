import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

const Main = ({navigation}) => {
    const[login,setLogin]=useState(true)
    const data = [
        {
            "name": "Admin Portal",
            "image": require('../assets/admin.jpeg'),
        },
        {
            "name": "Faculty Portal",
            "image": require('../assets/admin.jpeg')
        },
        {
            "name": "Student Portal",
            "image": require('../assets/student.jpeg')
        }
    ];

    return (
        <ImageBackground source={require('../assets/CloudsBackground.png')} style={styles.main}>
            <View style={styles.header}>
                <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Barani Institute of Information and Technology</Text>
                    <Text style={styles.headerSubText}>6 Road Satellite Town, Rawalpindi</Text>
                </View>
            </View>
            {data.map((item, index) => (
                <Pressable style={styles.v2} key={index} onPress={() => {login ? navigation.navigate(item.name) : navigation.navigate('login')}}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Image source={item.image} style={styles.img} />
                </Pressable>
            ))}
        </ImageBackground>
    );
};

export default Main;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius:50
    },
    headerTextContainer: {
        marginLeft: 10,
        flex: 1,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    headerSubText: {
        fontSize: 14,
        color: '#333',
    },
    v2: {
        width: width * 0.8, // 80% of the screen width
        height: height * 0.25, // 25% of the screen height
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with transparency
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginVertical: height * 0.02, // Adjust spacing between items
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    img: {
        width: '80%',
        height: '100%',
        borderRadius: 10,
        //resizeMode: 'contain'
    },
});
