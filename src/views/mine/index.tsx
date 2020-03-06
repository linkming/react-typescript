import React, { Component } from 'react'
import './index.css'
import http from './../../api';

export default class Mine extends Component {
    state={
      num:'',
    }
    componentDidMount(){
      http.searchPictures({type:'all'}).then(res=>{
        console.log(res)
      })
    }
   render(){
     return (<div className="setting">
       我是我的详情页面
     </div>)
  }
}