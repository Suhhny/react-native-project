// @flow

import React from 'react'
import { View, StyleSheet, TextInput, Button, AsyncStorage } from 'react-native'
import { goToHome } from './navigation'
import KEY from './config'

type Props = {};

type State = {
	username: string,
	password: string
};

class SignIn extends React.Component<Props, State> {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}

	login = async () => {
		try{
			await AsyncStorage.setItem(KEY);
			goToHome();
		}catch(err){
			console.log(err);
			alert('Please try later');
		}
	}

	render() {
		return(
			<View>
				<TextInput placeholder="Username" onChangeText={(username) => this.setState({username})} />
				<TextInput placeholder="Password" onChangeText={(password) => this.setState({password})} />
				<Button onPress={this.login}>Sign In</Button>
			</View>
		);
	}

const styles = StyleSheet.create({
	input: {
		width: 350,
		fontSize: 18,
		fontWeight: '500',
		height: 55,
		backgroundColor: '#42A5F5',
		margin: 10,
		color: 'white',
		padding: 8,
		borderRadius: 14
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default SignIn;
