import React, {Component} from 'react';
import fetchApi from '../api'
import SkeletonScreen from '../components/skeleton_screen'

class App extends Component {
	componentDidMount() {
		let params = {
			latitude: 34.317723,
			longitude: 108.944529,
			templates: ['main_template', 'favourable_template', 'svip_template'],
			terminal: 'h5'
		}
		fetchApi.entries({params}).then(data => {
			console.log(data)
		})
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
