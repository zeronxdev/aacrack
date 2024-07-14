import{ar as s}from"./index.js?v=1720690738171";const e=e=>s.post("/site?action=AddSite",{...e,webname:JSON.stringify(e.webname)},{requestOptions:{loading:"Creating website, please wait..."}}),t=e=>s.post("/site?action=create_website_multiple",{create_type:"txt",websites_content:JSON.stringify(e.websites_content)},{requestOptions:{loading:"Creating website, please wait..."}}),a=e=>s.post("/site?action=AddSite",{...e,webname:JSON.stringify(e.webname)},{requestOptions:{loading:"Creating website, please wait..."}}),i=e=>s.post("/site?action=deploy_wp",e,{requestOptions:{loading:"Deploying wordpress, please wait...",successMessage:!0}}),o=(e,t=!1)=>s.post("/site?action=DeleteSite",e,{requestOptions:{loading:t?"Processing, please wait...":"",successMessage:t}}),c=e=>s.post("/site?action=check_del_data",{ids:JSON.stringify(e.ids)}),n=e=>s.post("/data?action=getData",e),p=()=>s.post("/site?action=get_site_types"),r=e=>s.post("/site?action=add_site_type",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),g=e=>s.post("/site?action=modify_site_type_name",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),l=e=>s.post("/site?action=remove_site_type",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),d=e=>s.post("/site?action=set_site_type",{...e,site_ids:JSON.stringify(e.site_ids)},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),u=()=>s.post("/site?action=GetDefaultSite"),_=e=>s.post("/site?action=SetDefaultSite",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),m=()=>s.post("/config?action=get_cli_php_version"),w=()=>s.post("/site?action=GetPHPVersion"),O=()=>s.post("/site?action=get_language"),q=e=>s.post("/config?action=set_cli_php_version",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),M=e=>s.post("/site?action=set_site_php_version_multiple",e,{requestOptions:{loading:"Processing, please wait..."}}),P=(e,t,a=!0)=>s.post("/site?action=".concat(e?"SiteStart":"SiteStop"),t,{requestOptions:{loading:a?"Processing, please wait...":"",successMessage:a}}),y=(e,t=!0)=>s.post("/site?action=ToBackup",e,{requestOptions:{loading:t?"Backing up, please wait...":"",successMessage:t}}),x=e=>s.post("/data?action=getData",{...e,table:"backup",type:"0"}),b=e=>s.post("/files?action=restore_website",e,{requestOptions:{successMessage:!0}}),f=()=>s.post("/files?action=get_progress"),S=(e,t=!0)=>s.post("/site?action=DelBackup",e,{requestOptions:{loading:t?"Processing, please wait...":"",successMessage:t}}),h=(e,t=!0)=>s.post("/site?action=SetEdate",e,{requestOptions:{loading:t?"Saving, please wait...":"",successMessage:t}}),D=e=>s.post("/data?action=setPs",{...e,table:"sites"},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),G=e=>s.post("/data?action=getData",{table:"domain",list:"True",search:e.id}),R=e=>s.post("/site?action=AddDomain",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),N=(e,t=!0)=>s.post("/site?action=DelDomain",e,{requestOptions:{loading:t?"Processing, please wait...":"",successMessage:t,errorMessage:t}}),v=e=>s.post("/site?action=GetDirBinding",e),J=e=>s.post("/site?action=AddDirBinding",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),k=e=>s.post("/site?action=GetDirRewrite",e,{requestOptions:{loading:"Processing, please wait...",errorMessage:!1}}),C=e=>s.post("/site?action=GetDirRewrite",{...e,add:1},{requestOptions:{loading:"Processing, please wait..."}}),L=(e,t=!0)=>s.post("/site?action=DelDirBinding",e,{requestOptions:{loading:t?"Processing, please wait...":"",successMessage:t}}),j=e=>s.post("/data?action=getKey",{...e,key:"path",table:"sites"}),B=e=>s.post("/site?action=GetDirUserINI",e),F=e=>s.post("/site?action=SetPath",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),I=e=>s.post("/site?action=SetSiteRunPath",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),H=e=>s.post("/site?action=SetDirUserINI",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),T=e=>s.post("/site?action=logsOpen",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),A=e=>s.post("/site?action=CloseHasPwd",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),U=e=>s.post("/site?action=SetHasPwd",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),V=e=>s.post("/site?action=get_dir_auth",e),z=e=>s.post("/site?action=set_dir_auth",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),E=e=>s.post("/site?action=modify_dir_auth_pass",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),K=(e,t=!0)=>s.post("/site?action=delete_dir_auth",e,{requestOptions:{loading:t?"Processing, please wait...":"",successMessage:t}}),W=e=>s.post("/config?action=get_file_deny",e),Q=e=>s.post("/config?action=set_file_deny",{...e,act:"add"},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),X=e=>s.post("/config?action=set_file_deny",{...e,act:"edit"},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Y=(e,t=!0)=>s.post("/config?action=del_file_deny",e,{requestOptions:{loading:t?"Processing, please wait...":"",successMessage:t}}),Z=e=>s.post("/site?action=GetLimitNet",e),$=e=>s.post("/site?action=SetLimitNet",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),ss=e=>s.post("/site?action=CloseLimitNet",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),es=e=>s.post("/site?action=GetIndex",e),ts=e=>s.post("/site?action=GetRewriteList",e),as=e=>s.post("/site?action=SetRewriteTel",e,{requestOptions:{loading:"Saving, please wait...",successMessage:!0}}),is=e=>s.post("/site?action=SetIndex",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),os=e=>s.post("/site?action=GetSitePHPVersion",e),cs=e=>s.post("/site?action=SetPHPVersion",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),ns=e=>s.post("/config?action=get_php_session_path",e),ps=e=>s.post("/config?action=set_php_session_path",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),rs=e=>s.post("/site?action=is_update",e),gs=e=>s.post("/site?action=get_wp_username",e),ls=e=>s.post("/site?action=update_wp",e,{requestOptions:{loading:"Updating Wordpress version, please wait...",successMessage:!0}}),ds=e=>s.post("/site?action=set_fastcgi_cache",{...e,act:e.act?"enable":"disable"},{requestOptions:{loading:"".concat(e.act?"Turning on":"Turining off"," cache, please wait..."),successMessage:!0}}),us=e=>s.post("/site?action=purge_all_cache",e,{requestOptions:{loading:"Clearing all caches, please wait...",successMessage:!0}}),_s=e=>s.post("/site?action=reset_wp_password",e,{requestOptions:{loading:"Resetting password, please wait...",successMessage:!0}}),ms=e=>s.post("/files?action=get_composer_version",e),ws=e=>s.post("/files?action=update_composer",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Os=e=>s.post("/files?action=DeleteFile",{path:"".concat(e.path,"/composer.lock")},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),qs=e=>s.post("/files?action=exec_composer",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Ms=e=>s.post("/site?action=GetRedirectList",e),Ps=e=>s.post("/site?action=CreateRedirect",{...e,redirectdomain:JSON.stringify(e.redirectdomain)},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),ys=e=>s.post("/site?action=ModifyRedirect",{...e,redirectdomain:JSON.stringify(e.redirectdomain)},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),xs=e=>s.post("/site?action=ModifyRedirect",{...e,redirectdomain:JSON.stringify(e.redirectdomain)},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),bs=(e,t=!0)=>s.post("/site?action=DeleteRedirect",e,{requestOptions:{loading:t?"Processing, please wait...":"",successMessage:t}}),fs=e=>s.post("/site?action=GetRedirectFile",e),Ss=e=>s.post("/site?action=SaveRedirectFile",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),hs=e=>s.post("/site?action=GetProxyList",e),Ds=e=>s.post("/site?action=CreateProxy",{...e,subfilter:JSON.stringify(e.subfilter)},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Gs=e=>s.post("/site?action=ModifyProxy",{...e,subfilter:JSON.stringify(e.subfilter)},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Rs=(e,t=!0)=>s.post("/site?action=RemoveProxy",e,{requestOptions:{loading:t?"Processing, please wait...":"",successMessage:t}}),Ns=e=>s.post("/site?action=GetProxyFile",e),vs=e=>s.post("/site?action=SaveProxyFile",e,{requestOptions:{loading:"Submitting, please wait...",successMessage:!0}}),Js=(e,t=!0)=>s.post("/site?action=GetSecurity",e,{requestOptions:{loading:t?"Getting, please wait...":""}}),ks=(e,t=!0)=>s.post("/site?action=SetSecurity",e,{requestOptions:{loading:t?"Submitting, please wait...":"",successMessage:!0}}),Cs=e=>s.post("/site?action=GetSiteLogs",e),Ls=e=>s.post("/site?action=get_site_err_log",e),js=e=>s.post("/ajax?action=get_result&path=".concat(e.path)),Bs=e=>s.post("/ajax?action=log_analysis&path=".concat(e.path)),Fs=e=>s.post("/ajax?action=speed_log&path=".concat(e.path)),Is=e=>s.post("/ajax?action=get_detailed&path=".concat(e.path,"&type=").concat(e.type)),Hs=e=>s.post("/mod/proxy/com/create",e,{requestOptions:{loading:"Submitting, please wait...",successMessage:!0}}),Ts=e=>s.post("/mod/proxy/com/get_list",e),As=(e,t=!1)=>s.post("/mod/proxy/com/delete",e,{requestOptions:{loading:t?"Processing, please wait...":"",successMessage:t}}),Us=e=>s.post("/data?action=setPs",{...e,table:"sites"},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Vs=e=>s.post("/mod/proxy/com/get_global_conf",e),zs=e=>s.post("/mod/proxy/com/get_domain_list",e),Es=e=>s.post("/mod/proxy/com/add_domain",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Ks=(e,t=!0)=>s.post("/mod/proxy/com/del_domain",e,{requestOptions:{loading:t?"Processing, please wait...":"",successMessage:t,errorMessage:t}}),Ws=e=>s.post("/mod/proxy/com/get_proxy_list",e),Qs=e=>s.post("/mod/proxy/com/set_url_remark",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Xs=e=>s.post("/mod/proxy/com/add_proxy",e,{requestOptions:{loading:"Submitting, please wait...",successMessage:!0}}),Ys=e=>s.post("/mod/proxy/com/del_url_proxy",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Zs=e=>s.post("/mod/proxy/com/set_url_proxy",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),$s=e=>s.post("/mod/proxy/com/set_url_custom_conf",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),se=e=>s.post("/mod/proxy/com/add_sub_filter",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),ee=e=>s.post("/mod/proxy/com/del_sub_filter",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),te=e=>s.post("/mod/proxy/com/set_url_cache",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),ae=e=>s.post("/mod/proxy/com/add_url_ip_limit",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),ie=e=>s.post("/mod/proxy/com/del_url_ip_limit",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),oe=e=>s.post("/mod/proxy/com/del_url_ip_limit",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),ce=e=>s.post("/mod/proxy/com/set_url_gzip",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),ne=e=>s.post("/mod/proxy/com/set_global_cache",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),pe=e=>s.post("/mod/proxy/com/clear_cache",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),re=e=>s.post("/mod/proxy/com/set_global_gzip",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),ge=e=>s.post("/mod/proxy/com/add_ip_limit",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),le=e=>s.post("/mod/proxy/com/del_ip_limit",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),de=e=>s.post("/mod/proxy/com/batch_del_ip_limit",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),ue=e=>s.post("/mod/proxy/com/add_dir_auth",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),_e=e=>s.post("/mod/proxy/com/set_dir_auth",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),me=e=>s.post("/mod/proxy/com/del_dir_auth",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),we=e=>s.post("/mod/proxy/com/set_global_log",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Oe=e=>s.post("/mod/proxy/com/set_global_websocket",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),qe=e=>s.post("/mod/proxy/com/get_config",e),Me=e=>s.post("/mod/proxy/com/save_config",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),Pe=e=>s.post("/project/proxy/get_project_redirect_list",e),ye=e=>s.post("/mod/proxy/com/DeleteRedirect",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),xe=e=>s.post("/mod/proxy/com/CreateRedirect",{...e,redirectdomain:JSON.stringify(e.redirectdomain)},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),be=e=>s.post("/mod/proxy/com/ModifyRedirect",{...e,redirectdomain:JSON.stringify(e.redirectdomain)},{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),fe=e=>s.post("/mod/proxy/com/GetRedirectFile",e),Se=e=>s.post("/files?action=SaveFileBody",e,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),he=e=>s.post("/mod/proxy/com/GetSiteLogs",e),De=e=>s.post("/site?action=SetSecurity",e,{requestOptions:{loading:"Submitting, please wait...",successMessage:!0}});export{T as $,fe as A,Se as B,ye as C,Pe as D,Xs as E,ae as F,ie as G,oe as H,te as I,ce as J,Zs as K,$s as L,se as M,ee as N,Qs as O,Ys as P,De as Q,Js as R,he as S,Us as T,Ts as U,N as V,G as W,R as X,F as Y,I as Z,H as _,P as a,Os as a$,A as a0,U as a1,j as a2,B as a3,E as a4,z as a5,K as a6,V as a7,X as a8,Q as a9,hs as aA,Cs as aB,Ls as aC,Is as aD,Bs as aE,Fs as aF,js as aG,ks as aH,e as aI,t as aJ,a as aK,i as aL,u as aM,_ as aN,m as aO,q as aP,L as aQ,J as aR,k as aS,C as aT,v as aU,es as aV,is as aW,_s as aX,rs as aY,gs as aZ,ws as a_,Y as aa,W as ab,ss as ac,$ as ad,Z as ae,cs as af,ps as ag,os as ah,w as ai,ns as aj,O as ak,ls as al,ds as am,us as an,Ps as ao,ys as ap,fs as aq,Ss as ar,xs as as,bs as at,Ms as au,Ds as av,Gs as aw,Ns as ax,vs as ay,Rs as az,y as b,qs as b0,ms as b1,M as b2,d as b3,c as b4,o as b5,S as b6,x as b7,b as b8,f as b9,l as ba,r as bb,g as bc,Hs as bd,As as be,as as bf,ts as bg,n as c,D as d,Vs as e,Ws as f,p as g,Es as h,Ks as i,zs as j,ge as k,le as l,de as m,_e as n,ue as o,me as p,ne as q,pe as r,h as s,re as t,we as u,Oe as v,qe as w,Me as x,xe as y,be as z};
