import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../Screens/Splash'
import Main from '../Screens/Main'
import AdminPortal from '../Screens/Admin/AdminPortal'
import AddStudents from '../Screens/Admin/AddStudents'
const stack=createNativeStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name='splash' component={Splash}/>
            <stack.Screen name='main' component={Main}/>
            <stack.Screen name='Admin Portal' component={AdminPortal}/>
            <stack.Screen name='Add Student' component={AddStudents} />
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation