import React, { Component } from 'react'
import './index.scss'
import Home from "./../home/index"
import About from "./../about/index"
import { HashRouter as Router, Route} from "react-router-dom";
export default class Content extends Component {
    state={
        num:'',
    }
    // constructor(props:Object){
    //     super(props)
    // }
    componentDidMount(){
      console.log(require('./../footer'))
    }
   render(){
     return (<div>
       <main>
         我是内容区
          <Router>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </Router>
              
       </main>
     </div>)
  }
}