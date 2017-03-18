import React, {Component} from 'react';
import {StyleSheet,Text,View,TextInput,ScrollView,TouchableOpacity,Image,ListView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListMovie extends Component {
  constructor(props){
    super(props);
    this.state={
      dataSource: new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2}),
    };
  }
  render(){
    return(
        <View style={{flex:1, backgroundColor:'black'}}>
          <View style={{marginTop:10, marginBottom:10, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#fff', fontSize:25, fontWeight:'bold'}}>THE CINEMA</Text>
          </View>
          <ListView
            //horizontal={true}
            style={{padding:15, paddingTop:0}}
            dataSource={this.state.dataSource}
            renderRow={(rowData)=>
              <TouchableOpacity onPress={()=>Actions.detail({
                movieName:rowData.name,
                img:rowData.img,
                video:rowData.video,
                des1:rowData.des1,
                des2:rowData.des2
              })}
              style={{backgroundColor:'#fff', marginTop:10}}
              >
              <View style={{flexDirection:'row'}} >
                <Image source={{uri:rowData.img}}
                  style={{flex:1, height:180}} />
                <View style={{flex:2, margin:10}}>
                  <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>{rowData.name}</Text>
                  <Text style={{color:'black', fontSize:13, marginTop:10, marginBottom:5}} numberOfLines={3}>{rowData.des1}</Text>
                  <Text><Icon name="star" size={20} color="#FACC2E" /> {rowData.star}</Text>
                </View>
              </View>
              </TouchableOpacity>
            }
          />
        </View>
    );
  }

  componentDidMount(){
    fetch('https://movie123.herokuapp.com/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(responseJson)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
