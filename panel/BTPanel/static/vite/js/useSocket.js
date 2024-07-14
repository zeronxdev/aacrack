var e=Object.defineProperty,t=(t,s,n)=>(((t,s,n)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n})(t,"symbol"!=typeof s?s+"":s,n),n);import{as as s,y as n}from"./vue.js?v=1720690738171";import{n as o,j as c,cp as a}from"./index.js?v=1720690738171";import{i}from"./data.js?v=1720690738171";class r{constructor(e){t(this,"socket",null),t(this,"url",""),t(this,"connectURL",(()=>{const{host:e,protocol:t}=window.location;return("http:"===t?"ws://":"wss://")+e+"/v2"})()),t(this,"sendData",{}),this.url=e.url,this.connectURL+=e.url,this.init(e)}init(e){"WebSocket"in window?this.socket=s(this.connectURL,{autoReconnect:{retries:3,delay:500},onConnected:t=>{e.onConnected&&e.onConnected(t),this.onConnected(t,e)},onMessage:(t,s)=>{e.onMessage&&e.onMessage(t,s),this.onMessage(t,s)},onDisconnected:(t,s)=>{e.onDisconnected&&e.onDisconnected(t,s),this.onDisconnected()},onError:(t,s)=>{e.onError&&e.onError(t,s),this.onError()}}):o.error("The browser does not support Websocket")}isStatus(e){var t,s;return((null==(t=this.socket)?void 0:t.status.value)||(null==(s=this.socket)?void 0:s.status))===e}channelVerify(){var e;const t={};t["x-http-token"]=null==(e=document.getElementById("request_token_head"))?void 0:e.getAttribute("token"),this.send(t)}send(e){var t;if(this.isStatus("OPEN"))null==(t=this.socket)||t.send(c(e)?JSON.stringify(e):e);else{const t=a(10);this.sendData[t]={data:e,status:!1,request:!1,callback:()=>{}}}}onConnected(e,t){t.noInit||this.channelVerify(),this.onSendData()}onSendData(){Object.entries(this.sendData).forEach((([e,t])=>{this.send(t.data),delete this.sendData[e]}))}onMessage(e,t){if("/ws_home"===this.url||"/ws_model"===this.url)try{if(i(t.data)){const s=JSON.parse(t.data),n=s.callback||s.ws_callback;n&&this.sendData[n]&&this.sendData[n].callback(e,t)}}catch(s){console.log(s)}}onDisconnected(){this.close(),console.log("断开连接")}onError(){console.log("连接错误")}close(){var e;null==(e=this.socket)||e.close()}}function l({url:e,onMessage:t,onDisconnected:s}){let o=null;const c=()=>{o&&(o.close(),o=null)};return n((()=>{c()})),{getSocket:()=>o,sendSocket:e=>{null==o||o.send(e)},closeWebSocket:c,createWebSocket:()=>{var n;n={url:e,onMessage:(e,s)=>{t(e,s)},onDisconnected:()=>{o=null,null==s||s()}},o=new r(n)}}}export{l as u};
