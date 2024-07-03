import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
const Departments = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
         <Header navigation={navigation}/>
    </ImageBackground>
  )
}

export default Departments
const styles=StyleSheet.create({
  main:{
      flex:1,
      alignItems:'center'
  }
})