;import React from 'react';
import { View, Text } from 'react-native';
import Helper from '../../services/Helper';

const NotFound = () => (
  <View>
    <Text>Not Found</Text>
  </View>
);

const ExistThen = ({ data, component, children, notfound }) => {
  if (Helper.notEmpty(data)) {
    if (component === undefined) {
      return children;
    }
    return typeof component === 'function' ? component() : component;
  }
  return notfound || <NotFound />;
};

export default ExistThen;
