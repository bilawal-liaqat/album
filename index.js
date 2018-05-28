/*
 import { AppRegistry } from 'react-native';
 import App from './App';
 AppRegistry.registerComponent('albums', () => App);
*/

// Import a library to hep create a registerComponent

import React from 'react';
//import ReactNative from 'react-native';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a registerComponent
const App = () => (
    //<Text> Some Text </Text>
    <Header />
  );

// Render it to device

AppRegistry.registerComponent('albums', () => App);
