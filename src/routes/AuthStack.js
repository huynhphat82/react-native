import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  LANDING,
  SIGNIN,
  SIGNUP,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from './screens';
import Landing from '../modules/Landing/Landing';
import SignUp from '../modules/Auth/SignUp';
import SignIn from '../modules/Auth/SignIn';
import ForgotPassword from '../modules/Auth/ForgotPassword';
import ResetPassword from '../modules/Auth/ResetPassword';

const AuthStack = createStackNavigator({
  [LANDING]: Landing,
  [SIGNIN]: SignIn,
  [SIGNUP]: SignUp,
  [FORGOT_PASSWORD]: ForgotPassword,
  [RESET_PASSWORD]: ResetPassword,
});

export default AuthStack;
