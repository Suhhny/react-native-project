// @flow

import * as React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Dimensions } from 'react-native';
import { Icon } from 'native-base';

import AddBook from './screens/AddBook';
import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';
import Lists from './screens/Lists';
import Profile from './screens/Profile';

let screen = Dimensions.get('window');

const Tabs = createBottomTabNavigator({
	AddBook: {
		screen: () => <AddBook />,
		navigationOptions: {
			tabBarLabel: 'Add Book',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
		}
	},
	Bookcase: {
		screen: () => <Bookcase />,
		navigationOptions: {
			tabBarLabel: 'Bookcase',
			tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
		}
	},
	Explore: {
		screen: () => <Explore />,
		navigationOptions: {
			tabBarLabel: 'Explore',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-map-outline" type="ionicon" size={28} color={tintColor} />
		}
	},
	Lists: {
		screen: () => <Lists />,
		navigationOptions: {
			tabBarLabel: 'Lists',
			tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
		}
	},
	Profile: {
		screen: () => <Profile />,
		navigationOptions: {
			tabBarLabel: 'Profile',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />
		}
	}
})

const Stack = createStackNavigator({
	Tabs: {
		screen: Tabs,
		navigationOptions: {
			gestureEnabled: false
		}
	}
})

const AppContainer = createAppContainer(Stack);

export default AppContainer;





















