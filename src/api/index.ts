import axios from 'axios'

interface AxiosRequestConfig {
  url: string;
  method?: string;
  headers?: any;
  data?: any;
  params?: any;
  responseType?: XMLHttpRequestResponseType;
}
interface AxiosResponse {
  data: any; // 服务端返回的数据
  status: number; // HTTP 状态码
  statusText: string; // 状态消息
  headers: any; // 响应头
  config: AxiosRequestConfig; // 请求配置对象
  request: any; // 请求的 XMLHttpRequest 对象实例
}
interface AxiosPromise extends Promise<AxiosResponse> {
}
// axios.interceptors.response.use((response:AxiosPromise) => {
//   return response.data;
// },
// (error: any) => {
//   return Promise.reject(error);
// })
export default {
    getSongs(id:String) {
      return axios({
        method: 'get',
        url: '/cloudmusic',
        params: {
          type: 'detail',
          id
        }
      })
    },
    //aggr=1&cr=1&flag_qc=0&p=1&n=30&w=%E9%BE%99%E5%8D%B7%E9%A3%8E
    searchSongsByName(singer:String) {
      return axios({
        method: 'get',
        url: '/songs',
        params: {
          singer
        //   aggr:1,
        //   cr:1,
        //   flag_qc:0,
        //   p:1,
        //   n:30,
        }
      })
    },
    comments(id:Number) {
      return axios({
        method: 'get',
        url: '/cloudmusic',
        params: {
          type: 'comments',
          id
        }
      })
    }
  }