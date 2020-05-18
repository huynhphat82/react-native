import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {ORDER} from './screens';
import Order from '../modules/Order/Order';
import { View, Text } from 'react-native';

const header = (options) => {
  return {
    headerTitleAlign: options.align || options.position || 'center',
    headerTitle: options.title,
    headerStyle: options.headerStyle,
    headerTintColor: options.headerTintColor,
    headerTitleStyle: options.headerTitleStyle,
    headerLeft: options.headerLeft,
    headerLeftContainerStyle: options.headerLeftContainerStyle,
    headerRight: options.headerRight,
    headerRightContainerStyle: options.headerRightContainerStyle,
    headerStatusBarHeight: options.headerStatusBarHeight,
  };
};

const OrderStack = createStackNavigator({
  [ORDER]: {
    screen: Order,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerTitle: props => {
        return (
          <View
            style={{ 
              backgroundColor: 'blue',
            }}
          >
            <Text>Order Title X</Text>
          </View>
        );
      },
      headerLeft: props => {
        return (
          <View
            style={{ 
              backgroundColor: 'blue',
            }}
          >
            <Text>Left</Text>
          </View>
        );
      },
      headerLeftContainerStyle: {
        backgroundColor: 'purple'
      },
      headerRight: props => {
        return (
          <View
            style={{ 
              backgroundColor: 'blue',
            }}
          >
            <Text>Right</Text>
          </View>
        );
      },
      headerRightContainerStyle: {
        backgroundColor: 'purple'
      },
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackImage: {
        disabled: false,
        onPress: () => alert(1),
        backImage: props => {
          return (
            <View></View>
          );
        },
        canGoBack: true,
        tintColor: 'organe',
        label: 'xxx'
      },
      // headerBackground: props => {
      //   return (

      //   );
      // },
      headerStatusBarHeight: 0,
    }
  },
});

export default OrderStack;
