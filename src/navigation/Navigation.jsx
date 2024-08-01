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
import Contact from '../Screens/Contact'
import About from '../Screens/About'
import StudentPortal from '../Screens/Student/StudentPortal'
import CurrentCourse from '../Screens/Student/CurrentCourse'
import StudentProfile from '../Screens/Student/StudentProfile'
import StudentHeader from '../Screens/Student/StudentHeader'
import TeacherPortal from '../Screens/Teacher/TeacherPortal'
import Registration from '../Screens/Registration'
import Login from '../Screens/Login'
import MarkAttendance from '../Screens/Student/MarkAttendance'
import RequestLeave from '../Screens/Student/RequestLeave'
import AttendanceView from '../Screens/Student/AttendanceView'
import AttendanceRecord from '../Screens/Student/AttendanceRecord'
import ViewRecord from '../Screens/Admin/ViewRecord'
import PendingRequests from '../Screens/Admin/PendingRequests'
import Grades from '../Screens/Admin/Grades'
const stack=createNativeStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name='splash' component={Splash}/>
            <stack.Screen name='login' component={Login} />
            <stack.Screen name='Admin Portal' component={AdminPortal}/>
            <stack.Screen name='Student Portal' component={StudentPortal}/>
            <stack.Screen name='registration' component={Registration}/>
            <stack.Screen name='markattendance' component={MarkAttendance} />
            <stack.Screen name='requestleave' component={RequestLeave} />
            <stack.Screen name='viewrecord' component={ViewRecord} />
            <stack.Screen name='pendingrequests' component={PendingRequests} />
            <stack.Screen name='grades' component={Grades}/>
            <stack.Screen name='faculty' component={Faculty}/>
            <stack.Screen name='departments' component={Departments}/>
            <stack.Screen name='courses' component={Courses}/>
            <stack.Screen name='facultydetail' component={FacultyDetail}/>
            <stack.Screen name='studentdetail' component={StudentDetail}/>
            <stack.Screen name='editstudent' component={EditStudent}/>
            <stack.Screen name='contact' component={Contact}/>
            <stack.Screen name='about' component={About}/>
            <stack.Screen name='currentcourse' component={CurrentCourse} />
            <stack.Screen name='studentprofile' component={StudentProfile} />
            <stack.Screen name='attendancerecord' component={AttendanceRecord} />
            <stack.Screen name='Faculty Portal' component={TeacherPortal}/>
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation