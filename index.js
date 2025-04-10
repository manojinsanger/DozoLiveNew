/**
 * @format
 */
import 'react-native-gesture-handler'; //added
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
