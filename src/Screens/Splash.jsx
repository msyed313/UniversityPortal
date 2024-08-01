import { View, Text, Image, StyleSheet, Dimensions, StatusBar, useAnimatedValue, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
const { width, height } = Dimensions.get('window')
const Splash = ({ navigation }) => {
  const anim = useRef(new Animated.Value(0)).current;
  const animation = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 2000, // Adjust duration as needed
      useNativeDriver: true,
    }).start(() => {
      const timer = setTimeout(() => {
        navigation.navigate('login');
      }, 500);

      return () => clearTimeout(timer);
    });
  }
  useEffect(() => {

    animation()
  }, []);

  return (
    <View style={style.main}>
      <StatusBar backgroundColor="skyblue" barStyle="light-content" />
      <Animated.Image source={require('../assets/logo.jpeg')}
        style={[
          style.logo,
          {opacity: anim},
        ]}
      />
      <Text style={style.text}>BIIT Portal</Text>
    </View>
  )
}

export default Splash
const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'white',
    width: '100%',
    height: '100%',
    backgroundColor: 'skyblue'
  },
  logo: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: 100
  },
  text: {
    fontSize: width * 0.1,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: height * 0.03
  }
})