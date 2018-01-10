import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import coinsData from './data.json';
import CoinCard from './CoinCard';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CoinWatch</Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={coinsData}
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
    marginTop: 20,
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
});
