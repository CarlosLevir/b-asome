import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class RegisterScreen extends Component {
  static navigationOptions = {
    title: 'Cadastro'
  };

  render() {
    return <ExpoConfigView />;
  }
}
