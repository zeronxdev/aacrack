import{u as t}from"./index.js?v=1720690738171";function o(o){var e,a;const c=t();let n="--";switch(o.db_type){case 0:n="Localhost";break;case 1:n="Remote database (".concat((null==(e=o.conn_config)?void 0:e.db_host)||"",":").concat((null==(a=o.conn_config)?void 0:a.db_port)||"",")");break;case 2:for(let t=0;t<c.remoteList.length;t++){const e=c.remoteList[t];if(e.id===o.sid){n=""!==e.ps?e.ps:"Remote database (".concat(e.db_host,":").concat(e.db_port,")");break}}}return n}export{o as g};
