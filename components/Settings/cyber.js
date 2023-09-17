import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  Modal,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { IconButton, Title } from 'react-native-paper';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  showModal = () => {
    return(
    <Modal
      animationType="fade"
      transparent={true}
      visible={this.state.isModalVisible}>
      <View style={styles.modal}>
      <ScrollView style={{ width: '100%' }}>
      <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
      <Text>This feature is not available</Text>

      <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => this.setState({ isModalVisible: false })}>
                  <Text style={{ color: '#ff5722' }}>Cancel</Text>
                </TouchableOpacity>
              </View>
      </KeyboardAvoidingView>
      </ScrollView>
      </View>
    </Modal>
    );
  };

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

          <Text style={styles.text}>Cyber-Tech</Text>
        </View>
        <Text style={styles.text1}>
          This name represents the person who developed the app.It is not a actual company.Just the developer took this name as the representation of the app.
        </Text>
        <Text style={styles.text1}>
          So app is powered by Cyber-Tech Company.The developer has tried his best to create the app and fix as many bugs as he can.So we hope you enjoy the App.
        </Text>

        

        <View style={{ marginTop: 100, marginLeft: 90 }}>
          <Text style={{color:'white'}}>Powered By:</Text>
        </View>
        
       
  <Image
            source={require('../../../assets/A-2/cyber.png')}
            style={{ height: 20, width: 20, marginLeft: 170, marginTop: -17 }}
          />
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
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
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
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
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
  navButton: {
    margin: 20,
  },
});
