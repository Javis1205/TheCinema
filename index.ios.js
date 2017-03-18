import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Index from './Components/Index.js';

export default class Video1 extends Component {
  render() {
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('Video1', () => Video1);
