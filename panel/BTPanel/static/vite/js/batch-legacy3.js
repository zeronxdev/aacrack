System.register(["./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1720690738171","./index-legacy.js?v=1720690738171","./useLoading-legacy.js?v=1720690738171","./site-legacy2.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./Select-legacy.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./Tag-legacy.js?v=1720690738171","./Empty-legacy.js?v=1720690738171"],(function(e,a){"use strict";var l,t,s,n,u,i,c,r,o,g,d,y,v,p,_,f,j,m;return{setters:[e=>{l=e._,t=e.a},e=>{s=e.cv,n=e.k,u=e.n},e=>{i=e.u},e=>{c=e.g,r=e.b3},e=>{o=e.l,g=e.r,d=e.S,y=e.Z,v=e.P,p=e.V,_=e._,f=e.W,j=e.b},e=>{m=e._},null,null,null],execute:function(){const a={class:"p-20px"},w={class:"w-150px"};e("default",o({__name:"batch",props:{data:{}},setup(e,{expose:o}){const b=e,{rows:h}=b.data,x=s(),S=g(null),P=g([]),{loading:k,setLoading:E}=i();return(async()=>{try{E(!0);const{message:e}=await c();n(e)&&e.length>0?(P.value=e.map((e=>({label:e.name,value:e.id}))),S.value=e[0].id):(S.value=null,P.value=[])}finally{E(!1)}})(),o({onConfirm:async({hide:e})=>{await r((()=>{if(null===S.value)throw u.error("Please select site category"),new Error("Please select site category");return{id:S.value,site_ids:h.map((e=>e.id))}})()),x.setRefresh(!0),e()}}),(e,s)=>{const n=m,u=l,i=t;return d(),y("div",a,[v(i,null,{default:p((()=>[v(u,{label:"Site category","show-feedback":!1},{default:p((()=>[_("div",w,[v(n,{value:f(S),"onUpdate:value":s[0]||(s[0]=e=>j(S)?S.value=e:null),loading:f(k),options:f(P)},null,8,["value","loading","options"])])])),_:1})])),_:1})])}}}))}}}));
