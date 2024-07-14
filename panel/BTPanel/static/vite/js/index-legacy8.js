System.register(["./index-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy3.js?v=1720690738171","./useTableData-legacy.js?v=1720690738171","./useLoading-legacy.js?v=1720690738171","./useTableColumns-legacy.js?v=1720690738171","./index-legacy48.js?v=1720690738171","./hooks-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1720690738171","./index-legacy53.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./DataTable-legacy.js?v=1720690738171","./Checkbox-legacy.js?v=1720690738171","./Ellipsis-legacy.js?v=1720690738171","./Select-legacy.js?v=1720690738171","./Tag-legacy.js?v=1720690738171","./Empty-legacy.js?v=1720690738171","./omit-legacy.js?v=1720690738171","./Skeleton-legacy.js?v=1720690738171","./Progress-legacy.js?v=1720690738171","./index-legacy49.js?v=1720690738171","./useAccount-legacy.js?v=1720690738171","./index-legacy50.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1720690738171","./InputGroupLabel-legacy.js?v=1720690738171","./InputGroup-legacy.js?v=1720690738171"],(function(e,a){"use strict";var t,l,s,n,o,i,u,c,d,r,p,y,g,h,_,w,m,k,b,f,v,x,j,C,S,R,D,U,B,z,P,I,L,W,A,T,q,G,E,H,K,N,V,Z,$,F,J,M,O,Q,X,Y,ee,ae,te,le,se,ne,oe,ie,ue;return{setters:[e=>{t=e.e,l=e.x,s=e.y,n=e.j,o=e.z,i=e.A,u=e.u,c=e.g,d=e.n,r=e.s,p=e.o,y=e.h,g=e.t,h=e.w,_=e.k,w=e.m,m=e.l,k=e.B,b=e.p,f=e.q,v=e.r,x=e.v},e=>{j=e._},e=>{C=e._,S=e.a},e=>{R=e._},e=>{D=e.u,U=e._},e=>{B=e.u},e=>{z=e._,P=e.a,I=e.b},e=>{L=e.a,W=e.b,A=e.d,T=e._,q=e.e,G=e.g,E=e.u,H=e.c},e=>{K=e.g},e=>{N=e._},e=>{V=e.P,Z=e.q,$=e.l,F=e.r,J=e.f,M=e.S,O=e.Z,Q=e.V,X=e._,Y=e.W,ee=e.t,ae=e.w,te=e.U,le=e.b,se=e.a1},e=>{ne=e._,oe=e.a},e=>{ie=e._},e=>{ue=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const ce={class:"px-20px pt-24px pb-8px"},de={class:"w-320px"},re=$({__name:"index",setup(e,{expose:a}){const t=F(null),i=J({password:""}),u={password:{required:!0,message:"Root password cannot be empty",trigger:"blur"}},{loading:c,setLoading:d}=B();return(async()=>{try{d(!0);const{message:e}=await s();n(e)&&(i.password=o(e.root)?e.root:"")}finally{d(!1)}})(),a({onConfirm:async({hide:e})=>{try{await(t.value?.validate()),await l(ee(i)),e()}catch(a){console.error(a)}}}),(e,a)=>{const l=ie,s=ne,n=oe;return M(),O("div",ce,[V(n,{ref_key:"formRef",ref:t,model:Y(i),rules:u},{default:Q((()=>[V(s,{label:"Root password",path:"password"},{default:Q((()=>[X("div",de,[V(l,{value:Y(i).password,"onUpdate:value":a[0]||(a[0]=e=>Y(i).password=e),loading:Y(c),default:!1},null,8,["value","loading"])])])),_:1})])),_:1},8,["model"])])}}}),pe={class:"px-20px py-24px"},ye=X("li",null," Security authentication: After this function is enabled, an account and password are required to access data ",-1),ge=$({__name:"index",props:{data:{}},setup(e){const a=e,{status:t,getInfo:l}=a.data,s=J({status:t}),n=async()=>{await i(ee(s)),l?.()};return(e,a)=>{const t=z,l=ne,o=oe,i=ue;return M(),O("div",pe,[V(o,{"label-width":"160"},{default:Q((()=>[V(l,{label:"Security authentication","show-feedback":!1},{default:Q((()=>[V(t,{value:Y(s).status,"onUpdate:value":[a[0]||(a[0]=e=>Y(s).status=e),n],"checked-value":1},null,8,["value"])])),_:1})])),_:1}),V(i,{class:"mt-16px"},{default:Q((()=>[ye])),_:1})])}}}),he={class:"p-16px"};e("default",$({__name:"index",setup(e){const l=se((()=>x((()=>a.import("./index-legacy52.js?v=1720690738171")),void 0))),o=u(),i=c("Add Database",{status:!1}),z=()=>{i.data.status="enabled"===ye.authorization,i.show=!0},$=c("Change database password"),F=()=>{"enabled"===ye.authorization?$.show=!0:(ne(),d.warning("Please enable security authentication first!"))},O=c("Security authentication",{status:0}),ne=()=>{O.data.status="enabled"===ye.authorization?1:0,O.data.getInfo=_e,O.show=!0},oe=()=>{G()},ie=async()=>{await r(o.type,{ids:[]}),be()},{keys:ue,table:ce,columns:de}=D([{type:"selection",width:40},{key:"name",title:"Database name",width:"12%",minWidth:120},{key:"username",title:"Username",width:"12%",minWidth:120},{key:"password",title:"Password",minWidth:150,render:e=>V(N,{value:e.password},null)},{key:"backup_count",title:"Backup",width:"12%",render:e=>V("div",{class:"flex items-center"},[V(t,{type:e.backup_count>0?"primary":"warning",onClick:()=>{L(e)}},{default:()=>[e.backup_count>0?`Exists(${e.backup_count})`:"Not exist"]}),V("span",{class:"mx-4px"},[Z("|")]),V(t,{onClick:()=>{W(e)}},{default:()=>[Z("Import")]})])},{key:"sid",title:"Position",width:"12%",minWidth:120,render:e=>K(e)},P({onBlur:async(e,a)=>{await p({id:a.id,ps:e})}}),I({width:100,options:e=>[{label:"CHG PW",onClick:()=>{E(e)}},{label:"Del",onClick:()=>{H([e])}}]})]),pe=[{key:"sync",label:"Sync to Server",onBatch:e=>{y({title:"Batch Sync to Server",content:"Please be cautious, The selected item will be [Sync to Server] after confirmation",onConfirm:async({hide:a})=>{await r(o.type,{ids:e.map((e=>e.id))}),a()}})}},{key:"backup",type:"confirm",label:"DB backup",confirm:{title:"Batch backup database",desc:"Do you continue to operate in batch backup database?",api:e=>g(o.type,{id:e.id},!1),done:()=>{be()},columns:[{key:"name",title:"Database Name"}]}},{key:"delete",label:"Delete database",onBatch:e=>{H(e)}}],ye=J({authorization:"",msg:"",port:"",root:""}),_e=async()=>{const{message:e}=await s();n(e)&&(ye.authorization=e.authorization,ye.msg=e.msg,ye.port=e.port,ye.root=e.root)},{loading:we,setLoading:me}=B(),ke=J({p:1,limit:10,sid:-1,search:""}),be=async()=>{try{me(!0);const{message:e}=await h(o.type,(()=>{const e={...ee(ke)};return-1===e.sid&&delete e.sid,e})());n(e)?(ce.data=_(e.data)?e.data:[],ce.total=w(e.page)):(ce.data=[],ce.total=0)}finally{ue.value=[],me(!1)}};return ae((()=>o.isRefresh),(e=>{e&&(o.setRefresh(!1),o.delRemoteId===ke.sid&&(ke.sid=-1),be())})),(async()=>{await o.getRemote(),o.install?(be(),_e()):m()})(),(e,a)=>{const t=k,s=b,n=C,o=U,u=R,c=S,d=j,r=f,p=v;return M(),te(Y(q),null,{default:Q((()=>[V(p,null,{default:Q((()=>[X("div",he,[V(d,null,{toolsLeft:Q((()=>[V(t,{type:"primary",onClick:z},{default:Q((()=>[Z("Add DB")])),_:1}),V(t,{onClick:F},{default:Q((()=>[Z("Root password")])),_:1}),V(t,{onClick:ne},{default:Q((()=>[Z("Security authentication")])),_:1}),V(t,{onClick:oe},{default:Q((()=>[Z("Remote DB")])),_:1}),V(s,{class:"mx-0!",vertical:""}),V(t,{onClick:ie},{default:Q((()=>[Z("Sync all")])),_:1}),V(t,{onClick:Y(A)},{default:Q((()=>[Z("Get DB from server")])),_:1},8,["onClick"])])),toolsRight:Q((()=>[V(Y(T),{value:Y(ke).sid,"onUpdate:value":a[0]||(a[0]=e=>Y(ke).sid=e),"store-key":"database-mongo-page",onChange:be},null,8,["value"]),V(n,{value:Y(ke).search,"onUpdate:value":a[1]||(a[1]=e=>Y(ke).search=e),placeholder:"Database search",onSearch:be},null,8,["value"])])),table:Q((()=>[V(o,{"checked-row-keys":Y(ue),"onUpdate:checkedRowKeys":a[2]||(a[2]=e=>le(ue)?ue.value=e:null),loading:Y(we),data:Y(ce).data,columns:Y(de)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:Q((()=>[V(u,{"checked-row-keys":Y(ue),"onUpdate:checkedRowKeys":a[3]||(a[3]=e=>le(ue)?ue.value=e:null),data:Y(ce).data,options:pe},null,8,["checked-row-keys","data"])])),pageRight:Q((()=>[V(c,{page:Y(ke).p,"onUpdate:page":a[4]||(a[4]=e=>Y(ke).p=e),"page-size":Y(ke).limit,"onUpdate:pageSize":a[5]||(a[5]=e=>Y(ke).limit=e),"store-key":"database-mongo-page","item-count":Y(ce).total,onRefresh:be},null,8,["page","page-size","item-count"])])),_:1}),V(r,{show:Y(i).show,"onUpdate:show":a[6]||(a[6]=e=>Y(i).show=e),title:Y(i).title,width:540,minHeight:176,footer:!0,data:Y(i).data,component:Y(l)},null,8,["show","title","data","component"]),V(r,{show:Y($).show,"onUpdate:show":a[7]||(a[7]=e=>Y($).show=e),title:Y($).title,width:520,footer:!0,component:re},null,8,["show","title"]),V(r,{show:Y(O).show,"onUpdate:show":a[8]||(a[8]=e=>Y(O).show=e),title:Y(O).title,width:400,data:Y(O).data,component:ge},null,8,["show","title","data"])])])),_:1})])),_:1})}}}))}}}));
