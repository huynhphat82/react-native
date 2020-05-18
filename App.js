/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import AppContainer from './src/routes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { isMountedRef, navigationRef } from './src/services/AppService';

const App = () => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
        <AppContainer ref={navigationRef} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
