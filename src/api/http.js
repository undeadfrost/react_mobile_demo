import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
	baseURL: 'http://127.0.0.1:3333/elm',
	timeout: 10000,
	// headers: {'content-type': 'application/json; charset=UTF-8'},
	transformRequest: [(data) => {
		data = qs.stringify(data)
		return data
	}]
})


export default instance