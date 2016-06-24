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
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(b,f){(function(){function a(a,c,d){a:{for(var e=r[a],f=0;f<e.length;++f){var g=e[f];if(0<=d.indexOf(g))for(;;c=c.parentNode){var h=b.Components.sg(c,g);if(h){d=h;break a}}}d=null}return d?d("option","chroming"):b.we.Ok(a).chroming}function d(a,b){var c=a.name,d=a.form;c?(c=c.replace(/'/g,"\\'"),c=":radio[name\x3d'"+c+"']:oj-button",d=b?b.filter(c):d?f(d).find(c):f(c,a.ownerDocument).filter(function(){return!this.form})):d=(b?b.filter(a):
f(a)).filter(":oj-button");return d}function c(a,b){a.removeClass(n).addClass(p[b])}b.ya("oj.ojButton",f.oj.baseComponent,{defaultElement:"\x3cbutton\x3e",widgetEventPrefix:"oj",options:{chroming:"full",disabled:!1,display:"all",label:null,icons:{start:null,end:null},menu:null},Ud:function(a,b){this._super(a,b);this.Qfa();"disabled"in b||this.option("disabled",!!this.element.prop("disabled"),{_context:{Za:!0}});"label"in b||(this.Goa=!0,this.option("label","inputPush"===this.type?this.yd.val():this.yd.html(),
{_context:{Za:!0}}));!this.options.menu||b.icons&&void 0!==b.icons.end||this.option("icons.end","oj-component-icon oj-button-menu-dropdown-icon",{_context:{Ec:!0,Za:!0}})},_ComponentCreate:function(){function a(){b.qK=Date.now();b.sb.removeClass(l);b.sb.removeClass("oj-hover");b.Jh()}this._super();this.element.closest("form").unbind("reset"+h).bind("reset"+h,function(){var a=f(this);setTimeout(function(){a.find(":oj-button").each(function(){f(this).data("oj-ojButton").sA(!1)}).length||a.unbind("reset"+
h)},1)});this.Du=this.eventNamespace+"menu";this.Rfa();this.FN=!!this.sb.attr("title");var b=this,d=this.Vw,l=d?"":"oj-active";this.sb.addClass(k);c(this.sb,this.options.chroming);this.document.bind("touchend"+this.eventNamespace+" touchcancel"+this.eventNamespace,a);this.yd.bind("touchstart"+this.eventNamespace,function(){b.Vd()||(f(this).addClass(l),b.Jh())}).bind("touchend"+this.eventNamespace+" touchcancel"+this.eventNamespace,a).bind("mouseenter"+this.eventNamespace,function(){b.Vd()||b.xx()||
(this===e&&b.sb.addClass("oj-active"),b.sb.addClass("oj-hover").removeClass("oj-default oj-focus-only"))}).bind("mouseleave"+this.eventNamespace,function(){b.sb.removeClass("oj-hover");b.Vd()||(b.sb.removeClass(l),b.Jh())}).bind("click"+this.eventNamespace,function(a){b.Vd()&&(a.preventDefault(),a.stopImmediatePropagation())});this.element.bind("focus"+this.eventNamespace,function(){b.sb.addClass("oj-focus");b.Jh()}).bind("blur"+this.eventNamespace,function(){b.sb.removeClass("oj-focus");b.Jh()});
d&&(this.element.bind("change"+this.eventNamespace,function(a){b.sA(!0);var c=f(this).closest(":oj-buttonset").data("oj-ojButtonset"),d=c&&c.tV(c.Bd);c&&void 0!==d&&c.option("checked",d,{_context:{Ec:!0,originalEvent:a,Za:!0}})}),this.yd.bind("mousedown"+this.eventNamespace,function(){b.Vd()||(g=this,b.document.one("mouseup",function(){g=null}))}).bind("mouseup"+this.eventNamespace,function(){b.Vd()||this!==g||b.element.focus()}));"checkbox"===this.type?(this.yd.bind("click"+this.eventNamespace,function(){if(b.Vd())return!1}),
this.element.bind("keyup"+this.eventNamespace,function(a){a.keyCode===f.ui.keyCode.ENTER&&(b.Vd()||b.element.click())})):"radio"===this.type?(this.yd.bind("click"+this.eventNamespace,function(){if(b.Vd())return!1}),this.element.bind("keyup"+this.eventNamespace,function(a){a.keyCode!==f.ui.keyCode.ENTER||b.element[0].checked||b.Vd()||(b.element[0].checked=!0,b.element.change(),b.element.click())})):(this.yd.bind("mousedown"+this.eventNamespace,function(a){if(b.Vd())return!1;1!==a.which||b.xx()||(f(this).addClass("oj-active").removeClass("oj-default oj-focus-only"),
e=this,b.document.one("mouseup",function(){e=null}))}).bind("mouseup"+this.eventNamespace,function(){if(b.Vd())return!1;f(this).removeClass("oj-active");b.Jh()}).bind("keydown"+this.eventNamespace,function(a){if(b.Vd())return!1;var c=a.keyCode===f.ui.keyCode.SPACE,d="anchor"===b.type;d&&c&&a.preventDefault();(c&&!d||a.keyCode===f.ui.keyCode.ENTER)&&f(this).addClass("oj-active").removeClass("oj-default oj-focus-only")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){f(this).removeClass("oj-active");
b.Jh()}),"anchor"===this.type&&(d=this.yd.attr("tabindex"),("undefined"===d||null===d||isNaN(d))&&this.yd.attr("tabindex","0")));this.sM();this.cfa();this.R_();this.Jh()},xx:function(){return 500>Date.now()-this.qK},lf:function(a,b,c){this.nf(b,c,{position:{of:"keyboard"===c?this.sb:b}})},Qfa:function(){if(this.element.is("input[type\x3dcheckbox]"))this.type="checkbox",this.Vw=!0;else if(this.element.is("input[type\x3dradio]"))this.type="radio",this.Vw=!0;else if(this.element.is("input[type\x3dbutton],input[type\x3dsubmit],input[type\x3dreset]"))this.type=
"inputPush";else if(this.element.is("button"))this.type="button";else if(this.element.is("a"))this.type="anchor";else throw Error("JET Button not supported on this element type");if(this.Vw){var a="label[for\x3d'"+this.element.attr("id")+"']";this.yd=this.element.siblings().filter(a)}else this.yd=this.element},Rfa:function(){this.Vw?(this.yd.addClass("oj-button-label"),this.element.addClass("oj-button-input oj-helper-hidden-accessible").add(this.yd).wrapAll("\x3cspan\x3e\x3c/span\x3e"),this.sb=this.element.parent(),
this.sb.addClass("oj-button-toggle"),this.element[0].checked&&this.sb.addClass("oj-selected").removeClass("oj-default oj-focus-only")):this.sb=this.element},widget:function(){return this.sb},_destroy:function(){this.PZ();this.document.off(this.eventNamespace);this.element.removeClass("oj-helper-hidden-accessible").removeUniqueId();var a=this.Vw;a||this.sb.removeClass(k+" "+l+" "+m+" "+n);this.yd.html(this.yd.find(".oj-button-text").html());a?(this.yd.removeClass("oj-button-label"),b.v.unwrap(this.element)):
this.FN||this.sb.removeAttr("title");g===this.yd[0]&&(g=null)},ii:function(){this._super();this.Jh()},Jv:function(a){this._super(a);this.sM()},sM:function(){var a=this.Vd();this.sb.toggleClass("oj-disabled",a);this.sb.toggleClass("oj-enabled",!a);"anchor"!==this.type?(this.element.prop("disabled",a),this.sb.removeAttr("aria-disabled")):this.sb.attr("aria-disabled",a);a?(this.widget().removeClass("oj-active oj-default oj-focus-only oj-hover oj-focus"),e=null,this.aI()):this.Jh()},_setOption:function(a,
b,d){this._super(a,b,d);switch(a){case "chroming":c(this.sb,b);break;case "disabled":this.sM();break;case "label":this.ska();break;case "display":"inputPush"!==this.type&&this.RC();break;case "icons":this.pka(!0);break;case "menu":this.R_()}},refresh:function(){this._super();this.JS&&!f(this).closest(":oj-buttonset").length&&this.Jv(!1);c(this.sb,this.options.chroming)},sA:function(a){"radio"===this.type?(a?d(this.element[0]):this.element).each(function(){var a=f(this).data("oj-ojButton");this.checked?
a.sb.addClass("oj-selected").removeClass("oj-default oj-focus-only"):(a.sb.removeClass("oj-selected"),a.Jh())}):"checkbox"===this.type&&(this.element[0].checked?this.sb.addClass("oj-selected").removeClass("oj-default oj-focus-only"):(this.sb.removeClass("oj-selected"),this.Jh()))},cfa:function(){if("inputPush"===this.type)this.C_();else{var a=this.rka(),b=this.SC(!0),c=this.SC(!1);this.RC(a,b,c)}},rka:function(){var a=this.yd,b=f("\x3cspan class\x3d'oj-button-text'\x3e\x3c/span\x3e",this.document[0]);
this.Goa?b.append(a.contents()):(a.empty(),b.text(this.options.label));a.append(b);return b},ska:function(){if("inputPush"===this.type)this.C_();else{var a=this.yd.find(".oj-button-text");a.text(this.options.label);this.RC(a)}},C_:function(){this.options.label&&this.element.val(this.options.label)},pka:function(){if("inputPush"!==this.type){var a=this.SC(!0),b=this.SC(!1);this.RC(void 0,a,b)}},SC:function(a){if(a){var b=".oj-button-icon.oj-start";a="oj-button-icon oj-start";var c=this.options.icons.start,
d="_lastStartIcon",e="prependTo"}else b=".oj-button-icon.oj-end",a="oj-button-icon oj-end",c=this.options.icons.end,d="_lastEndIcon",e="appendTo";b=this.yd.find(b);c?(b.length?b.removeClass(this[d]):b=f("\x3cspan\x3e\x3c/span\x3e").addClass(a)[e](this.yd),b.addClass(c)):b.remove();this[d]=c;return!!c},RC:function(a,b,c){void 0===a&&(a=this.yd.find(".oj-button-text"));void 0===b&&(b=!!this.options.icons.start);void 0===c&&(c=!!this.options.icons.end);var d=b&&c;c=b||c;var e="icons"===this.options.display;
c&&e?(a.addClass("oj-helper-hidden-accessible"),this.FN||(a=a.text(),this.sb.attr("title",f.trim(a)))):(a.removeClass("oj-helper-hidden-accessible"),this.FN||this.sb.removeAttr("title"));b=c?e?d?"oj-button-icons-only":"oj-button-icon-only":d?"oj-button-text-icons":b?"oj-button-text-icon-start":"oj-button-text-icon-end":"oj-button-text-only";this.sb.removeClass(m).addClass(b)},R_:function(){if(this.options.menu&&this.element.is("input"))throw Error("Menu Button functionality is not supported on input elements.");
this.PZ();if(this.options.menu){var a=this;this.element.attr("aria-haspopup",!0).on("keydown"+this.Du,function(b){if(b.which===f.ui.keyCode.DOWN)a.W_(b,"firstItem"),b.preventDefault();else if(b.which===f.ui.keyCode.ESCAPE){var c=a.P$(a.sb);a.aI(b);return c}return!0}).on("click"+this.Du,function(b){var c=a.XI();c.kA||a.W_(b,"firstItem");c.kA=!1;b.preventDefault();return!0})}},P$:function(a){return!a.hasClass("oj-selected")},PZ:function(){this.element.removeAttr("aria-haspopup").off(this.Du);this.aI();
this.oa&&this.oa.widget().off(this.Du);this.oa=void 0},XI:function(){if(!this.oa){this.oa=f(this.options.menu).data("oj-ojMenu");if(!this.oa)throw Error('JET Button: "menu" option specified, but does not reference a valid JET Menu.');var a=this;this.oa.widget().on("oj__dismiss"+this.Du,function(b){a.AY(b)}).on("ojbeforeopen"+this.Du,function(b){a.mY||a.AY(b);a.mY=!1})}return this.oa},W_:function(a,b){if(!this.Vd()){this.mY=!0;var c=this.XI(),d=c.widget();c.open(a,{launcher:this.element,initialFocus:b});
this.CY=!0;d.attr("aria-label")||d.attr("aria-labelledby")||(this.element.uniqueId(),this.t_=!0,d.attr("aria-labelledby",this.element.attr("id")));this.sb.addClass("oj-selected").removeClass("oj-default oj-focus-only")}},aI:function(a){this.CY&&(this.oa.FG(a,!0),this.oa.Hp(a))},AY:function(){this.t_&&(this.XI().widget().removeAttr("aria-labelledby"),this.t_=!1);this.sb.removeClass("oj-selected");this.Jh();this.CY=!1},Jh:function(){var a,b;this.sb.is(".oj-hover, .oj-active, .oj-selected, .oj-disabled")?
b=a=!1:(b=this.sb.is(".oj-focus"),a=!b);this.sb.toggleClass("oj-default",a);this.sb.toggleClass("oj-focus-only",b)}});b.ya("oj.ojButtonset",f.oj.baseComponent,{iY:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a",widgetEventPrefix:"oj",options:{checked:null,chroming:"full",focusManagement:"oneTabstop"},Ix:function(a,b){var c=f.type(a),d;if("null"===c||"array"===c)d=b.filter("input[type\x3dcheckbox]").length===b.length;if(d&&
"null"===c)throw Error("Invalid 'checked' value set on JET Buttonset: "+a);if("string"===c||"null"===c)(c=((c=b[0].name)||1>=b.length)&&b.filter("input[type\x3dradio][name\x3d"+c+"]").length===b.length&&(null===a||b.filter("[value\x3d"+a+"]").length))&&b.each(function(){this.checked=this.value===a}),c=c||null===a;else if("array"===c){var e;(c=d&&a.concat().sort().every(function(a){var c=a!==e&&b.filter("[value\x3d"+a+"]").length;e=a;return c}))&&b.each(function(){this.checked=-1<a.indexOf(this.value)})}else c=
!1;if(!c)throw Error("Invalid 'checked' value set on JET Buttonset: "+a);},tV:function(a){var b=void 0,c=null,d=null;a.each(function(){if("input"!==this.tagName.toLowerCase())return b=void 0,!1;var a=this.type.toLowerCase(),e;if("radio"===a)a=!0,e=this.name.toLowerCase();else if("checkbox"===a)a=!1,e=null;else return b=void 0,!1;if(void 0!==b&&(a!==c||e!==d||c&&!d))return b=void 0,!1;void 0===b?(b=a?this.checked?this.value:null:this.checked?[this.value]:[],c=a,d=e):this.checked&&(c?b=this.value:b.push(this.value))});
return b},rv:function(a,b,c){return"checked"===a?b===c?!0:"array"===f.type(b)&&"array"===f.type(c)&&!f(b).not(c).length&&!f(c).not(b).length:this._superApply(arguments)},Ud:function(a,b){this._super(a,b);this.Bd=this.element.find(this.iY);if(!("checked"in b)){this.HN=!0;var c=this.tV(this.Bd);"array"===f.type(c)&&(this.options.checked=[]);void 0!==c&&this.option("checked",c,{_context:{Za:!0}})}},_ComponentCreate:function(){this._super();this.element.attr(b.Components.hn,this.widgetName).addClass("oj-buttonset oj-component");
this.N_(this.options.focusManagement);this.Aa(!0)},lf:function(a,b,c){a=this.element.find(":oj-button[tabindex\x3d0]");this.nf(b,c,{launcher:a,position:{of:"keyboard"===c?a.ojButton("widget"):b}})},ao:function(a){a=!!a;this.Bd.each(function(){f(this).data("oj-ojButton").Jv(a)})},N_:function(a){"oneTabstop"===a?this.element.attr("role","toolbar"):this.element.removeAttr("role")},_setOption:function(a,b,d){this._superApply(arguments);"disabled"===a?this.ao(b):"checked"===a?(this.Ix(b,this.Bd),this.Bd.each(function(){f(this).data("oj-ojButton").sA(!1)})):
"focusManagement"===a?this.N_(b):"chroming"===a&&(c(this.element,b),this.Bd.ojButton("refresh"))},refresh:function(){this._super();this.Aa(!1)},Aa:function(a){var b=this;this.Lf="rtl"===this.ac();c(this.element,this.options.chroming);a?this.HN||this.Ix(this.options.checked,this.Bd):this.Bd=this.element.find(this.iY);this.element.toggleClass("oj-buttonset-multi",1<this.Bd.length);this.Bd.filter(":oj-button").ojButton("refresh").each(function(){f(this).data("oj-ojButton").sA(!1)}).end().not(":oj-button").ojButton().end().map(function(){return f(this).ojButton("widget")[0]}).removeClass("oj-buttonset-first oj-buttonset-last").filter(":first").addClass("oj-buttonset-first").end().filter(":last").addClass("oj-buttonset-last").end().end();
this.ao(this.options.disabled);"oneTabstop"===this.options.focusManagement&&(this.Bd.unbind("keydown"+this.eventNamespace).bind("keydown"+this.eventNamespace,function(a){b.nq(a,f(this))}).unbind("click"+this.eventNamespace).bind("click"+this.eventNamespace,function(){f(this).data("oj-ojButton").Vd()||b.Iq(f(this))}).unbind("focus"+this.eventNamespace).bind("focus"+this.eventNamespace,function(){b.Iq(f(this))}),this.fl=this.Bd.filter(function(){return!f(this).data("oj-ojButton").Vd()}),this.aK(a))},
aK:function(a){var b=f(this.xq);this.xq=void 0;this.Bd.attr("tabindex","-1");a=a||!b.is(this.fl)?this.fl.first():b;this.Iq(a)},uK:function(a){var b=this.fl;return a.map(function(a,c){if("radio"!=c.type||c.checked||""==c.name)return c;var e=d(c,b).filter(":checked");return e.length?e[0]:c})},Iq:function(a){a=this.uK(a);var b=a[0],c=this.xq;b!==c&&(f(c).attr("tabindex","-1"),a.attr("tabindex","0"),this.xq=b)},nq:function(a,b){switch(a.which){case f.ui.keyCode.LEFT:case f.ui.keyCode.RIGHT:a.preventDefault();
var c=this.fl,d=c.length;if(2>d)break;var e=c.index(b);c.eq((e+(a.which==f.ui.keyCode.RIGHT^this.Lf?1:-1)+d)%d).focus();break;case f.ui.keyCode.UP:case f.ui.keyCode.DOWN:"radio"==b.attr("type")&&a.preventDefault()}},_destroy:function(){this.element.removeClass("oj-buttonset oj-component "+n).removeAttr(b.Components.hn).removeAttr("role");"oneTabstop"===this.options.focusManagement&&this.Bd.attr("tabindex","0");this.Bd.map(function(){return f(this).ojButton("widget")[0]}).removeClass("oj-buttonset-first oj-buttonset-last").end().ojButton("destroy")}});
var e,g,h=".ojButton",k="oj-button oj-component oj-enabled oj-default",l="oj-hover oj-active oj-selected",m="oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only",n="oj-button-full-chrome oj-button-half-chrome oj-button-outlined-chrome",p={full:"oj-button-full-chrome",half:"oj-button-half-chrome",outlined:"oj-button-outlined-chrome"},r={button:["ojButtonset","ojToolbar"],buttonset:["ojToolbar"]};b.Components.Em({ojButton:{chroming:b.Components.ih(function(b){return a("button",
b.element,b.containers)})},ojButtonset:{chroming:b.Components.ih(function(b){return a("buttonset",b.element,b.containers)})}})})()});