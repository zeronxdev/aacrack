import{_ as a,a as e}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1720690738171";import{cv as s,k as t,n as l}from"./index.js?v=1720690738171";import{u as o}from"./useLoading.js?v=1720690738171";import{g as r,b3 as i}from"./site2.js?v=1720690738171";import{l as n,r as u,S as p,Z as d,P as m,V as c,_ as v,W as f,b as _}from"./vue.js?v=1720690738171";import{_ as g}from"./Select.js?v=1720690738171";import"./pinia.js?v=1720690738171";import"./Tag.js?v=1720690738171";import"./Empty.js?v=1720690738171";const j={class:"p-20px"},y={class:"w-150px"},w=n({__name:"batch",props:{data:{}},setup(n,{expose:w}){const b=n,{rows:h}=b.data,x=s(),P=u(null),S=u([]),{loading:k,setLoading:E}=o();(async()=>{try{E(!0);const{message:a}=await r();t(a)&&a.length>0?(S.value=a.map((a=>({label:a.name,value:a.id}))),P.value=a[0].id):(P.value=null,S.value=[])}finally{E(!1)}})();return w({onConfirm:async({hide:a})=>{await i((()=>{if(null===P.value)throw l.error("Please select site category"),new Error("Please select site category");return{id:P.value,site_ids:h.map((a=>a.id))}})()),x.setRefresh(!0),a()}}),(s,t)=>{const l=g,o=a,r=e;return p(),d("div",j,[m(r,null,{default:c((()=>[m(o,{label:"Site category","show-feedback":!1},{default:c((()=>[v("div",y,[m(l,{value:f(P),"onUpdate:value":t[0]||(t[0]=a=>_(P)?P.value=a:null),loading:f(k),options:f(S)},null,8,["value","loading","options"])])])),_:1})])),_:1})])}}});export{w as default};
