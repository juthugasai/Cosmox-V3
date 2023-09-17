import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
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
          <View style={{alignItems:"center"}}>
          <Text style={styles.title}>Build Information</Text>
          </View>
          <ScrollView style={styles.scrollView}>
        <View style={styles.ver}>
        <Text style={styles.T}>Build Version: C2</Text>
        </View>
        <View style={styles.ver}>
        <Text style={styles.T}>Build Name: Cosmox</Text>
        </View>

        <View style={styles.ver}>
        <Text style={styles.T}>Build Version: CMX23C1</Text>
        </View>
        <View style={styles.ver}>
        <Text style={styles.T}>Build number: CMXC1.1001-EXP</Text>
        </View>


        <View style={styles.ver}>
        <Text style={styles.T}>Build Channel: Experimental Version</Text>
        </View>

        <View style={styles.ver}>
        <Text style={styles.T}>COS: Centrigonus Operating System</Text>
        </View>

        <View style={styles.ver}>
        <Text style={styles.T}>COS-2 Code-Name: Space Valley</Text>
        </View>
        

        

        <TouchableOpacity style={styles.ver}
        onPress={() => {
                this.props.navigation.navigate('Patch');
              }}>
        <Text style={styles.T}>Feature Patch Update: August 2023</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.ver}
        onPress={() => {
                this.props.navigation.navigate('Appinfo');
              }}>
        <Text style={styles.T}>App INFO</Text>
        </TouchableOpacity>
        <Text></Text>
        </ScrollView>

        
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
    color: '#939496',
    margin: 60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text1: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#939496',
    marginTop: 10,
    //margin:60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text2: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    //margin:60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  button: {
    //flex: 0.25,
    //marginTop: 50,
    //marginLeft: 50,
    //marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //height:70,
    borderRadius: 30,
    backgroundColor: 'purple',
  },

  ver:{
    //flex:1,
    marginTop: 30,
    marginLeft: 5,
    backgroundColor:'#322BB3',
    borderRadius:10,
    height:70,
    width:350,
    justifyContent:'center',
    //alignContent:'center',
    alignItems:'center'
  },

   soft:{
    //flex:1,
    marginTop: -70,
    marginLeft: 185,
    backgroundColor:'#fff',
    borderRadius:10,
    height:70,
    width:170,
    justifyContent:'center',
    //alignContent:'center',
    alignItems:'center'
  },
  T:{
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

    //alignItems: 'center',
    //justifyContent: 'center',
  },
  navButton:{
    margin:20,
    marginTop:50
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    marginTop:-60,
    margin:20,
    //left:50,
    //alignItems: 'center',
  },
});
