import React, {Component} from "react";
import {View, Button, Image, StatusBar, Text} from "react-native";
import {Container, Content} from "native-base";
import colors from "../resources/colors";
import dimens from "../resources/dimens";
import * as Progress from 'react-native-progress';
import {connect} from 'react-redux';
import * as CurrentTaskActions from '../actions/currentTaskActions';
import CountDown from 'react-native-countdown-component';
import globalStyle from '../resources/styles';

export class CurrentTask extends Component {

  newTask = false;

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
            <Text style={globalStyle.headerText}>No Current Task</Text>
            <Text style={{marginBottom:20,marginTop:10}}>Adventure Awaits!</Text>
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
            <Text style={globalStyle.headerText} >Current task</Text>
            <Text>{this.props.currentTask.get('currentTaskDescription')}</Text>
            <Progress.Circle formatText={()=>{ return Math.ceil((this.props.currentTask.get('stepsCompleted') / this.props.currentTask.get('stepsTarget') * 100)).toString() + '%'}}progress={1} showsText={true} size={200} style={{margin:20}} indeterminate={false} />
            <Text style={{marginBottom:20}}>{this.props.currentTask.get('stepsCompleted')} / {this.props.currentTask.get('stepsTarget')} steps completed</Text>
            <CountDown
              until={this.props.currentTask.get('timeAmount')}
              onFinish={this.failTask}
              size={20}
            />
            <View stlye={{flexDirection: 'row'}}>
            <Button
              title={'Add Step'}
              style={loginStyles.buttonStyle}
              onPress={this.addStep}>
              <Text style={loginStyles.buttonTextStyle}>Add Step</Text>
            </Button>
            <Button
              title={'Fail Task'}
              style={loginStyles.buttonStyle}
              onPress={this.failTask}>
              <Text style={loginStyles.buttonTextStyle}>Add Step</Text>
            </Button>
            </View>
          </Content>
        </Container>
        );
    }
    
  }

  addStep = () => {
    this.props.dispatch(CurrentTaskActions.addStep(500))
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