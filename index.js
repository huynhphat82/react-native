/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import Log from './src/services/Log';
import AppService from './src/services/AppService';

/*
  react-native-exception-handler
    => error/exception handler at global for sync/async codes
  sentry, google analytics, google crashlytics
    => tracking errors/exceptions on cloud services for production
*/

const ALLOW_IN_DEV_MOD = __DEV__;
const FORCE_APP_QUIT = true;
const EXECUTE_DEFAULT_HANDLER = false;

// registering the global error handler (JS Exception)
// - exceptionhandler is the exception handler function
// - allowInDevMode is an optional parameter is a boolean.
//   If set to true, the handler to be called in place of RED screen in development mode also.
// You do show an error dialog
// or hit google analytics to track crashes
// or hit a custom api to inform the dev team.
setJSExceptionHandler((error, isFatal) => {
  Log.info('js-exception => ', isFatal, error);
  // report error to cloud service
  if (isFatal) {
    Log.recordCrash(error);
    AppService.popupCrash(error, isFatal);
  }
}, ALLOW_IN_DEV_MOD);

// registering the global error handler (Native Exception)
// - exceptionhandler is the exception handler function
// - forceAppQuit is an optional ANDROID specific parameter that defines
//    if the app should be force quit on error.  default value is true.
//    To see usecase check the common issues section.
// - executeDefaultHandler is an optional boolean (both IOS, ANDROID)
//    It executes previous exception handlers if set by some other module.
//    It will come handy when you use any other crash analytics module along with this one
//    Default value is set to false. Set to true if you are using other analytics modules.
// You can hit google analytics to track crashes
// or hit a custom api to inform the dev team.
// NOTE: You CAN NOT alert or showing any UI change via JS code in case of NATIVE ERRORS.
// Meanings, It WILL NOT WORK in case of NATIVE ERRORS.
setNativeExceptionHandler(
  errorString => {
    Log.info('native-exception => ', errorString);
    // report error to cloud service
    Log.recordCrash(errorString);
  },
  EXECUTE_DEFAULT_HANDLER,
  FORCE_APP_QUIT,
);

AppRegistry.registerComponent(appName, () => App);
