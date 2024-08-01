import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { imgurl } from '../Urls';

const { width, height } = Dimensions.get('window');

const StudentProfile = ({ navigation }) => {
  const [data, setData] = useState({});
  const [imagename, setImageName] = useState();

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('student');
      if (value !== null) {
        const parsedData = JSON.parse(value);
        //console.log(parsedData);
        setData(parsedData);
        setImageName( parsedData.ImageName);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
      <View style={styles.container}>
        {imagename? (
          <Image source={{ uri: imgurl+imagename }} style={styles.profileImage} />
        ) : (
          <Image source={require('../../assets/profile.png')} style={styles.profileImage} />
        )}
        <View style={styles.profileDetail}>
          <Text style={styles.profileDetailHeading}>Name:</Text>
          <Text style={styles.profileDetailText}>{data.Sname || 'N/A'}</Text>
        </View>
        <View style={styles.profileDetail}>
          <Text style={styles.profileDetailHeading}>Email:</Text>
          <Text style={styles.profileDetailText}>{data.Email || 'N/A'}</Text>
        </View>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate('login')}>
          <Text style={styles.backButtonText}>Logout</Text>
        </Pressable>
        <Text>{imgurl+imagename}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: width * 0.05,
    alignItems: 'center',
    marginVertical: height * 0.05,
    bottom: 0,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: (width * 0.25) / 2,
    marginTop: -width * 0.125,
  },
  profileDetail: {
    width: '90%',
    padding: height * 0.01,
    marginVertical: height * 0.005,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileDetailHeading: {
    fontSize: width * 0.045,
    color: 'black',
    fontWeight: '600',
    width: '40%',
  },
  profileDetailText: {
    fontSize: width * 0.045,
    color: 'black',
    fontWeight: '400',
    width: '60%',
    textAlign: 'justify',
  },
  backButton: {
    left: 30,
    backgroundColor: 'teal',
    borderRadius: 10,
    width: width * 0.2,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: width * 0.05,
    color: '#fff',
  },
});

export default StudentProfile;
