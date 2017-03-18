import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, WebView} from 'react-native';
import Video from 'react-native-video';
import {Actions} from 'react-native-router-flux';

export default class Trailer extends Component{
  render() {
    var url = 'https://www.youtube.com/watch?v=';
    url +=this.props.video2;
    return (
      <View style={{flex:1}}>
        <TouchableOpacity style={{height:30}}
          onPress={()=>Actions.pop()}
        >
          <Text style={{color:'red', fontSize:30}}>Back</Text>
        </TouchableOpacity>
        <WebView
          source={{uri:url}}
          style={{flex:1}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    );
  }
}
