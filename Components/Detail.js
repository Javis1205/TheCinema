import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import Trailer from './Trailer.js';
import TabNavigator from 'react-native-tab-navigator';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Detail extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <Image source={{uri:this.props.img}} style={{flex:1}}>
            <TouchableOpacity style={{position:'absolute', backgroundColor:'transparent', margin:10}}
              onPress={()=>Actions.listMovie()}
            >
              <Icon name="arrow-left" size={30} color="red"/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', position: 'absolute', top:150,}}>
              <Image source={{uri:this.props.img}}
              style={{width:100, height:120, borderWidth:2, borderColor:'#fff', margin:20}}/>

              <View style={{flex:1,backgroundColor:'black', marginLeft:0, margin:20,padding:15}}>
                <Text style={{color:'yellow', fontSize:15, fontWeight:'bold'}}>{this.props.movieName}</Text>
                <Text style={{color:'#fff', fontSize:12, fontWeight:'bold'}} numberOfLines={7}>
                  {this.props.des1}
                </Text>

              </View>
            </View>
          </Image>
        </View>
        <View style={{flex:1}}>
          <View style={{flexDirection:'row', backgroundColor:'#424242',justifyContent:'space-around', paddingTop:10, paddingBottom:10}}>
            <TouchableOpacity>
              <Text style={{color:'red', fontSize:20, fontWeight:'bold'}}>Info</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> Actions.trailer({
              video2:this.props.video
            })}>
              <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Trailer</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1, backgroundColor:'black',justifyContent:'center', padding:20}}>
            <Text style={{color:'#fff', fontSize:15, fontWeight:'bold', marginBottom:20}}>
              Thông tin phim
            </Text>
            <Text style={{color:'#fff', fontSize:13, marginBottom:20}}>
              {this.props.des2}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
