import{_ as e}from"./index53.js?v=1720690738171";import{_ as s,a as t}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1720690738171";import{cv as a,k as o,j as r,H as i,n}from"./index.js?v=1720690738171";import{u as l}from"./useLoading.js?v=1720690738171";import{ai as p,b2 as m}from"./site2.js?v=1720690738171";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang12.js?v=1720690738171";import{l as c,f as d,r as v,S as h,Z as f,P as _,V as g,_ as j,W as P}from"./vue.js?v=1720690738171";import{_ as y}from"./Select.js?v=1720690738171";import"./pinia.js?v=1720690738171";import"./Progress.js?v=1720690738171";import"./DataTable.js?v=1720690738171";import"./Checkbox.js?v=1720690738171";import"./Ellipsis.js?v=1720690738171";import"./Empty.js?v=1720690738171";import"./omit.js?v=1720690738171";import"./Tag.js?v=1720690738171";const w={class:"p-20px"},b={class:"w-200px"},x=j("li",null,"Please select the version according to your program requirements.",-1),H=j("li",null," If not necessary, please try not to use PHP 5.2, which will reduce your server security. ",-1),q=j("li",null," PHP 7 does not support mysql extension, mysqli and mysql_pdo will be installed by default. ",-1),E=c({__name:"batch",props:{data:{}},setup(c,{expose:E}){const S=c,{rows:C}=S.data,L=a(),k=d({version:null}),I={version:{trigger:"change",validator:()=>null!==k.version||new Error("Please select the PHP version")}},M=v([]),{loading:O,setLoading:T}=l();(async()=>{try{T(!0);const{message:e}=await p();o(e)&&e.length>0?(M.value=e.map((e=>({label:e.name,value:e.version}))),k.version=e[0].version):(k.version=null,M.value=[])}finally{T(!1)}})();return E({onConfirm:async({hide:e})=>{const{message:s}=await m((()=>{const{version:e}=k;if(null===e)throw n.error("Please select the PHP-CLI version"),new Error("Please select the PHP-CLI version");return{version:e,sites_id:C.map((e=>e.id)).join(",")}})());L.setRefresh(!0),r(s)&&(e=>{const{success:s,error:t}=e,a=[];s.forEach((e=>{const s=C.find((s=>s.name===e));s&&a.push({name:s.name,batchStatus:"success",reqMsg:"Operation succeeded!"})})),Object.entries(t).forEach((([e,s])=>{const t=C.find((s=>s.name===e));t&&a.push({name:t.name,batchStatus:"error",reqMsg:s})})),i({title:"Batch set php version",width:440,footer:!0,component:u,data:{title:"Set php version",data:a,status:"done",columns:[{key:"name",title:"Site name",ellipsis:{tooltip:{width:"trigger"}}}]}})})(s),e()}}),(a,o)=>{const r=y,i=s,n=t,l=e;return h(),f("div",w,[_(n,{model:P(k),rules:I},{default:g((()=>[_(i,{label:"PHP version",path:"version"},{default:g((()=>[j("div",b,[_(r,{value:P(k).version,"onUpdate:value":o[0]||(o[0]=e=>P(k).version=e),loading:P(O),options:P(M)},null,8,["value","loading","options"])])])),_:1})])),_:1},8,["model"]),_(l,{class:"mt-8px"},{default:g((()=>[x,H,q])),_:1})])}}});export{E as default};
