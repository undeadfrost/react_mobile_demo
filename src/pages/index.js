import React, {Component} from 'react';
import SkeletonScreen from '../components/skeleton_screen'

class App extends Component {
	componentDidMount() {
	}
	
	render() {
		return (
			<div className="App">
				<SkeletonScreen/>
			</div>
		);
	}
}

export default App;
