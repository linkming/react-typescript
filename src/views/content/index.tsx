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
    }
   render(){
     return (<div>
       <main>
          <Router>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </Router>
       </main>
     </div>)
  }
}