import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { IconButton, Title } from 'react-native-paper';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <IconButton
            icon="keyboard-backspace"
            size={30}
            style={styles.navButton}
            color="#322BB3"
            onPress={() => this.props.navigation.goBack()}
          />
        <View style={styles.header}>
          <Text style={styles.text}>App-Version</Text>
        </View>
        <Text style={styles.text1}>
          Whats Included:
        </Text>

        <Text style={styles.text1}>
          We have connected to different exo planets in our Milkey way galaxy 
          
        </Text>

        <Text style={styles.text1}>
          We have given information on Planets of the Solar-System.We also included some Constallations and exoplanets
          
        </Text>

        <Text style={styles.text1}>
          The speed of the meteor is defined by different images           
        </Text>

        <Text style={styles.text1}>
          We will be sending Update to our app once a week or month          
        </Text>

        

        <View style={{ marginTop: 100, marginLeft: 90 }}>
          <Text style={{color:'white'}}>Powered By:</Text>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../../assets/A-2/cyber.png')}
            style={{ height: 20, width: 20, marginLeft: 170, marginTop: -17 }}
          />
        </TouchableOpacity>
        <View style={{ marginTop: -20, marginLeft: 195 }}>
          <Text style={{color:'white'}}>Cyber-Tech</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000235',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
  },

  text: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 60,
    marginTop:10
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text1: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    //margin:60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#939496',
  },

  button: {
    marginTop: 70,
    marginLeft: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70,
    width: 350,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },
  navButton:{
    margin:20
  }
});
