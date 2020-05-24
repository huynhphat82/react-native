import React from 'react'
import {View, Text} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AppService, { app } from '../../services/AppService';
import Log from '../../services/Log';
import ExistThen from '../../components/organisms/ExistThen';
import HasThen from '../../components/organisms/HasThen';

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
        <HasThen data={[]} component={() => <Text>Using functional component props</Text>} />

        <ExistThen data={['a']} component={() => <Text>Using functional component props</Text>} />
        <ExistThen data={['a']} component={(<Text>Using component props</Text>)} />

        <ExistThen data={{ a: '1' }}>
          <View>
            <Text>Using children props</Text>
          </View>
        </ExistThen>
      </View>
    </>
  );
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
