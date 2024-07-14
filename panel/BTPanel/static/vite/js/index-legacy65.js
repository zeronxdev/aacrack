System.register(["./useTableData-legacy.js?v=1720690738171","./index-legacy.js?v=1720690738171","./file-legacy2.js?v=1720690738171","./useLoading-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy12.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./Alert-legacy.js?v=1720690738171","./Skeleton-legacy.js?v=1720690738171","./DataTable-legacy.js?v=1720690738171","./Checkbox-legacy.js?v=1720690738171","./Ellipsis-legacy.js?v=1720690738171","./Select-legacy.js?v=1720690738171","./Tag-legacy.js?v=1720690738171","./Empty-legacy.js?v=1720690738171","./omit-legacy.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./Progress-legacy.js?v=1720690738171"],(function(e,t){"use strict";var a,l,n,s,i,o,d,c,r,u,y,g,m,p,b,h,v,x,f,j,w,_,D,k;return{setters:[e=>{a=e._},e=>{l=e.u,n=e.J,s=e.ds,i=e.H,o=e.j,d=e.dt,c=e.k,r=e.du},e=>{u=e.b},e=>{y=e.u},e=>{g=e.a,m=e._},e=>{p=e.l,b=e.r,h=e.P,v=e.q,x=e.S,f=e.Z,j=e.V,w=e.W,_=e._,D=e.af},e=>{k=e._},null,null,null,null,null,null,null,null,null,null],execute:function(){const t={class:"px-20px py-24px"},T=_("span",{class:"font-bold"},"Warning: ",-1),L=_("span",null," After deleting the database, all data in the database will be cleared and cannot be recovered. ",-1),C={class:"mt-16px text-error"},P=_("p",null,"Please read the above information carefully to prevent accidental deletion.",-1),S={key:0,class:"mt-4px"};e("default",p({__name:"index",props:{data:{}},emits:["close"],setup(e,{expose:p,emit:R}){const A=e,{ids:B}=A.data,E=R,W=l(),q=b(!0),z=b([]),F=e=>{let t="--";for(let a=0;a<W.remoteList.length;a++){const l=W.remoteList[a];if(l.id===e){t=l.ps||l.db_host;break}}return t},G=b([{key:"name",title:"Database name",ellipsis:{tooltip:{width:"trigger"}}},{key:"total",title:"Size",width:120,render:e=>n(e.total)},{key:"position",title:"Location"},{key:"addtime",title:"Creation time",width:160,render:e=>e.addtime},{key:"result",title:"Delete results",align:"right",width:140,render:e=>e.position!==W.remoteList[0].ps?h("div",{class:"text-error"},[v("Delete Permanently")]):h("div",{class:q.value?"":"text-error"},[q.value?"Move to recycle bin":"Delete Permanently"])}]),{loading:H,setLoading:J}=y(),M=async e=>await r(W.type,{name:e.name,id:e.id}),V=()=>{i({title:"Delete database",hideClose:!0,data:{title:"Delete database",api:M,data:z.value,callback:Z},component:g})},Z=e=>{E("close"),W.setRefresh(!0),i({title:"Batch delete database results",width:440,footer:!0,component:m,data:{title:"Delete database",data:e,status:"done",columns:[{key:"name",title:"Database name",ellipsis:{tooltip:{width:"trigger"}}}]}})};return(async()=>{await(async()=>{const{message:e}=await u();o(e)&&(q.value=e.status_db)})(),(async()=>{try{J(!0);const{message:e}=await d({ids:B});o(e)?z.value=c(e.data)?e.data.map((e=>({...e,position:F(e.sid)}))):[]:z.value=[]}finally{J(!1)}})()})(),p({onConfirm:()=>{s({text:"Delete database",title:"Two-step verification - delete database",content:q.value?"The deleted database will be moved to the Recycle Bin. Do you want to continue?":"The data will be completely deleted and cannot be recovered. Do you want to continue?",onConfirm:async({hide:e})=>{V(),e()}})}}),(e,l)=>{const n=k,s=a;return x(),f("div",t,[h(n,{type:"warning"},{default:j((()=>[T,L])),_:1}),h(s,{class:"mt-16px",loading:w(H),"loading-num":w(B).length,"max-height":300,data:w(z),columns:w(G)},null,8,["loading","loading-num","data","columns"]),_("div",C,[P,w(q)?D("",!0):(x(),f("p",S," The database recycle bin is not enabled, please operate with caution! Go to enable --\x3e File management --\x3e Recycle bin "))])])}}}))}}}));