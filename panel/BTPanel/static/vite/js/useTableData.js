import{l as e,ah as a,ai as l,j as s,ad as t,r as i,ak as o,f as u,P as n,k as p,w as r,S as d,U as g,V as f,D as m,L as c,W as v,t as y,n as h}from"./vue.js?v=1720690738171";import{bi as x}from"./index.js?v=1720690738171";import{_ as S}from"./Skeleton.js?v=1720690738171";import{N as w}from"./DataTable.js?v=1720690738171";const P=e({__name:"index",props:a({data:{default:()=>[]},rowKey:{default:"id"},loading:{type:Boolean,default:!1},loadingNum:{default:10},isPage:{type:Boolean,default:!1},columns:{default:()=>[]}},{page:{default:()=>({page:1,pageSize:10})},pageModifiers:{}}),emits:["update:page"],setup(e){const a=e,P=l(e,"page"),{columns:k,data:z}=s(a),{t:b}=t(),j=()=>x(y(k.value)),_=i(j()),K=j(),N=e=>e[a.rowKey],T=i([]),$=o(),B=u({style:{width:"100%"},showSizePicker:!0,showQuickJumper:!0,pageSizes:[10,20,50,100],prefix:()=>{var e;return null==(e=$.pagePrefix)?void 0:e.call($)},suffix:e=>n("span",{class:"text-13px text-default"},[b("Public.Table.Total",{total:e.itemCount})]),onChange:e=>{P.value.page=e},onUpdatePageSize:e=>{P.value.page=1,P.value.pageSize=e}}),C=p((()=>({...B,page:P.value.page,pageSize:P.value.pageSize})));return r((()=>z.value),(e=>{a.loading||(T.value=e)}),{deep:!0}),r((()=>a.loading),(e=>{if(e){if(_.value.forEach((e=>{"selection"!==e.type&&(e.ellipsis&&delete e.ellipsis,e.render=()=>n(S,null,null))})),0===z.value.length)for(let l=0;l<a.loadingNum;l++){const e={};e[a.rowKey]=l,T.value.push(e)}}else T.value=[],h((()=>{_.value.forEach(((e,a)=>{if("selection"===e.type)return;const l=K[a];l.ellipsis&&(e.ellipsis=l.ellipsis),e.render=l.render})),T.value=z.value}))}),{immediate:!0}),r((()=>a.columns),(()=>{_.value=j(),K.splice(0,K.length),K.push(...j())}),{deep:!0}),(e,a)=>{const l=w;return d(),g(l,c(e.$attrs,{"row-key":N,data:v(T),columns:v(_),pagination:!!e.isPage&&v(C)}),{empty:f((()=>[m(e.$slots,"empty")])),default:f((()=>[m(e.$slots,"pagePrefix")])),_:3},16,["data","columns","pagination"])}}});function k(e){return{keys:i([]),table:u({data:[],total:0,loading:!1}),columns:i(e)}}export{P as _,k as u};
