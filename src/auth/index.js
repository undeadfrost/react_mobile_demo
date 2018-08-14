import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		userData: state.userData
	}
}

class PrivateRoute extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: false,
		}
	}
	
	componentWillMount() {
		if (this.props.userData.isLogin) {
			this.setState({isAuthenticated: true})
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

export default connect(mapStateToProps)(PrivateRoute)
