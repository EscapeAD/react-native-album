// Index for android

// Import a libaray to create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a component
const App = () => (<Text>This is a Testt</Text>)

// Render it to device
AppRegistry.registerComponent('albums', ()=> App);