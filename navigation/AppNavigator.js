import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import WelcomeTabNavigator from './WelcomeTabNavigator';
import RegisterTabNavigator from './RegisterTabNavigator';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Welcome: WelcomeTabNavigator,
  Register: RegisterTabNavigator,
  Main: MainTabNavigator,
}));
