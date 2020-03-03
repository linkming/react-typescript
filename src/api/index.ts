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
axios.interceptors.response.use(response => {
  if (response.status===200) {
    return response.data;
  }
},
(error: any) => {
  return Promise.reject(error);
})
export default {
    getSongs() {
      return axios({
        headers:{
          referer: 'https://c.y.qq.com',
          host: 'c.y.qq.com'
        },
        method: 'get',
        url: '/soso/fcgi-bin/search_for_qq_cp?_=1582883790354&g_tk=5381&uin=&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w= &zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=2&remoteplace=txt.mqq.all',
      })
    },
    example(){
      return axios({
        url: '/api/base/fcgi-bin/fcg_global_comment_h5.fcg',
        method: 'get',
        params: {
          g_tk: 5381,
          uin: 0,
          format: 'json',
          inCharset: 'utf-8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'h5',
          needNewCode: 1,
          cid: 205360772,
          reqtype: 1,
          cmd: 8,
          needmusiccrit: 0,
          pagesize: 3,
          lasthotcommentid: 0,
          qq: 0,
          pagenum: 0,
          biztype: 1,
          topid: 105468975,
          ct: 999,
          _: new Date().valueOf(),
          msg_comment_id: 0
        }
      })
    },
    searchSongsByName(params:object) {
      return axios({
        method: 'get',
        url: '/api/soso/fcgi-bin/client_search_cp',
        params
      })
    },
    searchSongsBySinger(singer:String) {
      return axios({
        method: 'get',
        url: '/singer',
        params: {
          singer
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