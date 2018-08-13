import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'


class PrivateRoute extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: false,
		}
	}
	
	render() {
		const {component: Component, ...rest} = this.props
		const {isAuthenticated} = this.state
		return (
			<Route {...rest} render={props => (
				isAuthenticated
					? <Component {...props}/>
					: <Redirect to={{
						pathname: '/login', state: {from: props.location}
					}}/>
			)}/>
		)
	}
	
}

export default PrivateRoute
