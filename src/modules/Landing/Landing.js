import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { SIGNUP } from '../../routes/screens';

const Landing = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SIGNUP);
    }, 5000);
  })
  return (
    <View>
      <Text>This is landing screen</Text>
    </View>
  )
};

export default Landing;
