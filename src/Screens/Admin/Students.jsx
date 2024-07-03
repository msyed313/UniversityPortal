import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Header from './Header'
const { height, width } = Dimensions.get('window')
const Students = ({ navigation }) => {
  const students = [
    {
      "id": 1,
      "Reg-No": '2020-Arid-3556',
      "Dept": "IT"
    },
    {
      "id": 2,
      "Reg-No": '2020-Arid-3551',
      "Dept": "IT"
    },
    {
      "id": 3,
      "Reg-No": '2020-Arid-3538',
      "Dept": "CS"
    },
    {
      "id": 4,
      "Reg-No": '2021-Arid-3526',
      "Dept": "IT"
    },
    {
      "id": 5,
      "Reg-No": '2019-Arid-6746',
      "Dept": "CS"
    },
    {
      "id": 6,
      "Reg-No": '2019-Arid-6946',
      "Dept": "CS"
    },
    {
      "id": 7,
      "Reg-No": '2020-Arid-3467',
      "Dept": "IT"
    },
    {
      "id": 8,
      "Reg-No": '2019-Arid-3557',
      "Dept": "CS"
    }
  ]
  return (
    <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
      <Header navigation={navigation} />
      <View style={styles.tableView}>
        <ScrollView>
          <View style={styles.tableHeaderView}>
            <Text style={styles.tableHeaderText}>Reg No</Text>
            <Text style={styles.tableHeaderText}>Dept</Text>
            <Text style={styles.tableHeaderText}>Status</Text>
          </View>
          {
            students.map((item) => {
              return (
                <View key={item.id} style={styles.tableContentView}>
                  <Text style={styles.tableContentText}>{item['Reg-No']}</Text>
                  <Text style={styles.tableContentText}>{item.Dept}</Text>
                  <View style={styles.tableButtonView}>
                    <Pressable style={styles.tableButton} onPress={() => navigation.navigate('editstudent')}>
                      <Text style={[styles.tableContentText, {
                        textDecorationStyle: 'solid',
                        textDecorationLine: 'underline',
                        color: 'red'
                      }]}>Edit</Text>
                    </Pressable>
                    <Pressable style={styles.tableButton} onPress={() => navigation.navigate('studentdetail')}>
                      <Text style={[styles.tableContentText, {
                        textDecorationStyle: 'solid',
                        textDecorationLine: 'underline',
                        color: 'blue'
                      }]}>View</Text>
                    </Pressable>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

export default Students
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  tableView: {
    //backgroundColor: '#57ad98',
    width: '90%',
    height: height * 0.8,
  },
  tableHeaderView: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    backgroundColor: '#2596be',
    gap: width * 0.05,
    padding: width * 0.03,
    justifyContent: 'space-around',
  },
  tableHeaderText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'
  },
  tableContentView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    paddingVertical: width * 0.02
  },
  tableButtonView: {
    flexDirection: 'row',
    gap: width * 0.02,
  },
  tableContentText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500'
  }
})