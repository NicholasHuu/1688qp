import { Injectable } from '@angular/core';

import {Http,Jsonp,Headers} from "@angular/http";

import 'rxjs/add/operator/map';

//配置文件
import { ConfigProvider } from '../config/config';
@Injectable()
export class HttpServicesProvider {
  public api:any;
  private headers = new Headers({'Content-Type': 'application/json'});  
  public times = 0;
  constructor(public http: Http,public jsonp:Jsonp,public config:ConfigProvider) {
    // console.log('Hello HttpServicesProvider Provider');
  }
  
  //请求数据
  // apiUrl :   api/focus
  // apiUrl :   api/plist?page=1
  requestJsonpData(apiUrl,callback){
    // let params = new URLSearchParams();    
    // params.set("callback", "__ng_jsonp__.__"+ this.times +".finished"); 
    if(apiUrl.indexOf('?')==-1){
      this.api=this.config.apiUrl+apiUrl+'?callback=__ng_jsonp__.__req'+ this.times +'.finished';
    }else{
      this.api=this.config.apiUrl+apiUrl+'&callback=__ng_jsonp__.__req'+ this.times +'.finished';
    }
    this.times++;    
    this.jsonp.get(this.api).subscribe(function(data){
      // console.log(data);
      callback && callback(data);        /*回调函数*/
    },function(err){
        // console.log(err);
        callback(err); 
    })
  }

  requestGetData(apiUrl,callback){
    this.api=this.config.apiUrl+apiUrl;
    this.http.get(this.api).subscribe(function(data){
      // console.log(data);
      callback && callback(data);       /*回调函数*/
    },function(err){
        console.log(err);
        callback(err); 
    })
  }

  requestPostData(apiUrl,info,callback){
    this.api=this.config.apiUrl;
    this.http.post(this.api+apiUrl,
      // JSON.stringify({"username":'zhangsan',"age":'20'}),
      info,
      {headers: this.headers}
    ).subscribe(function(data){
        // console.log(data);
        callback && callback(data);       /*回调函数*/
      },function(err){
          // console.log(err);
          callback(err); 
    })
  }

}
