System.register(["./index-legacy41.js?v=1720690738171","./index-legacy.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./index-legacy42.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./useAccount-legacy.js?v=1720690738171","./Tag-legacy.js?v=1720690738171","./Countdown-legacy.js?v=1720690738171"],(function(e,n){"use strict";var s,t,l,g,a,u,r;return{setters:[e=>{s=e._},e=>{t=e.u},e=>{l=e.l,g=e.a2,a=e.y,u=e.S,r=e.U},null,null,null,null,null],execute:function(){e("default",l({__name:"index",setup(e){const n=g(),l=t(),c=new Map([["MySQL","mysql"],["SQLServer","sqlserver"],["MongoDB","mongodb"],["Redis","redis"],["PgSQL","pgsql"]]),y=e=>{l.resetPage(),l.setType(c.get(e.name)||"mysql")};return(()=>{const e=`${n.meta.title}`;l.setType(c.get(e)||"mysql")})(),l.getConfig(),a((()=>{l.resetPage()})),(e,n)=>{const t=s;return u(),r(t,{onChange:y})}}}))}}}));
