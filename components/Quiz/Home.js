import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { IconButton} from 'react-native-paper';
import Title from '../Quiz/Title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>

<View style={styles.header}>
          <Text style={[styles.text,{fontSize:40}]}>Cosmo-Quiz</Text>
        </View>
           
            <IconButton
              icon="keyboard-backspace"
              size={30}
              style={styles.navButton}
              color="#322BB3"
              onPress={() => navigation.goBack()}
            />

      <View style={styles.bannerContainer}>
        <Image
          source={require('../../../assets/app.jpg')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View style={{marginBottom:50}}>
      <Text style={styles.text}>You have entered Cosmox Phase-2 </Text>
      <Text style={styles.text}>This screen is part of the the app is for knowledge purpose.So we had enabled this feature for the users the try it out.This feature is still in alpha testing.So there might be some bugs init. </Text>
      <Text style={styles.text}>Welcome!Now we will test your knowledge </Text>
      <Text style={styles.text}>This program will help to achieve good result in your general-knowledge </Text>
      <Text style={styles.text}>To proceed click on START--Go ahead </Text>



      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 200,
    width: 200,
    marginTop:30
  },
  header: {
    alignItems: 'center',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text:{

    fontSize:16,
    fontWeight:'bold',
    color:'white'
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor:'#000235'
  },
  button: {
    width: '100%',
    backgroundColor: '#322BB3',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  navButton: {
    marginLeft: -10,
    marginTop:-50
  },
});
