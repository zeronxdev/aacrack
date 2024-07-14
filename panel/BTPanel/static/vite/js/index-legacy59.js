System.register(["./index-legacy.js?v=1720690738171","./index-legacy53.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1720690738171","./useTableData-legacy.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./useTableColumns-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./form.vue_vue_type_script_setup_true_lang-legacy2.js?v=1720690738171","./useLoading-legacy.js?v=1720690738171","./Skeleton-legacy.js?v=1720690738171","./DataTable-legacy.js?v=1720690738171","./Checkbox-legacy.js?v=1720690738171","./Ellipsis-legacy.js?v=1720690738171","./Select-legacy.js?v=1720690738171","./Tag-legacy.js?v=1720690738171","./Empty-legacy.js?v=1720690738171","./omit-legacy.js?v=1720690738171","./Progress-legacy.js?v=1720690738171","./index-legacy50.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1720690738171","./check-legacy.js?v=1720690738171","./index-legacy121.js?v=1720690738171"],(function(e,t){"use strict";var l,a,s,i,n,o,d,u,c,r,y,_,g,p,m,h,b,j,w,f,v,k,D,x,R,B;return{setters:[e=>{l=e.u,a=e.h,s=e.df,i=e.dg,n=e.B,o=e.q},e=>{d=e._},e=>{u=e._},e=>{c=e.u,r=e._},e=>{y=e.s},e=>{_=e.b},e=>{g=e._},e=>{p=e.P,m=e.l,h=e.f,b=e.k,j=e.S,w=e.Z,f=e.V,v=e.q,k=e.W,D=e.af,x=e._},e=>{R=e._},e=>{B=e.u},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const t={class:"p-20px"},C={key:0},E=x("li",null,"Support cloud database",-1),S=x("li",null,"Note 1: Make sure this server has permission to access the database",-1),q=x("li",null," Note 2: Please make sure that the administrator account you fill in has sufficient permissions ",-1);e("default",m({__name:"index",setup(e){const m=l(),{type:x,remoteList:L}=y(m),P=h({show:!1,title:"Add Remote DB",data:{row:void 0,isEdit:!1}}),T=()=>{P.data.row=void 0,P.data.isEdit=!1,P.title="Add Remote DB",P.show=!0},A=b((()=>L.value.filter((e=>0!==e.id)))),{columns:M}=c([{key:"db_host",title:"DB address"},{key:"db_port",title:"Port"},{key:"db_type",title:"Database type"},{key:"db_user",title:"Username"},{key:"db_password",title:"Password",width:160,render:e=>p(g,{value:e.db_password},null)},{key:"ps",title:"Notes"},_({width:"mysql"===m.type?150:100,options:e=>[{label:"Get DB",show:"mysql"===e.db_type,onClick:()=>{(async e=>{await s(x.value,{sid:e.id}),m.setRefresh(!0)})(e)}},{label:"Edit",onClick:()=>{(e=>{P.data.row=e,P.data.isEdit=!0,P.title="Edit Remote DB",P.show=!0})(e)}},{label:"Del",onClick:()=>{a({title:`Del Remote DB [${e.db_host}]`,content:"Only delete management information and database records in the panel, not delete remote databases!",onConfirm:async({hide:t})=>{await(async e=>{await i(x.value,{id:e.id}),m.getRemote(),m.setRefresh(!0),m.setDelRemoteId(e.id)})(e),t()}})}}]})]),{loading:N,setLoading:U}=B();return(async()=>{try{U(!0),m.getRemote()}finally{U(!1)}})(),(e,l)=>{const a=n,s=r,i=u,c=d,y=o;return j(),w("div",t,[p(i,null,{toolsLeft:f((()=>[p(a,{type:"primary",onClick:T},{default:f((()=>[v("Add Remote DB")])),_:1})])),table:f((()=>[p(s,{loading:k(N),columns:k(M),data:k(A)},null,8,["loading","columns","data"])])),_:1}),p(c,{class:"mt-24px"},{default:f((()=>["mysql"===k(x)?(j(),w("li",C,"Compatible with MySQL5.5, MariaDB10.1 and above")):D("",!0),E,S,q])),_:1}),p(y,{show:k(P).show,"onUpdate:show":l[0]||(l[0]=e=>k(P).show=e),title:k(P).title,width:460,footer:!0,data:k(P).data,component:R},null,8,["show","title","data"])])}}}))}}}));
