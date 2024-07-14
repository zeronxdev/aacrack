import{g as a,h as e,k as t,n as s,a9 as l,B as i,G as o,q as n}from"./index.js?v=1720690738171";import{_ as r,a as m}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1720690738171";import{ba as d,g as u,bb as p,bc as c}from"./site2.js?v=1720690738171";import{b as f}from"./useTableColumns.js?v=1720690738171";import{u as v}from"./useTableData.js?v=1720690738171";import{l as b,r as g,f as h,S as y,Z as w,P as j,V as _,_ as x,W as k,b as C,q as P,t as D}from"./vue.js?v=1720690738171";import{N as E}from"./DataTable.js?v=1720690738171";import"./pinia.js?v=1720690738171";import"./Progress.js?v=1720690738171";import"./Skeleton.js?v=1720690738171";import"./Checkbox.js?v=1720690738171";import"./Ellipsis.js?v=1720690738171";import"./Select.js?v=1720690738171";import"./Tag.js?v=1720690738171";import"./Empty.js?v=1720690738171";import"./omit.js?v=1720690738171";const T={class:"p-20px"},q={class:"flex-1"},S={class:"mt-12px"},U={class:"px-20px pt-24px pb-8px"},A={class:"w-150px"},N=b({__name:"set",props:{data:{}},setup(b){const N=b,{setOptions:B}=N.data,G=g(""),O=async()=>{const a=G.value.trim();""!==a?(await p({name:a}),G.value="",await I(),null==B||B(F.data)):s.error("Please input category name")},R=a(),V=g(null),W=h({id:-1,name:""}),Z={name:{required:!0,message:"Please input category name",trigger:["blur","change"]}},z=async({hide:a})=>{var e;await(null==(e=V.value)?void 0:e.validate()),await c(D(W)),await I(),null==B||B(F.data),a()},{table:F,columns:H}=v([{key:"name",title:"Name"},f({width:80,options:a=>[{label:"Edit",disabled:0===a.id,onClick:()=>{(a=>{W.id=a.id,W.name=a.name,R.title="Edit category [".concat(a.name,"]"),R.show=!0})(a)}},{label:"Del",disabled:0===a.id,onClick:()=>{e({title:"Delete category [".concat(a.name,"]"),content:"Are you sure to delete category?",onConfirm:async({hide:e})=>{await d({id:a.id}),await I(),null==B||B(F.data,a.id),e()}})}}]})]),I=async()=>{const{message:a}=await u();F.data=t(a)?a:[]};return I(),(a,e)=>{const t=l,s=i,d=o,u=E,p=r,c=m,f=n;return y(),w("div",T,[j(d,null,{default:_((()=>[x("div",q,[j(t,{value:k(G),"onUpdate:value":e[0]||(e[0]=a=>C(G)?G.value=a:null),placeholder:"Please input category name"},null,8,["value"])]),x("div",null,[j(s,{type:"primary",onClick:O},{default:_((()=>[P("Add")])),_:1})])])),_:1}),x("div",S,[j(u,{"max-height":300,data:k(F).data,columns:k(H)},null,8,["data","columns"])]),j(f,{show:k(R).show,"onUpdate:show":e[2]||(e[2]=a=>k(R).show=a),title:k(R).title,width:350,footer:!0,onConfirm:z},{default:_((()=>[x("div",U,[j(c,{ref_key:"formRef",ref:V,model:k(W),rules:Z},{default:_((()=>[j(p,{label:"Category name",path:"name"},{default:_((()=>[x("div",A,[j(t,{value:k(W).name,"onUpdate:value":e[1]||(e[1]=a=>k(W).name=a),placeholder:""},null,8,["value"])])])),_:1})])),_:1},8,["model"])])])),_:1},8,["show","title"])])}}});export{N as default};