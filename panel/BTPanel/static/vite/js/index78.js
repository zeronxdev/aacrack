import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1720690738171";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang10.js?v=1720690738171";import{I as r,e9 as l,a9 as o}from"./index.js?v=1720690738171";import{l as s,ad as p,r as u,f as n,S as _,Z as i,P as m,V as d,_ as c,W as v,q as f,t as x}from"./vue.js?v=1720690738171";import{_ as g}from"./InputGroupLabel.js?v=1720690738171";import{_ as h}from"./InputGroup.js?v=1720690738171";import"./index.vue_vue_type_script_setup_true_lang7.js?v=1720690738171";import"./pinia.js?v=1720690738171";const j={class:"px-20px pt-24px pb-8px"},I={class:"w-240px"},b=s({__name:"index",props:{row:{}},setup(s,{expose:b}){const w=s,{t:k}=p(),L=r(),y=u(null),D=n({path:"",name:""}),$={name:{trigger:["blur","input"],validator:()=>""!==D.name.trim()||new Error(k("Docker.LocalImage.export_4"))}};return b({onConfirm:async()=>{var e;await(null==(e=y.value)?void 0:e.validate()),await l({...x(D),id:w.row.id}),L.setRefresh(!0)}}),(r,l)=>{const s=t,p=e,u=o,n=g,x=h,b=a;return _(),i("div",j,[m(b,{ref_key:"formRef",ref:y,model:v(D),rules:$},{default:d((()=>[m(p,{label:r.$t("Docker.LocalImage.index_22")},{default:d((()=>[c("div",I,[m(s,{value:v(D).path,"onUpdate:value":l[0]||(l[0]=e=>v(D).path=e),placeholder:r.$t("Docker.LocalImage.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"]),m(p,{label:r.$t("Docker.LocalImage.export_3"),path:"name"},{default:d((()=>[m(x,{class:"w-240px"},{default:d((()=>[m(u,{value:v(D).name,"onUpdate:value":l[1]||(l[1]=e=>v(D).name=e),placeholder:r.$t("Docker.LocalImage.export_4")},null,8,["value","placeholder"]),m(n,null,{default:d((()=>[f(".tar")])),_:1})])),_:1})])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{b as default};
