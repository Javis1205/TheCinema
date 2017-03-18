import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, WebView} from 'react-native';
import Video from 'react-native-video';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Trailer extends Component{
  render() {
    var url = 'https://www.youtube.com/watch?v=';
    url +=this.props.video2;
    return (
      <View style={{flex:1}}>
        <TouchableOpacity style={{height:40, backgroundColor:'black', justifyContent:'center', flexDirection:'row'}}
          onPress={()=>Actions.pop()}
        >
          <Icon name="arrow-left" size={30} color="#fff" />
          <Text style={{color:'#fff', fontSize:20, marginTop:4}}> Trở lại trang mô tả</Text>
        </TouchableOpacity>
        <WebView
          source={{uri:url}}
          style={{flex:1}}
        />
      </View>
    );
  }
}
