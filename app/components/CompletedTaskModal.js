import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight,Button, View} from 'react-native';
import dimens from "../resources/dimens";
import colors from "../resources/colors";
import {connect} from 'react-redux';
import * as BaseActions from '../actions/baseActions';

class CompletedTaskModal extends Component {

  closeModal = () => {
    this.props.dispatch(BaseActions.UpdateBase(20,this.props.currentTask.get('hasFailed')))
  }
  
  render() {
    console.log(this.props.currentTask.get('outcomeModalIsOpen'))
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.currentTask.get('outcomeModalIsOpen')}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {this.props.currentTask.get('hasFailed')? <View><Text>You Failed!</Text><Text>{this.props.currentTask.get('negativeOutcome')}</Text></View> : <View><Text>You Did It!</Text><Text>{this.props.currentTask.get('positiveOutcome')}</Text></View> }
            <Text></Text>
              <Button
                  title={'Okay'}
                  style={Style.buttonStyle}
                  onPress={this.closeModal}>
              </Button>
          </View>
      
        </Modal>
      </View>
    );
  }
}

const Style = {
    buttonStyle: {
      marginTop: dimens.margin_medium,
      marginLeft:dimens.margin_medium,
      marginRight:dimens.margin_medium,
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
    currentTask: state.get('currentTask')
});
  
export default connect(mapStateToProps)(CompletedTaskModal)