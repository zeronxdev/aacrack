System.register(["./index-legacy.js?v=1720690738171"],(function(s,e){"use strict";var t;return{setters:[s=>{t=s.ar}],execute:function(){s("g",(s=>t.post("/panel/public/get_soft_status",{...s}))),s("s",(s=>t.post("/system?action=ServiceAdmin",{...s},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}))),s("b",(()=>t.post("/plugin?action=a&name=security_notice&s=get_status",{},{requestOptions:{isOriginalResult:!0,prefix:""}}))),s("a",(s=>t.post("/plugin?action=a&name=security_notice&s="+(s?"start_site":"stop_site"),{requestOptions:{loading:"Processing, please wait...",successMessage:!0}})))}}}));
