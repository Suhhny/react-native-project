// @flow

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BookcaseItem from '../components/BookcaseItem';

type Props = {};

type Content = {
	id: number,
	title: string,
	author: string,
	thumbnail: string
};

type State = {
	books: Array<Content>
};

class Bookcase extends React.Component<Props, State> {

	state = {
		books: [
			{
				id: 1,
				title: 'Harry Potter and the Goblet of Fire',
				author: 'J. K. Rowling',
				thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
			},
			{
				id: 2,
				title: 'The Hobbit',
				author: 'J. R. R. Tolkien',
				thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
			},
			{
				id: 3,
				title: '1984',
				author: 'George Orwell',
				thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
			}
		]
	}

	_renderItem = ({item}) => {
		<BookcaseItem id={item.id} title={item.title} author={item.author} thumbnail={item.thumbnail}></BookcaseItem>
	}

	_keyExtractor = (item, index) => item.id

	render(){
		return(
			<View style={style.container}>
				<StatusBar barStyle="default" />
				<FlatList data={this.state.books}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor} />
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

export default Bookcase;
