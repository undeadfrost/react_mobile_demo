import {createStore, combineReducers} from 'redux'
import userReducer from './user/reducer'

const allReducer = {
	userData: userReducer
}

const store = createStore(combineReducers(allReducer))

export default store
