import{ax as t,aP as r,av as n,az as o,aA as a,aF as i,aB as e,aH as c,cw as s}from"./index.js?v=1720690738171";import{l,A as d,p as u}from"./vue.js?v=1720690738171";const p="0!important",f="-1px!important";function g(r){return o(r+"-type",[n("& +",[t("button",{},[o(r+"-type",[a("border",{borderLeftWidth:p}),a("state-border",{left:f})])])])])}function b(r){return o(r+"-type",[n("& +",[t("button",[o(r+"-type",[a("border",{borderTopWidth:p}),a("state-border",{top:f})])])])])}const m=t("button-group","\n flex-wrap: nowrap;\n display: inline-flex;\n position: relative;\n",[r("vertical",{flexDirection:"row"},[r("rtl",[t("button",[n("&:first-child:not(:last-child)","\n margin-right: ".concat(p,";\n border-top-right-radius: ").concat(p,";\n border-bottom-right-radius: ").concat(p,";\n ")),n("&:last-child:not(:first-child)","\n margin-left: ".concat(p,";\n border-top-left-radius: ").concat(p,";\n border-bottom-left-radius: ").concat(p,";\n ")),n("&:not(:first-child):not(:last-child)","\n margin-left: ".concat(p,";\n margin-right: ").concat(p,";\n border-radius: ").concat(p,";\n ")),g("default"),o("ghost",[g("primary"),g("info"),g("success"),g("warning"),g("error")])])])]),o("vertical",{flexDirection:"column"},[t("button",[n("&:first-child:not(:last-child)","\n margin-bottom: ".concat(p,";\n margin-left: ").concat(p,";\n margin-right: ").concat(p,";\n border-bottom-left-radius: ").concat(p,";\n border-bottom-right-radius: ").concat(p,";\n ")),n("&:last-child:not(:first-child)","\n margin-top: ".concat(p,";\n margin-left: ").concat(p,";\n margin-right: ").concat(p,";\n border-top-left-radius: ").concat(p,";\n border-top-right-radius: ").concat(p,";\n ")),n("&:not(:first-child):not(:last-child)","\n margin: ".concat(p,";\n border-radius: ").concat(p,";\n ")),b("default"),o("ghost",[b("primary"),b("info"),b("success"),b("warning"),b("error")])])])]),h=l({name:"ButtonGroup",props:{size:{type:String,default:void 0},vertical:Boolean},setup(t){const{mergedClsPrefixRef:r,mergedRtlRef:n}=i(t);e("-button-group",m,r),d(s,t);return{rtlEnabled:c("ButtonGroup",n,r),mergedClsPrefix:r}},render(){const{mergedClsPrefix:t}=this;return u("div",{class:["".concat(t,"-button-group"),this.rtlEnabled&&"".concat(t,"-button-group--rtl"),this.vertical&&"".concat(t,"-button-group--vertical")],role:"group"},this.$slots)}});export{h as N};
