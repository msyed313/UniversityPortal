import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import StudentHeader from './StudentHeader'
const {width,height}=Dimensions.get('window')
const StudentPortal = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
         <StudentHeader navigation={navigation}/>
         <Pressable style={styles.heading} onPress={()=>navigation.navigate('markattendance')}>
            <Text style={styles.headingText}>Mark Attendance</Text>
         </Pressable>
         <Pressable style={styles.heading} onPress={()=>navigation.navigate('requestleave')}>
            <Text style={styles.headingText}>Request Leave</Text>
         </Pressable>
         <Pressable style={styles.heading} onPress={()=>navigation.navigate('attendancerecord')}>
            <Text style={styles.headingText}>View Attendance</Text>
         </Pressable>
         <Pressable style={styles.backButton} onPress={()=>navigation.goBack()}>
            <Text style={styles.backButtonText}>Back</Text>
         </Pressable>
         
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        width:'100%',
        height:'100%',
        //alignItems:'center'
    },
    heading:{
        //flex:1,
        backgroundColor:'white',
        width:'50%',
        marginHorizontal:width*0.03,
        height:height*0.05,
        marginVertical:width*0.03,
        borderRadius:50,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center'
    },
    headingText:{
        fontSize:width*0.045,
        color:'black'
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
export default StudentPortal