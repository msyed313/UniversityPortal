import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import StudentHeader from './StudentHeader'
const { width, height } = Dimensions.get('window')
const CurrentCourse = ({navigation}) => {
  const course = [
    {
      "id": 1,
      "name": 'Cyber-Security',
      "c_code": 'CYBS-2023S',
      "semester": 'spring 2023'
    },
    {
      "id": 2,
      "name": 'Information Technology and Infrastructure',
      "c_code": 'ITI-2023S',
      "semester": 'spring 2023'
    },
    {
      "id": 3,
      "name": 'Parallel and Distributed Computing',
      "c_code": 'PDC-2023S',
      "semester": 'spring 2023'
    },
    {
      "id": 4,
      "name": 'Software Engineering',
      "c_code": 'SE-2023S',
      "semester": 'spring 2023'
    }
  ]
  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
      <StudentHeader navigation={navigation}/>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.sv}>
          {course.map((item) => (
            <Pressable key={item.id} style={styles.courseItem}>
              <Image source={require('../../assets/graduation-cap.png')} style={styles.courseImage} />
              <View style={styles.courseItemView}>
                <Text style={styles.courseCode}>{item.c_code}</Text>
                <Text style={styles.courseText}>{item.name}</Text>
                <Text style={styles.courseSemester}>{item.semester}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <Pressable style={styles.backButton} onPress={()=>navigation.goBack()}>
            <Text style={styles.backButtonText}>Back</Text>
         </Pressable>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    height: height * 0.12,
    alignItems: 'center',
    marginHorizontal: width * 0.01,
    gap: width * 0.1
  },
  logo: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 50
  },
  headerText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: 'black'
  },
  scrollViewContainer: {
    height: height * 0.75, // Adjust the height as needed
    width: '90%',
    alignSelf: 'center',
    marginVertical: height * 0.03
  },
  sv: {
    //backgroundColor: 'red',
  },
  courseItem: {
    marginBottom: 20,
    backgroundColor: 'grey',
    borderRadius: 10
  },
  courseText: {
    fontSize: width * 0.045,
    color: 'black',
    fontWeight: '500',
    //textAlign:'left',
    width: '70%',
  },
  courseCode: {
    fontSize: width * 0.03,
    color: 'black',
    fontWeight: '500'
  },
  courseSemester: {
    fontSize: width * 0.035,
    color: 'white',
    backgroundColor: 'purple',
    width: '30%',
    textAlign: 'center',
    paddingVertical: height * 0.01,
    borderRadius: 50
  },
  courseImage: {
    height: width * 0.13,
    width: width * 0.13,
    alignSelf: 'center',
    marginVertical: height * 0.01,
    tintColor: 'white'
  },
  courseItemView: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: width * 0.02,
    gap: height * 0.01
  },
  backButton:{
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
backButtonText:{
    fontSize:width*0.05,
    color: '#fff',
    //fontWeight: 'bold',
}
})

export default CurrentCourse
