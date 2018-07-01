import React, {Component} from "react";
import { Text, View } from 'react-native';

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Yo put some settings here</Text>
      </View>
    );
  }
}

export default Settings