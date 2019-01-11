import { Navigation } from 'react-native-navigation';

import Home from './screens/Home';
import Initial from './screens/Initial'
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

export const registerScreens = () => {
	Navigation.registerComponent('Home', () => Home)
	Navigation.registerComponent('Initial', () => Initial)
	Navigation.registerComponent('SignUp', () => SignUp)
	Navigation.registerComponent('SignIn', () => SignIn)
}
