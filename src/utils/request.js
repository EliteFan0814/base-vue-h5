import axios from 'axios'
import store from '@/store'
import Qs from 'qs'
import { getToken } from '@/utils/cookie'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeput: 5000
})

service.interceptors.request.use(
  (config) => {
    if (config.method.toLowerCase() === 'post') {
      // 如果请求参数不是 FormData 类型，就将对象序列化成键值对的形式放入请求体
      // 如果是formData形式则可以直接传递
      if (!(config.data instanceof FormData)) {
        config.data = Qs.stringify(config.data)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      }
    }
    if (getToken) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  (err) => {
    console.log(err)
    return Promise.reject(err)
  }
)

service.interceptors.response.use((response) => {
  if (response.data.success || response.data.code === 1) {
    if (response.data.msg && response.data.msg !== 'ok') {
    }
  }
})
