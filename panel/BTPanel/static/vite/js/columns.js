import{_ as t}from"./index72.js?v=1720690738171";import{ad as e,P as a}from"./vue.js?v=1720690738171";import{Y as s}from"./index.js?v=1720690738171";function l({width:l,onSelect:u}){const{t:i}=e(),r={key:"status",title:"Status",width:l||"7%",minWidth:70,render:l=>{const r=(t=>{const{t:a}=e();return"running"===t.status?[{key:"stop",label:a("Public.Status.Stop")},{key:"restart",label:a("Public.Status.Restart")},{key:"kill",label:a("Public.Status.Kill")},{key:"pause",label:a("Public.Status.Pause")}]:"exited"===t.status?[{key:"start",label:a("Public.Status.Start")},{key:"restart",label:a("Public.Status.Restart")}]:[{key:"restart",label:a("Public.Status.Restart")},{key:"unpause",label:a("Public.Status.Unpause")},{key:"kill",label:a("Public.Status.Kill")}]})(l);return a(s,{options:r,width:78,onSelect:t=>{u(t,l)}},{default:()=>[a(t,{class:"min-w-68px",value:l.status,"checked-value":"running","unchecked-label":"exited"===l.status?i("Public.Status.Stopped"):i("Public.Status.Paused")},null)]})}};return r}export{l as u};
