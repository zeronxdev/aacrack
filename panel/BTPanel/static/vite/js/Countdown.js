import{l as e,r as t,I as n,x as o,y as a}from"./vue.js?v=1720690738171";const r=e({name:"Countdown",props:{duration:{type:Number,default:0},active:{type:Boolean,default:!0},precision:{type:Number,default:0},render:Function,onFinish:Function},setup(e){let r=null,i=0,s=!1;const c=t(0);n((()=>{c.value=e.duration}));let l=-1;const u=()=>{var t;const{precision:n}=e,o=(a=performance.now(),e.duration-i+l-a);var a;if(o<=0)return c.value=0,d(),void(s||(s=!0,null===(t=e.onFinish)||void 0===t||t.call(e)));let p;switch(n){case 3:case 2:p=o%34;break;case 1:p=o%100;break;default:p=o%1e3}c.value=o,r=window.setTimeout((()=>{u()}),p)},d=()=>{null!==r&&(window.clearTimeout(r),r=null)};o((()=>{n((()=>{if(e.active)l=performance.now(),u();else{const e=performance.now();-1!==l&&(i+=e-l),d()}}))})),a((()=>{d()}));const p={reset:function(){c.value=e.duration,i=0,l=performance.now(),e.active&&s&&u(),s=!1}};return Object.assign(p,{distance:c,getTimeInfo:function(e){return{hours:Math.floor(e/36e5),minutes:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3),milliseconds:Math.floor(e%1e3)}},getDisplayValue:function(t){const{hours:n,minutes:o,seconds:a,milliseconds:r}=t,{precision:i}=e;return 0===i?"".concat(String(n).padStart(2,"0"),":").concat(String(o).padStart(2,"0"),":").concat(String(a).padStart(2,"0")):"".concat(String(n).padStart(2,"0"),":").concat(String(o).padStart(2,"0"),":").concat(String(a).padStart(2,"0"),".").concat(String(Math.floor(r/(1===i?100:2===i?10:1))).padStart(i,"0"))}})},render(){const{render:e,precision:t,distance:n,getTimeInfo:o,getDisplayValue:a}=this;let r;switch(t){case 0:r=o(n+999),r.milliseconds=0;break;case 1:r=o(n+99),r.milliseconds=100*Math.floor(r.milliseconds/100);break;case 2:r=o(n+9),r.milliseconds=10*Math.floor(r.milliseconds/10);break;case 3:r=o(n)}return e?e(r):a(r)}});export{r as _};
