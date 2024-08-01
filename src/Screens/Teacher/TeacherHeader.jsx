import { View, Text,Pressable,Image,StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const{width,height}=Dimensions.get('window')

const TeacherHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
            <Pressable onPress={() => navigation.navigate('studentprofile')}>
                <Image source={require('../../assets/mypic.jpeg')} style={styles.logo} />
            </Pressable>
            <Text style={styles.headerText}>Faculty Portal</Text>
        </View>
  )
}
const styles=StyleSheet.create({
    header:{
        //flex:1,
        backgroundColor:'rgba(255, 255, 255, 0.8)',
        width:'100%',
        flexDirection:'row',
        height:height*0.09,
        alignItems:'center',
        paddingHorizontal:width*0.01,
        gap:width*0.1
    },
    logo:{
        //flex:1,
        width:width*0.15,
        height:width*0.15,
        borderRadius:50
    },
    headerText:{
        //flex:1,
        fontSize:width*0.07,
        fontWeight:'bold',
        color:'black'
    },
})
export default TeacherHeader