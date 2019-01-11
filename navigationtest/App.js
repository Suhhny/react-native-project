/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Initial from './app/screens/Initial';

type Props = {};

class App extends React.Component<Props> {
  render(){
    return(
    	<Initial />
    );
  }
}

export default App;
