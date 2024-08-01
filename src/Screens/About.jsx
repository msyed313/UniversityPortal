import { View, Text, ImageBackground, StyleSheet, Dimensions,Pressable,Image } from 'react-native'
import React from 'react'
const {width,height}=Dimensions.get('window')
const About = () => {
  return (
    <ImageBackground source={require('../assets/CloudsBackground.png')} style={styles.main}>
    <View style={styles.header}>
           <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
           <Text style={styles.headerText}>About Us</Text>
     </View>
     <View style={styles.v1}>
         <Text style={styles.heading}>Director</Text>
         <Text style={styles.headingText}>Dr. Jamil Sawar</Text>
     </View>
     <View style={styles.v1}>
         <Text style={styles.heading}>Head of Department</Text>
         <Text style={styles.headingText}>Dr. Naseer Ahmed</Text>
     </View>
     <View style={styles.v1}>
         <Text style={styles.heading}>Project Overview</Text>
         <Text style={styles.headingText}>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Velit maiores dolorem, 
            reprehenderit nemo molestiae quaerat laudantium
             eligendi beatae corrupti illo, amet natus
              reiciendis. Aspernatur, voluptatibus! 
              Laboriosam autem doloribus sunt at</Text>
     </View>
</ImageBackground>
  )
}

export default About
const styles=StyleSheet.create({
    main:{
        flex:1,
        width:'100%',
        height:'100%',
        //alignItems:'center'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap:width*0.15
    },
    logo: {
        width: width * 0.12,
        height: width * 0.12,
        borderRadius:50
    },
    headerText: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        color: '#000',
    },
    v1:{
        marginVertical:height*0.01,
        alignItems:'center',
        gap:height*0.01,
        width:'90%',
        alignSelf:'center'
    },
    heading:{
        fontSize:width * 0.06,
        color:'black',
        fontWeight:'bold'
    },
    headingText:{
        fontSize:width * 0.05,
        textAlign:'justify',
        color:'blue',
    }
})