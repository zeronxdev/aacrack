import{_ as e}from"./index112.js?v=1720690738171";import{I as s,aj as o,n as a}from"./index.js?v=1720690738171";import{i as r}from"./data.js?v=1720690738171";import{u as t}from"./useSocket.js?v=1720690738171";import{l as m,d as i,ad as n,r as c,S as l,Z as d,P as u,W as p}from"./vue.js?v=1720690738171";import"./Spin.js?v=1720690738171";import"./pinia.js?v=1720690738171";const _={class:"h-400px bg-#282c34 rounded-b-4px"},f=m({__name:"index",props:{row:{}},emits:["close"],setup(m,{emit:f}){const g=f,j=i(m,"row"),{t:k}=n(),x=s(),b=c(k("Docker.CloudImage.index_9")+"\n"),{createWebSocket:S,sendSocket:v,closeWebSocket:w}=t({url:"/ws_model",onMessage:(e,s)=>{const{data:t}=s;if(r(t)){const e=JSON.parse(t),s=o(e,"result.status",!1),r=o(e,"result.msg",!1);s?(a.success(r),x.setRefresh(!0),setTimeout((()=>{g("close")}),1500)):a.error(r),w()}else b.value+=s.data}});return(async()=>{S(),v({model_index:"btdocker",mod_name:"image",def_name:"pull_from_some_registry",ws_callback:111,name:"Docker public repository",image:j.value.name})})(),(s,o)=>{const a=e;return l(),d("div",_,[u(a,{log:p(b)},null,8,["log"])])}}});export{f as default};