import * as React from 'react';
import { View, Text } from 'react-native';

type Props = {
	id: number,
	title: string,
	author: string,
	thumbnail: string
};

class BookcaseItem extends React.Component<Props> {
	render(){
		return(
			<View>
				<Text>Title: {this.props.title}</Text>
				<Text>Author: {this.props.author}</Text>
				<Image source={this.props.thumbnail}></Image>
			</View>
		);
	}
}

export default BookcaseItem;
