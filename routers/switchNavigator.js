
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import Login from '../screens/login';
import Home from '../screens/home';
import Dashboard from '../screens/dashboard';
import Pricing from '../screens/pricing';

export const SwitchNavigator = createSwitchNavigator({
    Home: { screen: Home },
    Login: { screen: Login },
    Dashboard: { screen: Dashboard },
    Pricing:{screen:Pricing}
    
  });