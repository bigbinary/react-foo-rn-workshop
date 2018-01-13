import { StackNavigator } from 'react-navigation';
import CoinListScreen from './CoinListScreen';
import SettingsScreen from './SettingsScreen';

const RootNavigator = StackNavigator({
  Home: { screen: CoinListScreen },
  Settings: { screen: SettingsScreen },
});

export default RootNavigator;
