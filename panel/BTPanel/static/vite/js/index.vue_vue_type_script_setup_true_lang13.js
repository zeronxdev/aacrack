import{K as e,B as l,b3 as a,G as t,dM as i,cd as s,e as o,cC as n,g as u,dN as r,j as p,h as _,dO as d,p as v,q as c,dP as f}from"./index.js?v=1720690738171";import{_ as m}from"./index112.js?v=1720690738171";import{l as g,ai as y,ad as h,r as x,k,S as w,U as b,V as C,P as D,W as z,b as $,Z as j,F as U,ag as P,q as M,a3 as S,d as T,f as R,af as E,_ as B}from"./vue.js?v=1720690738171";import{_ as G}from"./RadioButton.js?v=1720690738171";import{c as L,e as O}from"./DataTable.js?v=1720690738171";import{_ as q}from"./DatePicker.js?v=1720690738171";import{u as I}from"./useLoading.js?v=1720690738171";import{_ as A}from"./index53.js?v=1720690738171";import{_ as F,a as K}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1720690738171";import{c as N,_ as V}from"./useTableColumns.js?v=1720690738171";import{_ as W}from"./InputGroupLabel.js?v=1720690738171";import{_ as Z}from"./InputGroup.js?v=1720690738171";const H=g({__name:"index",props:{value:{default:()=>[]},valueModifiers:{}},emits:["update:value"],setup(i){const s=y(i,"value"),{t:o}=h(),n=x(null),u=x("all"),r=x(null),p=k((()=>""===u.value?"primary":"default")),_=k((()=>{if(""===u.value){const[l,a]=s.value;if(l!==a)return"".concat(e(l,"yyyy-MM-dd")," ~ ").concat(e(a,"yyyy-MM-dd"))}return"Custom Date"})),d=e=>e>Date.now(),v=[{label:o("Public.All"),value:"all"},{label:o("Public.Time.7Days"),value:"l7"},{label:o("Public.Time.30Days"),value:"l30"}],c=e=>{switch(r.value=null,e){case"all":s.value=[];break;case"l7":s.value=[Date.now()-6048e5,Date.now()];break;case"l30":s.value=[Date.now()-2592e6,Date.now()]}},f=e=>{var l;e&&e[0]!==e[1]&&(u.value="",s.value=e,null==(l=n.value)||l.setShow(!1))},m=e=>{e||r.value&&r.value[0]===r.value[1]&&(r.value=null)};return(e,i)=>{const s=G,o=L,g=l,y=q,h=a,x=t;return w(),b(x,{size:8},{default:C((()=>[D(o,{value:z(u),"onUpdate:value":[i[0]||(i[0]=e=>$(u)?u.value=e:null),c],class:"bt-radio"},{default:C((()=>[(w(),j(U,null,P(v,(e=>D(s,{key:e.value,value:e.value},{default:C((()=>[M(S(e.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"]),D(h,{ref_key:"popoverRef",ref:n,trigger:"click",placement:"bottom-end",style:{padding:0},"arrow-point-to-center":!0,"onUpdate:show":m},{trigger:C((()=>[D(g,{type:z(p)},{default:C((()=>[M(S(z(_)),1)])),_:1},8,["type"])])),default:C((()=>[D(y,{value:z(r),"onUpdate:value":[i[1]||(i[1]=e=>$(r)?r.value=e:null),f],type:"daterange",panel:!0,actions:null,"is-date-disabled":d},null,8,["value"])])),_:1},512)])),_:1})}}}),J={class:"p-20px"},Q=B("div",{class:"mr-16px"},"/var/lib/docker/containers/history_logs",-1),X={key:0},Y={key:1},ee=g({__name:"config",props:{info:{}},emits:["refresh"],setup(e,{expose:l,emit:a}){const t=e,u=a,{t:r}=h(),p=T(t,"info"),_=x(null),d=R({split_type:"day",split_hour:2,split_minute:2,save:180,split_size:10}),v={split_size:{trigger:["input","blur"],validator:()=>!("size"===d.split_type&&d.split_size<0)||new Error(r("Docker.Container.log.index_23"))},split_day:{trigger:["input","blur"],validator:()=>{if("day"===d.split_type){if(d.split_hour>23||d.split_hour<0)return new Error(r("Docker.Container.log.index_24"));if(d.split_minute>59||d.split_minute<0)return new Error(r("Docker.Container.log.index_25"))}return!0}},save:{trigger:["input","blur"],validator:()=>!(d.save>1800||d.save<0)||new Error(r("Docker.Container.log.index_26"))}},c=()=>{N("Path","/var/lib/docker/containers/history_logs"),window.location.href=window.location.origin+"/files"};return d.split_type=p.value.split_type,d.split_size=p.value.split_size,d.split_hour=p.value.split_hour,d.split_minute=p.value.split_minute,d.save=s(p.value.save),l({onConfirm:async()=>{var e;await(null==(e=_.value)?void 0:e.validate()),await i({pid:p.value.id,type:"add",log_path:p.value.logs_path,split_type:d.split_type,split_size:d.split_size,split_hour:d.split_hour,split_minute:d.split_minute,save:"".concat(d.save)}),u("refresh")}}),(e,l)=>{const a=o,t=F,i=O,s=L,u=n,r=W,p=Z,f=K,m=A;return w(),j("div",J,[D(f,{ref_key:"formRef",ref:_,model:z(d),rules:v},{default:C((()=>[D(t,{label:e.$t("Docker.Container.log.index_8")},{default:C((()=>[Q,D(a,{onClick:c},{default:C((()=>[M(S(e.$t("Docker.Container.log.index_9")),1)])),_:1})])),_:1},8,["label"]),D(t,{label:e.$t("Docker.Container.log.index_10")},{default:C((()=>[D(s,{value:z(d).split_type,"onUpdate:value":l[0]||(l[0]=e=>z(d).split_type=e)},{default:C((()=>[D(i,{value:"size"},{default:C((()=>[M(S(e.$t("Docker.Container.log.index_11")),1)])),_:1}),D(i,{value:"day"},{default:C((()=>[M(S(e.$t("Docker.Container.log.index_12")),1)])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),"size"===z(d).split_type?(w(),b(t,{key:0,label:e.$t("Docker.Container.log.index_13"),path:"split_size"},{default:C((()=>[D(p,{class:"w-120px"},{default:C((()=>[D(u,{value:z(d).split_size,"onUpdate:value":l[1]||(l[1]=e=>z(d).split_size=e),min:0,"show-button":!1},null,8,["value"]),D(r,null,{default:C((()=>[M("MB")])),_:1})])),_:1})])),_:1},8,["label"])):E("",!0),"day"===z(d).split_type?(w(),b(t,{key:1,label:e.$t("Docker.Container.log.index_14"),path:"split_day"},{default:C((()=>[D(p,{class:"w-auto"},{default:C((()=>[D(r,null,{default:C((()=>[M(S(e.$t("Docker.Container.log.index_15")),1)])),_:1})])),_:1}),D(p,{class:"w-120px ml-12px"},{default:C((()=>[D(u,{value:z(d).split_hour,"onUpdate:value":l[2]||(l[2]=e=>z(d).split_hour=e),min:0,max:23,"show-button":!1},null,8,["value"]),D(r,null,{default:C((()=>[M(S(e.$t("Docker.Container.log.index_16")),1)])),_:1})])),_:1}),D(p,{class:"w-120px ml-12px"},{default:C((()=>[D(u,{value:z(d).split_minute,"onUpdate:value":l[3]||(l[3]=e=>z(d).split_minute=e),min:0,max:59,"show-button":!1},null,8,["value"]),D(r,null,{default:C((()=>[M(S(e.$t("Docker.Container.log.index_17")),1)])),_:1})])),_:1})])),_:1},8,["label"])):E("",!0),D(t,{label:e.$t("Docker.Container.log.index_18"),path:"save"},{default:C((()=>[D(p,{class:"w-120px"},{default:C((()=>[D(u,{value:z(d).save,"onUpdate:value":l[4]||(l[4]=e=>z(d).save=e),min:0,max:1800,"show-button":!1},null,8,["value"]),D(r,null,{default:C((()=>[M(S(e.$t("Docker.Container.log.index_19")),1)])),_:1})])),_:1})])),_:1},8,["label"])])),_:1},8,["model"]),D(m,{class:"mt-8px"},{default:C((()=>["size"===z(d).split_type?(w(),j("li",X,S(e.$t("Docker.Container.log.index_20")),1)):E("",!0),"day"===z(d).split_type?(w(),j("li",Y,S(e.$t("Docker.Container.log.index_21")),1)):E("",!0),B("li",null,S(e.$t("Docker.Container.log.index_22")),1)])),_:1})])}}}),le={class:"ml-4px"},ae={class:"mt-12px mb-16px"},te={class:"h-500px"},ie=g({__name:"index",props:{id:{default:""}},setup(e,{expose:a}){const s=T(e,"id"),{t:n}=h(),g=R({time_search:[]}),y=x({logs:n("Docker.Container.log.index_4"),split_status:!1,split_type:"",split_size:0,split_hour:0,split_minute:0,save:"",id:"",name:"",logs_path:"",size:0}),k=u(n("Docker.Container.log.index_5"),{info:y.value,onRefresh:()=>{P()}}),{loading:b,setLoading:$}=I();function U(e){return String(e).padStart(2,"0")}const P=async()=>{if(s.value)try{$(!0),y.value.logs="";const{message:e}=await r(0===g.time_search.length?{id:s.value}:{id:s.value,time_search:g.time_search.map((e=>Math.round(e/1e3)))});p(e)&&(y.value=e,y.value.logs=e.logs||n("Docker.Container.log.index_4"))}finally{$(!1)}},E=e=>{_({title:n("Docker.Container.log.index_6",[n(e?"Public.Status.TurnOn":"Public.Status.TurnOff")]),content:n(e?"Docker.Container.log.index_7.index_1":"Docker.Container.log.index_7.index_2"),onConfirm:async()=>{try{await i({pid:y.value.id,type:e?"add":"del",log_path:y.value.logs_path,split_type:y.value.split_type,split_size:y.value.split_size,split_hour:y.value.split_hour,split_minute:y.value.split_minute,save:y.value.save})}catch(l){y.value.split_status=!e}},onPublicClose:()=>{y.value.split_status=!e}})},G=()=>{k.data.info=y.value,k.show=!0},L=()=>{P()},O=()=>{const e=f();window.open("".concat(e,"/download?filename=").concat(y.value.logs_path))},q=async()=>{await d({log_path:y.value.logs_path}),P()},A=()=>{P()};return P(),a({getContent:P}),(e,a)=>{const i=V,s=o,n=t,u=v,r=l,p=H,_=m,d=c;return w(),j("div",null,[D(n,{class:"items-center"},{default:C((()=>[B("div",null,S(e.$t("Docker.Container.log.index_1")),1),D(i,{value:z(y).split_status,"onUpdate:value":[a[0]||(a[0]=e=>z(y).split_status=e),E]},null,8,["value"]),B("div",le,[M(S(e.$t("Docker.Container.log.index_2",[U(z(y).split_hour),U(z(y).split_minute)]))+" ",1),D(s,{onClick:G},{default:C((()=>[M(S(e.$t("Docker.Container.log.index_3")),1)])),_:1})])])),_:1}),B("div",ae,[D(u)]),D(n,{class:"mb-16px",justify:"space-between"},{default:C((()=>[D(n,{class:"items-center"},{default:C((()=>[D(r,{onClick:L},{default:C((()=>[M("Refresh")])),_:1}),D(u,{class:"mx-0!",vertical:""}),D(r,{onClick:O},{default:C((()=>[M("Download")])),_:1}),D(r,{onClick:q},{default:C((()=>[M("Clear")])),_:1})])),_:1}),D(p,{value:z(g).time_search,"onUpdate:value":[a[1]||(a[1]=e=>z(g).time_search=e),A]},null,8,["value"])])),_:1}),B("div",te,[D(_,{log:z(y).logs,loading:z(b)},null,8,["log","loading"])]),D(d,{show:z(k).show,"onUpdate:show":a[2]||(a[2]=e=>z(k).show=e),title:z(k).title,data:z(k).data,width:520,footer:!0,component:ee},null,8,["show","title","data"])])}}});export{ie as _};
