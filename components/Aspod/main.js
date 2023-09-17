import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  View,
  TouchableWithoutFeedback,
  DatePickerAndroid
} from 'react-native';
import Moment from 'moment';
import NavBar from './NavBar';
import Spinner from './spinner';
import CardContent from './CardContent';

const ApiUrl = 'https://api.nasa.gov/planetary/apod';
const ApiKey = 'AY0gEuGQMphq9Ah2YDp7aZBtxtktztFEprF5yOcF';

export default class AppNasaApod extends Component {
  constructor(props){
    super(props);
    this.state = {
      showText: true,
      result: {},
      loading: true,
      try_again: false,
      todayDate: null,
      todayLabel: ''
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    let today = Moment();

    this.setState({
      todayDate: today.toDate(),
      todayLabel: today.format('DD[/]MM[/]YYYY')
    });

    this.loadData(today.format('YYYY[-]MM[-]DD'));
  }

  loadData(date) {
    this.setState({
        loading: true,
        try_again: false
    });

    const config = {
      mode: "cors",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const urlWithParam = `${ApiUrl}?api_key=${ApiKey}&date=${date}`;

    // console.log("DATE >>", date, urlWithParam);

    let that = this;
    return fetch(urlWithParam, config)
      .then(response => response.json())
      .then((responseJson) => {
          console.log("success >>", responseJson);

           that.setState({
              result: responseJson,
              loading: false
            });
        return responseJson;
      })
      .catch((error) => {
        console.log("error >>", error);

          that.setState({
              loading: false,
              try_again: true
          });

          alert(error)
      });
  }

  _tryAgain() {
    if (this.state.try_again) {
      return (
        <Button
          onPress={() => { this.loadData() }}
          title="Tentar novamente"
          color="#ffffff"
          accessibilityLabel="Tentar novamente"
        />
      );
    } else {
      return null;
    }
  }

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        // dismissed
      } else {
        let new_date = Moment(`${year}[-]${month+1}[-]${day}`, "YYYY-MM-DD");

        this.setState({
          todayDate: new_date.toDate(),
          todayLabel: new_date.format('DD[/]MM[/]YYYY')
        });

        this.loadData(new_date.format('YYYY[-]MM[-]DD'));
      }
      // this.setState({});
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}' (${code}): `, message);

      alert(message);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.main}>

           
            {
              this.state.loading ?
              <Spinner></Spinner> :
              <CardContent
                title={this.state.result.title}
                content={this.state.result.explanation}
                url={this.state.result.url}
                media_type={this.state.result.media_type}
                copyright={this.state.result.copyright}
                date={this.state.result.date}>
              </CardContent>
            }

            { this._tryAgain() }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: ''
  },
  main: {
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  date_text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#dddddd',
    padding: 10,
  }
});

AppRegistry.registerComponent('AppNasaApod', () => AppNasaApod);
