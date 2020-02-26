import React, { Component } from 'react'
import './index.scss'
import { HashRouter as Router,Link} from 'react-router-dom'
import { Icon } from 'antd'
export default class Foot extends Component {
   render(){
     return (<div className="footer">
       <footer>
         <Router>
          <ul>
            <li>
              <Link to="/home">
                <Icon type="home" theme="filled" className="bottom-icon-font"></Icon>
                {/* <p className="title">首页</p> */}
              </Link>
            </li>
            <li>
              <Link to="/about">
                <Icon type="appstore" theme="filled" className="bottom-icon-font"></Icon>
              </Link>
            </li>
            <li>
              <Link to="chart">
                <Icon type="pie-chart" className="bottom-icon-font"></Icon>
              </Link>
            </li>
            <li>
              <Link to="/mine">
                <Icon type="user" className="bottom-icon-font"></Icon>
              </Link>
            </li>
          </ul>
         </Router>
       </footer>
     </div>)
  }
}