import React, {Component} from "react";
import { Button,Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import {connect} from "react-redux";
import * as BaseActions from '../actions/baseActions';

class HomeScreen extends Component {
  
  createNewBase = () => {
    this.props.dispatch(BaseActions.createNewBase())
  }
  
  render() {
    if(this.props.base.get('newBase')){
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>It is the year 5733. The planet earth is a wasteland, inhabited by monsters and weirdos. The only way to survive is to build and defend your fort.</Text>
          <Button
              title={'Build a new fort'}
              onPress={this.createNewBase}>
            </Button>
        </View>
      );
    }else{
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Level {this.props.base.get('level')}</Text>
          <Text>Health  {this.props.base.get('health')}</Text>
          <Progress.Bar progress={0.7} width={200} />
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