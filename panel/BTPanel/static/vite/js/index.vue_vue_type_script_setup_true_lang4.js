import{n as s,_ as a}from"./index.js?v=1720690738171";import{u as e}from"./index50.js?v=1720690738171";import{_ as t}from"./Ellipsis.js?v=1720690738171";import{l,r as o,k as c,S as i,Z as n,_ as r,P as u,V as p,q as m,a3 as x,W as f,aj as d}from"./vue.js?v=1720690738171";const v={class:"flex"},y={class:"w-0 flex-1 flex items-center"},_={class:"min-w-0"},w=l({__name:"index",props:{value:{default:""}},setup(l){const w=l,j=o(!1),C=c((()=>j.value?w.value:"**********")),S=c((()=>j.value?"icon-eye-close":"icon-browse")),b=()=>{j.value=!j.value},{toClipboard:h}=e(),k=async()=>{try{await h("".concat(w.value)),s.success("Successfully copied")}catch(a){s.success("Copy failure")}};return(s,e)=>{const l=t,o=a;return i(),n("div",v,[r("div",y,[r("div",_,[u(l,{class:"max-w-full",tooltip:{contentStyle:{maxWidth:"200px"}}},{default:p((()=>[m(x(f(C)),1)])),_:1})]),r("div",{class:"ml-6px text-15px cursor-pointer",title:"Show",onClick:b},[r("i",{class:d(["iconfont",f(S)])},null,2)]),r("button",{class:"reset ml-6px text-15px cursor-pointer text-#333",title:"Copy",onClick:k},[u(o,{name:"common-copy"})])])])}}});export{w as _};
