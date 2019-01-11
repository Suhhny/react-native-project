// @flow

import * as React from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import { goToHome } from '../Navigation'
import KEY from '../config'

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
			AsyncStorage.setItem('KEY', this.state.username)
			goToHome();
		}catch(err){
			console.log(err);
			alert('Please try later');
		}
	}

	render() {
		return(
			<View style={styles.container}>
				<TextInput style={styles.text} placeholder="Username" onChangeText={(username) => this.setState({username})} />
				<TextInput style={styles.text} placeholder="Password" onChangeText={(password) => this.setState({password})} />
				<Button style={styles.text} onPress={this.login} title="Sign In"></Button>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	text: {
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
});

export default SignIn;
