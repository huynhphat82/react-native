import React from 'react';
import { StackActions, SwitchActions } from 'react-navigation';
import { Alert, BackHandler } from 'react-native';

export const isMountedRef = React.createRef();
export const navigationRef = React.createRef();

const _navigation = (type, args) => {
  isMountedRef.current && navigationRef.current && navigationRef.current[type](...args);
};

const AppService = {};

AppService.navigate = (name, params = {}) => _navigation('navigate', [name, params]);

AppService.push = (...args) => _navigation('dispatch', [StackActions.push(...args)]);

AppService.switchTo = (routeName) => _navigation('dispatch', [SwitchActions.jumpTo({ routeName: routeName })]);

// AppService.tabTo = (routeName) => _navigation('dispatch', [TabActions.jumpTo({ routeName: routeName })]);

AppService.dispatch = () => {

};

AppService.popupCrash = (error, isFatal = false, title = 'Unexpected error occurred') => {
  Alert.alert(
    title,
    `
      Error: ${isFatal ? "Fatal:" : ""} ${error.name} ${error.message}

      We have reported this to our team! Please close the app and start again!
    `,
    [
      {
        text: 'Close',
        onPress: () => BackHandler.exitApp()
      }
    ]
  );
};

export const app = () => AppService;

export default AppService;
