import React, { Component } from 'react'
import './index.css'
import http from './../../api';
export default class Mine extends Component {
    state={
      url:'',
    }
    componentDidMount(){
      http.searchPictures({type:'all'}).then((res:any)=>{
        console.log(typeof res)
        const lastUrl =btoa(new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''))
        // this.setState(()=>{
        //   return {url : 'data:data/png;base64,'+lastUrl}
        // })
        let canvas:any = document.getElementById("canvas")
        let ctx =canvas.getContext("2d");
        // var img1 = ctx.getImageData(0,0,400,320)
        const blob = new Blob([res])
        var imageData = ctx.createImageData(200,200) 
        var a = new FileReader();
        a.readAsDataURL(blob);//读取文件保存在result中
        a.onload =  (e:any) =>{
          var getRes = e.target.result;//读取的结果在result中
          this.setState(()=>{
            return {url : getRes}
          })
        }
        imageData.data.set(res)
        console.log(imageData.data.set(res))

        // console.log('img1',img1)
        // ctx.drawImage(blob,10,10)
      })
    //   function draw() {
    //     let canvas:any = document.getElementById("canvas")
    //     let ctx =canvas.getContext("2d");
    //     ctx.save();  //默认设置
    //     ctx.fillStyle = "#09f";
    //     ctx.fillRect(15,15,120,120); //填充当前设置的#09f颜色
    //     ctx.restore();
    //     ctx.fillRect(30,30,90,90); //填充默认的黑色
    //  }

    }
   render(){
     return (<div className="setting">
      <div className="image-container">
      <canvas id="canvas"></canvas>
        <img src={this.state.url} alt=""/>
      </div> 
     </div>)
  }
}