import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import PrivateRoute from '../auth'
// import SkeletonScreen from '../components/skeleton_screen'
import Home from './home'
import Login from './login'
import User from './user'

class App extends Component {
	componentDidMount() {
	}
	
	render() {
		return (
			<Switch>
				<Route path='/' exact render={() => (<Redirect to='/home'/>)}/>
				<Route path='/home' component={Home}/>
				<Route path='/login' component={Login}/>
				<PrivateRoute path='/user' component={User}/>
			</Switch>
		);
	}
}

export default App;
