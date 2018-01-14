import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoinCard = props => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <Text style={styles.nameText}>
        {props.name} | {props.symbol}
      </Text>
      <Text style={styles.priceText}>
        {props.currency === 'USD' ? '$' : '₹'}{' '}
        {parseFloat(props.price).toFixed(4)}
      </Text>
    </View>
    <View style={styles.bottomContainer}>
      <ChangeFields label="1h: " value={props.percentChange1h} />
      <ChangeFields label="24h: " value={props.percentChange24h} />
      <ChangeFields label="7d: " value={props.percentChange7d} />
    </View>
  </View>
);

const ChangeFields = ({ label, value }) => (
  <Text style={styles.changeText}>
    <Text style={styles.changeLabel}>{label}</Text>
    <Text style={{ color: getColor(value) }}>{value} %</Text>
  </Text>
);

const getColor = value => (value >= 0 ? 'green' : 'red');

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    height: 100,
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 20,
  },
  changeText: {
    fontSize: 14,
  },
  changeLabel: {
    fontWeight: 'bold',
  },
});

export default CoinCard;
