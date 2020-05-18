import React, { useEffect } from 'react'
import {View, Text} from 'react-native';
import { APP } from '../../routes/screens';

const SignUp = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(APP);
    }, 5000);
  });

  return (
    <View>
      <Text>This is sign up screen</Text>
    </View>
  );
};

export default SignUp;
