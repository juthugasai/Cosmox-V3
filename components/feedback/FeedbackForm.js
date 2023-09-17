import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Second from "./FeedbackFormContent.js";
import FeedbackFormContent from "./FeedbackFormContent.js";
import { IconButton, Title } from 'react-native-paper';

export default class FeedbackForm extends React.Component {
  render() {
  return (
    <ImageBackground
      source={''}
      style={{ height: "100%", width: "100%",backgroundColor:'#000235' }}
    >
      
      <Text style={styles.text}>Cosmox App-Feedback</Text>
      <IconButton
                icon="keyboard-backspace"
                size={30}
                style={styles.navButton}
                //color="#322BB3"
                onPress={() => this.props.navigation.goBack()}
            />
      <Text></Text>
      <FeedbackFormContent />
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 70,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  navButton:{
    marginTop:-40
  }
});
