// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import AppContainer from './router';

type Props = { };

class App extends React.Component<Props> {
	render(){
		return(
			<View>
				<AppContainer/>
			</View>
		);
	}
}

export default App;
