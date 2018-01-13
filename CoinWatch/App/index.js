import { StackNavigator } from 'react-navigation';
import CoinListScreen from './CoinListScreen';

const RootNavigator = StackNavigator({
  Home: { screen: CoinListScreen },
});

export default RootNavigator;
