import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Trailer from './Trailer.js';
import Detail from './Detail.js';
import ListMovie from './ListMovie.js';
import {Scene, Router} from 'react-native-router-flux';

export default class Index extends Component{

  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key="listMovie"
          hideNavBar={true}
          component={ListMovie}
          initial
          />
          <Scene key="detail"
          component={Detail}
          />
          <Scene
          key="trailer"
          component={Trailer}
          direction="vertical"
          />
        </Scene>
      </Router>
    );
  }
}
