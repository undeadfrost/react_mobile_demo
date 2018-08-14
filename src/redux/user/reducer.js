import {UPDATE_USER} from "./actions"

const initState = {
	userInfo: {},
	isLogin: false
}

export default (state = initState, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}
