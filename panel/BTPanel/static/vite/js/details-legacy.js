System.register(["./index-legacy.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./index-legacy25.js?v=1720690738171","./Checkbox-legacy.js?v=1720690738171"],(function(e,t){"use strict";var a,s,l,i,n,o,c,d,r,p,x,u,v,b,g,f,m,h,y,k,_,w,B,C,I,j,z,L,T,M,U;return{setters:[e=>{a=e.K,s=e.j,l=e.U,i=e.b2,n=e.B,o=e.el,c=e.a},e=>{d=e.l,r=e.r,p=e.k,x=e.R,u=e.S,v=e.Z,b=e._,g=e.F,f=e.ag,m=e.aj,h=e.a3,y=e.W,k=e.P,_=e.V,w=e.af,B=e.b,C=e.$,I=e.q,j=e.a5,z=e.a6},e=>{L=e.f,T=e.h,M=e.u},e=>{U=e._}],execute:function(){var t=document.createElement("style");t.textContent='.card[data-v-07e633b2]{margin-bottom:20px;border-radius:4px;--un-bg-opacity:1;background-color:rgb(247 247 247 / var(--un-bg-opacity));padding:20px 24px}.version[data-v-07e633b2]{position:relative;margin-left:95px;padding:5px 0 0 2px;border-left:5px solid #e1e1e1}.version .active[data-v-07e633b2]{position:absolute;left:-10px;top:21px;display:block;width:15px;height:15px;margin-bottom:10px;background-color:#20a53a;border-radius:50%}.version .active[data-v-07e633b2]:after{content:"";position:relative;top:5px;left:5px;display:block;height:5px;width:5px;border-radius:50%;background-color:#fff}.version .date[data-v-07e633b2]{position:absolute;left:-90px;top:13px;line-height:30px;font-size:13px;color:#333}.version .text[data-v-07e633b2]{margin-top:7px;margin-left:5px;margin-bottom:5px;padding-left:15px;line-height:32px;border-bottom:1px solid #ececec;font-size:15px;color:#20a53a}.version .content[data-v-07e633b2]{line-height:24px;font-size:12px;min-height:40px;padding-left:20px;color:#888}\n',document.head.appendChild(t);const H=e=>(j("data-v-07e633b2"),e=e(),z(),e),P={class:"w-650px"},S={class:"card"},q=H((()=>b("div",{class:"mb-12px font-bold text-18px text-center"},"Instructions for Beta Testers",-1))),A={class:"min-h-172px text-13px"},E={class:"card"},F=H((()=>b("div",{class:"mb-10px text-16px text-center"},"Linux Beta update log",-1))),K={class:"h-180px overflow-auto"},R=H((()=>b("div",{class:"active"},null,-1))),V={class:"date"},W={class:"text"},Z=["innerHTML"],$={class:"text-14px"},D=H((()=>b("span",null,"I have already checked ",-1))),G=H((()=>b("span",{class:"font-bold"},'"Instructions for Beta Testers" ',-1))),J={key:0,class:"text-error"};e("B",c(d({__name:"details",emits:["close"],setup(e,{emit:t}){const c=t,d=r(!1),j=r(5),z=p((()=>j.value>0)),H=p((()=>!d.value)),N=r([]),O=r([]),{height:Q}=x(),X=p((()=>Q.value?.9*Q.value+"px":"auto")),Y=()=>{const e=setInterval((()=>{j.value--,j.value<=0&&clearInterval(e)}),1e3)},ee=()=>{c("close")},te=()=>{l({title:"Update to Linux Beta version",content:"Please read Instructions for Beta Testers carefully. Are you sure to update to Linux Beta version?",onConfirm:async({hide:e})=>{await T(),await M(),i(),e()}})};return(async()=>{const{message:e}=await L();s(e)&&(N.value=e.beta_ps.split("<br>").map((e=>e.trim())),O.value=e.list,Y())})(),(e,t)=>{const s=U,l=n,i=o;return u(),v("div",P,[b("div",{class:"p-20px overflow-auto",style:C({maxHeight:y(X)})},[b("div",S,[q,b("ul",A,[(u(!0),v(g,null,f(y(N),((e,t)=>(u(),v("li",{key:e,class:m(["indent--15px pl-15px leading-20px",{"mt-8px":0!==t}])},h(e),3)))),128))])]),b("div",E,[F,b("div",K,[(u(!0),v(g,null,f(y(O),(e=>(u(),v("div",{key:e.version,class:"version"},[R,b("div",V,h(y(a)(e.uptime,"yyyy-MM-dd")),1),b("div",W,h(e.version),1),b("div",{class:"content",innerHTML:e.upmsg},null,8,Z)])))),128))])]),b("div",null,[k(s,{checked:y(d),"onUpdate:checked":t[0]||(t[0]=e=>B(d)?d.value=e:null),disabled:y(z)},{default:_((()=>[b("div",$,[D,G,y(j)>0?(u(),v("span",J,h(y(j))+" second(s) wait to click",1)):w("",!0)])])),_:1},8,["checked","disabled"])])],4),k(i,null,{default:_((()=>[k(l,{class:"cancel-btn",size:"small",color:"#cbcbcb",onClick:ee},{default:_((()=>[I("Cancel")])),_:1}),k(l,{type:"primary",size:"small",disabled:y(H),onClick:te},{default:_((()=>[I(" Update now ")])),_:1},8,["disabled"])])),_:1})])}}}),[["__scopeId","data-v-07e633b2"]]))}}}));