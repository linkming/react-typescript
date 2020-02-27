import React, { Component } from 'react'
import './index.scss'
import http from './../../api/index'
import { Input } from 'antd';

export default class Home extends Component {
    state={
        num:'',
        data:[]
    }
    // constructor(props:Object){
    //     super(props)
    // }
    componentDidMount(){
      // console.log(http)
    }
    onChange=(e:any)=>{
        const str = e.target.value
        this.setState(()=>{
            return {num:str}
        })
      }
      onBlur=()=>{
        http.searchSongsByName(this.state.num).then((res:any)=>{
          if (res.status===200) {
            const {data}= res
            console.log(JSON.parse(data.body))
            this.setState(()=>{
              return {data:JSON.parse(data.body).data.album.list}
            })
            console.log(this.state.data)
          } else {
            
          }
        })

    }
   render(){
     return (<div>
      <div className="search-input">
        <Input size="large" value={this.state.num} placeholder="请输入歌曲名称" 
        onChange={this.onChange.bind(this)} onBlur={this.onBlur.bind(this)} />
      </div>
      <ul className="ul">
        {this.state.data.map( (item:any) => <li key={item.albumID}>
          <img src={item.albumPic} alt="图片不存在"/>
          <span>{item.albumName}</span>
          <span>{item.singerName}</span>
        </li> )}
      </ul>
     </div>)
  }
}