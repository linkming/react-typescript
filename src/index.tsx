import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import proxy from 'http-proxy-middleware'
import 'antd/dist/antd.css';
ReactDOM.render(<App />, document.getElementById('root'));
// console.log(proxy)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
