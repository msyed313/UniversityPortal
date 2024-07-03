import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Header from './Header';

const { height, width } = Dimensions.get('window');

const FacultyDetail = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../assets/CloudsBackground.png')} style={styles.main}>
            <Header navigation={navigation} />
            <Text style={styles.name}>Shahid Jamil</Text>
            <View style={styles.detailView}>
                <Text style={styles.detailHeading}>Dept:</Text>
                <Text style={styles.detailText}>IT</Text>

                <Text style={styles.detailHeading}>Qualification:</Text>
                <Text style={styles.detailText}>BS(IT) From QAU,Rwp </Text>
                <Text style={styles.detailText}>MS(CS) From PMAS,AAUR</Text>
            </View>
        </ImageBackground>
    );
};

export default FacultyDetail;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    name: {
        fontSize: width * 0.08, // Responsive font size
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: width * 0.1,
        //marginVertical: height * 0.02, // Adding some vertical margin for better spacing

    },
    detailView: {
        marginHorizontal: width * 0.1,
        marginVertical: height * 0.01, // Adding vertical margin between detail views
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10, // Rounded corners
        padding: width * 0.05, // Padding inside the detail view
    },
    detailHeading: {
        fontSize: width * 0.05, // Responsive font size
        color: 'black',
        marginVertical: height * 0.01,
        fontWeight: 'bold',
    },
    detailText: {
        fontSize: width * 0.05, // Responsive font size
        color: 'black',
        paddingHorizontal: width * 0.05,
        //marginVertical: height * 0.005, // Adding vertical margin for text spacing
    },
});
