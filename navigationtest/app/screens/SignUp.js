// @flow
import * as React from 'react';
import { View, TextInput, AsyncStorage } from 'react-native';
import KEY from '../config';
import { goToHome } from '../Navigation';

type Props = {};

type State = {
	name: string,
	email: string,
	password: string
};

class SignUp extends React.Component<Props, State> {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
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
			<View style={styles.containcer}>
				<TextInput style={styles.input} placeholder="Name" onChangeText={(name) => this.setState({name})} />
				<TextInput style={styles.input} placeholder="Email" onChangeText={(email) => this.setState({email})} />
				<TextInput style={styles.input} placeholder="Password" onChangeText={(password) => this.setState({password})} />
				<Button onPress={this.login}>Sign Up</Button>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	input: {
		width: 350,
		height: 55,
		backgroundColor: '#42A5F5',
		margin: 10,
		padding: 8,
		color: 'white',
		borderRadius: 14,
		fontSize: 18,
		fontWeight: '500',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default SignUp;
