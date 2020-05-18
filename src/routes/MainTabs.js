import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {HOME, ORDER, CART, ACCOUNT, MAIN_TABS} from './screens';
import HomeStack from './HomeStack';
import OrderStack from './OrderStack';
import CartStack from './CartStack';
import AccountStack from './AccountStack';
import {DefaultNavigationOptions, NavigationOptions} from './NavigationConfig';

const Screen = (screen, options = {}) => ({screen: screen, ...options});

const MainTabs = createBottomTabNavigator(
  {
    [HOME]: Screen(HomeStack, NavigationOptions[HOME]),
    [ORDER]: Screen(OrderStack, NavigationOptions[ORDER]),
    [CART]: Screen(CartStack, NavigationOptions[CART]),
    [ACCOUNT]: Screen(AccountStack, NavigationOptions[ACCOUNT]),
    // 'Test': {
    //   screen: 'Test',
    //   navigationOptions: {
    //     tabBarIcon: '',
    //     tabBarOnLongPress: props => props.defaultHandler(),
    //     tabBarOnPress: props => props.defaultHandler(),
    //     tabBarVisible: true,
    //   }
    // }
  },
  DefaultNavigationOptions[MAIN_TABS],
);

export default MainTabs;
