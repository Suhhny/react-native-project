import { Navigation } from 'react-native-navigation';

import Home from './screens/Home';
import Initial from './screens/Initial'

export const registerScreens = () => {
	Navigation.registerComponent('Home', () => Home)
	Navigation.registerComponent('Initial', () => Initial)
}
