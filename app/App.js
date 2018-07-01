import React, {Component} from "react";
import { View } from 'react-native';
import {Provider} from "react-redux";
import Navigation from "./components/Navigation.js";
import CompletedTaskModal from "./components/CompletedTaskModal.js";
import DestroyBaseModal from "./components/DestoryBaseModal.js";
import configureStore from "./store/configureStore";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
        <Navigation/>
        <CompletedTaskModal />
        <DestroyBaseModal />
        </View>
      </Provider>
    );
  }
}