import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../Screens/Splash'
import Main from '../Screens/Main'
import AdminPortal from '../Screens/Admin/AdminPortal'
import AddStudents from '../Screens/Admin/AddStudents'
import AddFaculty from '../Screens/Admin/AddFaculty'
import Students from '../Screens/Admin/Students'
import Faculty from '../Screens/Admin/Faculty'
import Header from '../Screens/Admin/Header'
import Departments from '../Screens/Admin/Departments'
import Courses from '../Screens/Admin/Courses'
import FacultyDetail from '../Screens/Admin/FacultyDetail'
import StudentDetail from '../Screens/Admin/StudentDetail'
import EditStudent from '../Screens/Admin/EditStudent'
const stack=createNativeStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name='splash' component={Splash}/>
            <stack.Screen name='main' component={Main}/>
            <stack.Screen name='Admin Portal' component={AdminPortal}/>
            <stack.Screen name='Add Student' component={AddStudents} />
            <stack.Screen name='Add Faculty' component={AddFaculty} />
            <stack.Screen name='students' component={Students}/>
            <stack.Screen name='faculty' component={Faculty}/>
            <stack.Screen name='departments' component={Departments}/>
            <stack.Screen name='courses' component={Courses}/>
            <stack.Screen name='facultydetail' component={FacultyDetail}/>
            <stack.Screen name='studentdetail' component={StudentDetail}/>
            <stack.Screen name='editstudent' component={EditStudent}/>

        </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation