import{l as n,k as e,r as t,I as i,p as s,J as o}from"./vue.js?v=1720690738171";import{aD as a,av as r,ax as l,cE as c,az as p,aF as d,aG as m,aI as u,c4 as h,bm as f,bn as v,aM as g}from"./index.js?v=1720690738171";const y={name:"Spin",common:a,self:n=>{const{opacityDisabled:e,heightTiny:t,heightSmall:i,heightMedium:s,heightLarge:o,heightHuge:a,primaryColor:r,fontSize:l}=n;return{fontSize:l,textColor:r,sizeTiny:t,sizeSmall:i,sizeMedium:s,sizeLarge:o,sizeHuge:a,color:r,opacitySpinning:e}}},b=r([r("@keyframes spin-rotate","\n from {\n transform: rotate(0);\n }\n to {\n transform: rotate(360deg);\n }\n "),l("spin-container","\n position: relative;\n ",[l("spin-body","\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n ",[c()])]),l("spin-body","\n display: inline-flex;\n align-items: center;\n justify-content: center;\n flex-direction: column;\n "),l("spin","\n display: inline-flex;\n height: var(--n-size);\n width: var(--n-size);\n font-size: var(--n-size);\n color: var(--n-color);\n ",[p("rotate","\n animation: spin-rotate 2s linear infinite;\n ")]),l("spin-description","\n display: inline-block;\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n margin-top: 8px;\n "),l("spin-content","\n opacity: 1;\n transition: opacity .3s var(--n-bezier);\n pointer-events: all;\n ",[p("spinning","\n user-select: none;\n -webkit-user-select: none;\n pointer-events: none;\n opacity: var(--n-opacity-spinning);\n ")])]),z={small:20,medium:18,large:16},S=n({name:"Spin",props:Object.assign(Object.assign({},m.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),setup(n){const{mergedClsPrefixRef:s,inlineThemeDisabled:o}=d(n),a=m("Spin","-spin",b,y,n,s),r=e((()=>{const{size:e}=n,{common:{cubicBezierEaseInOut:t},self:i}=a.value,{opacitySpinning:s,color:o,textColor:r}=i;return{"--n-bezier":t,"--n-opacity-spinning":s,"--n-size":"number"==typeof e?v(e):i[g("size",e)],"--n-color":o,"--n-text-color":r}})),l=o?u("spin",e((()=>{const{size:e}=n;return"number"==typeof e?String(e):e[0]})),r,n):void 0,c=h(n,["spinning","show"]),p=t(!1);return i((e=>{let t;if(c.value){const{delay:i}=n;if(i)return t=window.setTimeout((()=>{p.value=!0}),i),void e((()=>{clearTimeout(t)}))}p.value=c.value})),{mergedClsPrefix:s,active:p,mergedStrokeWidth:e((()=>{const{strokeWidth:e}=n;if(void 0!==e)return e;const{size:t}=n;return z["number"==typeof t?"medium":t]})),cssVars:o?void 0:r,themeClass:null==l?void 0:l.themeClass,onRender:null==l?void 0:l.onRender}},render(){var n,e;const{$slots:t,mergedClsPrefix:i,description:a}=this,r=t.icon&&this.rotate,l=(a||t.description)&&s("div",{class:"".concat(i,"-spin-description")},a||(null===(n=t.description)||void 0===n?void 0:n.call(t))),c=t.icon?s("div",{class:["".concat(i,"-spin-body"),this.themeClass]},s("div",{class:["".concat(i,"-spin"),r&&"".concat(i,"-spin--rotate")],style:t.default?"":this.cssVars},t.icon()),l):s("div",{class:["".concat(i,"-spin-body"),this.themeClass]},s(f,{clsPrefix:i,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:"".concat(i,"-spin")}),l);return null===(e=this.onRender)||void 0===e||e.call(this),t.default?s("div",{class:["".concat(i,"-spin-container"),this.themeClass],style:this.cssVars},s("div",{class:["".concat(i,"-spin-content"),this.active&&"".concat(i,"-spin-content--spinning"),this.contentClass],style:this.contentStyle},t),s(o,{name:"fade-in-transition"},{default:()=>this.active?c:null})):c}});export{S as _};
