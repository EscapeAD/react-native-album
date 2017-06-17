import React, { Component } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios';


class AlbumList extends Component {
  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
         .then(response => {
           console.log(response);
         })
    console.log('HI');
    console.log('how are you???');
  }
  render(){
    return (
      <View>
        <Text> Album List </Text>
      </View>
    )
  }
}

export default AlbumList;