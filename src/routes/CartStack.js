import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {CART} from './screens';
import Cart from '../modules/Cart/Cart';

const CartStack = createStackNavigator({
  [CART]: Cart,
});

export default CartStack;
