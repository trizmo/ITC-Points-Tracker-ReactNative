import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import PlayerNamesScreen from '../screens/Settings/PlayerNames';
import PlayerOneSecondariesScreen from '../screens/Settings/PlayerOneSecondaries'
import PlayerTwoSecondariesScreen from '../screens/Settings/PlayerTwoSecondaries'
import RoundOneScreen from '../screens/RoundOneScreen'

const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    PlayerNames: PlayerNamesScreen,
    PlayerOneSecondaries: PlayerOneSecondariesScreen,
    PlayerTwoSecondaries: PlayerTwoSecondariesScreen,
    RoundOne: RoundOneScreen
  });
  
const NavigationContainer = createAppContainer(StackNavigator);

export default NavigationContainer;