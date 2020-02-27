var express = require('express');
const app = express()
var router = express.Router();
var request = require('request');

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.header('Access-Control-Allow-Methods', '*');
    // res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });
//   https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=30&w=%E7%88%B1
app.get('/songs',(req,res)=>{
    console.log(req.query)
    request({
        url: 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp?p=1&n=20&w='+encodeURI(req.query.singer)+'&format=json&t=8',//请求路径
        method: "get",//请求方式，默认为get
        headers: {//设置请求头
            "content-type": "application/json",
        },
        // body: JSON.stringify(requestData)//post参数字符串
    }, function(error, response, body) {
        res.send(JSON.stringify(response))
        // console.log(response,error)
        if (!error && response.statusCode === 200) {
        }
    }); 
})
app.listen(8000,(data,error)=>{
    console.log('service is running')
})