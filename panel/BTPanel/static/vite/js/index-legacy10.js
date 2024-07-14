System.register(["./index-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy3.js?v=1720690738171","./useTableData-legacy.js?v=1720690738171","./useLoading-legacy.js?v=1720690738171","./useTableColumns-legacy.js?v=1720690738171","./index-legacy48.js?v=1720690738171","./hooks-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./DataTable-legacy.js?v=1720690738171","./Checkbox-legacy.js?v=1720690738171","./Ellipsis-legacy.js?v=1720690738171","./Select-legacy.js?v=1720690738171","./Tag-legacy.js?v=1720690738171","./Empty-legacy.js?v=1720690738171","./omit-legacy.js?v=1720690738171","./Skeleton-legacy.js?v=1720690738171","./Progress-legacy.js?v=1720690738171","./index-legacy49.js?v=1720690738171","./useAccount-legacy.js?v=1720690738171","./index-legacy50.js?v=1720690738171"],(function(e,a){"use strict";var t,l,s,n,i,c,o,u,d,r,p,y,g,h,m,k,_,b,w,v,f,j,x,C,D,S,B,R,U,W,L,P,T,q,z,A,E,G,I,K,N,H,V,$,F,J,M,O,Q,X;return{setters:[e=>{t=e.e,l=e.u,s=e.g,n=e.s,i=e.o,c=e.h,o=e.t,u=e.w,d=e.j,r=e.k,p=e.m,y=e.l,g=e.B,h=e.p,m=e.q,k=e.r,_=e.v},e=>{b=e._},e=>{w=e._,v=e.a},e=>{f=e._},e=>{j=e.u,x=e._},e=>{C=e.u},e=>{D=e.a,S=e.b},e=>{B=e.a,R=e.b,U=e.d,W=e._,L=e.e,P=e.f,T=e.g,q=e.u,z=e.c},e=>{A=e.g},e=>{E=e._},e=>{G=e.P,I=e.q,K=e.l,N=e.f,H=e.w,V=e.S,$=e.U,F=e.V,J=e._,M=e.W,O=e.b,Q=e.a1,X=e.t},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const Y={class:"p-16px"};e("default",K({__name:"index",setup(e){const K=Q((()=>_((()=>a.import("./index-legacy58.js?v=1720690738171")),void 0))),Z=l(),ee=s(),ae=()=>{ee.show=!0},te=()=>{P()},le=()=>{T()},se=async()=>{await n(Z.type,{ids:[]}),pe()},ne=N({p:1,limit:10,sid:-1,search:""}),{keys:ie,table:ce,columns:oe}=j([{type:"selection",width:40},{key:"name",title:"Database name",width:"12%",minWidth:120},{key:"username",title:"Username",width:"12%",minWidth:120},{key:"password",title:"Password",minWidth:150,render:e=>G(E,{value:e.password},null)},{key:"backup_count",title:"Backup",width:"12%",render:e=>G("div",{class:"flex items-center"},[G(t,{type:e.backup_count>0?"primary":"warning",onClick:()=>{B(e)}},{default:()=>[e.backup_count>0?`\tExists(${e.backup_count})`:"Not exist"]}),G("span",{class:"mx-4px"},[I("|")]),G(t,{onClick:()=>{R(e)}},{default:()=>[I("Import")]})])},{key:"sid",title:"Location",width:"12%",minWidth:120,render:e=>A(e)},D({onBlur:async(e,a)=>{await i({id:a.id,ps:e})}}),S({width:100,options:e=>[{label:"CHG PW",onClick:()=>{q(e)}},{label:"Del",onClick:()=>{z([e])}}]})]),ue=[{key:"sync",label:"Sync to Server",onBatch:e=>{c({title:"Batch Sync to Server",content:"Please be cautious, The selected item will be [Sync to Server] after confirmation",onConfirm:async({hide:a})=>{await n(Z.type,{ids:e.map((e=>e.id))}),a()}})}},{key:"backup",type:"confirm",label:"DB backup",confirm:{title:"Batch backup database",desc:"Do you continue to operate in batch backup database?",api:e=>o(Z.type,{id:e.id},!1),done:()=>{pe()},columns:[{key:"name",title:"Database Name"}]}},{key:"delete",label:"Delete database",onBatch:e=>{z(e)}}],{loading:de,setLoading:re}=C(),pe=async()=>{try{re(!0);const{message:e}=await u(Z.type,(()=>{const e={...X(ne)};return-1===e.sid&&delete e.sid,e})());d(e)?(ce.data=r(e.data)?e.data:[],ce.total=p(e.page)):(ce.data=[],ce.total=0)}finally{ie.value=[],re(!1)}};return H((()=>Z.isRefresh),(e=>{e&&(Z.setRefresh(!1),Z.delRemoteId===ne.sid&&(ne.sid=-1),pe())})),(async()=>{await Z.getRemote(),Z.install?pe():y()})(),(e,a)=>{const t=g,l=h,s=w,n=x,i=f,c=v,o=b,u=m,d=k;return V(),$(M(L),null,{default:F((()=>[G(d,null,{default:F((()=>[J("div",Y,[G(o,null,{toolsLeft:F((()=>[G(t,{type:"primary",onClick:ae},{default:F((()=>[I("Add DB")])),_:1}),G(t,{onClick:te},{default:F((()=>[I("Root password")])),_:1}),G(t,{onClick:le},{default:F((()=>[I("Remote DB")])),_:1}),G(l,{class:"mx-0!",vertical:""}),G(t,{onClick:se},{default:F((()=>[I("Sync all")])),_:1}),G(t,{onClick:M(U)},{default:F((()=>[I("Get DB from server")])),_:1},8,["onClick"])])),toolsRight:F((()=>[G(M(W),{value:M(ne).sid,"onUpdate:value":a[0]||(a[0]=e=>M(ne).sid=e),"store-key":"database-pgsql-page",onChange:pe},null,8,["value"]),G(s,{value:M(ne).search,"onUpdate:value":a[1]||(a[1]=e=>M(ne).search=e),placeholder:"Database search",onSearch:pe},null,8,["value"])])),table:F((()=>[G(n,{"checked-row-keys":M(ie),"onUpdate:checkedRowKeys":a[2]||(a[2]=e=>O(ie)?ie.value=e:null),loading:M(de),data:M(ce).data,columns:M(oe)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:F((()=>[G(i,{"checked-row-keys":M(ie),"onUpdate:checkedRowKeys":a[3]||(a[3]=e=>O(ie)?ie.value=e:null),data:M(ce).data,options:ue},null,8,["checked-row-keys","data"])])),pageRight:F((()=>[G(c,{page:M(ne).p,"onUpdate:page":a[4]||(a[4]=e=>M(ne).p=e),"page-size":M(ne).limit,"onUpdate:pageSize":a[5]||(a[5]=e=>M(ne).limit=e),"store-key":"database-pgsql-page","item-count":M(ce).total,onRefresh:pe},null,8,["page","page-size","item-count"])])),_:1}),G(u,{show:M(ee).show,"onUpdate:show":a[6]||(a[6]=e=>M(ee).show=e),title:"Add Database",width:540,"min-height":280,footer:!0,component:M(K)},null,8,["show","component"])])])),_:1})])),_:1})}}}))}}}));