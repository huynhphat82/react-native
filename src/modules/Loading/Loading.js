import React, { useEffect } from 'react'
import {View, Text} from 'react-native';
import { AUTH } from '../../routes/screens';

const Loading = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(AUTH);
    }, 5000);
  });

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  )
};

export default Loading;
