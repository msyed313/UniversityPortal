import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Header from './Header'

const { height, width } = Dimensions.get('window')

const Faculty = ({ navigation }) => {
  const faculty = [
    {
      "id": 1,
      "Name": 'Shahid Jamil',
      "Dept": "IT",
      "position": 'Assistant Prof'
    },
    {
      "id": 2,
      "Name": 'Dr. Hassan',
      "Dept": "AI",
      "position": 'Assistant Prof'
    },
    {
      "id": 3,
      "Name": 'Umer Farooq',
      "Dept": "CS",
      "position": 'Assistant Prof'
    },
    {
      "id": 4,
      "Name": 'Aftab Khan',
      "Dept": "IT",
      "position": 'Assistant Prof'
    },
    {
      "id": 5,
      "Name": 'Tayyaba Basir',
      "Dept": "AI",
      "position": 'Lecturer'
    },
    {
      "id": 6,
      "Name": 'Afrasiab Kaikobad',
      "Dept": "CS",
      "position": 'Lecturer'
    },
    {
      "id": 7,
      "Name": 'Zerafshan Gohar',
      "Dept": "IT",
      "position": 'Assistant Prof'
    },
    {
      "id": 8,
      "Name": 'Adeela Mushtaq',
      "Dept": "CS",
      "position": 'Junior lec'
    },
    {
      "id": 9,
      "Name": 'Mona Ali',
      "Dept": "AI",
      "position": 'Junior lec'
    },
    {
      "id": 10,
      "Name": 'Raja Waqar',
      "Dept": "CS",
      "position": 'Lecturer'
    },
    {
      "id": 11,
      "Name": 'Waseen Punnu',
      "Dept": "IT",
      "position": 'Junior lec'
    }
  ]

  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
      <Header navigation={navigation} />
      <View style={styles.tableView}>
        <ScrollView>
          <View style={styles.tableHeaderView}>
            <Text style={styles.tableHeaderText}>Name</Text>
            <Text style={styles.tableHeaderText}>Dept</Text>
            <Text style={styles.tableHeaderText}>Role</Text>
            <Text style={styles.tableHeaderText}>Actions</Text>
          </View>
          {faculty.map((item) => (
            <View key={item.id} style={styles.tableContentView}>
              <Text style={styles.tableContentText}>{item.Name}</Text>
              <Text style={styles.tableContentText}>{item.Dept}</Text>
              <Text style={styles.tableContentText}>{item.position}</Text>
              <View style={styles.tableButtonView}>
                <Pressable style={styles.tableButton}>
                  <Text style={[styles.tableContentText, styles.editText]} >Edit</Text>
                </Pressable>
                <Pressable style={styles.tableButton}>
                  <Text style={[styles.tableContentText, styles.viewText]} onPress={()=>navigation.navigate('facultydetail')}>View</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

export default Faculty

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  tableView: {
    width: '90%',
    height: height * 0.8,
  },
  tableHeaderView: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#28b5b5',
    padding: width * 0.03,
    justifyContent: 'space-around',
    
  },
  tableHeaderText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableContentView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: width * 0.02,
    //backgroundColor: '#f1f1f1',
    marginBottom: 1,
  },
  tableContentText: {
    fontSize: 18,
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },
  tableButtonView: {
    flexDirection: 'row',
    gap: width * 0.02,
    flex: 1,
    justifyContent: 'center',
  },
  editText: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: 'red',
  },
  viewText: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: 'blue',
  },
})
