/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TextInput,
    Button,
    TouchableHighlight
} from 'react-native';
import ViewOne from './app/ViewOne';
import ViewTwo from './app/ViewTwo';
import ViewThree from './app/ViewThree';
import ViewFour from './app/ViewFour';

export default class FirstApp extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

  render() {
    return (
      <View style={styles.container}>
        <ViewOne/>
          <ViewTwo/>
          <ViewThree/>
          <ViewFour/>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
