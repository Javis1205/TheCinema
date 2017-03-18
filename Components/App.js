import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Video from 'react-native-video';

export default class Trailer extends Component{
  constructor(props){
    super(props);
    this.state = {
      volume: 1,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: true,
    }
  }
  // Thay doi kich thuoc video
  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode === resizeMode);
    return (
      <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
        <Text style={[styles.controlOption, { color: isSelected ? 'red' : '#fff' }]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }
  // Tang giam am luong video
  VolumeGiam(volume) {
    if(this.state.volume>0){
      this.setState({
        volume: this.state.volume - 0.5
      });
    }else {
      this.setState({
        volume: 0
      });
    }
  }
  VolumeTang(volume) {
      this.setState({
        volume: this.state.volume + 0.5
      });
  }
// tgian de chay het video
  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };
// Tien' do. tgian video da chay dc
  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };
// Ti le % tgian da chay so voi tgian de chay het video
  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100; /* Da hoan thanh */
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100; /* Con lai */

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => {
            this.setState({ paused: !this.state.paused }); }}>
          <Video

            /* For ExoPlayer */
            /* source={{ uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0', type: 'mpd' }} */
            source={require('./broadchurch.mp4')}
            style={styles.fullScreen}
            rate={1}
            muted={false}
            paused={this.state.paused}
            volume={this.state.volume}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={()=>{
              this.setState({ paused: true })
            }}
            repeat={true}
          />

        </TouchableOpacity>

        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.volumeControl}>
              <Text style={{color:'red', fontSize:20}}>Volume: </Text>
              <TouchableOpacity onPress={()=>{this.VolumeGiam()}}>
               <Text style={{color:'yellow', fontSize:30, margin:5}}>-</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{this.VolumeTang()}}>
               <Text style={{color:'pink', fontSize:30, margin:5}}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>
          <View style={styles.progress}>
            <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
            <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flexDirection:'row'
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    paddingBottom: 10,
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    fontSize: 15,
    padding:5,
    //lineHeight: 12,
  },
});
