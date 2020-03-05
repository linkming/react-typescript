import * as React from 'react'
import './index.scss'
import http from './../../api/index'
import { Input,Radio,message,Table } from 'antd';
// import { HashRouter as Router, Link} from 'react-router-dom';

export default class Home extends  React.Component<any> {
  state={
      songs:'',
      searchType:'搜索歌名',
      size:'default',
      tableData:[],
      columns:[
        {
          title: '歌曲',
          dataIndex: 'title',
          key: '1',
        },
        {
          title: '歌手',
          dataIndex: 'singer[0].name',
          key: '2',
          // render:(list:[any])=><a>{list[0]}</a>
        },
        {
          title: '专辑',
          dataIndex: 'album.name',
          key: '3',
        },
        // {
        //   title: '时长',
        //   dataIndex: 'lyric_hilight',
        //   key: '4',
        // },
        {
          title: '操作区',
          dataIndex: 'url',
          key: '5',
          render:()=><a href="#abc">播放</a>
        }
    ],
      data:[],//没用
// qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.top&searchid=35231711271332761&
// t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E7%88%B1&g_tk=5381&
// loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&
// needNewCode=0
      params: {
        ct: 24,
        qqmusic_ver: 1298,
        new_json: 1,
        remoteplace: 'txt.yqq.top',
        searchid: 35231711271332761,
        t: 0,
        aggr: 1,
        cr: 1,
        catZhida: 1,
        lossless: 0,
        flag_qc: 0,
        p: 1,
        n: 10,
        w: '',
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq.json',
        needNewCode: 0,
      }
  }
  constructor(props:any){
      super(props)
  }
  componentDidMount(){
    // console.log(H)
  }
  onChange=(e:any)=>{
      const str = e.target.value
      let data = Object.assign({}, this.state.params, { w: str })
      this.setState(()=>{
          return {
            songs:str,
            params:data,
          }
      })
  }
  handleSizeChange(event:any){
    this.setState(()=>{
      return {searchType:event.target.value}
    })
    this.searchSongsByName(this.state.params)
    // if (this.state.songs) {
    //   if (event.target.value==='搜索歌手') {
    //     console.log(event.target.value)
    //     this.onBlur()
    //   } else {
    //   }
    // }
  }
  onBlur=()=>{
    http.searchSongsBySinger(this.state.songs).then((res:any)=>{
      if (res.status===200) {
        const {data}= res
        if (data.statusCode===200) {
          console.log(JSON.parse(data.body))
          this.setState(()=>{
            return {data:JSON.parse(data.body).data.album.list}
          })
        }else{
          message.error(data.errMessage, 10);
        }
        console.log(this.state.data)
      } else {
      }
    })
  }
  searchSongsByName(params:object){
    http.searchSongsByName(params).then((res:any)=>{
      // console.log('返回结果是res',res)
      if (res.code===0) {
        const {data}= res
          // console.log(data)
          this.setState(()=>{
            return {tableData:data.song.list}
          })
          console.log(this.state.tableData)
        } else {
          message.error(res.errMessage, 10);
      }
    })
  }
  toAbout(row:any){
    console.log(row)
    // this.props.history.push('/about/'+'123',)
  }
  serchSongs(){

  }
  render(){
    return (<div className="first-page">
      <div className="search-input">
        <Input size="default" value={this.state.songs} placeholder="请输入歌曲名称" 
        onChange={this.onChange.bind(this)} />
          <Radio.Group value={this.state.searchType} onChange={this.handleSizeChange.bind(this)}>
          <Radio.Button value="搜索歌手">搜索歌手</Radio.Button>
          <Radio.Button value="搜索歌名">搜索歌名</Radio.Button>
        </Radio.Group>
      </div>
      <Table columns={this.state.columns} 
      locale={{emptyText: '暂无歌曲,'}}
       onRow={record => {
        return {
          onClick: event=>{
            this.props.history.push('/about/'+record.id+'/'+record.mid)
            // this.props.history.push('/about/?songsId='+record.mid)
            console.log(this,record)
          }, // 点击行
          onDoubleClick: event => {},
          onContextMenu: event => {},
          onMouseEnter: event => {}, // 鼠标移入行
          onMouseLeave: event => {},
          };
        }}
      rowKey={(row:any):any=>row.id}
      dataSource={this.state.tableData} />
      <ul className="ul">
        {this.state.data.map( (item:any) => <li key={item.albumID}>
          <img src={item.albumPic} alt="图片不存在"/>
          <span style={{paddingLeft:'12px'}}>{item.albumName}</span>
          <span>{item.singerName}</span>
        </li> )}
      </ul>
    </div>)
  }
}