import AppContainer from './SwitchNavigator';

// export all constants
import('./screens').then(r => Object.keys(r).map(k => module.exports[k] = r[k]));
import('./labels').then(r => Object.keys(r).map(k => module.exports[k] = r[k]));

export const Screen = (screen, options) => ({screen: screen, ...options});
export const navigationOptions = options => ({navigationOptions: options});

export default AppContainer;
