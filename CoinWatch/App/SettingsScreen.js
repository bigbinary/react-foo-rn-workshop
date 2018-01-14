import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import CONSTANTS from './constants';

export default class SettingsScreen extends Component {
  state = {
    baseCurrency: 'USD',
  };

  componentWillMount() {
    AsyncStorage.getItem(CONSTANTS.BASE_CURRENCY_KEY).then(baseCurrency => {
      this.setState({
        baseCurrency: baseCurrency || 'USD',
      });
    });
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
  });

  changeCurrency(baseCurrency) {
    this.setState({ baseCurrency });
    AsyncStorage.setItem(CONSTANTS.BASE_CURRENCY_KEY, baseCurrency);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View
          style={{
            margin: 10,
            padding: 10,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text>Base Currency</Text>
          <View style={{ flexDirection: 'row' }}>
            <Button
              title="USD"
              onPress={() => this.changeCurrency('USD')}
              color={this.state.baseCurrency === 'USD' ? 'green' : 'grey'}
            />
            <Button
              title="INR"
              onPress={() => this.changeCurrency('INR')}
              color={this.state.baseCurrency === 'INR' ? 'green' : 'grey'}
            />
          </View>
        </View>
      </View>
    );
  }
}
