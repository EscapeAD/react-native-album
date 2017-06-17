import React, { Component } from 'react';
import { ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: []}
  
  renderAlbums(){
    return this.state.albums.map(album => {
      return <AlbumDetail album={album} key={album.title} />
    });
  }
  
  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
         .then(response => {
           this.setState({
             albums: response.data
           })
         })
    console.log('HI');
    console.log('how are you???');
  }
  render(){
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;