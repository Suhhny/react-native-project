
// @format
// @flow

import * as React from 'react';
import {Alert, View, Button, Text, StatusBar, SafeAreaView, TouchableHighlight,
        TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback,
        ScrollView, FlatList, SectionList} from 'react-native';

import Fetch from './component/Fetch';

type Props = {};

export default class App extends React.Component<Props> {

  onPress = () => {
    Alert.alert('wow');
  }

  render() {
    return (
      <View>
        <SafeAreaView>
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        </SafeAreaView>

        <Button onPress={this.onPress} title="Press Me" />

        <TouchableHighlight onPress={this.onPress}>
          <View>
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        {/* for android
        <TouchableNativeFeedback>
          <View>
            <Text>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        */}
        <TouchableOpacity onPress={this.onPress}>
          <View>
            <Text>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={this.onPress}>
          <View>
            <Text>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <ScrollView minimumZoomScale={1} maximumZoomScale={2}>
          <Text style={{fontSize: 100}}>ScrollllllllllllllL~</Text>
        </ScrollView>

        <FlatList data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]} renderItem={({item}) => <Text>{item.key}</Text>}
        />

        <SectionList sections={[
          {title: 'A', data: ['Devin']},
          {title: 'B', data: ['Jackson', 'James', 'Joel', 'John']},
          {title: 'C', data: ['Jillian', 'Jimmy', 'Julie']},
          ]} renderItem={({item, index}) => <Text key={index}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={{fontWeight: 'bold'}}>{section.title}</Text>}
          keyExtractor={(item, index) => item+index}
        />

        <Fetch />

      </View>
    );
  }
}
