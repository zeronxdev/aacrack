import{_ as e}from"./index53.js?v=1720690738171";import{cv as t,j as a,n as s,e as l,G as n,B as r,k as i}from"./index.js?v=1720690738171";import{s as o}from"./file2.js?v=1720690738171";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang11.js?v=1720690738171";import{u as p}from"./uniq.js?v=1720690738171";import{l as c,r as m,S as f,Z as v,P as d,V as _,_ as j,W as w,b as h,q as g}from"./vue.js?v=1720690738171";import{_ as x}from"./Select.js?v=1720690738171";import"./pinia.js?v=1720690738171";import"./useLoading.js?v=1720690738171";import"./Spin.js?v=1720690738171";import"./_baseUniq.js?v=1720690738171";import"./_baseFindIndex.js?v=1720690738171";import"./Tag.js?v=1720690738171";import"./Empty.js?v=1720690738171";const b={class:"p-20px"},y={class:"w-160px"},C=j("span",null,"Rewrite rule converter: ",-1),k=j("li",null,"Please select your application.",-1),S=j("li",null," If the site cannot be accessed after the rewrite rules set, please try to reset to default. ",-1),U=j("li",null,"You are able to modify rewrite rules, just save it after modification.",-1),q=c({__name:"rewrite",props:{fileContent:{default:""},filename:{default:""},rlist:{default:()=>[]}},emits:["close"],setup(c,{emit:q}){const I=c,P=q,{filename:R,rlist:T,fileContent:A}=I,B=t(),E=m(null),F=m(null),G=m([]),L=m(""),N=m(A),V=e=>{if("0.default"===e||"0.Current"===e)return R;{const{webserver:e}=B;return"/www/server/panel/rewrite/".concat("openlitespeed"===e?"apache":e,"/").concat(F.value,".conf")}},W=async()=>{const{message:e}=await o({path:R,data:N.value,encoding:"utf-8"});a(e)&&s.success(e.msg),P("close")},Y=e=>{var t;L.value=V(e),null==(t=E.value)||t.getContent()};return(()=>{const e=i(T)?T:[];G.value=p(e).map((e=>({label:e,value:e}))),e.length&&(F.value=e[0],L.value=V(e[0]))})(),(t,a)=>{const s=x,i=l,o=n,p=r,c=e;return f(),v("div",b,[d(o,{class:"items-center mb-12px"},{default:_((()=>[j("div",y,[d(s,{value:w(F),"onUpdate:value":[a[0]||(a[0]=e=>h(F)?F.value=e:null),Y],options:w(G)},null,8,["value","options"])]),j("div",null,[C,d(i,{href:"https://www.bt.cn/Tools",target:"_blank"},{default:_((()=>[g("Apache to Nginx")])),_:1})])])),_:1}),d(u,{ref_key:"configRef",ref:E,path:w(L),"onUpdate:path":a[1]||(a[1]=e=>h(L)?L.value=e:null),value:w(N),"onUpdate:value":a[2]||(a[2]=e=>h(N)?N.value=e:null),height:350,"show-tips":!1},null,8,["path","value"]),d(o,{class:"items-center mt-12px"},{default:_((()=>[d(p,{type:"primary",onClick:W},{default:_((()=>[g("Save")])),_:1})])),_:1}),d(c,{class:"mt-24px"},{default:_((()=>[k,S,U])),_:1})])}}});export{q as default};
