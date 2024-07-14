import{_ as e}from"./index53.js?v=1720690738171";import{_ as a,a as s}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1720690738171";import{s as r}from"./pinia.js?v=1720690738171";import{u as t,dh as o,di as d,a9 as l,cC as p}from"./index.js?v=1720690738171";import{c as u,a as n}from"./check.js?v=1720690738171";import{v as i}from"./index121.js?v=1720690738171";import{l as _,r as b,f as m,S as c,Z as v,P as h,V as f,_ as w,W as g,U as x,af as y,t as P}from"./vue.js?v=1720690738171";const j={class:"p-20px"},k={class:"w-260px"},U={class:"w-260px"},q={class:"w-260px"},D={class:"w-260px"},E={class:"w-260px"},M={key:0},N=w("li",null,"Support cloud database",-1),S=w("li",null,"Note 1: Make sure this server has permission to access the database",-1),C=w("li",null," Note 2: Please make sure that the administrator account you fill in has sufficient permissions ",-1),B=_({__name:"form",props:{data:{}},setup(_,{expose:B}){const R=_,{row:L,isEdit:Q}=R.data,V=t(),{type:W}=r(V),Z=b(null),z=m({db_host:"",db_port:null,db_user:"root",db_password:"",db_ps:""}),A={db_host:{trigger:["blur","change"],validator:(e,a)=>""===a?new Error("Please enter server address"):!(!u(a)&&!n(a))||new Error("Please enter correct server address")},db_port:i(),db_user:{required:!0,message:"Please enter administrator name",trigger:["blur","change"]},db_password:{required:!0,message:"Please enter administrator password",trigger:["blur","change"]}},F=e=>{z.db_ps=e},G=new Map([["mysql",{port:3306,username:"root"}],["sqlserver",{port:1433,username:"sa"}],["redis",{port:6379,username:"root"}],["mongodb",{port:27017,username:"root"}],["pgsql",{port:5432,username:"postgres"}]]);return(()=>{if(Q&&L)z.db_host="".concat(L.db_host),z.db_port=L.db_port,z.db_user="".concat(L.db_user),z.db_password="".concat(L.db_password),z.db_ps="".concat(L.ps);else{const e=G.get(W.value);e&&(z.db_port=e.port,z.db_user=e.username)}})(),B({onConfirm:async({hide:e})=>{var a;await(null==(a=Z.value)?void 0:a.validate());const s=(()=>{const{db_port:e}=z;if(null===e)throw new Error("Please enter database port");return{...P(z),db_port:e,type:W.value}})();Q&&L&&await o(W.value,{id:L.id,...s}),Q||await d(W.value,s),V.getRemote(),e()}}),(r,t)=>{const o=l,d=a,u=p,n=s,i=e;return c(),v("div",j,[h(n,{ref_key:"formRef",ref:Z,model:g(z),rules:A},{default:f((()=>[h(d,{label:"DB address",path:"db_host"},{default:f((()=>[w("div",k,[h(o,{value:g(z).db_host,"onUpdate:value":[t[0]||(t[0]=e=>g(z).db_host=e),F],placeholder:"Please fill you server address"},null,8,["value"])])])),_:1}),h(d,{label:"Port",path:"db_port"},{default:f((()=>[w("div",U,[h(u,{value:g(z).db_port,"onUpdate:value":t[1]||(t[1]=e=>g(z).db_port=e),min:1,max:65535,"show-button":!1,placeholder:"Database port"},null,8,["value"])])])),_:1}),"redis"!==g(W)?(c(),x(d,{key:0,label:"Username",path:"db_user"},{default:f((()=>[w("div",q,[h(o,{value:g(z).db_user,"onUpdate:value":t[2]||(t[2]=e=>g(z).db_user=e),placeholder:"Database administrator name"},null,8,["value"])])])),_:1})):y("",!0),h(d,{label:"Password",path:"db_password"},{default:f((()=>[w("div",D,[h(o,{value:g(z).db_password,"onUpdate:value":t[3]||(t[3]=e=>g(z).db_password=e),placeholder:"Database administrator password"},null,8,["value"])])])),_:1}),h(d,{label:"Notes",path:"db_ps","show-feedback":!1},{default:f((()=>[w("div",E,[h(o,{value:g(z).db_ps,"onUpdate:value":t[4]||(t[4]=e=>g(z).db_ps=e),placeholder:"Server Notes"},null,8,["value"])])])),_:1})])),_:1},8,["model"]),h(i,{class:"mt-24px"},{default:f((()=>["mysql"===g(W)?(c(),v("li",M,"Compatible with MySQL5.5, MariaDB10.1 and above")):y("",!0),N,S,C])),_:1})])}}});export{B as _};
