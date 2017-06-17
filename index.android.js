// Index for android
// Import a libaray to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to device
AppRegistry.registerComponent('albums', ()=> App);