System.register(["./index-legacy.js?v=1720690738171","./vue-legacy.js?v=1720690738171","./pinia-legacy.js?v=1720690738171"],(function(t,n){"use strict";var i,s,l,a,e,o,d,c;return{setters:[t=>{i=t.d,s=t.b,l=t.l,a=t.c},t=>{e=t.l,o=t.x,d=t.S,c=t.Z},null],execute:function(){async function n(){await async function(){await l(),await a(),await i("/static/vite/oldjs/soft.js?v=1720690738171")}(),$("#security-main").append("\n\t\t<style type=\"text/css\">\n\t\t\t.ml30 {\n\t\t\t\tmargin-left: 30px;\n\t\t\t}\n\t\t\t.no-show {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.tab-con .tab-block {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t\t.divtable .btswitch + .btswitch-btn {\n\t\t\t\twidth: 2.8rem;\n\t\t\t\theight: 1.75rem;\n\t\t\t}\n\n\t\t\t/* 安全页面头部 */\n\t\t\t.state-content .bt-form-new {\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.state-content .bt-form-new .form-label {\n\t\t\t\tpadding-right: 15px;\n\t\t\t}\n\t\t\t.state-content .form-inline-line {\n\t\t\t\twidth: 1px;\n\t\t\t\theight: 20px;\n\t\t\t\tmargin: 0 18px;\n\t\t\t\tbackground-color: #ccc;\n\t\t\t}\n\t\t\t/* end */\n\n\t\t\t/* 安全页面内容 */\n\t\t\t.firewall-tab-view .tab-con {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t.firewall-tab-view .tab-nav-con {\n\t\t\t\tpadding-top: 15px;\n\t\t\t}\n\t\t\t.firewall-tab-view .tab-nav-border span i {\n\t\t\t\tfont-style: initial;\n\t\t\t}\n\t\t\t/* end */\n\t\t\t/* 系统防火墙 */\n\t\t\t.safety-header .ping-item {\n\t\t\t\tmargin-right: 15px;\n\t\t\t}\n\t\t\t.safety-header-info {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.port-import-form {\n\t\t\t\tpadding: 20px;\n\t\t\t}\n\t\t\t.detect_input {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\t\t\t.detect_input .input_file {\n\t\t\t\twidth: 170px;\n\t\t\t\theight: 35px;\n\t\t\t\tborder: 0.1px dashed #D0D0D0;\n\t\t\t\tpadding: 0 0 0 10px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t\t.detect_input .select_file {\n\t\t\t\theight: 35px;\n\t\t\t\tpadding: 0 14px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tcolor: #fff;\n\t\t\t\tbackground: #10952a;\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t\t/* end */\n\t\t\t/* SSH管理 */\n\t\t\t.ssh-login-info .sep {\n\t\t\t\tmargin: 0 4px;\n\t\t\t}\n\t\t\t.ssh-config {\n\t\t\t\tpadding: 6px 0;\n\t\t\t}\n\t\t\t.ssh-config-title {\n\t\t\t\tline-height: 30px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tborder-bottom: 1px solid #e7e7e7;\n\t\t\t\tpadding: 5px 5px 8px 10px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tcolor: #666;\n\t\t\t\tmargin-bottom: 10px;\n\t\t\t}\n\t\t\t.ssh-config .line .line-input {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t.ssh-config .line:hover {\n\t\t\t\tbackground: #a5a5a514;\n\t\t\t\ttransition: background 0.2s;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.ssh-config .line-title {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tcolor: #333;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 150px;\n\t\t\t\ttext-align: right;\n\t\t\t\tpadding-right: 15px;\n\t\t\t\theight: 30px;\n\t\t\t\tline-height: 30px;\n\t\t\t\tvertical-align: top;\n\t\t\t}\n\t\t\t.ssh-config .line-item {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tvertical-align: top;\n\t\t\t\theight: 30px;\n\t\t\t\tline-height: 30px;\n\t\t\t}\n\t\t\t.ssh-config .line-row {\n\t\t\t\tvertical-align: top;\n\t\t\t}\n\t\t\t.line-row,\n\t\t\t.line-row-tips {\n\t\t\t\theight: 30px;\n\t\t\t\tline-height: 30px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\t\t\t.line-input input {\n\t\t\t\theight: 30px;\n\t\t\t\tline-height: 30px;\n\t\t\t}\n\t\t\t.line-row-tips {\n\t\t\t\tmargin-left: 10px !important;\n\t\t\t\tcolor: #999;\n\t\t\t\tvertical-align: top;\n\t\t\t}\n\t\t\t#sshView .tab-nav-con {\n\t\t\t\tpadding-top: 10px;\n\t\t\t}\n\t\t\t.cutLoginLogsType {\n\t\t\t\tmargin-top: -4px;\n\t\t\t}\n\t\t\t.btn-sshkey-group {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.news-channel .bt-form-new .form-label {\n\t\t\t\tpadding-right: 10px;\n\t\t\t}\n\t\t\t/* end */\n\t\t\t/* 入侵防御 */\n\t\t\t#intrusion .divtable {\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\t\t\t#antiProcessWhiteList .divtable {\n\t\t\t\tmargin-top: 10px;\n\t\t\t}\n\t\t\t.logs-data-select {\n\t\t\t\tmargin-bottom: 15px;\n\t\t\t}\n\t\t\t.logs-title {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: auto;\n\t\t\t\theight: 35px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 35px;\n\t\t\t\tmargin-right: 5px;\n\t\t\t}\n\t\t\t.logs-unselect {\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\theight: 30px;\n\t\t\t\tborder: 1px solid #e6e6e6;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tline-height: 28px;\n\t\t\t}\n\t\t\t.logs-unselect.active .logs-input-list {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.logs-unselect.active .logs-input-list {\n\t\t\t\tanimation-name: layui-upbit;\n\t\t\t\tanimation-duration: .3s;\n\t\t\t\tanimation-fill-mode: both;\n\t\t\t}\n\t\t\t.logs-inputs {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tpadding: 0 30px 0 10px;\n\t\t\t\theight: 30px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.logs-unselect .logs-inputs:after {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0.8pc;\n\t\t\t\tright: 6pt;\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 0;\n\t\t\t\theight: 0;\n\t\t\t\tborder-color: #c2c2c2 transparent transparent;\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-width: 6px 6px 0;\n\t\t\t\tcontent: '';\n\t\t\t\ttransition: transform .5s;\n\t\t\t}\n\t\t\t.logs-input-list {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 30px;\n\t\t\t\tright: -1px;\n\t\t\t\tleft: -1px;\n\t\t\t\tz-index: 899;\n\t\t\t\tdisplay: none;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tpadding: 5px 0;\n\t\t\t\theight: auto;\n\t\t\t\tmin-width: 100%;\n\t\t\t\tborder: 1px solid #d2d2d2;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tbox-shadow: 0 2px 4px rgba(0,0,0,.12);\n\t\t\t}\n\t\t\t.logs-input-list dd {\n\t\t\t\tpadding: 5px 15px;\n\t\t\t\theight: 30x;\n\t\t\t}\n\n\t\t\t.logs-input-list dd:hover {\n\t\t\t\tbackground-color: #f2f2f2;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.logs-input-list dd.logs_checked {\n\t\t\t\tbackground: #20a532!important;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\t\t\t.logs-page.page-style {\n\t\t\t\tpadding: 0 5px;\n\t\t\t\theight: 30px;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tmargin-top: 5px;\n\t\t\t}\n\t\t\t.page-style .nextPage{\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin: 0 3px;\n\t\t\t\tpadding: 0 10px;\n\t\t\t\theight: 30px;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tbackground-color: #f5f5f5;\n\t\t\t\tcolor: #666;\n\t\t\t\ttext-align: center;\n\t\t\t\tline-height: 30px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.page-style .Pcount {\n\t\t\t\tmargin-right: 0;\n\t\t\t\tmargin-left: 5px;\n\t\t\t}\n\t\t\t.page a:last-of-type {\n\t\t\t\tborder-right: 1px solid #ececec;\n\t\t\t}\n\t\t\t/* end */\n\t\t\t/* 系统加固 */\n\t\t\t#system .divtable {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\t#reinforceBlockIp .divtable {\n\t\t\t\tmargin-top: 10px;\n\t\t\t}\n\t\t\t#reinforceLog .divtable {\n\t\t\t\tmargin-bottom: 10px;\n\t\t\t}\n\t\t\t/* end */\n\t\t\t/* 日志审计 */\n\t\t\t.logAuditContent {\n\t\t\t\tpadding: 0 0 0 15px;\n\t\t\t\tmargin-left: 15px;\n\t\t\t\twidth: 100%;\n\t\t\t\tflex: 1;\n\t\t\t\tborder-left: 1px solid #ececec;\n\t\t\t}\n\n\t\t\t.logAuditTabContent {\n\t\t\t\tdisplay: flex;\n\t\t\t\theight: 100%;\n\t\t\t}\n\n\t\t\t.logAuditTabContent .logAuditTab .logAuditItem {\n\t\t\t\theight: 35px;\n\t\t\t\tline-height: 35px;\n\t\t\t\tpadding: 0 10px;\n\t\t\t\tborder-bottom: 1px solid #ececec;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\n\t\t\t.logAuditTabContent .logAuditTab .logAuditItem:hover,\n\t\t\t.logAuditTabContent .logAuditTab .logAuditItem.active {\n\t\t\t\tbackground-color: #f2f2f2;\n\t\t\t}\n\n\t\t\t.logAuditTabContent .logAuditTab {\n\t\t\t\tborder: 1px solid #ececec;\n\t\t\t\toverflow: auto;\n\t\t\t}\n\t\t\t/* end */\n\t\t\t/* 面板日志 */\n\t\t\t.crontab-log {\n\t\t\t\tmin-height: 250px;\n\t\t\t\tmargin-top: 10px;\n\t\t\t\tmargin-bottom: 0;\n\t\t\t\tpadding: 15px;\n\t\t\t\tline-height: 16px;\n\t\t\t\tbackground-color: rgb(51, 51, 51);\n\t\t\t\twhite-space: pre-wrap;\n\t\t\t\toverflow: auto;\n\t\t\t\tborder: none;\n\t\t\t\tcolor: #f1f1f1;\n\t\t\t}\n\t\t\t/* end */\n\t\t\t/* 功能介绍 */\n\t\t\t.daily-thumbnail {\n\t\t\t\twidth: 1200px;\n\t\t\t\tmargin: 80px auto;\n\t\t\t}\n\t\t\t.thumbnail-box {\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\n\t\t\t.thumbnail-introduce {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-bottom: 40px;\n\t\t\t}\n\t\t\t.thumbnail-introduce span {\n\t\t\t\tfont-size: 24px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.thumbnail-introduce ul {\n\t\t\t\tdisplay: flex;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tline-height: 30px;\n\t\t\t\tmargin: 20px 0;\n\t\t\t\tlist-style-type: square;\n\t\t\t}\n\t\t\t.thumbnail-introduce ul li + li {\n\t\t\t\tmargin-left: 40px;\n\t\t\t}\n\t\t\t.pluginTipsGg {\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 950px;\n\t\t\t\theight: 720px;\n\t\t\t\tbackground-color: #f1f1f1;\n\t\t\t\tbackground-size: 100%;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-position: top;\n\t\t\t\tborder-radius: 4px;\n\t\t\t}\n\t\t\t/*.pluginTipsGg:hover::before{*/\n\t\t\t/*  display: inline-block;*/\n\t\t\t/*}*/\n\t\t\t.pluginTipsGg::before {\n\t\t\t\tcontent: '点击预览';\n\t\t\t\tdisplay: none;\n\t\t\t\tbackground: #000;\n\t\t\t\topacity: 0.2;\n\t\t\t\tcolor: #fff;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\ttop: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tline-height: 621px;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tvertical-align: bottom;\n\t\t\t\ttext-align: center;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\ttransition: all 1s;\n\t\t\t}\n\t\t\t.tab-list .tabs-item.active:after {\n\t\t\t\tcontent: '';\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 2px;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 50%;\n\t\t\t\tbottom: 0px;\n\t\t\t\tbackground: red;\n\t\t\t\tmargin-left: -10px;\n\t\t\t\tbackground: #20a53a;\n\t\t\t}\n\t\t\t.thumbnail-box .thumbnail-tab {\n\t\t\t\tmargin-right: 20px;\n\t\t\t\twidth: 180px;\n\t\t\t\tborder-left: 1px solid #def2e2;\n\t\t\t}\n\t\t\t.thumbnail-tab li {\n\t\t\t\tpadding: 0 20px;\n\t\t\t\tline-height: 36px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\t\t\t.thumbnail-tab li.on {\n\t\t\t\tborder-left: 2px solid #20a53a;\n\t\t\t\tcolor: #20a53a;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.thumbnail-item {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.thumbnail-item.show {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.bt_warning {\n\t\t\t\tcolor: #fc6d26;\n\t\t\t}\n\t\t\t/* end */\n\t\t\t</style>\n\t"),$("#security-main").append('\n\t\t<div class="main-content">\n\t\t\t<div class="container-fluid" style="padding-bottom: 50px;">\n\t\t\t\t<div id="cutTab" class="pos-box bgw mtb15">\n\t\t\t\t\t<div class="tab-list">\n\t\t\t\t\t\t<div class="tabs-item active" data-name="safety">Firewall</div>\n\t\t\t\t\t\t<div class="tabs-item" data-name="ssh">SSH</div>\n\t\t\t\t\t\t<div class="tabs-item" data-name="intrusion">Anti Intrusion</div>\n\t\t\t\t\t\t<div class="tabs-item" data-name="system">System Hardening</div>\n\t\t\x3c!--\t\t\t\t<div class="tabs-item" data-name="logAudit">Logs Audit</div>--\x3e\n\t\t\x3c!--\t\t\t\t<div class="tabs-item" data-name="logs">Panel Logs</div>--\x3e\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="container-fluid bgw mtb15 pd15 radius4 safe state-content">\n\t\t\t\t\t<div class="safety-header">\n\t\t\t\t\t\t<div class="bt-form-new inline">\n\t\t\t\t\t\t\t<div class="form-item">\n\t\t\t\t\t\t\t\t<div class="form-label">Turn on to Firewall</div>\n\t\t\t\t\t\t\t\t<div class="form-value">\n\t\t\t\t\t\t\t\t\t<div class="bt-form-switch">\n\t\t\t\t\t\t\t\t\t\t<input class="btswitch btswitch-ios" id="isFirewall" type="checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label class="btswitch-btn isFirewall" for="isFirewall"></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-inline-line"></div>\n\t\t\t\t\t\t\t<div class="form-item ping-item">\n\t\t\t\t\t\t\t\t<div class="form-label">Turn on to Block ICMP</div>\n\t\t\t\t\t\t\t\t<div class="form-value">\n\t\t\t\t\t\t\t\t\t<div class="bt-form-switch">\n\t\t\t\t\t\t\t\t\t\t<input class="btswitch btswitch-ios" id="ssh_ping" type="checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label class="btswitch-btn" for="ssh_ping"></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-inline-line"></div>\n\t\t\t\t\t\t\t<div class="safety-header-info">\n\t\t\t\t\t\t\t\t<span class="mr5">Site Logs: </span>\n\t\t\t\t\t\t\t\t<a class="btlink" href="javascript:openPath(\'/www/wwwlogs\');">/www/wwwlogs</a>\n\t\t\t\t\t\t\t\t<span class="mlr15" id="logSize">0 B</span>\n\t\t\t\t\t\t\t\t<button class="btn btn-default btn-sm" id="clearWebLogs">Clean</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="ssh-header no-show">\n\t\t\t\t\t\t<div class="bt-form-new inline">\n\t\t\t\t\t\t\t<div class="form-item">\n\t\t\t\t\t\t\t\t<div class="form-label">Turn on SSH</div>\n\t\t\t\t\t\t\t\t<div class="form-value">\n\t\t\t\t\t\t\t\t\t<div class="bt-form-switch">\n\t\t\t\t\t\t\t\t\t\t<input class="btswitch btswitch-ios" id="isSsh" type="checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label class="btswitch-btn isSsh" for="isSsh"></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-inline-line"></div>\n\t\t\t\t\t\t\t<div class="ssh-login-info" id="sshDetailed">\n\t\t\t\t\t\t\t\t<span>SSH Login Details：</span>\n\t\t\t\t\t\t\t\t<a class="btlink" data-index="1" href="javascript:;">Success: 0</a>\n\t\t\t\t\t\t\t\t<span class="sep">/</span>\n\t\t\t\t\t\t\t\t<a class="bterror" data-index="2" href="javascript:;">Failure: 0</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="intrusion-header no-show">\n\t\t\t\t\t\t<div class="bt-form-new inline">\n\t\t\t\t\t\t\t<div class="form-item">\n\t\t\t\t\t\t\t\t<div class="form-label">Master switch</div>\n\t\t\t\t\t\t\t\t<div class="form-value">\n\t\t\t\t\t\t\t\t\t<div class="bt-form-switch">\n\t\t\t\t\t\t\t\t\t\t<input class="btswitch btswitch-ios" id="isIntrusion" type="checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label class="btswitch-btn isIntrusion" for="isIntrusion"></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-inline-line"></div>\n\t\t\t\t\t\t\t<div class="form-item">\n\t\t\t\t\t\t\t\t<span class="mr5">Intrusion interception times: </span>\n\t\t\t\t\t\t\t\t<span class="totlaDays">0</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-inline-line"></div>\n\t\t\t\t\t\t\t<div class="form-item">\n\t\t\t\t\t\t\t\t<span class="mr5">Protection days: </span>\n\t\t\t\t\t\t\t\t<span class="totlaTimes">0</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="system-header no-show">\n\t\t\t\t\t\t<div class="bt-form-new inline">\n\t\t\t\t\t\t\t<div class="form-item">\n\t\t\t\t\t\t\t\t<div class="form-label">System hardening</div>\n\t\t\t\t\t\t\t\t<div class="form-value">\n\t\t\t\t\t\t\t\t\t<div class="bt-form-switch">\n\t\t\t\t\t\t\t\t\t\t<input class="btswitch btswitch-ios" id="isReinforcement" type="checkbox" />\n\t\t\t\t\t\t\t\t\t\t<label class="btswitch-btn isReinforcement" for="isReinforcement"></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="mtb15 pd15 bgw tab-view-box firewall-tab-view">\n\t\t\t\t\t<div class="tab-con show w-full" id="safety">\n\t\t\t\t\t\t<div class="tab-nav-border">\n\t\t\t\t\t\t\t<span class="on">Port rule: <i>0</i></span>\n\t\t\t\t\t\t\t<span>IP rules: <i>0</i></span>\n\t\t\t\t\t\t\t<span>Port forward: <i>0</i></span>\n\t\t\t\t\t\t\t<span>Area rules: <i>0</i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tab-nav-con">\n\t\t\t\t\t\t\t<div class="tab-block on" id="portRules"></div>\n\t\t\t\t\t\t\t<div class="tab-block" id="ipRule"></div>\n\t\t\t\t\t\t\t<div class="tab-block" id="portForward"></div>\n\t\t\t\t\t\t\t<div class="tab-block" id="countryRegion"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tab-con hide" id="sshView">\n\t\t\t\t\t\t<div class="tab-nav-border">\n\t\t\t\t\t\t\t<span class="on">Basic setup</span>\n\t\t\t\t\t\t\t<span>SSH login logs</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tab-nav-con">\n\t\t\t\t\t\t\t<div class="tab-block on">\n\t\t\t\t\t\t\t\t<div class="ssh-config">\n\t\t\t\t\t\t\t\t\t<div class="ptb10">\n\t\t\t\t\t\t\t\t\t\t<div class="line" title="SSH port">\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-title">SSH port</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-input">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="bt-input-text" value="22" name="ssh_port" style="width: 120px" />\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-success btn-sm ml5 save_ssh_port">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-row-tips">Port used by the SSH protocol. The default value is 22</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="line" title="Root login Settings">\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-title">Root login Settings</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-item">\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <div class="line-row">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="ssh-item" style="margin-left: 0; margin-top: 5px;padding: 0;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class="btswitch btswitch-ios" id="root_login" type="checkbox" name="root_login">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="btswitch-btn" for="root_login" style="margin-bottom: 0;"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="line-row-tips">是否允许root登录ssh</div> --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t<select class="bt-input-text" name="root_login">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="yes">Getting</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="line" title="SSH Password login">\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-title">SSH Password login</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-item">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="line-row">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="ssh-item" style="margin-left: 0; margin-top: 5px; padding: 0">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class="btswitch btswitch-ios" id="ssh_paw" type="checkbox" name="ssh_paw" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="btswitch-btn" for="ssh_paw" style="margin-bottom: 0"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="line-row-tips">Default login mode of SSH</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="line" title="SSH key login">\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-title">SSH key login</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-item">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="line-row">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="ssh-item" style="margin-left: 0; margin-top: 5px; padding: 0">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class="btswitch btswitch-ios" id="ssh_pubkey" type="checkbox" name="ssh_pubkey" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="btswitch-btn" for="ssh_pubkey" style="margin-bottom: 0"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-success btn-xs ml5 checkKey" style="vertical-align: initial">Key View</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-default btn-xs ml5 downloadKey" style="vertical-align: initial">Download</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="line-row-tips">You are advised to use a key to log in and disable the password for higher security</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="line" title="SSH login alarm">\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-title">SSH login alarm</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="line-item">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="line-row mr5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="bt_warning setSshLoginAlarm">Not configured</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-success btn-xs ml5 setSshLoginAlarm" style="vertical-align: initial">Set</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="line-row-tips">Set SSH login alarms. When an abnormal login occurs, an alarm message is pushed to an email address in real time</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="tab-block">\n\t\t\t\t\t\t\t\t<div id="loginLogsContent">\n\t\t\t\t\t\t\t\t\t<div class="w-full">\n\t\t\t\t\t\t\t\t\t\t<div id="loginAllLogs"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="w-full no-show">\n\t\t\t\t\t\t\t\t\t\t<div id="loginSuccessLogs"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="w-full no-show">\n\t\t\t\t\t\t\t\t\t\t<div id="loginErrorLogs"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="daily-thumbnail" style="display: none">\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-introduce">\n\t\t\t\t\t\t\t\t\t\t<span>SSH login logs</span>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>Record and view SSH login logs</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<div class="daily-product-buy">\n\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-success va0 mr10 " onclick="product_recommend.pay_product_sign(\'pro\', 100)">Buy Pro</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-box">\n\t\t\t\t\t\t\t\t\t\t<ul class="thumbnail-tab">\n\t\t\t\t\t\t\t\t\t\t\t<li class="on">SSH login logs</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<div class="thumbnail-item show">\n\t\t\t\t\t\t\t\t\t\t\t<div class="pluginTipsGg" style="background-image: url(\'/static/images/firewall/ssh/1.png\');"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tab-con hide" id="intrusion">\n\t\t\t\t\t\t<div class="tab-nav-border">\n\t\t\t\t\t\t\t<span class="on">Overview</span>\n\t\t\t\t\t\t\t<span>Process whitelist</span>\n\t\t\t\t\t\t\t<span>Intercept logs</span>\n\t\t\t\t\t\t\t<span>Operation logs</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tab-nav-con">\n\t\t\t\t\t\t\t<div class="tab-block on">\n\t\t\t\t\t\t\t\t<div id="antiOverviewList"></div>\n\t\t\t\t\t\t\t\t<ul class="help-info-text c7">\n\t\t\t\t\t\t\t\t\t<li>After turn on, the system will restrict user operation commands and record tracking</li>\n\t\t\t\t\t\t\t\t\t<li>When turn off the system, only record and track the commands that the user has operated</li>\n\t\t\t\t\t\t\t\t\t<li>At present, the default is only for intrusion problems caused by user www, redis, mysql operations.</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="tab-block">\n\t\t\t\t\t\t\t\t<div id="antiProcessWhiteList"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="tab-block">\n\t\t\t\t\t\t\t\t<div id="antiInterceptLog"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="tab-block">\n\t\t\t\t\t\t\t\t<div id="antiOperationLog"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="installSoft no-show">\n\t\t\t\t\t\t\t<div class="daily-thumbnail">\n\t\t\t\t\t\t\t\t<div class="thumbnail-introduce">\n\t\t\t\t\t\t\t\t\t<span>Anti Intrusion prevention features</span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Prevents the program from hanging</li>\n\t\t\t\t\t\t\t\t\t\t<li>Stop the mining virus</li>\n\t\t\t\t\t\t\t\t\t\t<li>Webshell rights</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class="daily-product-buy">\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-success va0 mr10 installIntrusion">Install</a>\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-success va0 ml15 buyIntrusion" onclick="product_recommend.pay_product_sign(\'pro\',105)">Buy Pro</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="thumbnail-box">\n\t\t\t\t\t\t\t\t\t<ul class="thumbnail-tab">\n\t\t\t\t\t\t\t\t\t\t<li class="on">Overview</li>\n\t\t\t\t\t\t\t\t\t\t<li>Process whitelist</li>\n\t\t\t\t\t\t\t\t\t\t<li>Intercept logs</li>\n\t\t\t\t\t\t\t\t\t\t<li>Operation logs</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-item show">\n\t\t\t\t\t\t\t\t\t\t<div class="pluginTipsGg" style="background-image: url(/static/images/firewall/intrusion/1.png)"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-item">\n\t\t\t\t\t\t\t\t\t\t<div class="pluginTipsGg" style="background-image: url(/static/images/firewall/intrusion/2.png)"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-item">\n\t\t\t\t\t\t\t\t\t\t<div class="pluginTipsGg" style="background-image: url(/static/images/firewall/intrusion/3.png)"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-item">\n\t\t\t\t\t\t\t\t\t\t<div class="pluginTipsGg" style="background-image: url(/static/images/firewall/intrusion/4.png)"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tab-con hide" id="system">\n\t\t\t\t\t\t<div class="tab-nav-border">\n\t\t\t\t\t\t\t<span class="on">Protection</span>\n\t\t\t\t\t\t\t<span>Block IP</span>\n\t\t\t\t\t\t\t<span>Operation logs</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tab-nav-con">\n\t\t\t\t\t\t\t<div class="tab-block on">\n\t\t\t\t\t\t\t\t<div id="reinforceSystem"></div>\n\t\t\t\t\t\t\t\t<ul class="help-info-text c7">\n\t\t\t\t\t\t\t\t\t<li>[Abnormal process] and [SSH hardening] will take up a certain amount of server overhead</li>\n\t\t\t\t\t\t\t\t\t<li>After enabling the system hardening, some software installation or sensitive operations will be prohibited</li>\n\t\t\t\t\t\t\t\t\t<li>After enabling [SSH hardening], if you log in to SSH for multiple consecutive login failures, the IP will be blocked</li>\n\t\t\t\t\t\t\t\t\t<li style="color: red">[Note] If you need to install software or plug-ins, please turn off the system hardening first!</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="tab-block">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<input class="bt-input-text" name="system_address" type="text" value="" placeholder="IP Address" style="width: 250px; margin-right: 6px" />\n\t\t\t\t\t\t\t\t\t<button class="btn btn-success btn-sm system_add_ip">Add</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id="reinforceBlockIp"></div>\n\t\t\t\t\t\t\t\t<ul class="help-info-text c7">\n\t\t\t\t\t\t\t\t\t<li>[Block IP] The blocked IP here is only for the SSH service, that is, the blocked IP will not be able to connect to SSH</li>\n\t\t\t\t\t\t\t\t\t<li>[Add] IP block added manually can only be unblocked manually!</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="tab-block">\n\t\t\t\t\t\t\t\t<div id="reinforceLog"></div>\n\t\t\t\t\t\t\t\t<div id="reinforceLogPage" class="page"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="installSoft no-show">\n\t\t\t\t\t\t\t<div class="daily-thumbnail">\n\t\t\t\t\t\t\t\t<div class="thumbnail-introduce">\n\t\t\t\t\t\t\t\t\t<span>System Hardening prevention features</span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Prevents the system from being implanted with a Trojan</li>\n\t\t\t\t\t\t\t\t\t\t<li>Harden the system security configuration</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class="daily-product-buy">\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-success va0 mr10 installSystem">Install</a>\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-success va0 ml15 buySystem" onclick="product_recommend.pay_product_sign(\'pro\',102)">Buy Pro</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="thumbnail-box">\n\t\t\t\t\t\t\t\t\t<ul class="thumbnail-tab">\n\t\t\t\t\t\t\t\t\t\t<li class="on">Protection</li>\n\t\t\t\t\t\t\t\t\t\t<li>Block IP</li>\n\t\t\t\t\t\t\t\t\t\t<li>Operation logs</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-item show">\n\t\t\t\t\t\t\t\t\t\t<div class="pluginTipsGg" style="background-image: url(\'/static/images/firewall/system/1.png\')"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-item">\n\t\t\t\t\t\t\t\t\t\t<div class="pluginTipsGg" style="background-image: url(\'/static/images/firewall/system/2.png\')"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-item">\n\t\t\t\t\t\t\t\t\t\t<div class="pluginTipsGg" style="background-image: url(\'/static/images/firewall/system/3.png\')"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tab-con hide" id="logAudit">\n\t\t\t\t\t\t<div class="logAuditTabContent">\n\t\t\t\t\t\t\t<div class="logAuditTab"></div>\n\t\t\t\t\t\t\t<div class="logAuditContent">\n\t\t\t\t\t\t\t\t<div id="logAuditTable"></div>\n\t\t\t\t\t\t\t\t<div id="logAuditPages" class="page" style="display: flex;justify-content: flex-end"></div>\n\t\t\t\t\t\t\t\t<div id="logAuditPre" style="display: none;"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="daily-thumbnail" style="display: none">\n\t\t\t\t\t\t\t<div class="logAuditTabContent">\n\t\t\t\t\t\t\t\t<div class="logAuditTab"></div>\n\t\t\t\t\t\t\t\t<div class="logAuditContent">\n\t\t\t\t\t\t\t\t\t<div id="logAuditTable"></div>\n\t\t\t\t\t\t\t\t\t<div id="logAuditPages" class="page" style="display: flex; justify-content: flex-end"></div>\n\t\t\t\t\t\t\t\t\t<div id="logAuditPre" style="display: none"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="daily-thumbnail" style="display: none">\n\t\t\t\t\t\t\t\t<div class="thumbnail-introduce">\n\t\t\t\t\t\t\t\t\t<span>Anti Intrusion</span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Collect, analyze, and store the logs of the current service</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class="daily-product-buy">\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-success va0 mr10" onclick="product_recommend.pay_product_sign(\'pro\',103)">Buy Pro</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="thumbnail-box">\n\t\t\t\t\t\t\t\t\t<ul class="thumbnail-tab">\n\t\t\t\t\t\t\t\t\t\t<li class="on">Anti Intrusion</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-item show">\n\t\t\t\t\t\t\t\t\t\t<div class="pluginTipsGg" style="background-image: url(\'/static/images/firewall/logAudit/1.png\')"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="installSoft" style="display: none">\n\t\t\t\t\t\t\t\t<div class="daily-thumbnail">\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-introduce">\n\t\t\t\t\t\t\t\t\t\t<span>Anti Intrusion prevention features</span>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>Analyze and parse common logs</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<div class="daily-product-buy">\n\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-success va0 ml15 buyLogAudit" onclick="product_recommend.pay_product_sign(\'pro\',104)">Buy Pro</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="thumbnail-box">\n\t\t\t\t\t\t\t\t\t\t<ul class="thumbnail-tab">\n\t\t\t\t\t\t\t\t\t\t\t<li class="on">Logs list</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<div class="thumbnail-item show">\n\t\t\t\t\t\t\t\t\t\t\t<div class="pluginTipsGg" style="background-image: url(/static/img/logAudit/1.png)"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tab-con hide" id="logsBody">\n\t\t\t\t\t\t<div class="tab-nav-border">\n\t\t\t\t\t\t\t<span class="on">Operation logs</span>\n\t\t\t\t\t\t\t<span>Run logs</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tab-nav-con">\n\t\t\t\t\t\t\t<div class="tab-block on">\n\t\t\t\t\t\t\t\t<div id="operationLog"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="tab-block">\n\t\t\t\t\t\t\t\t<div id="runningLog"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t'),i("/static/vite/oldjs/firewall.js?v=1720690738171",$("#security-main").get(0)),s("#security-main")}const r={id:"security-main"};t("default",e({__name:"index",setup:t=>(o((async()=>{await n()})),(t,n)=>(d(),c("div",r)))}))}}}));
