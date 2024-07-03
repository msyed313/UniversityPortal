import { View, Text, Image, StyleSheet, ImageBackground,StatusBar } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('main');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, [navigation]);
 
  return (
    <View style={style.main}>
        <StatusBar backgroundColor="skyblue" barStyle="light-content" />
        <Image source={require('../assets/logo.jpeg')} style={style.logo}/>
        <Text style={style.text}>BIIT Portal</Text>
     </View>
  )
}

export default Splash
const style=StyleSheet.create({
  main:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      width:'100%',
      height:'100%',
      //backgroundColor:'skyblue'
  },
  logo:{
    resizeMode:'center',
    //backgroundColor:'red',
    height:'30%'
  },
  text:{
    fontSize:30,
    color:'black',
    fontWeight:'bold'
  }
})