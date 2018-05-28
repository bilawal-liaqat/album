// Import a library to hep create a registerComponent

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a registerComponent
const App = () => (
  <View>
    <Header headerText = {'Albums'} />
    <AlbumList />
    </View>
  );

// Render it to device

AppRegistry.registerComponent('albums', () => App);
