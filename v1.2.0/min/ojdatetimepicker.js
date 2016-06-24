/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojinputtext","ojs/ojvalidation","ojs/ojpopup","ojs/ojbutton"],function(b,f){function a(a){return this.options.converter.parse(a)}function d(a,c){var d=a.translations.dateTimeRange||{},e=[{category:"hint",entries:["min","max","inRange"]},{category:"messageDetail",entries:["rangeUnderflow","rangeOverflow"]},{category:"messageSummary",entries:["rangeUnderflow","rangeOverflow"]}],g={min:a.min,max:a.max,converter:c};if(!f.isEmptyObject(d))for(var h=
0,k=e.length;h<k;h++){var l=d[e[h].category];if(l){for(var x={},u=e[h].entries,v=0,y=u.length;v<y;v++)x[u[v]]=l[u[v]];g[e[h].category]=x}}return b.pa.Fr(b.Zc.VALIDATOR_TYPE_DATETIMERANGE).createValidator(g)}function c(a,b){var c=a.filter("span");b?c.addClass("oj-disabled").removeClass("oj-enabled oj-default"):c.removeClass("oj-disabled").addClass("oj-enabled oj-default")}function e(a,b,c){if(!a||b===c.length)return a;var d=b+1;return e(a[c[b]],d,c)||e(a["*"],d,c)}function g(a,b){b.setHours(a.getHours());
b.setMinutes(a.getMinutes());b.setSeconds(a.getSeconds());b.setMilliseconds(a.getMilliseconds());return b}function h(a){return a.delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a","mouseout",function(){f(this).removeClass("oj-hover")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a",
"mouseover",function(){f(this).addClass("oj-hover")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a","focus",function(){f(this).addClass("oj-focus")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a",
"blur",function(){f(this).removeClass("oj-focus")})}function k(a){var b=f(a.element[0]).parent().parent();a.Jp(b)}var l=b.pa.bm(b.Pj.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"});b.ya("oj.ojInputDate",f.oj.inputBase,{version:"1.0.0",widgetEventPrefix:"oj",_CLASS_NAMES:"oj-inputdatetime-input",_WIDGET_CLASS_NAMES:"oj-inputdatetime-date-only oj-component oj-inputdatetime",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_INPUT_HELPER_KEY:"inputHelp",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],
_GET_INIT_OPTIONS_PROPS:[{V:"disabled",vc:!0},{V:"pattern"},{V:"title"},{V:"placeholder"},{V:"value",We:a},{V:"required",We:!0,vc:!0},{V:"readonly",option:"readOnly",vc:!0},{V:"min",We:a},{V:"max",We:a}],CG:"oj-inputdatetime-input-trigger",BG:"oj-inputdatetime-calendar-icon",CQ:"oj-datepicker-current-day",IQ:"oj-datepicker-days-cell-over",rS:"oj-datepicker-unselectable",HQ:"oj-datepicker-desc",LF:"oj-datepicker-calendar",S7:"oj-datepicker-div",z7:"oj-datepicker-inline",VF:" oj-inputdatetime-input-container",
A7:" oj-inputdatetime-inline",options:{datePicker:{footerLayout:"",changeMonth:"select",changeYear:"select",currentMonthPos:0,daysOutsideMonth:"hidden",numberOfMonths:1,showOn:"image",stepMonths:"numberOfMonths",stepBigMonths:12,weekDisplay:"none",yearRange:"c-10:c+10"},converter:b.pa.bm(b.Pj.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit",month:"2-digit",year:"2-digit"}),max:void 0,min:void 0,dayFormatter:null},Kz:function(){this.gd=null;this.YJ=!1;this.$w=4;this.Cn=this.jk=this.Al=this.ej=
this.ik=0;this.jw={};var a=this.element[0].nodeName.toLowerCase();this.$d="div"===a||"span"===a;this.Id=h(f("\x3cdiv id\x3d'"+this.bn(this.S7)+"' role\x3d'region' aria-describedby\x3d'"+this.bn(this.HQ)+"' class\x3d'oj-datepicker-content'\x3e\x3c/div\x3e"));f("body").append(this.Id);if(this.$d)this._WIDGET_CLASS_NAMES+=this.A7,this._CLASS_NAMES="";else{this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES+=this.VF;var b=this;this.IK=this.Id.ojPopup({initialFocus:"none",modality:"modeless",open:function(){b.Id.find(".oj-datepicker-calendar").focus()},
rootAttributes:{"class":"oj-datepicker-popup"}})}},_ComponentCreate:function(){this.Kz();var a=this._super();this.options.dayMetaData&&(this.options.dayFormatter=function(a){return function(b){return e(a,0,[b.fullYear,b.month,b.date])}}(this.options.dayMetaData));this.QC(this.vB());this.$d?(this.element.append(this.Id),this.element.addClass(this.z7),this.Id.css("display","block")):this.QG();k(this);return a},hf:function(){var a=this._superApply(arguments);this.DU(this.options.disabled);return a},
_setOption:function(a,c,d){var g=null;if("value"===a)return c||(c=null),g=this._super(a,c,d),this.QC(c),this.yl()&&this.mo(!0),g;if("dayMetaData"===a)this._setOption("dayFormatter",function(a){return e(c,0,[a.fullYear,a.month,a.date])},d);else return g=this._super(a,c,d),"disabled"===a?this.DU(c):"max"===a||"min"===a?(this.jw[b.Zc.VALIDATOR_TYPE_DATETIMERANGE]=this.RB("min"),this.Wr()):"readOnly"===a&&c?this.hide():"dayFormatter"===a&&(this.jw[b.Zc.VALIDATOR_TYPE_DATERESTRICTION]=this.RB("dayFormatter"),
this.Wr()),"datePicker"===a&&"currentMonthPos"===d.subkey&&this.QC(this.options.value),d={max:!0,min:!0,dayFormatter:!0,datePicker:!0,translations:!0},this.yl()&&a in d&&this.mo(),g},HF:function(){return this.gd},_destroy:function(){var a=this._super();this.element.off("focus");this.gd&&this.gd.remove();this.$d&&(this.element.removeProp("disabled"),this.element.removeProp("readonly"));this.Id.remove();return a},yl:function(){return this.$d||this.IK.ojPopup("isOpen")},QG:function(){var a=this.options.datePicker.showOn,
b=f("\x3cspan\x3e").addClass(this.CG);if("focus"===a)this.element.on("focus",f.proxy(this.show,this));a=f("\x3cspan title\x3d'"+this.BI()+"'/\x3e").addClass(this.BG+" oj-clickable-icon-nocontext oj-component-icon");b.append(a);var c=this;a.on("click",function(){c.yl()?c.hide():c.show();return!1});this.Jp(a);this._hoverable(a);this.kM=a;this.gd=b;this.element.after(b)},Dba:function(a){var b;b=!1;var c=f.ui.keyCode,d=this.uj;if(this.yl())switch(a.keyCode){case 84:a.altKey&&a.ctrlKey&&(this.Id.find(".oj-datepicker-current").focus(),
b=!0);break;case c.TAB:this.hide();break;case c.ENTER:return b=f("td."+this.IQ+":not(."+this.CQ+")",this.Id),b[0]&&this.p_(this.ej,this.jk,b[0],a),a.preventDefault(),a.stopPropagation(),!1;case c.ESCAPE:this.hide();this.element.focus();b=!0;break;case c.PAGE_UP:a.ctrlKey&&a.altKey?this.rf(-this.options.datePicker.stepBigMonths,"M",!0):a.altKey?this.rf(-1,"Y",!0):this.rf(-this.Hw(),"M",!0);b=!0;break;case c.PAGE_DOWN:a.ctrlKey&&a.altKey?this.rf(+this.options.datePicker.stepBigMonths,"M",!0):a.altKey?
this.rf(1,"Y",!0):this.rf(+this.Hw(),"M",!0);b=!0;break;case c.END:this.ik=this.uw(this.jk,this.ej);this.mo(!0);b=!0;break;case c.HOME:this.ik=1;this.mo(!0);b=!0;break;case c.LEFT:this.rf(d?1:-1,"D",!0);a.originalEvent.altKey&&this.rf(a.ctrlKey?-this.options.datePicker.stepBigMonths:-this.Hw(),"M",!0);b=!0;break;case c.UP:this.rf(-7,"D",!0);b=!0;break;case c.RIGHT:this.rf(d?-1:1,"D",!0);a.originalEvent.altKey&&this.rf(a.ctrlKey?+this.options.datePicker.stepBigMonths:+this.Hw(),"M",!0);b=!0;break;
case c.DOWN:this.rf(7,"D",!0),b=!0}else a.keyCode===c.HOME&&a.ctrlKey&&(this.show(),b=!0);b&&(a.preventDefault(),a.stopPropagation())},mo:function(a){this.$w=4;var b=this.wca();this.Id.empty().append(b.html);var c=f("button",this.Id);0<c.length&&(1===c.length&&f(c[0]).addClass("oj-datepicker-single-button"),f.each(c,function(a,b){f(b).ojButton()}));this.d$();b.O1&&this.Id.find(".oj-datepicker-calendar").attr("aria-activedescendant",b.O1);b=this.cJ();c=b[1];this.Id.removeClass("oj-datepicker-multi-2 oj-datepicker-multi-3 oj-datepicker-multi-4").width("");
1<c&&this.Id.addClass("oj-datepicker-multi-"+c).css("width",17*c+"em");this.Id[(1!==b[0]||1!==b[1]?"add":"remove")+"Class"]("oj-datepicker-multi");this.yl()&&this.element.is(":visible")&&!this.element.is(":disabled")&&(a?(a=this.Id.find(".oj-datepicker-calendar"),a[0]!==document.activeElement&&a.focus()):this.$d||this.element[0]===document.activeElement||this.element.focus())},rf:function(a,b,c){this.options.disabled||(this.FS(a+("M"===b?this.options.datePicker.currentMonthPos:0),b),this.mo(c))},
iea:function(){var a=new Date;this.ik=a.getDate();this.Al=this.ej=a.getMonth();this.Cn=this.jk=a.getFullYear();this.rf()},q_:function(a,c){var d=parseInt(a.options[a.selectedIndex].value,10);"M"===c?this.ej=this.Al=d:this.jk=this.Cn=d;f("#"+this.bn(this.LF)).html(this.Wj(this.options.monthWide[this.Al])+" "+l.format(b.ob.dateToLocalIso(new Date(this.Cn,this.Al,1))));this.rf(0,0,!0)},p_:function(a,c,d,e){f(d).hasClass(this.rS)||this.options.disabled||(this.ik=f("a",d).html(),this.ej=a,this.jk=c,a=
b.ob,(c=this.options.value?a.isoToLocalDate(this.options.value):null)?(d=new Date(this.jk,this.ej,this.ik),g(c,d),c=d):c=new Date(this.jk,this.ej,this.ik),a=a.dateToLocalIso(c),c=this.Qc().format(a),this.li(c),this.ec(a,e),this.hide())},YH:function(a,c){return a?"string"===typeof a?b.ob.isoToLocalDate(a):new Date(a.getTime()):c},QC:function(a){a=this.YH(a,this.HW());this.ik=a.getDate();this.Al=this.ej=a.getMonth();this.Cn=this.jk=a.getFullYear();this.FS()},Hw:function(){var a=this.options.datePicker.stepMonths;
return f.isNumeric(a)?a:this.options.datePicker.numberOfMonths},d$:function(){var a=this.Hw(),b=this;this.Id.find("[data-handler]").map(function(){f(this).bind(this.getAttribute("data-event"),{prev:function(c){b.rf(-a,"M",!0);c.preventDefault()},next:function(c){b.rf(+a,"M",!0);c.preventDefault()},today:function(a){if("keyup"===a.type&&13===a.keyCode||"click"===a.type)b.iea(),a.preventDefault(),a.stopPropagation()},selectDay:function(a){b.p_(+this.getAttribute("data-month"),+this.getAttribute("data-year"),
this,a);return!1},selectMonth:function(){b.q_(this,"M");return!1},selectYear:function(){b.q_(this,"Y");return!1},calendarKey:function(a){b.Dba(a)}}[this.getAttribute("data-handler")])})},Xha:function(a,b,c){b=b?new Date(b.getFullYear(),b.getMonth(),b.getDate()):null;c=c?new Date(c.getFullYear(),c.getMonth(),c.getDate()):null;return null!==b&&a<b||null!==c&&a>c},wca:function(){var a,c,d,e,g,f,h=this.options.dayWide,k=this.options.dayNarrow,l=this.options.monthWide,u=this.options.monthAbbreviated,v=
this.options.firstDayOfWeek,y,B,M,I,F,D,A,z="",E,J,C,N,Q,H,L,G,O=new Date,O=new Date(O.getFullYear(),O.getMonth(),O.getDate()),P=this.uj;f=this.options.datePicker.footerLayout;var W=this.cJ(),K=this.options.datePicker.currentMonthPos,V=this.options.dayFormatter;G=null;var Z=1!==W[0]||1!==W[1],X=this.EB("min"),R=this.EB("max"),K=this.Al-K,U=this.Cn,ha=new Date(this.jk,this.ej,this.ik),Y=new Date(this.vB()),T=Y.getDate(),aa=Y.getMonth(),fa=Y.getFullYear(),ba=this.options.disabled,S=this.Wj(this.A("weekText")),
ca=b.ob;Y.setHours(0);Y.setMinutes(0);Y.setSeconds(0);Y.setMilliseconds(0);0>K&&(K+=12,U--);if(X)for(a=new Date(X.getFullYear(),X.getMonth(),X.getDate()),a=R&&R<a?R:a;new Date(U,K,this.uw(U,K))<a;)K++,11<K&&(K=0,U++);if(R)for(a=new Date(R.getFullYear(),R.getMonth()-W[0]*W[1]+1,R.getDate()),a=X&&a<X?X:a;new Date(U,K,1)>a;)K--,0>K&&(K=11,U--);this.Al=K;this.Cn=U;a=this.Wj(this.A("prevText"));a=this.nT(-1,U,K)&&!ba?"\x3ca href\x3d'#' class\x3d'oj-datepicker-prev-icon oj-enabled oj-default oj-component-icon oj-clickable-icon-nocontext' data-handler\x3d'prev' data-event\x3d'click' title\x3d'"+
a+"'\x3e\x3c/a\x3e":"\x3ca class\x3d'oj-datepicker-prev-icon oj-disabled oj-component-icon oj-clickable-icon-nocontext' title\x3d'"+a+"'\x3e\x3c/a\x3e";c=this.Wj(this.A("nextText"));c=this.nT(1,U,K)&&!ba?"\x3ca href\x3d'#' class\x3d'oj-datepicker-next-icon oj-enabled oj-default oj-component-icon oj-clickable-icon-nocontext' data-handler\x3d'next' data-event\x3d'click' title\x3d'"+c+"'\x3e\x3c/a\x3e":"\x3ca class\x3d'oj-datepicker-next-icon oj-disabled oj-component-icon oj-clickable-icon-nocontext' title\x3d'"+
c+"'\x3e\x3c/a\x3e";d=this.Wj(this.A("currentText"));g="";e="\x3cbutton type\x3d'button' class\x3d'oj-datepicker-current oj-priority-secondary' data-handler\x3d'today' data-event\x3d'click keyup'\x3e"+d+"\x3c/button\x3e";if(1<f.length){d=0;f=[{index:f.indexOf("today"),content:this.RX(O)?e:""}];for(f.sort(function(a,b){return a.index-b.index});d<f.length&&0>f[d].index;)d++;for(;d<f.length;)g+=f[d++].content;0<g.length&&(g="\x3cdiv class\x3d'oj-datepicker-buttonpane'\x3e"+g+"\x3c/div\x3e")}f=this.options.datePicker.weekDisplay;
d=this.options.datePicker.daysOutsideMonth;e="";y="all";for(B=0;B<W[0];B++){M="";this.$w=4;for(I=0;I<W[1];I++){y="all";E="";if(Z){E+="\x3cdiv class\x3d'oj-datepicker-group";if(1<W[1])switch(I){case 0:E+=" oj-datepicker-group-first";y=P?"right":"left";break;case W[1]-1:E+=" oj-datepicker-group-last";y=P?"left":"right";break;default:E+=" oj-datepicker-group-middle",y=""}E+="'\x3e"}E+="\x3cdiv class\x3d'oj-datepicker-header"+(ba?" oj-disabled ":" oj-enabled oj-default ")+"'\x3e"+(/all|left/.test(y)&&
0===B?P?c:a:"")+(/all|right/.test(y)&&0===B?P?a:c:"")+this.xca(K,U,X,R,0<B||0<I,l,u,Z)+"\x3c/div\x3e\x3ctable class\x3d'oj-datepicker-calendar"+(ba?" oj-disabled ":" oj-enabled oj-default ")+"' tabindex\x3d-1 data-handler\x3d'calendarKey' data-event\x3d'keydown' aria-readonly\x3d'true' role\x3d'grid' aria-labelledby\x3d'"+this.bn(this.LF)+"'\x3e\x3cthead role\x3d'presentation'\x3e\x3ctr role\x3d'row'\x3e";J="number"===f?"\x3cth class\x3d'oj-datepicker-week-col'\x3e"+this.Wj(this.A("weekHeader"))+
"\x3c/th\x3e":"";for(y=0;7>y;y++)C=(y+parseInt(v,10))%7,J+="\x3cth role\x3d'columnheader' aria-label\x3d'"+h[C]+"'"+(5<=(y+v+6)%7?" class\x3d'oj-datepicker-week-end'":"")+"\x3e\x3cspan title\x3d'"+h[C]+"'\x3e"+k[C]+"\x3c/span\x3e\x3c/th\x3e";E+=J+"\x3c/tr\x3e\x3c/thead\x3e\x3ctbody role\x3d'presentation'\x3e";J=this.uw(U,K);U===fa&&K===aa&&(T=Math.min(T,J));y=(this.bda(U,K)-v+7)%7;J=Math.ceil((y+J)/7);this.$w=J=Z?this.$w>J?this.$w:J:J;C=new Date(U,K,1-y);for(N=0;N<J;N++){E+="\x3ctr role\x3d'row'\x3e";
y=this.Qc().wo(ca.dateToLocalIso(C));Q="none"===f?"":"\x3ctd class\x3d'oj-datepicker-week-col' role\x3d'rowheader' aria-label\x3d'"+S+" "+y+"'\x3e"+y+"\x3c/td\x3e";for(y=0;7>y;y++){L=C.getMonth()!==K;F=C.getTime()===Y.getTime();D="oj-dp-"+this.uuid+"-"+N+"-"+y+"-"+B+"-"+I;(A=C.getTime()===ha.getTime()&&K===this.ej)&&(z=D);H=[!0,""];G=C.getFullYear();var da=C.getMonth(),ga=C.getDate();V&&(G=V({fullYear:G,month:da+1,date:ga}))&&(H=[!G.disabled,G.className||""],G.tooltip&&H.push(G.tooltip));da=C.getTime()===
Y.getTime();G=L&&"selectable"!==d||!H[0]||this.Xha(C,X,R);Q+="\x3ctd role\x3d'gridcell' aria-disabled\x3d'"+!!G+"' aria-selected\x3d'"+F+"' id\x3d'"+D+"' class\x3d'"+(5<=(y+v+6)%7?" oj-datepicker-week-end":"")+(L?" oj-datepicker-other-month":"")+(A?" "+this.IQ:"")+(G||ba?" "+this.rS+" oj-disabled":" oj-enabled ")+(L&&"hidden"===d?"":" "+H[1]+(F?" "+this.CQ:"")+(C.getTime()===O.getTime()?" oj-datepicker-today":""))+"'"+(L&&"hidden"===d||!H[2]?"":" title\x3d'"+H[2].replace(/'/g,"\x26#39;")+"'")+(G?
"":" data-handler\x3d'selectDay' data-event\x3d'click' data-month\x3d'"+C.getMonth()+"' data-year\x3d'"+C.getFullYear()+"'")+"\x3e"+(L&&"hidden"===d?"\x26#xa0;":G||ba?"\x3cspan class\x3d'oj-disabled'\x3e"+C.getDate()+"\x3c/span\x3e":"\x3ca class\x3d'oj-enabled"+(da?" oj-selected":"")+(L?" oj-priority-secondary":"")+"' "+(da||A?"":"tabindex\x3d'-1' ")+" href\x3d'#'\x3e"+C.getDate()+"\x3c/a\x3e")+"\x3c/td\x3e";C.setDate(C.getDate()+1)}E+=Q+"\x3c/tr\x3e"}K++;11<K&&(K=0,U++);E+="\x3c/tbody\x3e\x3c/table\x3e"+
(Z?"\x3c/div\x3e"+(0<W[0]&&I===W[1]-1?"\x3cdiv class\x3d'oj-datepicker-row-break'\x3e\x3c/div\x3e":""):"");M+=E}e+=M}return{html:e+g,O1:z}},xca:function(a,c,d,e,g,f,h,k){var x,u,v,y,B=this.options.datePicker.changeMonth,M=this.options.datePicker.changeYear,I=b.Ja.v3()?"before":"after",F="\x3cdiv class\x3d'oj-datepicker-title' role\x3d'header'\x3e",D="",A=this.options.disabled,z=b.ob;if(g||"none"===B)D+="\x3cspan class\x3d'oj-datepicker-month'\x3e"+f[a]+"\x3c/span\x3e";else{x=d&&d.getFullYear()===
c;u=e&&e.getFullYear()===c;D+="\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-month "+(A?"oj-disabled' disabled":"oj-enabled'")+" data-handler\x3d'selectMonth' data-event\x3d'change' role\x3d'listbox'\x3e";for(v=0;12>v;v++)(!x||v>=d.getMonth())&&(!u||v<=e.getMonth())&&(D+="\x3coption role\x3d'option' value\x3d'"+v+"' aria-selected\x3d'"+(v===a?"true' selected\x3d'selected'":"false'")+"\x3e"+h[v]+"\x3c/option\x3e");D+="\x3c/select\x3e"}"before"===I&&(F+=D+(g||"select"!==B||"select"!==M?"\x26#xa0;":
""));if(!this.Km)if(this.Km="",g||"none"===M)F+="\x3cspan class\x3d'oj-datepicker-year'\x3e"+l.format(z.dateToLocalIso(new Date(c,a,1)))+"\x3c/span\x3e";else{x=this.options.datePicker.yearRange.split(":");y=(new Date).getFullYear();u=function(a){a=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?y+parseInt(a,10):parseInt(a,10);return isNaN(a)?y:a};h=u(x[0]);x=Math.max(h,u(x[1]||""));h=d?Math.max(h,d.getFullYear()):h;x=e?Math.min(x,e.getFullYear()):x;for(this.Km+="\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-year "+
(A?"oj-disabled' disabled":"oj-enabled'")+" data-handler\x3d'selectYear' data-event\x3d'change' role\x3d'listbox'\x3e";h<=x;h++)this.Km+="\x3coption role\x3d'option' value\x3d'"+h+"' aria-selected\x3d'"+(h===c?"true' selected\x3d'selected'":"false'")+"\x3e"+l.format(z.dateToLocalIso(new Date(h,a,1)))+"\x3c/option\x3e";this.Km+="\x3c/select\x3e";F+=this.Km;this.Km=null}"after"===I&&(F+=(g||"select"!==B||"select"!==M?"\x26#xa0;":"")+D);k&&g||(F+="\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'"+
this.bn(this.LF)+"'\x3e"+f[a]+" "+l.format(z.dateToLocalIso(new Date(c,a,1)))+"\x3c/span\x3e",F+="\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'"+this.bn(this.HQ)+"'\x3e"+this.Wj(this.A("datePicker"))+"\x3c/span\x3e");return F+"\x3c/div\x3e"},FS:function(a,b){var c=this.Cn+("Y"===b?a:0),d=this.Al+("M"===b?a:0),e=Math.min(this.ik,this.uw(c,d))+("D"===b?a:0),c=new Date(c,d,e);this.ik=c.getDate();this.Al=this.ej=c.getMonth();this.Cn=this.jk=c.getFullYear()},cJ:function(){var a=this.options.datePicker.numberOfMonths,
a="string"===typeof a?parseInt(a,10):a;return null==a?[1,1]:"number"===typeof a?[1,a]:a},EB:function(a){return this.YH(this.options[a],null)},uw:function(a,b){return 32-(new Date(a,b,32)).getDate()},bda:function(a,b){return(new Date(a,b,1)).getDay()},nT:function(a,b,c){var d=this.cJ();b=new Date(b,c+(0>a?a:d[0]*d[1]),1);0>a&&b.setDate(this.uw(b.getFullYear(),b.getMonth()));return this.RX(b)},RX:function(a){var b,c,d=this.EB("min"),e=this.EB("max"),g=null,f=null;if(b=this.options.datePicker.yearRange)b=
b.split(":"),c=(new Date).getFullYear(),g=parseInt(b[0],10),f=parseInt(b[1],10),b[0].match(/[+\-].*/)&&(g+=c),b[1].match(/[+\-].*/)&&(f+=c);return(!d||a.getTime()>=d.getTime())&&(!e||a.getTime()<=e.getTime())&&(!g||a.getFullYear()>=g)&&(!f||a.getFullYear()<=f)},BI:function(){return this.Wj(this.A("tooltipCalendar"+(this.options.disabled?"Disabled":"")))},DU:function(a){this.gd&&(c(this.gd.children(),a),this.gd.find("."+this.BG).attr("title",this.BI()));a&&this.hide();this.$d&&this.mo()},GF:function(){this.$d||
this._superApply(arguments)},DK:function(a){this.$d||this._superApply(arguments)},yC:function(a){if(!this.$d){this._superApply(arguments);var b=f.ui.keyCode,c=!1;if(this.yl())switch(a.keyCode){case b.TAB:this.hide();break;case b.ESCAPE:this.hide();c=!0;break;case b.UP:case b.DOWN:this.Id.find(".oj-datepicker-calendar").focus(),c=!0}else switch(a.keyCode){case b.UP:case b.DOWN:this.ec(this.ag(),a),this.show(),c=!0}if(c)return a.preventDefault(),a.stopPropagation(),!1}},li:function(a){this.$d||this._superApply(arguments);
this.QC(this.vB());this.yl()&&this.mo(!0)},Qc:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputDate.prototype.options.converter},gs:function(){return this.options.value||""},_GetDefaultStyleClass:function(){return"oj-inputdate"},vv:function(){var a=this._superApply(arguments);if(null!=this.options.min||null!=this.options.max)this.jw[b.Zc.VALIDATOR_TYPE_DATETIMERANGE]=this.RB("min");null!=this.options.dayFormatter&&(this.jw[b.Zc.VALIDATOR_TYPE_DATERESTRICTION]=this.RB("dayFormatter"));
return f.extend(this.jw,a)},ii:function(){this.hide()},ll:function(){this.hide()},RB:function(a){var c=null;"min"===a||"max"===a?c=d(this.options,this.Qc()):"dayFormatter"===a&&(a={dayFormatter:this.options.dayFormatter,converter:this.Qc()},f.extend(a,this.options.translations.dateRestriction||{}),c=b.pa.Fr(b.Zc.VALIDATOR_TYPE_DATERESTRICTION).createValidator(a));return c},HW:function(){var a=new Date;a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a},vB:function(){return this.YH(this.options.value,
this.HW())},getNodeBySubId:function(a){var b=null,c=a&&a.subId,d=this.Id;if(c)switch(c){case "oj-datepicker-content":b=d[0];break;case "oj-inputdatetime-calendar-icon":b=f(".oj-inputdatetime-calendar-icon",this.gd)[0];break;case "oj-datepicker-prev-icon":b=f(".oj-datepicker-prev-icon",d)[0];break;case "oj-datepicker-next-icon":b=f(".oj-datepicker-next-icon",d)[0];break;case "oj-datepicker-month":b=f(".oj-datepicker-month",d)[0];break;case "oj-datepicker-year":b=f(".oj-datepicker-year",d)[0];break;
case "oj-datepicker-current":b=f(".oj-datepicker-current",d)[0];break;case "oj-inputdatetime-date-input":b=this.$d?null:this.element[0];break;default:b=null}return b||this._superApply(arguments)},getSubIdByNode:function(a){var b=this.Id,c=null,d=[{selector:".oj-inputdatetime-calendar-icon",ele:this.gd},{selector:".oj-datepicker-prev-icon",ele:b},{selector:".oj-datepicker-next-icon",ele:b},{selector:".oj-datepicker-month",ele:b},{selector:".oj-datepicker-year",ele:b},{selector:".oj-datepicker-current",
ele:b}];if(a===b[0])return"oj-datepicker-content";if(!this.$d&&a===this.element[0])return"oj-inputdatetime-date-input";for(var b=0,e=d.length;b<e;b++){var g=d[b],h=f(g.selector,g.ele);if(1===h.length&&h[0]===a){c=g.selector.substr(1);break}}return c||this._superApply(arguments)},hide:function(){this.yl()&&!this.$d&&(this.IK.ojPopup("close"),"focus"===this.options.datePicker.showOn&&(this.YJ=!0),this.element.focus());return this},refresh:function(){this.gd&&this.gd.find("."+this.BG).attr("title",this.BI());
return this._superApply(arguments)||this},show:function(){if(!(this.yl()||this.options.disabled||this.options.readOnly))if(this.YJ)this.YJ=!1;else{var a=this.uj;this.Id.empty();this.mo();a=b.nc.xg({my:"start top",at:"start bottom",of:this.element,collision:"flipfit flipfit"},a);this.IK.ojPopup("open",this.kM,a);return this}}});b.Components.Em({ojInputDate:{firstDayOfWeek:b.Components.ih(function(){return b.Ja.u2()}),dayWide:b.Components.ih(function(){return b.Ja.qy("wide")}),dayNarrow:b.Components.ih(function(){return b.Ja.qy("narrow")}),
monthWide:b.Components.ih(function(){return b.Ja.sy("wide")}),monthAbbreviated:b.Components.ih(function(){return b.Ja.sy("abbreviated")}),datePicker:b.Components.ih(function(){return b.we.Ok("inputDate").datePicker})}});b.ya("oj.ojInputTime",f.oj.inputBase,{version:"1.0.0",widgetEventPrefix:"oj",_CLASS_NAMES:"oj-inputdatetime-input",_WIDGET_CLASS_NAMES:"oj-inputdatetime-time-only oj-component oj-inputdatetime",VF:"oj-inputdatetime-input-container",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_INPUT_HELPER_KEY:"inputHelp",
_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_GET_INIT_OPTIONS_PROPS:[{V:"disabled",vc:!0},{V:"pattern"},{V:"title"},{V:"placeholder"},{V:"value",We:a},{V:"required",We:!0,vc:!0},{V:"readonly",option:"readOnly",vc:!0},{V:"min",We:a},{V:"max",We:a}],h9:"ojInputTime",CG:"oj-inputdatetime-input-trigger",DG:"oj-inputdatetime-time-icon",options:{converter:b.pa.bm(b.Pj.CONVERTER_TYPE_DATETIME).createConverter({hour:"2-digit",hour12:!0,minute:"2-digit"}),max:void 0,min:void 0,datePickerComp:null,timePicker:{timeIncrement:"00:30:00:00"}},
Ud:function(a,c){this._super(a,c);null===this.options.datePickerComp&&b.re.Rk(this._GET_INIT_OPTIONS_PROPS,c,this)},Kz:function(){this.SL={};this.xl=this.options.datePickerComp;this.kg=f("\x3cdiv id\x3d'"+this.bn(this.h9)+"' class\x3d'oj-listbox-drop' style\x3d'display:none'\x3e\x3c/div\x3e");f("body").append(this.kg);var a=this;this.JK=this.kg.ojPopup({initialFocus:"none",rootAttributes:{"class":"datetimepicker-dropdown"},chrome:"none",modality:"modeless",open:function(){var b=f("[aria-selected]",
a.kg);1===b.length&&a.rT(b.parent(),!0);f("ul",a.kg).focus()},beforeClose:function(){a.D0=f("ul",a.kg).scrollTop()}});this.Rn()&&(this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES+=this.VF)},Rx:function(){return this.JK.ojPopup("isOpen")},_ComponentCreate:function(){this.Kz();var a=this._superApply(arguments);this.Nl()&&!this.LX()?this._CLASS_NAMES="":k(this);this.QG();return a},hf:function(){var a=this._superApply(arguments);c(this.gd.children(),this.options.disabled);return a},_setOption:function(a,e,g){var f=
null;if("value"===a)return e||(e=null),f=this._super(a,e,g),this.nB(),f;f=this._superApply(arguments);"disabled"===a?(e&&this.hide(),this.gd.find("."+this.DG).attr("title",this.sJ()),c(this.gd.children(),e)):"max"!==a&&"min"!==a||this.Nl()?"readOnly"===a&&e&&this.hide():(this.SL[b.Zc.VALIDATOR_TYPE_DATETIMERANGE]=d(this.options,this.Qc()),this.Wr());a in{max:!0,min:!0,converter:!0,timePicker:!0}&&this.nB();return f},_destroy:function(){var a=this._super();this.gd&&this.gd.remove();this.kg.remove();
return a},GF:function(){this.Rn()&&this._superApply(arguments)},HF:function(){return this.gd},yC:function(a){if(this.Rn()){this._superApply(arguments);var b=f.ui.keyCode,c=!1;if(this.Rx())switch(a.keyCode){case b.TAB:this.hide();break;case b.ESCAPE:this.hide();c=!0;break;case b.UP:case b.DOWN:f("ul",this.kg).focus(),c=!0}else switch(a.keyCode){case b.UP:case b.DOWN:this.ec(this.ag(),a),this.show(),c=!0}if(c||a.keyCode===b.ENTER)return a.preventDefault(),a.stopPropagation(),!1}},sJ:function(){return this.Wj(this.A("tooltipTime"+
(this.options.disabled?"Disabled":"")))},QG:function(){var a=this.Rn(),b=a?f("\x3cspan\x3e").addClass(this.CG):f("+ span",this.element),c=f("\x3cspan title\x3d'"+this.sJ()+"'/\x3e").addClass(this.DG+" oj-clickable-icon-nocontext oj-component-icon");b.append(c);var d=this;c.on("click",function(){d.Rx()?d.hide():d.show()});this.Jp(c);this._hoverable(c);this.kM=c;this.gd=b;a&&this.element.after(b)},Ofa:function(a,b,c){return null!==b&&a<b||null!==c&&a>c},lq:function(){return this.Nl()?this.xl.widget.Y2():
this.options.value},nB:function(){var a=this.lq(),c=this.Qc(),d=f("\x3cul class\x3d'oj-listbox-results' tabindex\x3d'-1' role\x3d'listbox'\x3e\x3c/ul\x3e"),c=a?c.format(a):"",e=[],g,a=a?b.ob.isoToLocalDate(a):new Date;a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);e=this.aea(a);c=c||e[0].value;this.kg.empty();a=0;for(g=e.length;a<g;a++){var h=e[a].value,k=e[a].minMaxRange,l=f("\x3cli class\x3d'oj-listbox-result "+(k?"oj-disabled":"")+"' role\x3d'presentation'\x3e"),x=this.uuid+
"_sel"+a,k=f("\x3cdiv class\x3d'oj-listbox-result-label' "+(k?"aria-disabled ":"")+"data-value\x3d'"+h+"' role\x3d'option' id\x3d'"+x+"'\x3e"+e[a].label+"\x3c/li\x3e");c===h&&(k.attr("aria-selected","true"),l.addClass("oj-hover"),d.attr("aria-activedescendant",x));l.append(k);d.append(l)}this.kg.append(d);f(".oj-listbox-result",d).on("mousemove",function(){var a=f(this);a.hasClass("oj-disabled")||(f(".oj-hover",d).removeClass("oj-hover"),a.addClass("oj-hover"),d.attr("aria-activedescendant",a.children()[0].id))});
var u=this;d.on("click",function(a){var b=f(a.target);b.hasClass("oj-disabled")||void 0!==b.attr("aria-disabled")||(u.iZ(a),u.hide())}).on("keydown",function(a){u.ula(a)})},aea:function(a){var c=[],d=this.Qc();if(a){var e=this.options.timePicker.timeIncrement.split(":"),g=b.ob,f=this.Nl(),h=g.dateToLocalIso(a),k=f?this.xl.widget.options.min:this.options.min,f=f?this.xl.widget.options.max:this.options.max,k=k?g.isoToLocalDate(g._minMaxIsoString(k,h)):null,f=f?g.isoToLocalDate(g._minMaxIsoString(f,
h)):null;if(4===e.length){var h=parseInt(e[0].substring(0),10),l=parseInt(e[1],10),u=parseInt(e[2],10),e=parseInt(e[3],10),v=new Date(a),y="";do y=d.format(g.dateToLocalIso(v)),c.push({label:y,value:y,minMaxRange:this.Ofa(v,k,f)}),v.setHours(v.getHours()+h),v.setMinutes(v.getMinutes()+l),v.setSeconds(v.getSeconds()+u),v.setMilliseconds(v.getMilliseconds()+e);while(v.getDate()===a.getDate())}else throw Error("timeIncrement value should be in the format of hh:mm:ss:SS");}return c},ula:function(a){if(this.Rx()){var b=
f.ui.keyCode,c=!1;switch(a.keyCode){case b.TAB:this.hide();break;case b.ESCAPE:this.hide();this.element.focus();c=!0;break;case b.UP:this.dZ(a,"prev");c=!0;break;case b.DOWN:this.dZ(a,"next");c=!0;break;case b.ENTER:this.iZ(a),c=!0}if(c)return a.preventDefault(),a.stopPropagation(),!1}},dZ:function(a,b){var c=f(".oj-hover",this.kg),d=f("ul",this.kg),e=null;1===c.length?(e=c[b](),1===e.length&&c.removeClass("oj-hover")):e=f(d.children()[0]);e&&1===e.length&&(e.addClass("oj-hover"),d.attr("aria-activedescendant",
e.children()[0].id),this.rT(e))},iZ:function(a){var b=this.kg,c=f("[aria-selected]",b),d=f("ul",b),b=f(".oj-hover div",b);1===b.length&&(1===c.length&&(c.removeAttr("aria-selected"),c.parent().removeClass("oj-hover")),b.attr("aria-selected","true"),b.parent().addClass("oj-hover"),this.hide(),this.li(b.attr("data-value")),this.ec(b.attr("data-value"),a),d.attr("aria-activedescendant",b[0].id),this.element.focus(),this.Nl()&&this.xl.widget.hide())},DK:function(a){this.Rn()&&this._superApply(arguments)},
show:function(){if(!this.options.disabled&&!this.options.readOnly){this.Nl()&&this.xl.widget.hide();this.nB();var a=this.kg,c=this.JK;a.width(this.element.parent().width());a.css({position:"relative"});var d=b.nc.xg({my:"start top",at:"start bottom",of:this.element,collision:"flipfit flipfit"},this.uj);c.ojPopup("open",this.kM,d);a.find("[aria-selected]").parent().addClass("oj-hover")}},hide:function(){this.Rx()&&(this.JK.ojPopup("close"),this.element.focus())},refresh:function(){this.gd&&this.gd.find("."+
this.DG).attr("title",this.sJ());return this._superApply(arguments)||this},li:function(a){this.Rn()&&this._superApply(arguments);this.Rx()&&this.nB()},ec:function(a,c,d){if(this.Nl()){this._super(a,null,d);try{var e=this.Qc().parse(a),f=b.ob,h=this.xl.widget,k=h.Y2(),l=k?f.isoToLocalDate(k):new Date,x=g(e?f.isoToLocalDate(e):new Date,new Date(l)),u=f.dateToLocalIso(x);l.getTime()!=x.getTime()&&h.Tpa(u,c)}catch(v){}}else this._superApply(arguments)},tv:function(){return this.Rn()},Rn:function(){return!this.Nl()||
this.LX()},_GetDefaultStyleClass:function(){return"oj-inputtime"},gs:function(){return this.options.value||""},vv:function(){var a=this._superApply(arguments);null==this.options.min&&null==this.options.max||this.Nl()||(this.SL[b.Zc.VALIDATOR_TYPE_DATETIMERANGE]=d(this.options,this.Qc()));return f.extend(this.SL,a)},Qc:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputTime.prototype.options.converter},rT:function(a,b){var c=a.parent();b&&this.D0&&f(c).scrollTop(this.D0);
var d=f(c).scrollTop(),e=d+f(c).height(),g=a[0].offsetTop,h=g+f(a).height();g<d?f(c).scrollTop(g):h>e&&f(c).scrollTop(h-f(c).height())},Nl:function(){return null!==this.xl},LX:function(){return this.xl.inline},ii:function(){this.hide()},ll:function(){this.hide()},getNodeBySubId:function(a){var b=null,c=a&&a.subId;if(c)switch(c){case "oj-listbox-drop":b=this.kg[0];break;case "oj-inputdatetime-time-icon":b=f(".oj-inputdatetime-time-icon",this.gd)[0];break;case "oj-inputdatetime-time-input":b=this.element[0];
break;default:b=null}return b||this._superApply(arguments)},getSubIdByNode:function(a){var b=f(".oj-inputdatetime-time-icon",this.gd),c=null;a===this.kg[0]?c="oj-listbox-drop":a===b[0]?c="oj-inputdatetime-time-icon":a===this.element[0]&&(c="oj-inputdatetime-time-input");return c||this._superApply(arguments)},widget:function(){return this.Rn()?this._super():this.xl.widget.widget()}});b.ya("oj.ojInputDateTime",f.oj.ojInputDate,{version:"1.0.0",widgetEventPrefix:"oj",_WIDGET_CLASS_NAMES:"oj-inputdatetime-date-time oj-component oj-inputdatetime",
_INPUT_HELPER_KEY:"inputHelpBoth",options:{converter:b.pa.bm(b.Pj.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",hour12:!0,minute:"2-digit"}),timePicker:{timeIncrement:"00:30:00:00"}},Kz:function(){this._super();this.Yt=this.element;this.CC=this.fD=this.jg=null},_ComponentCreate:function(){var a=this._super(),c=this.GW(this.Qc());if(null===c)throw Error("Please use ojInputDate if you do not have time portion");if(this.$d){var d=f("\x3cinput type\x3d'text'\x3e");
d.insertAfter(this.element);this.Yt=d}for(var d=["title","placeholder","disabled","required","readOnly"],e={},g=0,h=d.length;g<h;g++)e[d[g]]=this.options[d[g]];this.jg=this.Yt.ojInputTime(f.extend(e,{converter:c,displayOptions:{converterHint:"none",title:"none",messages:this.options.displayOptions.messages},value:b.ob.dateToLocalIso(this.vB()),timePicker:this.options.timePicker,datePickerComp:{widget:this,inline:this.$d}}));return a},_setOption:function(a,b,c){var d=this._superApply(arguments);"value"===
a&&(this.CC=b);this.jg&&(a in{disabled:!0,readOnly:!0}?this.jg.ojInputTime("option",a,b):"timePicker"===a?this.jg.ojInputTime("option","timePicker.timeIncrement",b.timeIncrement):"converter"===a&&(this.fD=null,this.jg.ojInputTime("option",a,this.GW(this.Qc()))));return d},_destroy:function(){var a=this._super();this.jg.ojInputTime("destroy");this.$d&&this.Yt.remove();return a},GW:function(a){if(null!==this.fD)return this.fD;a=a.resolvedOptions();var c={},d="hour hour12 minute second millisecond timeFormat".split(" "),
e,g;e=0;for(g=d.length;e<g;e++)d[e]in a&&("timeFormat"===d[e]&&(c.formatType="time"),c[d[e]]=a[d[e]]);if(f.isEmptyObject(c))throw Error("Plase use ojInputDateTime's converter is lacking the time portion");return this.fD=a=b.pa.bm(b.Pj.CONVERTER_TYPE_DATETIME).createConverter(c)},Tpa:function(a,b){this.li(this.Qc().format(a));this.ec(a,b)},Y2:function(){if(this.isValid())return this.options.value;if(this.CC)try{return this.Qc().parse(this.CC)}catch(a){return this.options.value}else return null},ec:function(a,
b,c){this._superApply(arguments);this.CC=a},yC:function(a){var b=f.ui.keyCode,c=!1;switch(a.keyCode){case b.UP:case b.DOWN:a.shiftKey&&(this.ec(this.ag(),a),this.jg.ojInputTime("show"),c=!0)}return c?(a.preventDefault(),a.stopPropagation(),!1):this._superApply(arguments)},show:function(){this.jg.ojInputTime("hide");return this._super()},showTimePicker:function(){this.hide();return this.jg.ojInputTime("show")},hideTimePicker:function(){return this.jg.ojInputTime("hide")},refresh:function(){var a=this._superApply(arguments)||
this;this.jg.ojInputTime("refresh");return a},getNodeBySubId:function(a){var b=a&&a.subId,c=null;b&&("oj-listbox-drop"===b||"oj-inputdatetime-time-icon"===b?c=this.jg.ojInputTime("getNodeBySubId",a):"oj-inputdatetime-date-input"===b&&(c=this.$d?this.Yt[0]:this.element[0]));return c||this._superApply(arguments)},getSubIdByNode:function(a){var b=null;this.$d?a===this.Yt[0]&&(b="oj-inputdatetime-date-input"):a===this.element[0]&&(b="oj-inputdatetime-date-input");return b||this.jg.ojInputTime("getSubIdByNode",
a)||this._superApply(arguments)},Qc:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputDateTime.prototype.options.converter},ii:function(){this._superApply(arguments);this.jg&&this.hideTimePicker()},ll:function(){this._superApply(arguments);this.jg&&this.hideTimePicker()},_GetMessagingLauncherElement:function(){return this.$d?this.Yt:this._super()},_GetDefaultStyleClass:function(){return"oj-inputdatetime"},Gz:function(){return"oj-ojInputDate"}})});