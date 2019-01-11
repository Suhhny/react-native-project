/*
 * @format
 * @flow
 */

import * as React from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import { Navigation } from 'react-native-navigation';

type Props = {};

type State = {
  text: string
};

class ScreenLifeCycle extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      text: 'nothing yet'
    };
  }

  componentDidAppear() {
    this.setState({
      text: 'component did appear!'
    });
  }

  componentDidDisappear() {
    this.setState({
      text: 'component did disappear'
    });
  }

  componentWillUnmount() {
    alert('component will unmount!');
  }

  render() {
    return(
      <View>
        <SafeAreaView>
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        </SafeAreaView>
        <Text>{this.state.text}</Text>
        <Text>{`Lifecycle Screen`}</Text>
      </View>
    );
  }
}

export default ScreenLifeCycle;
