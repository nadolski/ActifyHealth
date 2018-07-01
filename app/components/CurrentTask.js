import React, {Component} from "react";
import {Button,Image, StatusBar, Text} from "react-native";
import {Container, Content} from "native-base";
import colors from "../resources/colors";
import dimens from "../resources/dimens";
import * as Progress from 'react-native-progress';
import {connect} from 'react-redux';
import * as CurrentTaskActions from '../actions/currentTaskActions';
import CountDown from 'react-native-countdown-component';

export class CurrentTask extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
   
  }

  componentDidUpdate() {

  }

  render() {
    if(this.props.base.get('newBase')){
      return (
        <Container style={loginStyles.containerStyle}>
          <StatusBar style={loginStyles.statusBarStyle}/>
          <Content contentContainerStyle={loginStyles.contentStyle}>
            <Text>Woah there!</Text>
            <Text>Before you can get started you need to build a fort.</Text>
          </Content>
        </Container>
        );
    }
    else if(this.props.currentTask.get('completed')){
      return (
        <Container style={loginStyles.containerStyle}>
          <StatusBar style={loginStyles.statusBarStyle}/>
          <Content contentContainerStyle={loginStyles.contentStyle}>
            <Text>No Current Task</Text>
            <Text>Adventure Awaits!</Text>
            <Button
              title={'Get A New Task'}
              style={loginStyles.buttonStyle}
              onPress={this.createNewTask}>
            </Button>
          </Content>
        </Container>
        );
    }else{
      return (
        <Container style={loginStyles.containerStyle}>
          <StatusBar style={loginStyles.statusBarStyle}/>
          <Content contentContainerStyle={loginStyles.contentStyle}>
            <Text>Current task</Text>
            <Text>{this.props.currentTask.get('currentTaskDescription')}</Text>
            <Progress.Circle formatText={()=>{ return Math.ceil((this.props.currentTask.get('stepsCompleted') / this.props.currentTask.get('stepsTarget') * 100)).toString() + '%'}}progress={0.3} showsText={true} size={200} indeterminate={false} />
            <Text>{this.props.currentTask.get('stepsCompleted')} / {this.props.currentTask.get('stepsTarget')} steps completed</Text>
            <CountDown
              until={10}
              onFinish={this.failTask}
              size={20}
            />
            <Button
              title={'Add Step'}
              style={loginStyles.buttonStyle}
              onPress={this.addStep}>
              <Text style={loginStyles.buttonTextStyle}>Add Step</Text>
            </Button>
            <Button
              title={'Fail Task'}
              style={loginStyles.buttonStyle}
              timeToShow={['H', 'M', 'S']}
              onPress={this.failTask}>
              <Text style={loginStyles.buttonTextStyle}>Add Step</Text>
            </Button>
          </Content>
        </Container>
        );
    }
    
  }

  addStep = () => {
    this.props.dispatch(CurrentTaskActions.addStep(1))
  }

  createNewTask = () => {
    this.props.dispatch(CurrentTaskActions.createNewTask());
  }


  failTask = () => {
    this.props.dispatch(CurrentTaskActions.failTask())
  }

}



const loginStyles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentStyle: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: dimens.margin_large
  },
  statusBarStyle: {
    backgroundColor: colors.primaryColor
  },
  emailStyle: {
    alignSelf: 'stretch',
  },
  buttonStyle: {
    marginTop: dimens.margin_medium,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: colors.accentColor
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: dimens.text_size_button
  },
  imageStyle: {
    width: 150,
    height: 150,
  },

};

const mapStateToProps = (state) => ({
    currentTask: state.get('currentTask'),
    base: state.get('base')
});
  
export default connect(mapStateToProps)(CurrentTask)