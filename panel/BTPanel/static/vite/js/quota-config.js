import{_ as a}from"./index53.js?v=1720690738171";import{_ as e,a as s}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1720690738171";import{ar as t,aj as o,J as u,a9 as i,cC as l}from"./index.js?v=1720690738171";import{l as p,f as r,r as n,S as d,Z as c,P as _,V as f,_ as m,W as q,q as x,a3 as v,af as h}from"./vue.js?v=1720690738171";import{_ as z}from"./InputGroupLabel.js?v=1720690738171";import{_ as b}from"./InputGroup.js?v=1720690738171";import"./pinia.js?v=1720690738171";const g={class:"px-20px py-24px"},y={class:"w-160px"},j={class:"w-160px"},w=m("li",{class:"text-error"},"Reminder: This feature is exclusive to the pro edition",-1),M=m("li",null,"Requires an XFS filesystem and includes the [prjquota] parameter to use",-1),S={key:0},O=m("li",null,'Quota: To cancel quota, set to "0"',-1),J=p({__name:"quota-config",props:{data:{}},setup(p,{expose:J}){const P=p,{type:k,info:B,callback:C}=P.data,G=r({used:"0",size:0}),I=n("MB");return(()=>{const a=o(B,"quota.used",0);if(a>0){const e=u(a).split(" ");G.used=e[0],I.value=e[1]}G.size=o(B,"quota.size",0)})(),J({onConfirm:async({hide:a})=>{var e;"site"!==k&&"ftp"!==k||await(e={size:G.size,quota_type:k,path:o(B,"path","")},t.post("/project/quota/modify_path_quota",{data:JSON.stringify({path:e.path,quota_type:e.quota_type,quota_push:{module:"",status:!1,size:0,push_count:0},quota_storage:{size:e.size}})},{requestOptions:{loading:"Processing, please wait...",successMessage:!0,errorMessage:{close:!0}}})),"database"===k&&await(a=>t.post("/project/quota/modify_database_quota",{data:JSON.stringify({db_name:a.db_name,quota_push:{module:"",status:!1,size:0,push_count:0},quota_storage:{size:a.size}})},{requestOptions:{loading:"Processing, please wait...",successMessage:!0,errorMessage:{close:!0}}}))({size:G.size,db_name:o(B,"name","")}),null==C||C(),a()}}),(t,o)=>{const u=i,p=z,r=b,n=e,J=l,P=s,B=a;return d(),c("div",g,[_(P,{"label-width":"180"},{default:f((()=>[_(n,{label:"Quota already set"},{default:f((()=>[m("div",y,[_(r,null,{default:f((()=>[_(u,{value:q(G).used,"onUpdate:value":o[0]||(o[0]=a=>q(G).used=a),disabled:!0},null,8,["value"]),_(p,{class:"w-44px text-center"},{default:f((()=>[x(v(q(I)),1)])),_:1})])),_:1})])])),_:1}),_(n,{label:"Set new quota"},{default:f((()=>[m("div",j,[_(r,null,{default:f((()=>[_(J,{value:q(G).size,"onUpdate:value":o[1]||(o[1]=a=>q(G).size=a),min:0,"show-button":!1},null,8,["value"]),_(p,{class:"w-44px text-center"},{default:f((()=>[x("MB")])),_:1})])),_:1})])])),_:1})])),_:1}),_(B,{class:"mt-8px"},{default:f((()=>[w,M,"database"!==q(k)?(d(),c("li",S," Example of fstab: /dev/vdc1 /data xfs defaults,prjquota 0 0 ")):h("",!0),O])),_:1})])}}});export{J as default};