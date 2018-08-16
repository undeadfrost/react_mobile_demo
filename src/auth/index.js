import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

// redux获取state
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
	
	// 判断是否登录改变权限
	componentWillMount() {
		if (this.props.userData.isLogin) {
			this.setState({isAuthenticated: true})
		}
	}
	
	render() {
		const {component: Component, ...rest} = this.props
		const {isAuthenticated} = this.state
		return (
			// 权限通过校验则返回进入组件,否则跳转至登录页面
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
