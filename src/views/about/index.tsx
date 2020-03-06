import * as React from 'react'
import http from './../../api'
import './index.scss'
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';

export default class About extends React.Component<any> {
    state={
      params:{
        g_tk:5381,
        loginUin:0,
        hostUin:0,
        format:'json',
        inCharset:'utf8',
        outCharset:'GB2312',
        notice:0,
        platform:'yqq.json',
        needNewCode:0,
        cid:205360772,
        reqtype:2,
        biztype:1,
        topid:0,
        cmd:8,
        needmusiccrit:0,
        pagenum:0,
        pagesize:25,
        lasthotcommentid:'',
        domain:'qq.com',
        ct:24,
        cv:10101010
      },
      qqComment:0,
      data:[]
    }
    componentDidMount(){
      var params = Object.assign({},this.state.params,{topid:this.props.match.params['id']})
      this.setState(()=>{
        return {params}
      })
     setTimeout(() => {
      this.getComment()
    }, 0);
    setTimeout(() => {
      var scrollContainer = document.querySelector('.about')
      console.log(scrollContainer)
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', function(){
          console.log('running')
        });
      }
    }, 2500);
  }
    handleScroll=(event:any)=>{
      //滚动条高度
      alert('啊哈哈和')
      let ctx=this;
      console.log(ctx,this)
      let clientHeight = document.documentElement.clientHeight; //可视区域高度
      let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
      let scrollHeight =document.documentElement.scrollHeight; //滚动内容高度
      if(scrollTop>500){
          ctx.setState({ style: { display: "block", } })
      }else
      {
          ctx.setState({ style: { display: "none", } })
      }
      let res=scrollHeight-scrollTop-clientHeight;
      if(res<=500){
          ctx.setState({ styles: { display: "none", } })
      }else {
          ctx.setState({ styles: { display: "block", } })
      }

  }

    getComment() {
      http.getComment(this.state.params,this.props.match.params['mid']).then((res:any)=>{
        const arr = JSON.parse(res.body)['hot_comment'].commentlist.map((item:any)=>{
          return {
              actions: [<span key="comment-list-reply-to-0">回复</span>],
              author: item.nick,
              avatar: item.avatarurl,
              content: (
                <p>
                  {/* 表情转换为图片 */}
                  {item.rootcommentcontent}
                </p>
              ),
              datetime: (
                <Tooltip
                  title={moment()
                    .subtract(1, 'days')
                    .format('YYYY-MM-DD HH:mm:ss')}
                >
                  <span>
                    {moment()
                      .subtract(Math.round(item.time/1000/60/60/24), 'days')
                      .fromNow()}
                  </span>
                </Tooltip>
              ),
            }
        })
        console.log(arr)
        this.setState(()=>{
          return {data:arr,qqComment:JSON.parse(res.body)['hot_comment'].commenttotal}
        })
      })
    }
   render(){
     return (<div className="about">
      <List
        className="comment-list"
        header={`${this.state.qqComment} 条热门评论`}
        itemLayout="horizontal"
        dataSource={this.state.data}
        renderItem={(item:any) => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
     </div>)
  }
}