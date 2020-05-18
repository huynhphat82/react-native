import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {MAIN_TABS, SETTINGS} from './screens';
import MainTabs from './MainTabs';
import SettingStack from './SettingStack';

const MainDrawer = createDrawerNavigator({
  [MAIN_TABS]: MainTabs,
  [SETTINGS]: SettingStack,
});

export default MainDrawer;
