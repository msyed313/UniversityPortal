import { useState } from 'react';
import React from 'react';
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TextInput,
    Dimensions
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Api } from './Urls';

const { width, height } = Dimensions.get('window');

const Registration = ({ navigation }) => {
    const [imagePath, setImagePath] = useState(null);
    const [passView, setPassView] = useState(false);
    const [imgData, setImageData] = useState(null);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const getImageGallery = () => {
        let options = { mediaType: 'photo' };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.assets && response.assets.length > 0) {
                const source = response.assets[0];
                setImagePath(source.uri);
                setImageData(source);
            }
        });
    };

    const register = async () => {
        const formdata = new FormData();
        formdata.append('sname', name);
        formdata.append('email', email);
        formdata.append('password', password);
        if (imgData) {
            formdata.append('ImagePath', {
                uri: imgData.uri,
                type: imgData.type,
                name: imgData.fileName,
            });
        }

        try {
            const response = await fetch(`${Api}/Student/Register`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
                body: formdata,
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Success: ", data);
                setEmail('');
                setImageData(null);
                setError('');
                setPassword('');
                setName('');
                setImagePath('');
            } else {
                console.log("Error: ", data);
                setError(data);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    return (
        <ImageBackground
            source={require('../assets/CloudsBackground.png')}
            style={styles.ImageBackground}>
            <StatusBar backgroundColor="skyblue" barStyle="dark-content" />

            <View style={styles.v1}>
                <Text style={styles.t1}>Create new Account</Text>
                <View style={styles.imgview}>
                    {imagePath ? (
                        <Image source={{ uri: imagePath }} style={styles.img} />
                    ) : (
                        <Image
                            source={require('../assets/profile.png')}
                            style={styles.img}
                        />
                    )}
                    <Pressable style={styles.btn} onPress={getImageGallery} >
                        <Text style={{ fontSize: width * 0.06, color: 'black', fontWeight: '400' }}>
                            Select Image
                        </Text>
                    </Pressable>
                </View>
                <TextInput placeholder="uname" style={styles.input} onChangeText={setName} value={name} />
                {error.Name && <Text>{error.Name}</Text>}
                <TextInput placeholder="email" style={styles.input} onChangeText={setEmail} value={email} />
                {error.Email && <Text>{error.Email}</Text>}
                <TextInput
                    placeholder="password"
                    style={[styles.input, { position: 'relative' }]}
                    secureTextEntry={!passView}
                    onChangeText={setPassword}
                    value={password}
                />
                {error.Password && <Text>{error.Password}</Text>}
                {passView ? (
                    <Pressable onPress={() => setPassView(false)}>
                        <Image
                            source={require('../assets/hide.png')}
                            style={styles.icon}
                        />
                    </Pressable>
                ) : (
                    <Pressable onPress={() => setPassView(true)}>
                        <Image
                            source={require('../assets/view.png')}
                            style={styles.icon}
                        />
                    </Pressable>
                )}

                <Pressable style={styles.press} onPress={register} >
                    <Text style={styles.pressText}>Signup</Text>
                </Pressable>
                <Pressable>
                    <Text
                        style={[styles.t1, { fontSize: width * 0.043 }]}
                        onPress={() => navigation.navigate('login')}>
                        Already have account? Login
                    </Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    ImageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    v1: {
        width: '90%',
        borderWidth: 3,
        paddingHorizontal: width * 0.05,
        borderColor: '#7E25D7',
        backgroundColor: '#02A4ED',
        borderRadius: 30,
        alignItems: 'center',
        gap: width * 0.02
    },
    t1: {
        fontSize: width * 0.07,
        color: 'black',
        fontWeight: '500',
        paddingVertical: height * 0.02,
    },
    imgview: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor:'red'
    },
    img: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: 50
    },
    btn: {
        borderRadius: 30,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C5CACB',
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 30,
        fontSize: width * 0.05,
        color: 'black',
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.03,
        marginVertical: width * 0.01,
    },
    icon: {
        width: width * 0.07,
        height: width * 0.07,
        position: 'absolute',
        marginTop: -width * 0.13,
        marginLeft: width * 0.25,
    },
    press: {
        backgroundColor: '#7E25D7',
        width: '50%',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: width * 0.01
    },
    pressText: {
        fontSize: width * 0.07,
        color: 'white',
        fontWeight: '400'
    }
});

export default Registration;
