import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight,Button, View} from 'react-native';
import dimens from "../resources/dimens";
import colors from "../resources/colors";
import {connect} from 'react-redux';
import * as BaseActions from '../actions/baseActions';
import globalStyle from '../resources/styles';

class DestroyBaseModal extends Component {

  closeModal = () => {
    this.props.dispatch(BaseActions.destroyBase())
  }
  
  componentDidMount(){
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.base.get('baseDestroyed')}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={globalStyle.headerErrorText}>:( Well that sucks!</Text>
            <Text style={{marginBottom:10}}>The fort couldn't handle this cruel world.</Text>
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
    base: state.get('base')
  });
  
  export default connect(mapStateToProps)(DestroyBaseModal)