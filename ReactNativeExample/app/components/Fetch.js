/*
@flow
*/

import * as React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

type Props = {};

type State = {
	isLoading: boolean,
	dataSource: Array<any>
};

class Fetch extends React.Component<Props, State> {

	state: State = {
		isLoading: true,
		dataSource: []
	};

	async componentDidMount(){
		try{
			let res = await fetch('https://facebook.github.io/react-native/movies.json');
			let resJson = await res.json();

			return this.setState({
				isLoading: false,
				dataSource: resJson.movies
			});
		}catch(err){
			console.log(err);
		}
	}

	render(){

		if(this.state.isLoading){
			return (
				<View>
					<ActivityIndicator />
				</View>
			);
		}

		return (
			<View>
				<FlatList data = {this.state.dataSource} keyExtractor = {({id}, index) => id}
				renderItem = {({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
				/>
			</View>
		);
	}
}

export default Fetch;




















