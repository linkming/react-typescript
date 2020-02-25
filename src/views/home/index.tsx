import React, { Component } from 'react'
import './index.css'
import http from './../../api/index'
import { Input,Table,Tag,Divider } from 'antd';
import Foot from './../footer/index';
// , ColumnGroup
const { Column } = Table;
// import http from './../../api'

export default class Home extends Component {
    state={
        num:'',
        data:[  {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            width:10,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
          {
            key: '2',
            width:10,
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          },
          {
            key: '3',
            width:10,
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          },]
    }
    // constructor(props:Object){
    //     super(props)
    // }
    componentDidMount(){
      console.log(http)
    }
    onChange=(e:any)=>{
        const str = e.target.value
        this.setState(()=>{
            return {num:str}
        })
      }
      onBlur=()=>{
        http.getSongs(this.state.num).then((res:object)=>{
          console.log(res)
        })

    }
   render(){
     return (<div>
         <div>
          <Input size="large" value={this.state.num} placeholder="请输入歌曲ID" 
          onChange={this.onChange.bind(this)} onBlur={this.onBlur.bind(this)} />
         </div>
        <div>
        <Table dataSource={this.state.data}>
        {/* <ColumnGroup title="Name"> */}
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    {/* </ColumnGroup> */}
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      className="column"
      key="tags"
      render={tags => (
        <span>
          {tags.map((tag:any) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </span>
      )}
    />
    <Column
      title="Action"
      key="action"
      width="10"
      render={(text, record) => (
        <span>
          <a href="#abc">Invite 
          {/* {record.lastName} */}
          </a>
          <Divider type="vertical" />
          <a href="#abc">Delete</a>
        </span>
      )}
    />
        </Table>
        </div>
        <Foot></Foot>
     </div>)
  }
}