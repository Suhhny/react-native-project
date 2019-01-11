// @flow

import * as React from 'react';
import { View, Text, AsyncStorage, Button, StyleSheet } from 'react-native';
import { goToAuth } from '../Navigation';
import KEY from '../config';

type Props = {};

class Home extends React.Component<Props> {
	static get options() {
		return {
			topbar: {
				text: 'Home',
				color: 'red',
				visible: true
			}
		};
	}

	logout = async () => {
		try{
			await AsyncStorage.removeItem('KEY');
			goToAuth();
		}catch(err){
			console.log(err);
			alert('Please try later');
		}
	}

	render() {
		return(
			<View style={styles.container}>
				<Text>안뇽</Text>
				<Button onPress={this.logout} title='Sign Out'></Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default Home;
