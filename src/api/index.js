import http from './http'

const fetchApi = {
	// 获取入口菜单
	entries(params) {
		return http.get('/entry', params)
	}
}

export default fetchApi