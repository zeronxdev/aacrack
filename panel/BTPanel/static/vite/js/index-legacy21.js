System.register(["./index-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./index-legacy49.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./Select-legacy.js?v=1720690738171","./index-legacy53.js?v=1720690738171","./Checkbox-legacy.js?v=1720690738171","./Tag-legacy.js?v=1720690738171","./Empty-legacy.js?v=1720690738171"],(function(e,t){"use strict";var l,a,n,i,s,o,c,r,u,d,_,p,g,x,m,f,v,y,k,h,w,b,S,D,$,j,C,P,U,B,E,I,M,O,q,R,z,G,H,T,V,W,A,F,J,K,L,N,Q;return{setters:[e=>{l=e.I,a=e.ag,n=e.ah,i=e.e,s=e.q,o=e.g,c=e.ai,r=e.j,u=e.aj,d=e.ak,_=e.al,p=e.H,g=e.am,x=e.an,m=e.h,f=e.n,v=e.ao,y=e.G,k=e.B,h=e.a9,w=e.r,b=e.v},e=>{S=e._,D=e.a},e=>{$=e.s},e=>{j=e._},e=>{C=e.l,P=e.ad,U=e.r,B=e.f,E=e.U,I=e.V,M=e.W,O=e.S,q=e._,R=e.a3,z=e.P,G=e.q,H=e.B,T=e.M,V=e.b,W=e.D,A=e.aj,F=e.af,J=e.a1,K=e.s},e=>{L=e._},e=>{N=e._},e=>{Q=e._},null,null],execute:function(){const X={class:"mr-8px"},Y={class:"w-470px"},Z={class:"w-470px"},ee=C({__name:"install",setup(e){const{t:t}=P(),o=l(),{setting:c}=$(o),r=U(!1),u=U(null),d=B({type:"default",url:null}),_=[{label:t("Docker.install.index_4"),value:"default"},{label:t("Docker.install.index_5"),value:"custom"},{label:t("Docker.install.index_6"),value:"binary"}],p=[{label:t("Docker.install.index_7"),value:"download.docker.com"}],g={url:{trigger:["change"],validator:()=>"custom"!==d.type||null!==d.url||new Error(t("Docker.install.index_8"))}},x=()=>{r.value=!0},m=async()=>{await(u.value?.validate());let e={type:"binary"===d.type?1:0};"custom"===d.type&&(e=Object.assign(e,{url:d.url})),await a(e),n(),o.getSetting()};return(e,t)=>{const l=i,a=L,n=S,o=D,f=s,v=j;return O(),E(v,{install:M(c).docker_installed&&M(c).docker_compose_installed},{desc:I((()=>[q("span",X,R(e.$t("Docker.index_2")),1),z(l,{class:"font-bold!",onClick:x},{default:I((()=>[G(R(e.$t("Public.Btn.Install")),1)])),_:1}),z(f,{show:M(r),"onUpdate:show":t[2]||(t[2]=e=>V(r)?r.value=e:null),title:e.$t("Public.Btn.Install"),footer:!0,onConfirm:m},{default:I((()=>[z(o,{ref_key:"formRef",ref:u,class:"w-640px p-20px",model:M(d),rules:g},{default:I((()=>[z(n,{label:e.$t("Docker.install.index_2")},{default:I((()=>[q("div",Y,[z(a,{value:M(d).type,"onUpdate:value":t[0]||(t[0]=e=>M(d).type=e),options:_},null,8,["value"])])])),_:1},8,["label"]),H(z(n,{label:e.$t("Docker.install.index_3"),path:"url"},{default:I((()=>[q("div",Z,[z(a,{value:M(d).url,"onUpdate:value":t[1]||(t[1]=e=>M(d).url=e),options:p},null,8,["value"])])])),_:1},8,["label"]),[[T,"custom"===M(d).type]])])),_:1},8,["model"])])),_:1},8,["show","title"])])),default:I((()=>[W(e.$slots,"default")])),_:3},8,["install"])}}}),te={class:"flex items-center text-14px"},le={class:"mr-4px"},ae={class:"w-300px"},ne={class:"w-300px"},ie={class:"ml-20px text-desc"};e("default",C({__name:"index",setup(e){const a=J((()=>b((()=>t.import("./index-legacy86.js?v=1720690738171")),void 0))),n=J((()=>b((()=>t.import("./index-legacy87.js?v=1720690738171")),void 0))),i=J((()=>b((()=>t.import("./index-legacy88.js?v=1720690738171")),void 0))),j=l(),{setting:C}=$(j),{t:B}=P(),H=async()=>{await d({act:C.value.service_status?"stop":"start"}),j.getSetting()},T=async()=>{await _(),j.getSetting()},V=async()=>{p({title:B("Docker.Setting.index_13"),content:B("Docker.Setting.index_14"),onConfirm:async()=>{await g()}})},W=U(""),L=U({}),X=async()=>{const{message:e}=await c();if(r(e)){const t=u(e,"registry_mirrors",[]);W.value=t.length>0?t[0]:"",L.value=u(e,"com_reg_mirrors",{})}return e},Y=o(B("Docker.Setting.index_15"),{url:"",mirrors:L.value,onRefresh:async e=>{await X(),e?.(L.value)}}),Z=()=>{Y.data.url=W.value,Y.data.mirrors=L.value,Y.show=!0},se=o(B("Docker.Setting.index_16")),oe=()=>{se.show=!0},ce=o(B("Docker.Setting.index_17")),re=()=>{ce.show=!0},ue=async()=>{const{message:e}=await x(),t=U(!1),l=!u(e,"status",!1),a=u(e,"msg","");m({width:400,title:B("Docker.Setting.index_18"),content:()=>{let e;return z("div",null,[z("div",{class:"mb-16px"},[a]),z(Q,{checked:t.value,class:"mb-16px",onUpdateChecked:e=>{t.value=e}},(l=e=B("Docker.Setting.index_19"),"function"==typeof l||"[object Object]"===Object.prototype.toString.call(l)&&!K(l)?e:{default:()=>[e]})),z(N,{class:"text-12px"},{default:()=>[z("li",null,[B("Docker.Setting.index_20")])]})]);var l},onConfirm:async()=>{if(l&&!t.value)return f.error(B("Docker.Setting.index_21")),!1;await v({type:t.value?1:0}),j.getSetting()}})};return X(),(e,t)=>{const l=y,o=k,c=S,r=h,u=D,d=s,_=w;return O(),E(ee,null,{default:I((()=>[z(_,{class:"p-16px"},{default:I((()=>[z(u,null,{default:I((()=>[z(c,{label:e.$t("Docker.Setting.index_1")},{default:I((()=>[q("div",te,[q("span",le,R(e.$t("Docker.Setting.index_2"))+R(e.$t("Public.Punctuation.Colon")),1),z(l,{class:"items-center",size:4},{default:I((()=>[q("span",null,R(M(C).service_status?e.$t("Public.Status.Enable"):e.$t("Public.Status.Stopped")),1),q("span",{class:A(["iconfont","icon-"+(M(C).service_status?"start":"stop")])},null,2)])),_:1})]),z(o,{class:"ml-32px",onClick:H},{default:I((()=>[G(R(M(C).service_status?e.$t("Docker.Setting.index_4"):e.$t("Docker.Setting.index_3")),1)])),_:1}),z(o,{class:"ml-12px",onClick:T},{default:I((()=>[G(R(e.$t("Docker.Setting.index_5")),1)])),_:1}),M(C).service_status?F("",!0):(O(),E(o,{key:0,class:"ml-12px",onClick:V},{default:I((()=>[G(R(e.$t("Docker.Setting.index_6")),1)])),_:1}))])),_:1},8,["label"]),z(c,{label:e.$t("Docker.Setting.index_7")},{default:I((()=>[q("div",ae,[z(r,{value:M(W)||e.$t("Docker.Setting.index_8"),disabled:!0,placeholder:""},null,8,["value"])]),z(o,{type:"primary",class:"ml-5px",onClick:Z},{default:I((()=>[G(R(e.$t("Public.Btn.Modify")),1)])),_:1})])),_:1},8,["label"]),z(c,{label:"Docker compose"},{default:I((()=>[q("div",ne,[z(r,{value:M(C).docker_compose_path,disabled:!0,placeholder:""},null,8,["value"])]),z(o,{type:"primary",class:"ml-5px",onClick:oe},{default:I((()=>[G(R(e.$t("Public.Btn.Modify")),1)])),_:1}),q("span",ie,R(e.$t("Docker.Setting.index_10")),1)])),_:1}),z(c,{label:e.$t("Docker.Setting.index_11")},{default:I((()=>[z(o,{type:"primary",onClick:re},{default:I((()=>[G(R(e.$t("Docker.Setting.index_12")),1)])),_:1})])),_:1},8,["label"]),z(c,{label:e.$t("Docker.Setting.index_18")},{default:I((()=>[z(o,{onClick:ue},{default:I((()=>[G(R(e.$t("Public.Btn.Uninstall")),1)])),_:1})])),_:1},8,["label"])])),_:1}),z(d,{show:M(Y).show,"onUpdate:show":t[0]||(t[0]=e=>M(Y).show=e),title:M(Y).title,data:M(Y).data,width:640,"min-height":164,footer:!0,component:M(a)},null,8,["show","title","data","component"]),z(d,{show:M(se).show,"onUpdate:show":t[1]||(t[1]=e=>M(se).show=e),title:M(se).title,width:450,"min-height":80,footer:!0,component:M(n)},null,8,["show","title","component"]),z(d,{show:M(ce).show,"onUpdate:show":t[2]||(t[2]=e=>M(ce).show=e),title:M(ce).title,width:640,"min-height":530,footer:!0,component:M(i)},null,8,["show","title","component"])])),_:1})])),_:1})}}}))}}}));