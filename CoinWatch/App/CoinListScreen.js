import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import CoinCard from './CoinCard';
const API_URL = 'https://api.coinmarketcap.com/v1/ticker/';

export default class CoinListScreen extends Component {
  state = {
    coinsData: [],
    searchField: '',
  };

  static navigationOptions = {
    title: 'CoinWatch',
  };

  componentWillMount() {
    this.fetchCoinData();
  }

  fetchCoinData() {
    this.setState({ isFetching: true });
    fetch(API_URL)
      .then(response => response.json())
      .then(coinsData =>
        this.setState({
          coinsData,
          isFetching: false,
        })
      );
  }

  filteredCoinData() {
    const { searchField, coinsData } = this.state;
    return searchField === ''
      ? coinsData
      : coinsData.filter(({ name }) => new RegExp(searchField, 'i').test(name));
  }

  render() {
    const { isFetching, searchField } = this.state;
    const filteredData = this.filteredCoinData();

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchTextField}
          onChangeText={searchField => this.setState({ searchField })}
          placeholder="Search"
          value={searchField}
          autoCorrect={false}
        />
        <View style={styles.content}>
          <FlatList
            onRefresh={() => this.fetchCoinData()}
            refreshing={isFetching}
            data={filteredData}
            keyExtractor={(coin, index) => coin.id}
            renderItem={({ item }) => (
              <CoinCard
                key={item.id}
                name={item.name}
                symbol={item.symbol}
                priceUSD={item.price_usd}
                percentChange1h={item.percent_change_1h}
                percentChange24h={item.percent_change_24h}
                percentChange7d={item.percent_change_7d}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    marginTop: 10,
  },
  searchTextField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
