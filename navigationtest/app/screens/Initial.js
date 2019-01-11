// @flow

import * as React from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import KEY from '../config';
import { goToAuth, goToHome } from '../Navigation';

type Props = {};

class Initial extends React.Component<Props> {

	async componentDidMount() {
		try{
			const user = await AsyncStorage.getItem('KEY');
			if(user){
				goToHome();
			}else{
				goToAuth();
			}
		}catch(err){
			console.log(err);
			goToAuth();
		}
	}

	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Loading...</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 40
	}
})

export default Initial;
