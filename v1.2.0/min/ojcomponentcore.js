/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","jqueryui-amd/core","jqueryui-amd/widget","ojs/ojmessaging"],function(b,f){function a(a,b){function c(){var a=f(this),d=a.data(k);if(null!=d)for(var e=0;e<d.length;e++){var g=a.data("oj-"+d[e]);null!=g&&b(g)}}var d=f(a);d.hasClass(l)&&c.call(a);d.find("."+l).each(c)}function d(a){this.mN=function(){return a}}function c(a,b,c,d,g,f,h){var k=c,m=!1,p={};delete d[g];Object.defineProperty(d,g,{get:function(){if(m||null!=a.St)return k;var c=f(h?h():g);return e([b,c,k],p)},
set:function(b){k=b;null!=a.St?p[a.St]=!0:m=!0},enumerable:!0})}function e(a,b){for(var c=void 0,d=0;d<a.length;d++){var e=a[d];void 0!==e&&(c=f.isPlainObject(e)?g(f.isPlainObject(c)?[c,e]:[e],d==a.length-1?null:b,null):e)}return c}function g(a,b,c){for(var d={},e=a.length,h=0;h<e;h++)for(var k=a[h],m=Object.keys(k),p=0;p<m.length;p++){var n=m[p],l=null==b?null:null==c?n:c+"."+n;if(null==b||!b[l]){var I=k[n];void 0!==I&&(d[n]=f.isPlainObject(I)?g(f.isPlainObject(d[n])?[d[n],I]:[I],b,l):I)}}return d}
function h(){return!0}b.Components={};o_("Components",b.Components,b);b.Components.Em=function(a){b.Components.sU=f.widget.extend(b.Components.sU||{},a)};o_("Components.setDefaultOptions",b.Components.Em,b);b.Components.p2=function(){return b.Components.sU||{}};o_("Components.getDefaultOptions",b.Components.p2,b);b.Components.ih=function(a){return new d(a)};o_("Components.createDynamicPropertyGetter",b.Components.ih,b);b.Components.sg=function(a,b){var c=f(a),d=c.data(k);return d&&(null==b?b=d[0]:
0>d.indexOf(b)&&(b=void 0),null!=b&&(d=c[b],"function"===typeof d))?d.bind(c):null};o_("Components.getWidgetConstructor",b.Components.sg,b);b.Components.Nf=function(c){b.v.X1(c);a(c,function(a){a.gn()})};o_("Components.subtreeAttached",b.Components.Nf,b);b.Components.Bg=function(b){a(b,function(a){a.ii()})};o_("Components.subtreeDetached",b.Components.Bg,b);b.Components.Hm=function(c){b.v.X1(c);a(c,function(a){a.ml()})};o_("Components.subtreeShown",b.Components.Hm,b);b.Components.Xo=function(b){a(b,
function(a){a.ll()})};o_("Components.subtreeHidden",b.Components.Xo,b);b.Components.KN=function(a){var b=a.data(k);return f.isArray(b)&&-1<b.indexOf("ojPopup")&&a.is("."+l)?!0:!1};b.Components.hn="data-oj-container";var k="oj-component-names",l="oj-component-initnode";f.widget("oj.baseComponent",{options:{contextMenu:null,rootAttributes:null,optionChange:void 0,destroy:void 0},refresh:function(){this.Lt=null},_createWidget:function(a,b){this.VY=this.options||{};this.OT=a||{};this._super(a,b);this.pQ()},
bA:function(){var a=this.options.rootAttributes;if(a){var b=this.widget();if(null!=b){var c=a["class"];c&&b.addClass(c);if(c=a.style){var d=b.attr("style");d?b.attr("style",d+";"+c):b.attr("style",c)}a=f.extend({},a);delete a["class"];delete a.style;b.attr(a);delete a.id;a=Object.keys(a);if(a.length)throw Error("Unsupported values passed to rootAttributes option: "+a.toString());}}},_create:function(){this.Dv(this.element);this.Ud(this.VY,this.OT);delete this.VY;delete this.OT;this._ComponentCreate();
this.hf();this.element.addClass(l)},Ud:function(a,b){this.Nka(a,b);this.Tfa(b)},_ComponentCreate:function(){var a=this.element,b=this.widgetName,c=a.data(k);c||(c=[],a.data(k,c));0>c.indexOf(b)&&c.push(b)},hf:function(){this.bA();this.Ci=this.eventNamespace+"contextMenu";this.Q_(!0)},pQ:f.noop,Dv:function(){},b9:function(a){var b=this;this.pL=[];f.each(a,function(a,c){var d={},e=c.attributes;b.pL.push({element:c,attributes:d});f.each(e,function(a,b){var e=b.name;d[e]={attr:b.value,prop:f(c).prop(e)}})})},
YQ:function(a){var b=this.pL;if(void 0===b)return null;a=a[0];for(var c=0,d=b.length;c<d;c++){var e=b[c];if(e.element===a)return e.attributes}return{}},us:function(){},H8:function(){f.each(this.pL,function(a,b){var c=f(b.element),d=b.attributes;if(1===c.length){for(var e=b.element.attributes,g=[],h=0,k=e.length;h<k;h++)e[h].name in d||g.push(e[h].name);h=0;for(k=g.length;h<k;h++)c.removeAttr(g[h]);for(var m in d)c.attr(m,d[m].attr)}})},Gz:function(){return this.widgetFullName},rv:function(a,b,c){return b==
c},A:function(a,c){var d={},e;2<arguments.length?d=Array.prototype.slice.call(arguments,1):2==arguments.length&&(d=arguments[1],"object"===typeof d||d instanceof Array||(d=[d]));e=this.option(n+a);return null==e?a:b.ha.Ib(e.toString(),d)},getNodeBySubId:function(a){return null==a||null==a.subId?this.element?this.element[0]:null:null},getSubIdByNode:function(){return null},destroy:function(){this._trigger("destroy");this._super();this.IZ();this.element.removeClass(l);this.widget().removeClass("oj-disabled");
this.fL(this.element);var a=this.element,b=this.widgetName,c=a.data(k);c&&(b=c.indexOf(b),0<=b&&(c.splice(b,1),0===c.length&&a.removeData(k)));this.us();this.BX?this.element.attr("contextmenu",this.BX):this.element.removeAttr("contextmenu");this.Lt=null},option:function(a,b){if(0===arguments.length)return f.widget.extend({},this.options);var c=arguments[0],d=c,e=null,g={};if("string"===typeof c){var d={},h=c.split("."),c=h.shift();if(h.length){var e=h.join("."),k;try{1<arguments.length&&(this.St=
e),k=d[c]=f.widget.extend({},this.options[c])}finally{this.St=null}for(c=0;c<h.length-1;c++)k[h[c]]=k[h[c]]||{},k=k[h[c]];c=h.pop();if(1===arguments.length)return void 0===k[c]?null:k[c];k[c]=b}else{if(1===arguments.length)return void 0===this.options[c]?null:this.options[c];d[c]=b}g=arguments[2]||g}else g=arguments[1]||g;null!=e&&(g=f.widget.extend({},g,{subkey:e}));(e=g?g._context:null)&&e.Za?this.qga(d,g):this._setOptions(d,g);return this},qga:function(a,b){for(var c in a){var d=a[c],e=this.options[c];
this.options[c]=d;this.TY(c,d,e,b)}},_setOptions:function(a,b){for(var c in a)this._setOption(c,a[c],b);return this},_setOption:function(a,b,c){var d=this.options[a];if("disabled"===a)this.options[a]=b,this.widget().toggleClass("oj-disabled",!!b).attr("aria-disabled",b),b&&this.fL(this.widget());else{try{var e=null==c?null:c.subkey;null!=e&&(this.St=e);this._super(a,b)}finally{this.St=null}"contextMenu"===a&&this.Q_(!1)}this.TY(a,b,d,c);return this},TY:function(a,b,c,d){var e=!1,g=null,h=!1,k=null,
m=null,p;d&&(e=d.changed,g=d._context)&&(k=g.originalEvent,h=void 0===g.Ec?null!=k:g.Ec,m=g.rr,p=g.Cj);if(e||!this.rv(a,c,b))m=m||{},m.writeback=h?"shouldWrite":"shouldNotWrite",a={option:a,previousValue:c,value:b,optionMetadata:m},null!=p&&(a=f.extend({},p,a)),this._trigger("optionChange",k,a)},_trigger:function(a,b,c){var d=this.options[a];c=c||{};b=f.Event(b,p);b.type=(this.widgetEventPrefix+a).toLowerCase();b.target=this.element[0];this.element.trigger(b,c);return!(f.isFunction(d)&&!1===d.apply(this.element[0],
[b].concat(c))||b.isDefaultPrevented())},Tfa:function(a){var b=this.element.attr("contextmenu");this.BX=b;!b||"contextMenu"in a||this.option("contextMenu","#"+b,{_context:{Za:!0}})},Q_:function(a){this.IZ();if(this.options.contextMenu){var c=this.widget(),d=this.element;a&&!d.is(c)&&d.removeAttr("contextmenu");(a=f(this.options.contextMenu).attr("id"))&&c.attr("contextmenu",a);var e=this;this.aZ=function(a){121==a.which&&a.shiftKey&&e.BV().is(":visible")&&a.preventDefault()};var g=!1,h=!1,k,m,p,n=
null,l=function(a,b,d){g=d;var f=e.EI();if(g)c.one("touchend"+e.Ci,function(){f.As(!0);setTimeout(function(){f.As(!1)},50)});"touchstart"===n&&"contextmenu"===a.type||"contextmenu"===n&&"touchstart"===a.type?(n=null,clearTimeout(p)):a.isDefaultPrevented()||a.originalEvent&&a.originalEvent.defaultPrevented||e.Vd()||(e.lf(f,a,b),!e.BV().is(":visible")||(a.preventDefault(),document.addEventListener("keyup",e.aZ),"touchstart"!==a.type&&"contextmenu"!==a.type))||(n=a.type,p=setTimeout(function(){n=null},
300))};this.DT=function(a){g&&(a.preventDefault(),a.stopPropagation(),g=!1)};c[0].addEventListener("click",this.DT,!0);c.on("touchstart"+this.Ci+" mousedown"+this.Ci+" keydown"+this.Ci+" ",function(a){if("mousedown"!==a.type||!e.EI().As()){g=!1;if("touchstart"===a.type&&1===a.originalEvent.touches.length){var b=a.originalEvent.touches[0];k=b.pageX;m=b.pageY;h=!0;this.EH=setTimeout(l.bind(void 0,a,"touch",!0),750)}return!0}}).on("touchmove"+this.Ci,function(a){a=a.originalEvent.touches[0];if(5<Math.abs(k-
a.pageX)||5<Math.abs(m-a.pageY))h=!1,clearTimeout(this.EH);return!0}).on("touchend"+this.Ci+" touchcancel"+this.Ci,function(){h=!1;clearTimeout(this.EH);return!0}).on("keydown"+this.Ci+" contextmenu"+this.Ci,function(a){("contextmenu"===a.type||121==a.which&&a.shiftKey)&&l(a,h?"touch":"keydown"===a.type?"keyboard":"mouse",!1);return!0}).addClass(b.v.Od()?"oj-menu-context-menu-launcher":void 0)}},x_:function(){this.Tp=f(this.options.contextMenu).first();this.JA=this.Tp.data("oj-ojMenu");if(!this.JA)throw Error('"contextMenu" option set to "'+
this.options.contextMenu+'", which does not reference a valid JET Menu.');var a=this;this.Tp.on("oj__dismiss"+this.Ci,function(){document.removeEventListener("keyup",a.aZ)})},EI:function(){this.JA||this.x_();return this.JA},BV:function(){this.Tp||this.x_();return this.Tp},IZ:function(){this.widget().removeAttr("contextmenu").off(this.Ci).removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click",this.DT,!0);this.Tp&&this.Tp.off(this.Ci);clearTimeout(this.EH);this.Tp=this.JA=void 0},
lf:function(a,b,c){this.nf(b,c)},nf:function(a,b,c,d,e){b={launcher:this.element,position:{mouse:{my:"start top",at:"start bottom",of:a,collision:"flipfit"},touch:{my:"start\x3e40 center",at:"start bottom",of:a,collision:"flipfit"},keyboard:{my:"start top",at:"start bottom",of:"launcher",collision:"flipfit"}}[b]};var g={initialFocus:"menu"};c=e?f.extend(b,c,g):f.extend(!0,b,c,g);e=this.EI();e.jA=!0;e.open(a,c,d);e.jA=!1},fL:function(a){a.removeClass("oj-hover oj-focus oj-active");a.find(".oj-hover").removeClass("oj-hover");
a.find(".oj-focus").removeClass("oj-focus");a.find(".oj-active").removeClass("oj-active")},_hoverable:function(a){this._on(a,{mouseenter:function(a){f(a.currentTarget).hasClass("oj-disabled")||f(a.currentTarget).addClass("oj-hover")},mouseleave:function(a){f(a.currentTarget).removeClass("oj-hover")}})},_focusable:function(a){this._on(a,{focusin:function(a){f(a.currentTarget).addClass("oj-focus")},focusout:function(a){f(a.currentTarget).removeClass("oj-focus")}})},Jp:function(a){this._on(a,{mousedown:function(a){f(a.currentTarget).addClass("oj-active")},
mouseup:function(a){f(a.currentTarget).removeClass("oj-active")}})},Fp:function(a){if(a){f(a).off(this.eventNamespace);var b=this.bindings;b&&(this.bindings=f(b.not(a)))}},G2:function(a){return this.option(n+a)},ac:function(){return b.v.im()},gn:function(){this.Lt=null},ii:function(){this.Lt=null;this.fL(this.widget())},ml:function(){},ll:function(){},Vd:function(){return this.options.disabled||this.JS?!0:!1},Jv:function(a){this.JS=a},bea:function(){var a=[],c=this,d=0;this.J0(function(e){e=0==d?
c.Gz():e.widgetFullName;d++;var g=b.ha.YD(e);null==g||f.isEmptyObject(g)||a.push(e)});var e=a.length;return 0<e?function(){if(1==e)return b.ha.YD(a[0]);for(var c={},d=e-1;0<=d;d--)f.widget.extend(c,b.ha.YD(a[d]));return c}:null},Vca:function(){if(!this.Lt){var a={};this.Lt=a;for(var c=this.element[0],d=c,e=[];d;){var g=d.getAttribute,g=g?g.call(d,b.Components.hn):null;null!=g&&e.push(g);d=d.parentNode}a.containers=e;a.element=c}return this.Lt},Nka:function(a,b){var d=this.options,e=this.bea(),g=b[m];
null==e||void 0!==g&&!f.isPlainObject(g)||c(this,void 0,b[m],d,m,e);this.eha(a,b)},eha:function(a,g){var h=this.options,k={},m=[];this.J0(function(a){m.push(a.widgetName)});var p=b.Components.p2();m.push("default");for(var n=m.length-1;0<=n;n--){var l=p[m[n]];void 0!==l&&(k=f.widget.extend(k,l))}if(!f.isEmptyObject(k)){var y=this,p=function(){return y.Vca()},B;for(B in k)if(n=g[B],void 0===n||f.isPlainObject(n))l=k[B],null!=l&&l instanceof d?(l=l.mN(),f.isFunction(l)?c(this,a[B],n,h,B,l,p):b.r.error("Dynamic getter for property %s is not a function",
B)):h[B]=e([a[B],l,n])}},J0:function(a){for(var b=this.constructor.prototype;null!=b&&"oj"===b.namespace;)a(b),b=Object.getPrototypeOf(b)}});delete f.fn.baseComponent;b.ya=function(a,b,c,d){f.widget(a,b,c);d&&delete f.fn[a.split(".")[1]];if("oj.oj"===a.substring(0,5)||"oj._oj"===a.substring(0,6)){b=a.split(".");a=b[0];b=b[1];var e=a+"-"+b;f.expr[":"][("_"===b.substring(0,1)?"_"+a+"-"+b.substring(3):a+"-"+b.substring(2)).toLowerCase()]=function(a){return!!f.data(a,e)}}};var m="translations",n=m+".",
p={preventDefault:function(){this.isDefaultPrevented=h},stopPropagation:function(){this.isPropagationStopped=h},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=h}};f(document).ready(function(){var a=f("\x3cdiv style\x3d'border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs\x3d);'\x3e\x3c/div\x3e"),b;a.appendTo("body");b=a.css("backgroundImage");a.css("borderTopColor")!=
a.css("borderRightColor")&&(null==b||"none"!=b&&"url (invalid-url:)"!=b)||f("body").addClass("oj-hicontrast");a.remove()});f(document).ready(function(){"Microsoft Internet Explorer"==navigator.appName&&f("html").addClass("oj-slow-borderradius oj-slow-cssgradients oj-slow-boxshadow")});b.v={};b.v.w7="\x3chtml\x3e";b.v.v7="\x3c/html\x3e";b.v.Q7={SPAN:1,B:1,I:1,EM:1,BR:1,HR:1,LI:1,OL:1,UL:1,P:1,TT:1,BIG:1,SMALL:1,PRE:1};b.v.P7={"class":1,style:1};b.v.Coa=function(a){return 0===a.indexOf(b.v.w7)&&a.lastIndexOf(b.v.v7)===
a.length-7?!0:!1};b.v.Dma=function(a){var c=f(document.createElement("span")).get(0);(c.innerHTML=a)&&0<=a.indexOf("\x3c")&&b.v.tT(c);return c};b.v.tT=function(a){for(var c=a.childNodes,d,e,g,h,k,m=c.length-1;0<=m;){if((d=c.item(m))&&1===d.nodeType)if(b.v.Q7[d.nodeName]){e=d.attributes;for(k=e.length-1;0<=k;k--)g=e[k],(h=void 0!==f(d).attr(g.name))&&(b.v.P7[g.name]||d.removeAttribute(g.nodeName));b.v.tT(d)}else d&&a.removeChild(d);m--}};b.v.Sk=function(a,b){for(var c=b.parentNode;c;){if(c==a)return!0;
c=c.parentNode}return!1};b.v.Ho=function(a,c){return c==a?!0:b.v.Sk(a,c)};b.v.eh=function(a,c,d){var e=f(a),g=e.data(b.v.Bv);null==g&&(g=new b.v.G8(a),e.data(b.v.Bv,g),g.start());g.addListener(c,d)};b.v.Qh=function(a,c){var d=f(a),e=d.data(b.v.Bv);null!=e&&(e.removeListener(c),e.mh()&&(e.stop(),d.removeData(b.v.Bv)))};b.v.X1=function(a){f(a).find(".oj-helper-detect-expansion").parent().each(function(a,c){var d=f(c).data(b.v.Bv);null!=d&&d.om(!0)})};b.v.Io=function(a){var c=b.Ma.oy();return b.Ma.Ui.MP===
c.os?a.metaKey:a.ctrlKey};b.v.rga=(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){return window.setTimeout(a,0)}).bind(window);b.v.oT=(window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||function(a){return window.clearTimeout(a)}).bind(window);b.v.G8=function(a){function c(a){var b=!1;if(null!=A.offsetParent){var e=A.offsetWidth,g=A.offsetHeight;if(F!==e||D!==g)l=n,h(e,g),b=!0,a&&d(!0)}return b}
function d(c){var e=a.offsetWidth,g=a.offsetHeight;k.has()&&(c?(null!==I&&b.v.oT(I),I=b.v.rga(function(){I=null;k.fire(e,g)})):k.fire(e,g));for(c=0;c<m.length;c++)m[c].mN()(e,g)}function e(a){a.stopPropagation();!c(!0)&&0<l&&null!=A.offsetParent&&(0==A.scrollLeft||0==A.scrollTop)&&(l--,h(F,D))}function g(){d(!1)}function h(a,b){F=a;D=b;var c=A.firstChild.style,d=1;do c.width=a+d+"px",c.height=b+d+"px",A.scrollLeft=A.scrollTop=d,d++;while((0==A.scrollTop||0==A.scrollLeft)&&5>=d);z.scrollLeft=a;z.scrollTop=
b}var k=f.Callbacks(),m=[],p=[],n=2,l=0,I=null,F=null,D=null,A=null,z=null,E=null,J=null;this.addListener=function(a,c){void 0===c||0===c?k.add(a):(m.push(new b.v.haa(a,c)),p.push(a))};this.removeListener=function(a){var b=p.indexOf(a);0<=b?(p.splice(b,1),m.splice(b,1)[0].stop()):k.remove(a)};this.mh=function(){return!k.has()&&0==p.length};this.start=function(){J=e.bind(this);if(a.attachEvent)E=g.bind(this),a.attachEvent("onresize",E);else{var b=a.childNodes[0];A=document.createElement("div");A.className=
"oj-helper-detect-expansion";var c=document.createElement("div");A.appendChild(c);null!=b?a.insertBefore(A,b):a.appendChild(A);A.addEventListener("scroll",J,!1);z=document.createElement("div");z.className="oj-helper-detect-contraction";b=document.createElement("div");b.style.width="200%";b.style.height="200%";z.appendChild(b);a.insertBefore(z,A);z.addEventListener("scroll",J,!1);this.om(!1)}};this.stop=function(){null!=I&&(b.v.oT(I),I=null);null!=A?(A.removeEventListener("scroll",J),z.removeEventListener("scroll",
J),a.removeChild(A),a.removeChild(z)):a.detachEvent("onresize",E)};this.om=function(a){var b=c(a);a&&!b&&null!=A.offsetParent&&h(F,D)}};b.v.Bv="_ojResizeTracker";b.v.kE=function(a){return/^[A-Za-z][0-9A-Z_a-z-]*$/.test(a)};b.v.haa=function(a,b){function c(){e=Array.prototype.slice.call(arguments);null==g&&(g=window.setTimeout(d,b))}function d(){a.apply(null,e);g=null}var e=null,g=null;this.mN=function(){return c};this.stop=function(){null!=g&&(window.clearTimeout(g),g=null)}};b.v.Od=function(){return"ontouchstart"in
window||0<navigator.msMaxTouchPoints||0<navigator.maxTouchPoints};b.v.G4=function(a){b.v.Wga=a};b.v.unwrap=function(a,c){var d=b.v.Wga;d&&d==a.parent().get(0)||(1<arguments.length?c.replaceWith(a):a.unwrap())};b.v.r3=function(a){function c(a){var d=a.target,e=f(d),g=d.getBoundingClientRect(),h=b.v.cE(),q="ltr"===b.v.im();return q&&("HTML"===d.nodeName||"visible"!==e.css("overflow-x"))&&a.clientX>g.right-h?!0:!q&&"HTML"===d.nodeName&&a.clientX>g.left-h?!0:!q&&"visible"!==e.css("overflow-x")&&a.clientX<
g.left+h?!0:("HTML"===d.nodeName||"visible"!==e.css("overflow-y"))&&a.clientY>g.bottom-h?!0:!1}if(!("clientX"in a&&"clientY"in a))return!1;var d=b.Ma.oy();if(b.Ma.Ui.gP===d.os||b.Ma.Ui.mF===d.os)a=!1;else{var e;if(b.Ma.Pm.vP===d.engine)try{e=a.originalTarget.localName?!1:!0}catch(g){e=!0}else e=b.Ma.Pm.CF===d.engine?c(a):b.Ma.gl.lF===d.browser?c(a):!1;a=e}return a};b.v.cE=function(){var a=b.v.Yja;if(f.isNumeric(a))return a;a=f("\x3cdiv /\x3e");f(document.body).append(a);a.width(50).height(50).css({overflow:"scroll",
visibility:"hidden",position:"absolute"});var c=f("\x3cdiv /\x3e");c.height(1);a.append(c);var c=c.width(),d=a.width();a.remove();return a=b.v.Yja=d-c};b.v.im=function(){var a=document.documentElement.getAttribute("dir");a&&(a=a.toLowerCase());return"rtl"===a?"rtl":"ltr"};b.v.py=function(a){return isNaN(a)?a&&0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0:a};b.v.zna=function(a){return isNaN(a)?a&&0<a.length?(a=parseFloat(a),isNaN(a)&&(a=0),a):0:a};b.v.Eoa=function(a){function c(a,d){if(-1>
a.bottom-d.top)return!1;var e="auto"===d.overflowY||"scroll"===d.overflowY?b.v.cE():0;if(1>d.bottom-e-a.top)return!1;e="auto"!==d.overflowX&&"scroll"!==d.overflowX||"rtl"!==b.v.im()?0:b.v.cE();if(-1>a.right-(d.left+e))return!1;e="auto"!==d.overflowX&&"scroll"!==d.overflowX||"ltr"!==b.v.im()?0:b.v.cE();return-1<a.left-(d.right-e)?!1:!0}function d(a){return"visible"!==a.css("overflow-x")||"visible"!==a.css("overflow-y")}function e(a){var b=a[0];return 1===b.nodeType?(b=b.getBoundingClientRect(),b.overflowX=
a.css("overflow-x"),b.overflowY=a.css("overflow-y"),b):f.isWindow(b)?b={width:b.innerWidth,height:b.innerHeight,top:0,bottom:b.innerHeight,left:0,right:b.innerWidth}:{height:0,width:0}}if(!a)return!1;var g=e(a),h=!0;for(a=a.parent();h&&a&&0<a.length&&1===a[0].nodeType;){if(d(a)){var k=e(a);0<k.height&&0<k.width&&(h=c(g,k))}a=a.parent()}return h};b.v.ZF="oj-logical-parent";b.v.Dna=function(a){if(a)return a.data(b.v.ZF)};b.v.H4=function(a,c){a&&(null===c?a.removeData(b.v.ZF):a.data(b.v.ZF,c))};b.v.Doa=
function(a,c){b.l.BM(a);b.l.BM(c);for(var d=c;d;){if(d==a)return!0;var e=b.v.Dna(f(d)),d=e?e[0]:d.parentNode}return!1};b.v.aqa=function(a){var b=document.createElement("a");b.href=a;a=b.protocol;null!=a&&(a=a.toLowerCase());if(0>["http:","https:"].indexOf(a))throw a+" is not a valid URL protocol";};b.v.gla=function(){f(document.body).hasClass("oj-hybrid")&&document.body.addEventListener("contextmenu",function(a){a.preventDefault()},!0)};b.v.gla();b.Sa=function(a){this.Init(a)};b.b.ga(b.Sa,b.b,"oj.ComponentMessaging");
b.Sa.$c={NONE:"none",mz:"notewindow",bv:"placeholder",Yu:"inline"};b.Sa.QF={};b.Sa.AE=function(a,c){a&&"function"===typeof c&&(b.Sa.QF[a]=c)};b.Sa.prototype.Init=function(a){b.Sa.q.Init.call(this);this.na=a;this.Lv=!1;this.mga()};b.Sa.prototype.to=function(a,c){var d=this;b.l.Df(c);this.ic=a;this.sC=b.lc.Xe(this.sC||{},c);this.Lv?this.Iia():(f.each(this.Lq,function(a,b){b.to(d)}),this.Lv=!0)};b.Sa.prototype.update=function(a){b.l.Df(a);b.l.h1(this.Lv);this.sC=b.lc.Xe(this.sC||{},a);this.Lv&&f.each(this.Lq,
function(b,c){c.MO(a)&&c.update()})};b.Sa.prototype.Lk=function(){f.each(this.Lq,function(a,b){b.Lk()});this.Lv=!1;this.ic=this.na=null;this.Lq={}};b.Sa.prototype.dw=function(a,c){return new (b.Sa.QF[a]||b.Sa.QF[b.Sa.$c.NONE])(c)};b.Sa.prototype.Nca=function(){return this.na||null};b.Sa.prototype.rda=function(){return this.ic||null};b.Sa.prototype.qi=function(){return this.sC||{}};b.Sa.prototype.oW=function(){var a={},c=!1,d,e,g=this.na.options.placeholder,h,k,m,p,n=this.na.options.displayOptions||
{},l={};k=Object.keys(n);for(m=0;m<k.length;m++){e=k[m];d=n[e];c=!1;h=e+"";if(Array.isArray(d))for(p=0;p<d.length;p++)e=d[p],c||(c=this.c_(h,e,g,l));else"string"===typeof d&&(c||(c=this.c_(h,d,g,l)));c||(l[h]=b.Sa.$c.NONE)}f.each(b.Sa.$c,function(b,c){a[c]=[]});f.each(l,function(b,c){a[c].push(b)});return a};b.Sa.prototype.c_=function(a,c,d,e){var g=!1;switch(c){case b.Sa.$c.bv:"converterHint"!==a||g||d||(e[a]=c,g=!0);break;case b.Sa.$c.Yu:"messages"!==a||g||(e[a]=c,g=!0);break;default:g||(e[a]=c,
g=!0)}return g};b.Sa.prototype.mga=function(){var a=this.oW(),c=a[b.Sa.$c.mz],d=a[b.Sa.$c.NONE],e=a[b.Sa.$c.bv],a=a[b.Sa.$c.Yu],g={};0<c.length&&(g[b.Sa.$c.mz]=this.dw(b.Sa.$c.mz,c));0<e.length&&(g[b.Sa.$c.bv]=this.dw(b.Sa.$c.bv,e));0<a.length&&(g[b.Sa.$c.Yu]=this.dw(b.Sa.$c.Yu,a));g[b.Sa.$c.NONE]=this.dw(b.Sa.$c.NONE,d);this.Lq=g};b.Sa.prototype.Iia=function(){var a=this.oW(),c,d=this;f.each(a,function(a,e){a+="";c=d.Lq[a];e&&0<e.length?c?c&&c.vr(e):(c=d.dw(a,e),d.Lq[a]=c,c.to(d)):c&&b.Sa.$c.NONE!==
a&&(c.Lk(),delete d.Lq[a])})};b.mc=function(a){this.Init(a)};b.b.ga(b.mc,b.b,"oj.MessagingStrategy");b.mc.prototype.Init=function(a){b.l.FD(a);b.mc.q.Init.call(this);this.VA=a};b.mc.prototype.to=function(a){this.Sp=a};b.mc.prototype.Lk=function(){};b.mc.prototype.vr=function(a){this.Init(a)};b.mc.prototype.MO=function(){return!0};b.mc.prototype.update=function(){};b.mc.prototype.Vh=function(){return this.Sp.rda()};b.mc.prototype.Si=function(){return this.Sp.Nca()};b.mc.prototype.cF=function(){return this.eF().bx};
b.mc.prototype.bF=function(){return this.eF().tu()};b.mc.prototype.zP=function(){var a=[],b=this.qi();(b=b&&b.B1)&&a.push(b);return a};b.mc.prototype.W5=function(){var a=[],b=this.qi();f.each(b&&b.dqa||[],function(b,c){a.push(c)});return a};b.mc.prototype.V5=function(){var a=this.qi();return a&&a.title||""};b.mc.prototype.eF=function(){var a=this.qi();return a&&a.t5||null};b.mc.prototype.kF=function(){var a=this.cF();return a&&0<a.length?!0:!1};b.mc.prototype.eQ=function(){return-1!==this.VA.indexOf("messages")?
!0:!1};b.mc.prototype.wF=function(){return-1!==this.VA.indexOf("converterHint")?!0:!1};b.mc.prototype.gQ=function(){return-1!==this.VA.indexOf("validatorHint")?!0:!1};b.mc.prototype.fQ=function(){return-1!==this.VA.indexOf("title")?!0:!1};b.mc.prototype.Z5=function(){return this.eF().PN()};b.mc.prototype.qi=function(){return this.Sp?this.Sp.qi():{}};b.$e=function(a){this.Init(a)};b.Sa.AE(b.Sa.$c.NONE,b.$e);b.$e.Zz="oj-invalid";b.$e.$z="oj-warning";b.b.ga(b.$e,b.mc,"oj.DefaultMessagingStrategy");b.$e.prototype.update=
function(){b.$e.q.update.call(this);var a=this.Vh(),c=this.bF(),d=[],e=[],g=!1,f=this.Si().widget();a&&(this.Z5()?(d.push(b.$e.$z),e.push(b.$e.Zz),g=!0):this.kF()&&c===b.X.Qb.WARNING?(d.push(b.$e.Zz),e.push(b.$e.$z)):(d.push(b.$e.Zz),d.push(b.$e.$z)),f.removeClass(d.join(" ")).addClass(e.join(" ")),a.attr({"aria-invalid":g}))};b.$e.prototype.Lk=function(){this.Si().widget().removeClass(b.$e.Zz).removeClass(b.$e.$z);this.Vh().removeAttr("aria-invalid");b.$e.q.Lk.call(this)};b.vh=function(a){this.Init(a)};
b.Sa.AE(b.Sa.$c.bv,b.vh);b.b.ga(b.vh,b.mc,"oj.PlaceholderMessagingStrategy");b.vh.prototype.Init=function(a){b.vh.q.Init.call(this,a)};b.vh.prototype.to=function(a){b.vh.q.to.call(this,a);this.YK()};b.vh.prototype.vr=function(a){b.vh.q.vr.call(this,a);this.YK()};b.vh.prototype.MO=function(a){return a&&void 0!==a.B1?!0:!1};b.vh.prototype.update=function(){b.vh.q.update.call(this);this.YK()};b.vh.prototype.YK=function(){var a=this.Vh();this.x6()&&a&&(a=this.zP(),a=a.length?a[0]:"",this.Si().option({placeholder:a},
{_context:{Aoa:!0}}))};b.vh.prototype.x6=function(){return this.wF()};b.Mi=function(a,b){this.Init(a,b)};b.Mi.PN=function(a){return b.X.tu(a)>=b.X.Qb.ERROR?!0:!1};b.b.ga(b.Mi,b.b,"oj.ComponentValidity");b.Mi.prototype.Init=function(a,c){b.Mi.q.Init.call(this);this.CX(c)};b.Mi.prototype.PN=function(){return this.Qn};b.Mi.prototype.tu=function(){return this.pha};b.Mi.prototype.update=function(a,b){this.CX(b)};b.Mi.prototype.CX=function(a){this.iaa=a;this.bx=this.lda();this.pha=b.X.tu(this.bx);this.Qn=
b.Mi.PN(this.bx)};b.Mi.prototype.lda=function(){for(var a=this.iaa||[],c=[],d,e=0;e<a.length;e++)d=a[e],d instanceof b.Fc&&!d.o1()||c.push(d);return c};b.pd={};b.pd.XR=":tabbable";b.pd.JD=function(a){var c=document.activeElement;return a&&c?b.v.Ho(a,c):!1};b.pd.ny=function(a){a.focus()};b.pd.hN=function(a){(a=b.pd.v2(a))&&b.pd.ny(a)};b.pd.v2=function(a){var c=f(a);return c.is(b.pd.XR)?a:(a=c.find(b.pd.XR))&&0<a.length?a[0]:null};b.Xi={};o_("Test",b.Xi,b);b.Xi.ready=!1;o_("Test.ready",b.Xi.ready,b);
b.Xi.kna=function(a){var c=a;if(b.Ea.jd(a))try{c=f.parseJSON(a)}catch(d){return null}return c&&c.element&&(a=f(c.element))?(a=b.Components.sg(a[0],c.component),delete c.element,a("getNodeBySubId",c)):null};o_("Test.domNodeForLocator",b.Xi.kna,b);b.Xi.wN=function(){return b.J.wN()};o_("Test.getOpenPopupCount",b.Xi.wN,b);b.Xi.$M=function(){return b.J.$M()};o_("Test.findOpenPopups",b.Xi.$M,b);b.Xi.PM=function(a,c){return b.J.PM(a,c)};o_("Test.compareStackingContexts",b.Xi.PM,b)});