import React from 'react'
import {View, Text} from 'react-native';
import { ORDER_LABEL } from '../../routes';
import { HOME } from '../../routes';

const Home = () => {
  return (
    <View>
      <Text>{ORDER_LABEL}</Text>
      <Text>{HOME}</Text>
      <Text>This is home screen</Text>
    </View>
  )
};

export default Home;
