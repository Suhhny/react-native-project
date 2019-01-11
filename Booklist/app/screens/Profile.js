// @flow

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Profile extends React.Component<Props> {
	render(){
		return(
			<View style={style.container}>
				<Text style={style.title}>Profile</Text>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	}
});

export default Profile;
