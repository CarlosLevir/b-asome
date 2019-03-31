import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import WelcomeScreen from '../screens/WelcomeScreen';

const WelcomeStack = createStackNavigator({
  Welcome: WelcomeScreen,
});

WelcomeStack.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default WelcomeStack;
