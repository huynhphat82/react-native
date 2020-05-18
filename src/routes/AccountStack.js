import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {ACCOUNT} from './screens';
import Account from '../modules/Account/Account';

const AccountStack = createStackNavigator({
  [ACCOUNT]: Account,
});

export default AccountStack;
