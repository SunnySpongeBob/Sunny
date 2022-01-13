/*
 * @Description: 
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2021-12-29 16:53:37
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-05 09:53:59
 */
import axios from 'axios'
import store from '@/store'
// import { Spin } from 'iview'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}


class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  // config
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors(instance, url) {
    // console.log('***********', 'instance, url,', instance.interceptors);
    // 请求拦截
    instance.interceptors.request.use(config => {
      // console.log('44444444444444', config);
      // console.log('55555555555555', this.queue, this.queue.length, Object.keys(this.queue).length);

      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      // console.log('6666666666666', this.queue);
      // console.log('777777777777', config);
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      // console.log('-------------', 'res', res);
      this.destroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      // console.log('888888888888888', errorInfo);
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    // console.log('1111111111111', this.getInsideConfig());
    // console.log('2222222222222', options);
    options = Object.assign(this.getInsideConfig(), options)
    // console.log('3333333333333', options);
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
