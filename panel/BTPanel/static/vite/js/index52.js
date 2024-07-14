import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1720690738171";import{u as s,dx as r,a9 as t,e as l,n as u}from"./index.js?v=1720690738171";import{_ as o}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1720690738171";import{l as p,r as d,f as i,k as n,S as m,U as _,V as v,P as c,_ as f,W as g,B as b,M as h,q as j,t as w}from"./vue.js?v=1720690738171";import{s as x}from"./pinia.js?v=1720690738171";import{g as y}from"./index48.js?v=1720690738171";import{_ as U}from"./Select.js?v=1720690738171";import"./index.vue_vue_type_script_setup_true_lang7.js?v=1720690738171";import"./InputGroupLabel.js?v=1720690738171";import"./InputGroup.js?v=1720690738171";import"./index49.js?v=1720690738171";import"./useAccount.js?v=1720690738171";import"./useTableColumns.js?v=1720690738171";import"./Progress.js?v=1720690738171";import"./Tag.js?v=1720690738171";import"./Empty.js?v=1720690738171";const q={class:"w-240px"},k={class:"w-240px"},C={class:"w-240px"},E={class:"w-240px"},P={class:"ml-8px"},R=p({__name:"index",props:{data:{}},setup(p,{expose:R}){const A=p,{status:B}=A.data,D=s(),{remoteList:G}=x(D),I=d(null),L=i({sid:G.value.length>0?G.value[0].id:null,name:"",db_user:"",password:"",active:!1,ssl:""}),N=n((()=>G.value.map((e=>({label:"".concat(e.ps," (").concat(e.db_host,")"),value:e.id}))))),S={name:{required:!0,message:"请输入数据库名",trigger:["blur","change"]},db_user:{required:!0,message:"请输入用户名",trigger:["blur","change"]},password:{required:!0,message:"请输入管理员密码",trigger:["blur","change"]},sid:{trigger:"change",validator:(e,a)=>null!==a||new Error("请选择远程服务器")}},T=e=>{L.db_user=e},M=()=>{y()};return R({onConfirm:async({hide:e})=>{var a;try{await(null==(a=I.value)?void 0:a.validate());const s=(()=>{const{sid:e}=L;if(null===e)throw u.error("请选择远程服务器"),new Error("请选择远程服务器");return{...w(L),sid:e,ps:L.name}})();await r(D.type,s),D.setRefresh(!0),e()}catch(s){console.error(s)}}}),(s,r)=>{const u=t,p=e,d=o,i=U,n=l,w=a;return m(),_(w,{ref_key:"formRef",ref:I,model:g(L),rules:S,class:"p-20px"},{default:v((()=>[c(p,{label:"DBName",path:"name"},{default:v((()=>[f("div",q,[c(u,{value:g(L).name,"onUpdate:value":[r[0]||(r[0]=e=>g(L).name=e),T],placeholder:"New database name"},null,8,["value"])])])),_:1}),b(c(p,{label:"Username",path:"db_user"},{default:v((()=>[f("div",k,[c(u,{value:g(L).db_user,"onUpdate:value":r[1]||(r[1]=e=>g(L).db_user=e),placeholder:"Database user"},null,8,["value"])])])),_:1},512),[[h,g(B)]]),b(c(p,{label:"Password",path:"password"},{default:v((()=>[f("div",C,[c(d,{value:g(L).password,"onUpdate:value":r[2]||(r[2]=e=>g(L).password=e)},null,8,["value"])])])),_:1},512),[[h,g(B)]]),c(p,{label:"Add to",path:"sid"},{default:v((()=>[f("div",E,[c(i,{value:g(L).sid,"onUpdate:value":r[3]||(r[3]=e=>g(L).sid=e),options:g(N)},null,8,["value","options"])]),f("div",P,[c(n,{onClick:M},{default:v((()=>[j("Remote servers")])),_:1})])])),_:1})])),_:1},8,["model"])}}});export{R as default};
