import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1720690738171";import{I as r,dK as n,a9 as s}from"./index.js?v=1720690738171";import{l,ad as t,d as o,r as i,f as d,S as m,Z as u,P as p,V as _,_ as v,W as f}from"./vue.js?v=1720690738171";import"./pinia.js?v=1720690738171";const c={class:"p-20px"},x={class:"w-200px"},w=l({__name:"index",props:{row:{}},setup(l,{expose:w}){const b=l,{t:h}=t(),k=o(b,"row"),j=r(),C=i(null),g=d({name:k.value.name}),y={name:{trigger:["blur","input"],validator:()=>""!==g.name.trim()||new Error(h("Docker.Container.rename.index_3"))}};return w({onConfirm:async()=>{var e;await(null==(e=C.value)?void 0:e.validate()),await n({id:k.value.id,name:g.name}),j.setRefresh(!0)}}),(r,n)=>{const l=s,t=e,o=a;return m(),u("div",c,[p(o,{ref_key:"formRef",ref:C,model:f(g),rules:y,"label-width":"150"},{default:_((()=>[p(t,{label:r.$t("Docker.Container.rename.index_1"),"show-feedback":!1},{default:_((()=>[v("div",x,[p(l,{value:f(g).name,"onUpdate:value":n[0]||(n[0]=e=>f(g).name=e),placeholder:r.$t("Docker.Container.rename.index_2")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{w as default};
