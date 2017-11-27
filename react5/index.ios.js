/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './App/Store/ConfigureStore';
import App from './App/App';
import Route from './App/Router/Routes';
const Store = configureStore();

export default class LogInWithRedux extends Component {
  render() {
    return (
      <Provider store={ Store }>
        <Route/>
      </Provider>
    );
  }
}
AppRegistry.registerComponent('LogInWithRedux', () => LogInWithRedux);
