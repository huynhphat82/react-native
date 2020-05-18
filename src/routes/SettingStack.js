import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {SETTING, PROFILE} from './screens';
import Setting from '../modules/Setting/Setting';
import Profile from '../modules/Profile/Profile';

const SettingStack = createStackNavigator({
  [SETTING]: Setting,
  [PROFILE]: Profile,
});

export default SettingStack;
