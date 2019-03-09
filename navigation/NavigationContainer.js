import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsNamesScreen from '../screens/SettingsNamesScreen';
import SettingsSecondariesScreen from '../screens/SettingsSecondariesScreen'
import RoundOneScreen from '../screens/RoundOneScreen'

const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    SettingsNames: SettingsNamesScreen,
    SettingsSecondaries: SettingsSecondariesScreen,
    RoundOne: RoundOneScreen
  });
  
const NavigationContainer = createAppContainer(StackNavigator);

export default NavigationContainer;