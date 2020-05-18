import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {LOADING, AUTH, APP} from './screens';
import Loading from '../modules/Loading/Loading';
import AuthStack from './AuthStack';
import MainDrawer from './MainDrawer';
import {createStackNavigator} from 'react-navigation-stack';

const AppModalStack = createStackNavigator(
  {
    [APP]: MainDrawer,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const App = createSwitchNavigator({
  [LOADING]: Loading,
  [AUTH]: AuthStack,
  [APP]: AppModalStack,
});

const AppContainer = createAppContainer(App);

export default AppContainer;
