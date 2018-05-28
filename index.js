// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

// Import a library to hep create a registerComponent

import React from 'react';
//import ReactNative from 'react-native';
import { Text, AppRegistry } from 'react-native';

// Create a registerComponent

const App = () => (
    <Text> Some Text </Text>
  );

// Render it to device

AppRegistry.registerComponent('albums', () => App);
