import React from 'react';
import { View, Text } from 'react-native';

const CoinCard = props => (
  <View>
    <Text>{props.name}</Text>
    <Text>{props.symbol}</Text>
    <Text>$ {props.priceUSD}</Text>
    <Text>{props.percentChange1h} %</Text>
    <Text>{props.percentChange24h} %</Text>
    <Text>{props.percentChange7d} %</Text>
  </View>
);

export default CoinCard;
