System.register(["./index-legacy.js?v=1720690738171"],(function(e,s){"use strict";var i;return{setters:[e=>{i=e.ar}],execute:function(){e("a",(e=>i.post("/files?action=GetDir",e))),e("c",(e=>i.post("/files?action=GetDir",{...e,disk:!0}))),e("d",(e=>i.post("/files?action=DeleteFile",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}))),e("b",(()=>i.post("/files?action=Get_Recycle_bin"))),e("g",(e=>i.post("/files?action=GetFileBody",e))),e("s",(e=>i.post("/files?action=SaveFileBody",e,{requestOptions:{loading:"Saving, please wait...",errorMessage:{close:!0}}}))),e("u",(e=>i.post("/files?action=upload",e,{requestOptions:{loading:"Uploading file, please wait...",successMessage:!0}})))}}}));
