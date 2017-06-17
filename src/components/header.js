import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
  const { textStyle, ViewStyle } = styles;
  
  return (
    <View style={ViewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
    textStyle: {
      fontSize: 20,
    },
    ViewStyle: {
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    }
}

export default Header