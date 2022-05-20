import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
} from 'axios'
// const request: AxiosInstance = axios.create({
const request = axios.create({
  // baseURL: import.meta.env.BASE_URL,
  timeout: 60000, // 请求超时时间
})
// 请求拦截器
request.interceptors.request.use(
  // function (config: AxiosRequestConfig) {
  function (config) {
    // 可以设置用户token
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  // function (response: AxiosResponse) {
  function (response) {
    // 处理接口响应错误
    // Do something with response data
    return response.data
  },
  // function (error: AxiosError) {
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default request
