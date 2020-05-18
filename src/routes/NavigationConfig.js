import { MAIN_TABS, HOME, ORDER, CART, ACCOUNT } from "./screens";
import { HOME_LABEL, ORDER_LABEL, CART_LABEL, ACCOUNT_LABEL } from "./labels";

const navigationOptions = options => ({navigationOptions: options});
const getHeaderTitle = (bgColor = 'red', fontColor = '#fff', styles) => ({
  headerStyle: {
    backgroundColor: bgColor,
  },
  headerTintColor: fontColor,
  headerTitleStyle: styles,
});

export const NavigationOptions = {
  [HOME]: navigationOptions({
    tabBarLabel: HOME_LABEL,
    // tabBarVisible: false,
  }),
  [ORDER]: navigationOptions({
    title: 'Order Title',
    tabBarLabel: ORDER_LABEL,
    tabBarIcon: '',
    tabBarOnLongPress: props => {
      console.log('tabBarOnLongPress => ', props);
      props.defaultHandler();
    },
    tabBarOnPress: props => {
      console.log('tabBarOnPress => ', props);
      props.defaultHandler();
    },
    tabBarVisible: true,
  }),
  [CART]: navigationOptions({
    tabBarLabel: CART_LABEL,
  }),
  [ACCOUNT]: navigationOptions({
    tabBarLabel: ACCOUNT_LABEL,
  }),
};

export const DefaultNavigationOptions = {
  [MAIN_TABS]: {
    initialRouteName: ORDER,
  },
};
