import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
  });

  render() {
    return (
      <View>
        <Text>Setting options...</Text>
      </View>
    );
  }
}
