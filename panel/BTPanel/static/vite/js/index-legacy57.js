System.register(["./Tabs-legacy.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./index-legacy.js?v=1720690738171"],(function(a,e){"use strict";var t,n,d,r,l,o,i,p,s,b,u,c,v,f,g,m;return{setters:[a=>{t=a.a,n=a.N},a=>{d=a.l,r=a.ah,l=a.ai,o=a.S,i=a.U,p=a.V,s=a.D,b=a.Z,u=a.ag,c=a.F,v=a.a8,f=a.L,g=a.af},a=>{m=a.a}],execute:function(){var e=document.createElement("style");e.textContent=".bt-tabs[data-v-52274aed]{--n-tab-gap: 4px;--n-tab-border-radius: 0;--n-tab-text-color-active: #333;--n-tab-border-color: #cacad9;--n-tab-padding-vertical: 0 16px;--n-pane-padding-top: 16px;--n-pane-padding-left: 0;--n-pane-padding-right: 0;--n-pane-padding-bottom: 0}.bt-tabs[data-v-52274aed]>.n-tabs-nav .n-tabs-wrapper .n-tabs-tab-wrapper .n-tabs-tab{height:32px;border-bottom:none;background:-webkit-gradient(linear,0% 0,0% 100%,from(#f6f6f6),to(#ddd))}.bt-tabs[data-v-52274aed]>.n-tabs-nav .n-tabs-wrapper .n-tabs-tab-wrapper .n-tabs-tab--active{background:rgba(0,0,0,0)}.bt-tabs[data-v-52274aed]>.n-tab-pane{flex:1;overflow:auto}\n",document.head.appendChild(e),a("_",m(d({__name:"index",props:r({data:{default:()=>[]}},{value:{},valueModifiers:{}}),emits:r(["click"],["update:value"]),setup(a,{expose:e,emit:d}){const r=l(a,"value"),m=d,y=()=>{r.value&&k[r.value]?.init?.()},k={};return e({init:y,onConfirm:async a=>{r.value&&await(k[r.value]?.onConfirm?.(a))}}),(a,e)=>{const d=n,l=t;return o(),i(l,{value:r.value,"onUpdate:value":e[0]||(e[0]=a=>r.value=a),class:"bt-tabs h-full",type:"card",placement:"top"},{default:p((()=>[s(a.$slots,"default",{},void 0,!0),(o(!0),b(c,null,u(a.data,(a=>(o(),i(d,{key:a.key,name:a.key,tab:a.label,"display-directive":a.isLazy?"show:lazy":"if","tab-props":{onClick:e=>{((a,e)=>{m("click",a),e===r.value&&y()})(e,a.key)}}},{default:p((()=>[a.component?(o(),i(v(a.component),f({key:0,ref_for:!0,ref:e=>((a,e)=>{k[e]=a})(e,a.key)},a.data),null,16)):g("",!0)])),_:2},1032,["name","tab","display-directive","tab-props"])))),128))])),_:3},8,["value"])}}}),[["__scopeId","data-v-52274aed"]]))}}}));