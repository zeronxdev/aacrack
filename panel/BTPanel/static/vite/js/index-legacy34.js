System.register(["./index-legacy.js?v=1720690738171","./index-legacy49.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy3.js?v=1720690738171","./useTableData-legacy.js?v=1720690738171","./index-legacy47.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./site-legacy.js?v=1720690738171","./useAccount-legacy.js?v=1720690738171","./useLoading-legacy.js?v=1720690738171","./useTableColumns-legacy.js?v=1720690738171","./site-legacy2.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./Select-legacy.js?v=1720690738171","./ButtonGroup-legacy.js?v=1720690738171","./DatePicker-legacy.js?v=1720690738171"],(function(e,t){"use strict";var a,i,n,l,o,s,d,r,c,u,p,h,m,w,y,g,_,v,f,b,P,x,k,S,H,j,C,B,$,U,D,O,W,T,R,M,z,L,N,E,K,q,I,A,G,V,Z,F,J,Q,X,Y,ee,te,ae,ie,ne,le,oe,se,de,re,ce,ue,pe,he,me,we,ye,ge,_e;return{setters:[e=>{a=e.cs,i=e.ct,n=e.cu,l=e.e,o=e.B,s=e.b3,d=e.a,r=e.H,c=e.v,u=e.j,p=e.g,h=e.k,m=e.q,w=e.cv,y=e.h,g=e.m,_=e.r},e=>{v=e._},e=>{f=e._},e=>{b=e._,P=e.a},e=>{x=e._},e=>{k=e.u,S=e._},e=>{H=e._},e=>{j=e.s},e=>{C=e.o,B=e.l},e=>{$=e.c,U=e.g,D=e.e,O=e.a},e=>{W=e.u},e=>{T=e.c,R=e.i,M=e.u,z=e.a,L=e.b},e=>{N=e.s,E=e.g,K=e.a,q=e.b,I=e.c,A=e.d},e=>{G=e.l,V=e.d,Z=e.r,F=e.k,J=e.S,Q=e.U,X=e.V,Y=e.P,ee=e.q,te=e.a3,ae=e.W,ie=e._,ne=e.b,le=e.a1,oe=e.ae,se=e.ad,de=e.s,re=e.ao,ce=e.Z,ue=e.f,pe=e.w,he=e.af,me=e.t,we=e.n},e=>{ye=e._},e=>{ge=e.N},e=>{_e=e._}],execute:function(){var ve=document.createElement("style");function fe(e,t){const n=a(e);return isNaN(t)?i(e,NaN):t?(n.setDate(n.getDate()+t),n):n}function be(e,t){return+a(e)<+a(t)}ve.textContent=".n-date-panel[data-v-0f7e7fa2]{margin:0}.n-date-panel[data-v-0f7e7fa2] .n-date-panel-calendar{padding:6px 0 12px}.n-date-panel[data-v-0f7e7fa2] .n-date-panel--month .n-date-panel-footer{display:none}.n-date-panel[data-v-0f7e7fa2] .n-date-panel-footer{padding:12px 0 6px}\n",document.head.appendChild(ve),e({a:fe,i:be});const Pe={class:"flex justify-end"},xe=d(G({__name:"index",props:{row:{}},setup(e){const t=V(e,"row"),a=Z(null),i=Z(null),d=new Date;d.setHours(0,0,0,0);const r=F((()=>{const e=new Date(t.value.edate);return"0000-00-00"!==t.value.edate&&be(e,d)})),c=F((()=>{const e=new Date(t.value.edate);return"0000-00-00"!==t.value.edate&&be(e,fe(d,7))})),u=e=>be(e,fe(d,1)),p=()=>{a.value="0000-00-00"===t.value.edate?null:new Date(t.value.edate).getTime()},h=async()=>{await N({id:t.value.id,edate:"0000-00-00"}),t.value.edate="0000-00-00",i.value?.setShow(!1)},m=async()=>{if(null===a.value)return;const e=n(a.value,"yyyy-MM-dd");await N({id:t.value.id,edate:e}),t.value.edate=e,i.value?.setShow(!1)};return(e,n)=>{const d=l,w=o,y=ge,g=_e,_=s;return J(),Q(_,{ref_key:"popoverRef",ref:i,placement:"bottom",trigger:"click"},{trigger:X((()=>[Y(d,{type:ae(r)?"error":ae(c)?"warning":"primary",onClick:p},{default:X((()=>[ee(te("0000-00-00"===ae(t).edate?e.$t("Site.PHP.index_34"):ae(r)?e.$t("Site.PHP.index_28"):ae(t).edate),1)])),_:1},8,["type"])])),default:X((()=>[Y(g,{value:ae(a),"onUpdate:value":n[0]||(n[0]=e=>ne(a)?a.value=e:null),type:"date",panel:!0,actions:null,"is-date-disabled":u},{footer:X((()=>[ie("div",Pe,[Y(y,{size:"small"},{default:X((()=>[Y(w,{onClick:h},{default:X((()=>[ee(te(e.$t("Site.PHP.index_34")),1)])),_:1}),Y(w,{disabled:null===ae(a),onClick:m},{default:X((()=>[ee(te(e.$t("Public.Btn.Confirm")),1)])),_:1},8,["disabled"])])),_:1})])])),_:1},8,["value"])])),_:1},512)}}}),[["__scopeId","data-v-0f7e7fa2"]]);function ke(e){r({title:1===e.length?`Delete site [${e[0].name}]`:"Deleting sites in batches",width:480,minHeight:248,footer:!0,data:{rows:e},component:le((()=>c((()=>t.import("./index-legacy102.js?v=1720690738171")),void 0)))})}const Se=G({functional:!0,props:{path:{type:String,default:"",required:!0}},setup(e){const t=oe();return{goPath:()=>{T("Path",e.path),t.push("/files")}}},render(){return Y("a",{class:"text-primary hover:text-primary-hover",href:"javascript:;",onClick:()=>{this.goPath()}},[this.path])}}),He=({row:e})=>Y(l,null,{default:()=>[e.name]}),je=({row:e})=>Y(R,{value:e.status},null),Ce=({row:e})=>{const{t:a}=se();return Y(l,{type:e.backup_count>0?"primary":"warning",onClick:()=>{r({title:a("Site.PHP.index_33",[e.name]),width:720,minHeight:200,data:{row:e},component:le((()=>c((()=>t.import("./index-legacy103.js?v=1720690738171")),void 0)))})}},{default:()=>[e.backup_count>0?a("Site.PHP.index_31",[e.backup_count]):a("Site.PHP.index_32")]})},Be=({row:e})=>Y(Se,{path:e.path},null),$e=({row:e})=>Y(l,null,{default:()=>[e.php_version]}),Ue=({row:e})=>{let t;const{t:a}=se(),{ssl:i}=e;return u(i)?Y(l,{type:i.endtime<0?"error":"primary"},{default:()=>[i.endtime<0?a("Site.PHP.index_28"):a("Site.PHP.index_29",[i.endtime])]}):Y(l,{type:"warning"},"function"==typeof(n=t=a("Site.PHP.index_30"))||"[object Object]"===Object.prototype.toString.call(n)&&!de(n)?t:{default:()=>[t]});var n},De=({row:e})=>Y(l,{type:e.attack>0?"error":"primary"},{default:()=>[e.attack]}),Oe={class:"w-150px"},We=G({__name:"index",props:{value:{default:null}},setup(e){const a=le((()=>c((()=>t.import("./set-legacy.js?v=1720690738171")),void 0))),i=re(e,"value"),{loading:n,setLoading:l}=W(),s=Z([]),d=p("Site category manager",{setOptions:(e,t)=>{t===i.value&&(i.value=-1),s.value=e.map((e=>({label:e.name,value:e.id}))),u()}}),r=()=>{d.show=!0},u=()=>{s.value.unshift({label:"Category manager",value:-1})};return u(),(async()=>{try{l(!0);const{message:e}=await E();h(e)?s.value=e.map((e=>({label:e.name,value:e.id}))):s.value=[],u()}finally{l(!1)}})(),(e,t)=>{const l=o,c=ye,u=m;return J(),ce("div",Oe,[Y(c,{value:ae(i),"onUpdate:value":t[0]||(t[0]=e=>ne(i)?i.value=e:null),loading:ae(n),options:ae(s)},{action:X((()=>[Y(l,{block:"",onClick:r},{default:X((()=>[ee("Category set")])),_:1})])),_:1},8,["value","loading","options"]),Y(u,{show:ae(d).show,"onUpdate:show":t[1]||(t[1]=e=>ae(d).show=e),width:350,title:ae(d).title,data:ae(d).data,component:ae(a)},null,8,["show","title","data","component"])])}}}),Te=ie("span",{class:"mx-4px"},"|",-1),Re=G({__name:"index",setup(e){const a=le((()=>c((()=>t.import("./index-legacy104.js?v=1720690738171")),void 0))),i=le((()=>c((()=>t.import("./index-legacy105.js?v=1720690738171")),void 0))),n=le((()=>c((()=>t.import("./index-legacy106.js?v=1720690738171")),void 0))),s=le((()=>c((()=>t.import("./index-legacy107.js?v=1720690738171")),void 0))),d=le((()=>c((()=>t.import("./index-legacy108.js?v=1720690738171").then((e=>e.i))),void 0))),{t:T}=se(),R=w(),{web:N,webserver:E}=j(R),G=Z(!1),V=p(T("Site.PHP.index_9")),F=()=>{V.show=!0},oe=p(T("Site.PHP.index_10")),de=()=>{oe.show=!0},re=p(T("Site.PHP.index_11")),ce=()=>{re.show=!0},ye=p(T("Site.PHP.index_12")),ge=()=>{ye.show=!0},_e=ue({show:!1,title:"",data:{siteInfo:null,config:{menu:"",subMenu:""}}}),ve=(e,t={})=>{_e.title=T("Site.PHP.index_13",[e.name,e.addtime]),_e.data.siteInfo=e,_e.data.config=Object.assign({menu:"",subMenu:""},t),_e.show=!0},fe=()=>L({title:T("Public.Table.Operation"),width:150,options:e=>[{label:T("Site.PHP.index_14"),onClick:()=>{(async()=>{await $({source:142}),await U("monitor"),D({name:"monitor",title:"Website statistics-v2",admin:!0})})()}},{label:T("Site.PHP.index_15"),show:"nginx"===R.webserver||"apache"===R.webserver,onClick:()=>{C(e.name)}},{label:T("Site.PHP.index_16"),onClick:()=>{ve(e)}},{label:T("Public.Btn.Del"),onClick:()=>{ke([e])}}]}),{keys:be,table:Pe,columns:Se}=k([{type:"selection",width:40},{key:"rname",title:T("Site.PHP.index_17"),width:"12%",minWidth:130,sorter:!0,sortOrder:!1,render:e=>Y(He,{row:e,onClick:()=>{ve(e)}},null)},{key:"status",title:T("Public.Table.Status"),width:"8%",minWidth:90,sorter:!0,sortOrder:!1,render:e=>Y(je,{row:e,onClick:t=>{y({title:`${T("1"===t?"Site.PHP.index_21.1":"Site.PHP.index_21.2")} ${T("Site.PHP.index_21.0",[e.name])}`,content:T("1"===t?"Site.PHP.index_22":"Site.PHP.index_23"),onConfirm:async()=>{await K("1"===t,{id:e.id,name:e.name}),e.status=t}})}},null)},{key:"backup_count",title:T("Site.PHP.index_19"),width:"6%",minWidth:70,render:e=>Y(Ce,{row:e},null)},{key:"path",title:T("Site.PHP.index_20"),minWidth:130,ellipsis:{tooltip:!0},render:e=>Y(Be,{row:e},null)},M({type:"site",width:"6%",minWidth:70,callback:()=>{Ne()}}),{key:"edate",title:T("Site.PHP.index_25"),width:"8%",minWidth:96,render:e=>Y(xe,{row:e},null)},z({width:"8%",onBlur:async(e,t)=>{await A({id:t.id,ps:e})}}),{key:"php_version",title:T("Site.PHP.index_26"),width:"6%",minWidth:70,render:e=>Y($e,{row:e,onClick:()=>{ve(e,{menu:"php"})}},null)},{key:"site_ssl",title:T("Site.PHP.index_27"),width:"9%",minWidth:110,sorter:!0,sortOrder:!1,render:e=>Y(Ue,{row:e,onClick:()=>{ve(e,{menu:"ssl"})}},null)},{key:"attack",title:T("Site.PHP.index_24"),width:"6%",minWidth:60,render:e=>Y(De,{row:e,onClick:()=>{ve(e,{menu:"logs",subMenu:"security"})}},null)},fe()]),Oe=e=>{Se.value.forEach((t=>{const a=t;a.key===e.columnKey?a.sortOrder=e.order:a.sortOrder=void 0})),e.order?Me.order=`${e.columnKey} ${"descend"===e.order?"desc":"asc"}`:Me.order="",Ne()},Re=[{key:"enable",type:"confirm",label:"Enable website",confirm:{title:"Batch enable website",desc:"Please be cautious, The selected item will be [Enable website] after confirmation",columns:[Se.value[1]],api:e=>K(!0,{id:e.id,name:e.name},!1),done:()=>{Ne()}}},{key:"disable",type:"confirm",label:"Disable website",confirm:{title:"Batch disable website",desc:"Please be cautious, The selected item will be [Disable website] after confirmation",columns:[Se.value[1]],api:e=>K(!1,{id:e.id,name:e.name},!1),done:()=>{Ne()}}},{key:"backup",type:"confirm",label:"Backup website",confirm:{title:"Batch backup website",desc:"Please be cautious, The selected item will be [Backup website] after confirmation",columns:[Se.value[1]],api:e=>q({id:e.id},!1),done:()=>{Ne()}}},{key:"expired",label:"Set expired date",onBatch:e=>{r({title:"Batch set expired date",width:380,minHeight:72,footer:!0,data:{rows:e},component:le((()=>c((()=>t.import("./batch-legacy.js?v=1720690738171")),void 0)))})}},{key:"php",label:"Set php version",onBatch:e=>{r({title:"Batch set php version",width:500,minHeight:198,footer:!0,data:{rows:e},component:le((()=>c((()=>t.import("./batch-legacy2.js?v=1720690738171")),void 0)))})}},{key:"category",label:"Set category",onBatch:e=>{r({title:"Batch set category",width:350,minHeight:72,footer:!0,data:{rows:e},component:le((()=>c((()=>t.import("./batch-legacy3.js?v=1720690738171")),void 0)))})}},{key:"delete",label:"Delete website",onBatch:e=>{ke(e)}}],Me=ue({p:1,limit:10,table:"sites",search:"",order:"",type:-1}),{loading:ze,setLoading:Le}=W(!0),Ne=async()=>{try{Le(!0);const e=(()=>{const e=me(Me);return{...e,type:e.type?e.type:-1}})(),{message:t}=await I(e);u(t)?(Pe.data=h(t.data)?t.data:[],Pe.total=g(t.page)):(Pe.data=[],Pe.total=0)}finally{be.value=[],Le(!1)}};return pe((()=>R.isRefresh),(e=>{e&&(R.setRefresh(!1),Ne())})),(async()=>{try{await R.getConfig(),Le(!1),await we(),Se.value[Se.value.length-1]=fe(),Le(!0),R.web.setup?(G.value=!0,Ne()):(G.value=!1,Le(!1),B())}catch{Le(!1)}})(),(e,t)=>{const r=l,c=o,u=H,p=b,h=S,w=x,y=P,g=f,k=m,j=v,C=_;return J(),Q(C,null,{default:X((()=>[Y(j,{install:ae(N).setup},{desc:X((()=>[ie("span",null,te(e.$t("Site.PHP.index_1")),1),Y(r,{class:"ml-4px",onClick:t[0]||(t[0]=e=>ae(O)("nginx"))},{default:X((()=>[ee(te(e.$t("Site.PHP.index_2")),1)])),_:1}),Te,Y(r,{onClick:t[1]||(t[1]=e=>ae(O)("apache"))},{default:X((()=>[ee(te(e.$t("Site.PHP.index_3")),1)])),_:1})])),default:X((()=>[Y(g,{class:"p-16px",feedback:!0},{toolsLeft:X((()=>[Y(c,{type:"primary",onClick:F},{default:X((()=>[ee(te(e.$t("Site.PHP.index_4")),1)])),_:1}),Y(c,{onClick:de},{default:X((()=>[ee(te(e.$t("Site.PHP.index_5")),1)])),_:1}),Y(c,{onClick:ce},{default:X((()=>[ee(te(e.$t("Site.PHP.index_6")),1)])),_:1}),Y(c,{onClick:ge},{default:X((()=>[ee(te(e.$t("Site.PHP.index_7")),1)])),_:1}),ae(G)?(J(),Q(u,{key:0,"soft-name":ae(E)},null,8,["soft-name"])):he("",!0)])),toolsRight:X((()=>[Y(We,{value:ae(Me).type,"onUpdate:value":[t[2]||(t[2]=e=>ae(Me).type=e),Ne]},null,8,["value"]),Y(p,{value:ae(Me).search,"onUpdate:value":t[3]||(t[3]=e=>ae(Me).search=e),placeholder:e.$t("Site.PHP.index_8"),onSearch:Ne},null,8,["value","placeholder"])])),table:X((()=>[Y(h,{"checked-row-keys":ae(be),"onUpdate:checkedRowKeys":t[4]||(t[4]=e=>ne(be)?be.value=e:null),loading:ae(ze),data:ae(Pe).data,columns:ae(Se),"onUpdate:sorter":Oe},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:X((()=>[Y(w,{"checked-row-keys":ae(be),"onUpdate:checkedRowKeys":t[5]||(t[5]=e=>ne(be)?be.value=e:null),data:ae(Pe).data,options:Re},null,8,["checked-row-keys","data"])])),pageRight:X((()=>[Y(y,{page:ae(Me).p,"onUpdate:page":t[6]||(t[6]=e=>ae(Me).p=e),"page-size":ae(Me).limit,"onUpdate:pageSize":t[7]||(t[7]=e=>ae(Me).limit=e),"item-count":ae(Pe).total,"store-key":"site-php-page",onRefresh:Ne},null,8,["page","page-size","item-count"])])),_:1}),Y(k,{show:ae(V).show,"onUpdate:show":t[8]||(t[8]=e=>ae(V).show=e),title:ae(V).title,width:640,height:540,footer:!0,component:ae(a)},null,8,["show","title","component"]),Y(k,{show:ae(oe).show,"onUpdate:show":t[9]||(t[9]=e=>ae(oe).show=e),title:ae(oe).title,width:820,"min-height":608,component:ae(i)},null,8,["show","title","component"]),Y(k,{show:ae(re).show,"onUpdate:show":t[10]||(t[10]=e=>ae(re).show=e),title:ae(re).title,width:560,footer:!0,component:ae(n)},null,8,["show","title","component"]),Y(k,{show:ae(ye).show,"onUpdate:show":t[11]||(t[11]=e=>ae(ye).show=e),title:ae(ye).title,width:560,"min-height":148,footer:!0,component:ae(s)},null,8,["show","title","component"]),Y(k,{show:ae(_e).show,"onUpdate:show":t[12]||(t[12]=e=>ae(_e).show=e),title:ae(_e).title,data:ae(_e).data,width:860,height:700,component:ae(d)},null,8,["show","title","data","component"])])),_:1},8,["install"])])),_:1})}}}),Me=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"}));e("b",Me)}}}));