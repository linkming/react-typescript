import React, { Component } from 'react'
import './index.scss'
import Home from "./../home/index"
import About from "./../about/index"
import Chart from "./../chart/index"
import Mine from "./../mine/index"
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
            <Route path="/about/:id/:mid" component={About} />
            <Route path="/chart" component={Chart} />
            <Route path="/mine" component={Mine} />
          </Router>
       </main>
     </div>)
  }
}