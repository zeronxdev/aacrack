System.register(["./index-legacy53.js?v=1720690738171","./index-legacy.js?v=1720690738171","./file-legacy2.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy11.js?v=1720690738171","./uniq-legacy.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./Select-legacy.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./useLoading-legacy.js?v=1720690738171","./Spin-legacy.js?v=1720690738171","./_baseUniq-legacy.js?v=1720690738171","./_baseFindIndex-legacy.js?v=1720690738171","./Tag-legacy.js?v=1720690738171","./Empty-legacy.js?v=1720690738171"],(function(e,l){"use strict";var t,a,n,s,u,i,r,c,o,p,f,v,d,g,y,_,m,j,w,h,x,b;return{setters:[e=>{t=e._},e=>{a=e.cv,n=e.j,s=e.n,u=e.e,i=e.G,r=e.B,c=e.k},e=>{o=e.s},e=>{p=e._},e=>{f=e.u},e=>{v=e.l,d=e.r,g=e.S,y=e.Z,_=e.P,m=e.V,j=e._,w=e.W,h=e.b,x=e.q},e=>{b=e._},null,null,null,null,null,null,null],execute:function(){const l={class:"p-20px"},C={class:"w-160px"},S=j("span",null,"Rewrite rule converter: ",-1),k=j("li",null,"Please select your application.",-1),U=j("li",null," If the site cannot be accessed after the rewrite rules set, please try to reset to default. ",-1),q=j("li",null,"You are able to modify rewrite rules, just save it after modification.",-1);e("default",v({__name:"rewrite",props:{fileContent:{default:""},filename:{default:""},rlist:{default:()=>[]}},emits:["close"],setup(e,{emit:v}){const I=e,P=v,{filename:R,rlist:T,fileContent:$}=I,A=a(),B=d(null),E=d(null),F=d([]),G=d(""),L=d($),N=e=>{if("0.default"===e||"0.Current"===e)return R;{const{webserver:e}=A;return`/www/server/panel/rewrite/${"openlitespeed"===e?"apache":e}/${E.value}.conf`}},V=async()=>{const{message:e}=await o({path:R,data:L.value,encoding:"utf-8"});n(e)&&s.success(e.msg),P("close")},W=e=>{G.value=N(e),B.value?.getContent()};return(()=>{const e=c(T)?T:[];F.value=f(e).map((e=>({label:e,value:e}))),e.length&&(E.value=e[0],G.value=N(e[0]))})(),(e,a)=>{const n=b,s=u,c=i,o=r,f=t;return g(),y("div",l,[_(c,{class:"items-center mb-12px"},{default:m((()=>[j("div",C,[_(n,{value:w(E),"onUpdate:value":[a[0]||(a[0]=e=>h(E)?E.value=e:null),W],options:w(F)},null,8,["value","options"])]),j("div",null,[S,_(s,{href:"https://www.bt.cn/Tools",target:"_blank"},{default:m((()=>[x("Apache to Nginx")])),_:1})])])),_:1}),_(p,{ref_key:"configRef",ref:B,path:w(G),"onUpdate:path":a[1]||(a[1]=e=>h(G)?G.value=e:null),value:w(L),"onUpdate:value":a[2]||(a[2]=e=>h(L)?L.value=e:null),height:350,"show-tips":!1},null,8,["path","value"]),_(c,{class:"items-center mt-12px"},{default:m((()=>[_(o,{type:"primary",onClick:V},{default:m((()=>[x("Save")])),_:1})])),_:1}),_(f,{class:"mt-24px"},{default:m((()=>[k,U,q])),_:1})])}}}))}}}));
