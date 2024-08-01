import { View, Text,Pressable,Image,StyleSheet, Dimensions } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { imgurl } from '../Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
const{width,height}=Dimensions.get('window')
const StudentHeader = ({navigation}) => {
    const [imagename, setImageName] = useState(null);
    useEffect(() => {
        retrieveData();
      }, []);
    
      const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('student');
          if (value !== null) {
            //console.log(value);
            const parsedData = JSON.parse(value);
            //setData(parsedData);
            setImageName( parsedData.ImageName);
          }
        } catch (error) {
          console.error('Error retrieving data:', error);
        }
      };
    return (
        <View style={styles.header}>
            <Pressable onPress={() => navigation.navigate('studentprofile')}>
            {imagename ? (
          <Image source={{ uri: imgurl+imagename }} style={styles.profileImage} />
        ) : (
          <Image source={require('../../assets/profile.png')} style={styles.profileImage} />
        )}
            </Pressable>
            <Text style={styles.headerText}>Student Panel</Text>
            
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        //flex:1,
        backgroundColor:'rgba(255, 255, 255, 0.8)',
        width:'100%',
        flexDirection:'row',
        height:height*0.08,
        alignItems:'center',
        paddingHorizontal:width*0.01,
        gap:width*0.1
    },
    profileImage:{
        //flex:1,
        width:width*0.13,
        height:width*0.13,
        borderRadius:50
    },
    headerText:{
        //flex:1,
        fontSize:width*0.06,
        fontWeight:'bold',
        color:'black'
    },
})
export default StudentHeader