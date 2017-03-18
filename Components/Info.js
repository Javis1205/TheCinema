import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Info extends Component{
  render(){
    return(
        <View style={{flex:1, backgroundColor:'black',justifyContent:'center', padding:20}}>
        <Text style={{color:'#fff', fontSize:18, fontWeight:'bold', marginBottom:20}}>
          OverView
        </Text>
          <Text style={{color:'#fff', fontSize:12, marginBottom:5}}>
            Loại phim:Hành động, Khoa học viễn tưởng, Kinh dị,
          </Text>
          <Text style={{color:'#fff', fontSize:12,marginBottom:5}}>
            Thời lượng: 100 phút
          </Text>
          <Text style={{color:'#fff', fontSize:12,marginBottom:5}}>
            Diễn viên: Milla Jovovich, Ruby Rose, Ali Larter
          </Text>
          <Text style={{color:'#fff', fontSize:12,marginBottom:5}}>
           Đạo diễn:Paul W.S. Anderson
          </Text>
          <Text style={{color:'#fff', fontSize:12,marginBottom:5}}>
           Xuất xứ:Mỹ
          </Text>
          <Text style={{color:'#fff', fontSize:12,marginBottom:5}}>
            Khởi chiếu :10/02/2017
          </Text>
          <Text style={{color:'#fff', fontSize:12,marginBottom:5}}>
           Khuyến cáo :Phim cấm khán giả dưới 18 tuổi
          </Text>
        </View>
    );
  }
}
