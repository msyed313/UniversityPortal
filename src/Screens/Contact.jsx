import React, { useState } from 'react';
import { View, Text, TextInput,Dimensions, StyleSheet, Alert, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView,Image } from 'react-native';
const {width,height}=Dimensions.get('window')
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Validate inputs
    if (!name || !email || !message) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    // Handle the form submission logic here
    // For example, send data to your backend server
    Alert.alert('Success', 'Your message has been sent.');
    setName(''),setEmail(''),setMessage('')
  };

  return (
    <ImageBackground source={require('../assets/CloudsBackground.png')} style={styles.background}>
      <View style={styles.header}>
           <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
           <Text style={styles.headerText}>Contact Us</Text>
     </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
    </ImageBackground>
  )
}

export default Contact

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#000000',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
