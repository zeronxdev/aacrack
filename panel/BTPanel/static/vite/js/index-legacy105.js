System.register(["./index-legacy57.js?v=1720690738171","./index-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy11.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./Tabs-legacy.js?v=1720690738171","./omit-legacy.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./useLoading-legacy.js?v=1720690738171","./file-legacy2.js?v=1720690738171","./Select-legacy.js?v=1720690738171","./Tag-legacy.js?v=1720690738171","./Empty-legacy.js?v=1720690738171","./Spin-legacy.js?v=1720690738171"],(function(e,l){"use strict";var a,n,t,u,s,c,p,i,r,g,d,o,v,y,h,w;return{setters:[e=>{a=e._},e=>{n=e.cv,t=e.B},e=>{u=e._},e=>{s=e.l,c=e.r,p=e.x,i=e.S,r=e.Z,g=e.P,d=e.W,o=e.b,v=e._,y=e.V,h=e.q,w=e.n},null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"p-20px"},x={class:"mt-12px"};e("default",s({__name:"index",setup(e){const s=n(),j=c(null),m=c("index"),_=new Map([["index",{label:"Default page",path:"/www/server/panel/data/defaultDoc.html"}],["404",{label:"404 page",path:"/www/server/panel/data/404.html"}],["blank",{label:"Unbound domain page",path:"nginx"===s.web.type?"/www/server/nginx/html/index.html":"/www/server/apache/htdocs/index.html"}],["stop",{label:"Stop page",path:"/www/server/stop/index.html"}]]),f=(()=>{const e=[];return _.forEach(((l,a)=>{e.push({key:a,label:l.label})})),e})(),b=()=>_.get(m.value)?.path||"",S=c(b()),k=()=>{S.value=b()},C=()=>{w((()=>{j.value?.getContent()}))},U=async()=>{j.value?.saveFile()};return p((()=>{j.value?.getContent()})),(e,n)=>{const s=a,c=t;return i(),r("div",l,[g(s,{value:d(m),"onUpdate:value":[n[0]||(n[0]=e=>o(m)?m.value=e:null),k],data:d(f),onClick:C},null,8,["value","data"]),g(u,{ref_key:"configRef",ref:j,path:d(S),"onUpdate:path":n[1]||(n[1]=e=>o(S)?S.value=e:null),height:440,"show-encoding":!0},null,8,["path"]),v("div",x,[g(c,{type:"primary",onClick:U},{default:y((()=>[h("Save")])),_:1})])])}}}))}}}));