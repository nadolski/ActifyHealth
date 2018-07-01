import React, {Component} from "react";
import { Image,Button,Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import {connect} from "react-redux";
import * as BaseActions from '../actions/baseActions';
import globalStyle from '../resources/styles';

class HomeScreen extends Component {
  
  createNewBase = () => {
    this.props.dispatch(BaseActions.createNewBase())
  }
  
  render() {
    if(this.props.base.get('newBase')){
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={globalStyle.headerText}>Welcome!</Text>
          <Text style={{margin:20}}>It is the year 5733. The planet earth is a wasteland, inhabited by monsters and weirdos. The only way to survive is to build and defend your fort.</Text>
          <Button
              title={'Build a new fort'}
              onPress={this.createNewBase}>
            </Button>
        </View>
      );
    }else{
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={globalStyle.headerText}>Level {this.props.base.get('level')}</Text>
          <Image source={require('./img/Castle high.png')} style={{margin:20,width: 270, height: 270}}/>
          <Text style={globalStyle.headerText}>Health</Text>
          <Progress.Bar progress={this.props.base.get('health')/100} width={200} style={{marginBottom:5}} />
          <Text>Total Steps : {this.props.base.get('totalSteps')}</Text>
        </View>
      );
    }
  }
}


const mapStateToProps = (state) => ({
  base: state.get('base')
});

export default connect(mapStateToProps)(HomeScreen)