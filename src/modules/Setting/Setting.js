import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native';

const Setting = ({ navigation }) => {
  return (
    <View>
      <Text>This is setting screen</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Order')}>
        <Text>Order</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Setting;
