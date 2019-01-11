/** @format */

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './app/Screens';

registerScreens();

Navigation.events().registerAppLaunchedListener( () => {
	Navigation.setRoot({
		root: {
			component: {
				name: 'Initial'
			}
		}
	})
})


// Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);   // registerComponent(screenID, generator)

// Navigation.events().registerAppLaunchedListener(() => {   // once the app is launced. initialize the layout i want via SetRoot
// 	Navigation.setRoot({
// 		root: {
// 			component: {
// 				name: "navigation.playground.WelcomeScreen"
// 			}
// 		}
// 	});
// });

