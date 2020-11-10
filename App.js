import {Root} from 'native-base';
import React, {Component} from 'react';
import AppNavigator from './src/navigator/main';

export default class App extends Component {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}
