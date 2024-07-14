System.register(["./index-legacy.js?v=1720690738171","./Progress-legacy.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./DataTable-legacy.js?v=1720690738171"],(function(e,t){"use strict";var s,a,l,n,c,r,i,u,o,d,p,g,m,x,h,v;return{setters:[e=>{s=e.aj,a=e._,l=e.H},e=>{n=e._},e=>{c=e.l,r=e.r,i=e.k,u=e.S,o=e.Z,d=e._,p=e.a3,g=e.W,m=e.P,x=e.q,h=e.F},e=>{v=e.N}],execute:function(){const t={class:"w-400px p-20px"},b={class:"mb-12px text-14px"},f=e("a",c({__name:"progress",props:{data:{}},emits:["close"],setup(e,{emit:a}){const l=e,{title:c,data:x,api:h,callback:v}=l.data,f=a,y=r(0),S=r(0),w=i((()=>x.length));return(async()=>{for(let t=0;t<x.length;t++)try{if(h){const e=await h(x[t]);x[t].batchStatus="success",x[t].reqMsg=s(e,"message.result","Success"),S.value+=1,S.value===w.value?y.value=100:y.value=Math.round(S.value/w.value*100)}}catch(e){x[t].batchStatus="error",x[t].reqMsg=s(e,"message.result","")}v?.(x),f("close")})(),(e,s)=>{const a=n;return u(),o("div",t,[d("div",b,[d("span",null,"Batching "+p(g(c))+", current progress: ",1),d("span",null,p(g(S))+"/"+p(g(w)),1)]),m(a,{type:"line",status:"success",percentage:g(y),height:24,"border-radius":4,"fill-border-radius":0,processing:!0,"show-indicator":!1,"indicator-placement":"inside"},null,8,["percentage"])])}}})),y={class:"p-24px"},S={class:"flex items-center mb-24px"},w={class:"flex-1 ml-12px text-14px leading-22px"},_={class:"flex-1 ml-12px text-14px leading-22px"};e("_",c({__name:"index",props:{data:{}},emits:["setConfirm"],setup(e,{expose:t,emit:s}){const n=e,{title:c,desc:i,data:b,columns:k,api:j,done:q}=n.data,C=s,M=r([]),$=r([...k,{key:"batchStatus",title:"Result",align:"right",width:200,render:e=>"success"===e.batchStatus?m("span",{class:"text-primary"},[e.reqMsg]):"error"===e.batchStatus?m("span",{class:"text-error"},[e.reqMsg]):m("span",{class:"text-warning"},[x("Wait")])}]),z=r(!1),D=r(""),P=e=>{const t=e.filter((e=>"success"===e.batchStatus)).length,s=e.length-t;D.value=`${c} has been completed, total ${e.length} tasks, ${t} successes, ${s} failures`,z.value=!0,C("setConfirm",{text:"Done",disabled:!1}),q?.(e)};return(()=>{M.value=b.map((e=>({batchStatus:"wait",...e})));const{status:e}=n.data;"done"===e&&P(b)})(),t({onConfirm:({hide:e})=>(z.value?e():(C("setConfirm",{disabled:!0}),l({title:c,hideClose:!0,data:{title:c,api:j,data:M.value,callback:P},component:f})),!1)}),(e,t)=>{const s=a,l=v;return u(),o("div",y,[d("div",S,[g(z)?(u(),o(h,{key:1},[m(s,{name:"base-success",size:"40",class:"text-primary"}),d("div",_,p(g(D)),1)],64)):(u(),o(h,{key:0},[m(s,{name:"base-warning",size:"40",class:"text-warning"}),d("div",w,p(g(i)),1)],64))]),m(l,{"max-height":182,data:g(M),columns:g($)},null,8,["data","columns"])])}}}))}}}));