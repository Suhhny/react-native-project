import { Navigation } from 'react-native-navigation';

export const goToAuth = () => Navigation.setRoot({
	root: {
		bottomTabs: {
			children: [
				{	component: {
						name: 'SignIn',
						options: {
							bottomTab: {
								text: 'Sign in',
								fontSize: 12
							}
						}
					}
				},
				{	component: {
						name: 'SignUp',
						options: {
							bottomTab: {
								text: 'Sign up',
								fontSize: 12
							}
						}
					}
				}
			]
		}
	}
})

export const goToHome = () => Navigation.setRoot({
	root: {
		stack: {
			children: [{
				component: {
					name: 'Home'
				}
			}]
		}
	}
});
