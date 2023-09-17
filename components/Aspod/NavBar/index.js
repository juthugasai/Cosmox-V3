import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { stylesNavBar } from './style';

export default class NavBar extends Component {
  render(){
    return (
      <View style={stylesNavBar.container}>
        
      </View>
    );
  }
};

AppRegistry.registerComponent('NavBar', () => NavBar);
