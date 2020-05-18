import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {HOME} from './screens';
import Home from '../modules/Home/Home';

const HomeStack = createStackNavigator({
  [HOME]: Home,
});

export default HomeStack;
