import { View, Text, Image, StyleSheet, ImageBackground,StatusBar } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('main');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, [navigation]);
 
  return (
    <ImageBackground source={require('../assets/CloudsBackground.png')} style={style.main}>
        <StatusBar backgroundColor="skyblue" barStyle="light-content" />
        <Text>Welcome to University Portal</Text>
     </ImageBackground>
  )
}

export default Splash
const style=StyleSheet.create({
  main:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  
})