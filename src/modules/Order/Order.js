import React from 'react'
import {View, Text} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AppService, { app } from '../../services/AppService';
import Log from '../../services/Log';

const Order = ({ navigation }) => {
  const onWillBlur = (e) => {
    // AppService.switchTo('Auth');
    // app().switchTo('Auth');
    Log.saveCrash();
  };

  return (
    <>
      <NavigationEvents
        onWillBlur={onWillBlur}
      />
      <View>
        <Text>This is order screen</Text>
      </View>
    </>
  )
};

// Order.navigationOptions = {
//   title: 'XXX',
//   headerStyle: {
//     backgroundColor: 'red',
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// };

export default Order;
