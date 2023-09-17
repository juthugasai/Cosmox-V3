import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ActivityIndicator,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { spinnerStyle } from './style';

type State = { animating: boolean; };
type Timer = number;

export default class Spinner extends Component {
  state: State;
  _timer: Timer;

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  componentDidMount() {
    this.setToggleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 2000);
  }

  render(){
    if (this.state.animating) {
      return (
        <View style={spinnerStyle.container}>
          
          
           <Image
            style={styles.load}
            source={require('../../../../assets/A-1/loader2.gif')}
          />
        </View>       
      );
    } else {
      return null;
    }
  }
}
const styles = StyleSheet.create({

    load: {
        width: 300,
        height: 300      
      },



})
AppRegistry.registerComponent('Spinner', () => Spinner);
