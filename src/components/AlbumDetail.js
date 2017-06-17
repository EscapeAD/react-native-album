import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({album}) => {
  const {thumbnail_image, artist, title, image} = album;
  const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle, titleStyle, coverStyle} = styles;
  return (
    <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
      <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
      </View>
      <View style={[headerContentStyle]}>
      <Text style={titleStyle}>{title}</Text>
      <Text>{artist}</Text>
      </View>
      </CardSection>
      <CardSection>
      <Image style={coverStyle} source={{uri: image}} />
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  titleStyle: {
    fontSize: 18
  }, 
  coverStyle: {
    height: 300,
    flex: 1,
    width: null
  }
})

export default AlbumDetail;