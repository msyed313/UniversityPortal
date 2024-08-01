import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import TeacherHeader from './TeacherHeader'

const TeacherPortal = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
          <TeacherHeader navigation={navigation}/>
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
})
export default TeacherPortal