System.register(["./index-legacy111.js?v=1720690738171","./index-legacy53.js?v=1720690738171","./index-legacy.js?v=1720690738171","./useAccount-legacy.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./Checkbox-legacy.js?v=1720690738171","./useLoading-legacy.js?v=1720690738171","./site-legacy2.js?v=1720690738171","./Select-legacy.js?v=1720690738171","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1720690738171","./useTableColumns-legacy.js?v=1720690738171","./Tabs-legacy.js?v=1720690738171","./omit-legacy.js?v=1720690738171","./Ellipsis-legacy.js?v=1720690738171","./pinia-legacy.js?v=1720690738171","./Tag-legacy.js?v=1720690738171","./Empty-legacy.js?v=1720690738171","./Progress-legacy.js?v=1720690738171"],(function(a,e){"use strict";var t,n,l,s,i,p,d,o,u,r,c,m,v,b,h,_,x,y,g,f,w,D,$,k,j,C,P,S,U,T,B,E,L,N,q,z,A,I,F,H,M,G,R,V,W,Z,J,K,O,Q,X,Y,aa,ea;return{setters:[a=>{t=a._},a=>{n=a._},a=>{l=a.c$,s=a.b1,i=a.h,p=a.d0,d=a.n,o=a.aj,u=a.d1,r=a.j,c=a.p,m=a.B,v=a.a,b=a.k,h=a.d2,_=a.G,x=a.d3,y=a.d4,g=a.d5,f=a.d6,w=a.d7,D=a.cd,$=a.d8,k=a.cC,j=a.a9},a=>{C=a.h,P=a.b},a=>{S=a.A,U=a.a,T=a.l,B=a.ad,E=a.r,L=a.S,N=a.Z,q=a._,z=a.P,A=a.V,I=a.q,F=a.a3,H=a.W,M=a.a5,G=a.a6,R=a.f,V=a.b,W=a.F,Z=a.af,J=a.d},a=>{K=a._},a=>{O=a.u},a=>{Q=a.ai},a=>{X=a._},a=>{Y=a._,aa=a.a},a=>{ea=a._},null,null,null,null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".n-button[data-v-1a5b087a]{padding:0 24px;--n-height: 40px;--n-border-radius: 2px;--n-color: #eee;--n-text-color: #333;--n-border: none;--n-color-hover: #20a53a;--n-border-hover: 1px solid #20a53a;--n-text-color-hover: #fff;--n-color-focus: #20a53a;--n-text-color-focus: #fff;--n-border-focus: 1px solid #20a53a}.bg-recommend[data-v-1a5b087a]{position:absolute;width:32px;height:32px;top:-1px;left:-1px;background-image:url(/static/vite/images/recommend.svg);background-repeat:no-repeat;background-position:center;background-size:contain}\n",document.head.appendChild(e);const ta=Symbol("php-admin");function na(a,e,t,n){return new Promise((l=>{const s=`${a}/index.php?lang=en`,i=document.createElement("form"),p=`\n\t\t\t<input type="text" name="pma_username" id="pma_username" value="${t}" />\n\t\t\t<input type="password" name="pma_password" id="pma_password" value="${n}" />\n\t\t\t<input type="text" name="server" value="1" />\n\t\t\t<input type="text" name="target" value="index.php" />\n\t\t\t<input type="text" name="db" id="db" value="${e}" />\n\t\t`;i.action=s,i.setAttribute("public-data",s),i.method="post",i.target="_blank",i.style.display="none",i.innerHTML=p,document.body.appendChild(i),i.submit(),document.body.removeChild(i),l(i)}))}async function la(a,e){const{data:t}=await l.get("/phpmyadmin/index.php?lang=en"),n={session:"",token:""},s=t.match(/"set_session"\s+value="(\w+)"/),i=t.match(/"token"\s+value="(\w+)"/);s&&s.length>1&&(n.session=s[1]||""),i&&i.length>1&&(n.token=i[1]||"");const p=document.createElement("form");p.action="/phpmyadmin/index.php",p.method="post",p.target="_blank",p.style.display="none";const d=`\n\t\t<input  name="set_session" id="input_session" value="${n.session}" />\n\t\t<input type="text" name="pma_username" id="pma_username" value="${a}" size="24" />\n\t\t<input type="password" name="pma_password" id="pma_password" value="${e}" size="24" />\n\t\t<input  name="token" id="input_token" value="${n.token}" />\n\t\t<input  name="target" id="input_target" value="index.php" />\n\t\t<input  name="server" value="1" id="input_server" />\n\t`;p.innerHTML=d,document.body.appendChild(p),p.submit(),document.body.removeChild(p)}const sa={class:"p-4px"},ia={class:"mb-16px"},pa={class:"text-error"},da={class:"mt-20px"},oa=(a=>(M("data-v-1a5b087a"),a=a(),G(),a))((()=>q("span",{class:"bg-recommend"},null,-1))),ua="phpmyadmin",ra=T({__name:"index",setup(a,{expose:e}){const{t:t}=B(),l=s(),{mysqlInfo:v}=U(ta),b=E(!1),h=a=>{i({title:t("Database.phpadmin.index_12",[t(a?"Public.Status.Start":"Public.Status.Stop")]),content:t("Database.phpadmin.index_13",[t(a?"Public.Status.start":"Public.Status.stop")]),onConfirm:async()=>{await p({name:ua,type:a?"start":"stop"}),x()}})},_=async a=>{const e=d.loading(t("Database.phpadmin.index_14"));try{const{message:n}=await C({sName:ua}),s=o(n,"ext.url",""),i=o(n,"ext.auth",!1);if("panel"==a){if(i)return d.error(t("Database.phpadmin.index_15")),void e.close();if(l.isFree)return P({source:160}),void e.close();if(v.value)await la(v.value.username,v.value.password);else{const{message:a}=await u(),e=o(a,"result","");await la("root",e)}}else if(v.value)await na(s,v.value.name,v.value.username,v.value.password);else{const{message:a}=await u(),e=o(a,"result","");await na(s,"","root",e)}e.close()}catch(n){e.close(),console.error(n)}},x=async()=>{const{message:a}=await C({sName:ua});r(a)&&(b.value=a.status)};return x(),e({init:x}),(a,e)=>{const t=K,l=n,s=c,i=m;return L(),N("div",sa,[q("div",ia,[z(t,{checked:H(b),"onUpdate:checked":h},{default:A((()=>[I(F(a.$t("Database.phpadmin.index_4")),1)])),_:1},8,["checked"])]),z(l,{class:"mb-20px"},{default:A((()=>[q("li",pa,F(a.$t("Database.phpadmin.index_5")),1)])),_:1}),z(s,{dashed:""}),q("div",da,[z(i,{onClick:e[0]||(e[0]=a=>_("panel"))},{default:A((()=>[q("span",null,F(a.$t("Database.phpadmin.index_11")),1),oa])),_:1}),z(i,{class:"ml-24px",onClick:e[1]||(e[1]=a=>_())},{default:A((()=>[I(F(a.$t("Database.phpadmin.index_6")),1)])),_:1})]),z(l,{class:"mt-16px"},{default:A((()=>[q("li",null,F(a.$t("Database.phpadmin.index_7")),1),q("li",null,F(a.$t("Database.phpadmin.index_8")),1),q("li",null,F(a.$t("Database.phpadmin.index_9")),1),q("li",null,F(a.$t("Database.phpadmin.index_10")),1)])),_:1})])}}}),ca=v(ra,[["__scopeId","data-v-1a5b087a"]]),ma={class:"w-160px"},va=T({__name:"index",setup(a,{expose:e}){const{t:t}=B(),n=R({php_version:null}),l=E([]),{loading:s,setLoading:i}=O(),p=async()=>{try{i(!0);const[a,e]=await Promise.all([Q(),C({sName:"phpmyadmin"})]),{message:t}=a;b(t)&&(l.value=t.map((a=>({label:a.name,value:a.version}))));const{message:s}=e;n.php_version=o(s,"ext.phpversion",null)}finally{i(!1)}},u=async()=>{const a=n.php_version;null!==a?(await h({phpversion:a}),p()):d.error(t("Database.phpadmin.index_32"))};return p(),e({init:p}),(a,e)=>{const t=X,i=m,p=_;return L(),N("div",null,[z(p,{class:"items-center"},{default:A((()=>[q("span",null,F(a.$t("Database.phpadmin.index_31")),1),q("div",ma,[z(t,{value:H(n).php_version,"onUpdate:value":e[0]||(e[0]=a=>H(n).php_version=a),loading:H(s),options:H(l)},null,8,["value","loading","options"])]),z(i,{type:"primary",onClick:u},{default:A((()=>[I(F(a.$t("Public.Btn.Save")),1)])),_:1})])),_:1})])}}}),ba={class:"p-4px"},ha={class:"w-142px mr-8px"},_a={class:"w-142px mr-8px"},xa={class:"w-240px"},ya={class:"w-240px"},ga={class:"w-240px"},fa=T({__name:"index",setup(a,{expose:e}){const{t:t}=B(),l=E(null),s=E(!1),p=E(null),u=E(!1);let r=!1;const v=R({username:"",password:"",repass:""}),b=async()=>{const a=l.value;null!==a?(await x({port:a}),T()):d.error(t("Database.phpadmin.index_25"))},h=async a=>{await y({v:a?1:0}),G()},_=async()=>{const a=p.value;null!==a?(await g({port:a}),G()):d.error(t("Database.phpadmin.index_26"))},P=a=>{!a&&r?i({title:t("Public.Confirm.Title"),content:t("Database.phpadmin.index_27"),onConfirm:async()=>{await f(),T()}}):u.value=a},S=async()=>{""!==v.password.trim()&&""!==v.username.trim()?v.password.length<3||v.username.length<3?d.error(t("Database.phpadmin.index_29")):v.password===v.repass?(await w({username:v.username,password:v.password}),T()):d.error(t("Database.phpadmin.index_30")):d.error(t("Database.phpadmin.index_28"))},U=E(!1),T=async()=>{try{U.value=!0;const{message:a}=await C({sName:"phpmyadmin"}),e=o(a,"ext.port",null);l.value=e?D(e):null,u.value=o(a,"ext.auth",!1),r=u.value}finally{U.value=!1}},M=E(!1),G=async()=>{try{M.value=!0;const{message:a}=await $();s.value=o(a,"status",!1);const e=o(a,"port",null);p.value=e?D(e):null}finally{M.value=!1}},J=()=>{Promise.all([T(),G()])};return J(),e({init:J}),(a,e)=>{const t=k,i=m,d=Y,o=c,r=ea,x=j,y=n,g=aa;return L(),N("div",ba,[z(g,{"label-width":"160"},{default:A((()=>[z(d,{label:a.$t("Database.phpadmin.index_16")},{default:A((()=>[q("div",ha,[z(t,{value:H(l),"onUpdate:value":e[0]||(e[0]=a=>V(l)?l.value=a:null),min:0,max:66325,"show-button":!1,loading:H(U),placeholder:""},null,8,["value","loading"])]),z(i,{type:"primary",onClick:b},{default:A((()=>[I(F(a.$t("Public.Btn.Save")),1)])),_:1})])),_:1},8,["label"]),z(o,{dashed:""}),z(d,{class:"mt-20px",label:a.$t("Database.phpadmin.index_17")},{default:A((()=>[z(r,{value:H(s),loading:H(M),"onUpdate:value":h},null,8,["value","loading"])])),_:1},8,["label"]),z(d,{label:a.$t("Database.phpadmin.index_18")},{default:A((()=>[q("div",_a,[z(t,{value:H(p),"onUpdate:value":e[1]||(e[1]=a=>V(p)?p.value=a:null),min:0,max:66325,"show-button":!1,loading:H(M),placeholder:""},null,8,["value","loading"])]),z(i,{type:"primary",onClick:_},{default:A((()=>[I(F(a.$t("Public.Btn.Save")),1)])),_:1})])),_:1},8,["label"]),z(o,{dashed:""}),z(d,{class:"mt-20px",label:a.$t("Database.phpadmin.index_19")},{default:A((()=>[z(r,{value:H(u),loading:H(U),"onUpdate:value":P},null,8,["value","loading"])])),_:1},8,["label"]),H(u)?(L(),N(W,{key:0},[z(d,{label:a.$t("Database.phpadmin.index_20")},{default:A((()=>[q("div",xa,[z(x,{value:H(v).username,"onUpdate:value":e[2]||(e[2]=a=>H(v).username=a),placeholder:a.$t("Database.phpadmin.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"]),z(d,{label:a.$t("Database.phpadmin.index_21")},{default:A((()=>[q("div",ya,[z(x,{value:H(v).password,"onUpdate:value":e[3]||(e[3]=a=>H(v).password=a),type:"password",placeholder:a.$t("Database.phpadmin.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"]),z(d,{label:a.$t("Database.phpadmin.index_22")},{default:A((()=>[q("div",ga,[z(x,{value:H(v).repass,"onUpdate:value":e[4]||(e[4]=a=>H(v).repass=a),type:"password",placeholder:a.$t("Database.phpadmin.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"]),z(d,{label:" "},{default:A((()=>[z(i,{type:"primary",onClick:S},{default:A((()=>[I(F(a.$t("Public.Btn.Save")),1)])),_:1})])),_:1})],64)):Z("",!0),z(y,null,{default:A((()=>[q("li",null,F(a.$t("Database.phpadmin.index_24")),1)])),_:1})])),_:1})])}}}),wa={class:"h-580px"};a("default",T({__name:"index",props:{row:{default:void 0}},setup(a){const e=J(a,"row"),{t:n}=B(),l=E("service"),s=[{key:"service",label:n("Database.phpadmin.index_1"),component:ca},{key:"php",label:n("Database.phpadmin.index_2"),component:va},{key:"safe",label:n("Database.phpadmin.index_3"),component:fa}];return S(ta,{mysqlInfo:e}),(a,e)=>{const n=t;return L(),N("div",wa,[z(n,{value:H(l),"onUpdate:value":e[0]||(e[0]=a=>V(l)?l.value=a:null),ref:"tabsRef",data:s},null,8,["value"])])}}}))}}}));
