import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
	// 配置api地址
	baseURL: 'http://127.0.0.1:3333/elm',
	// 请求超时时间
	timeout: 10000,
	// 设置请求头
	headers: {'content-type': 'application/json; charset=UTF-8'},
	// 设置数据格式化
	transformRequest: [(data) => {
		data = qs.stringify(data)
		return data
	}]
})


export default instance