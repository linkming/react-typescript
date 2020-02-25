import axios from 'axios'
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