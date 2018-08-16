import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateUser} from "../../redux/user/actions";

// 获取redux中state
const mapStateToProps = (state) => {
	return {
		userData: state.userData
	}
}


// 获取redux中actions
const mapDispatchToProps = (dispatch) => bindActionCreators({
	updateUser
}, dispatch)

class Login extends Component {
	singIn = () => {
		this.props.updateUser({
			isLogin: true
		})
		this.props.history.push(this.props.location.state.from.pathname)
	}
	
	render() {
		return (
			<Fragment>
				<h1>Login</h1>
				<button onClick={this.singIn}>isLogin</button>
			</Fragment>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
