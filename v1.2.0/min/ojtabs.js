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
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojconveyorbelt","ojs/ojmenu","jqueryui-amd/sortable","ojs/ojtouchproxy"],function(b,f){(function(){var a={cut:"ojtabscut","paste-before":"ojtabspastebefore","paste-after":"ojtabspasteafter",remove:"ojtabsremove"},d={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter",remove:"labelRemove"};b.ya("oj.ojTabs",f.oj.baseComponent,{widgetEventPrefix:"oj",delay:300,options:{selected:0,disabledTabs:null,truncation:"auto",
selectOn:"click",orientation:"horizontal",edge:"top",removable:!1,reorderable:!1,beforeSelect:null,select:null,beforeDeselect:null,deselect:null,beforeRemove:null,remove:null,beforeReorder:null,reorder:null,optionChange:null},_ComponentCreate:function(){var a=this.options;this._super();this.FO=!1;this.Xg=!0;this.DL(a.edge);this.UX=0==this.element.children("ul").length;this.cba();this.hZ();this.oa={};this.oa.Ge=!1;this.oa.Mm=!1;this.oa.ap=!1;this.On();this.Ld();a=this.RV(a.selected);void 0===a&&(a=
0);this.iB(a);this.Xg=void 0},iB:function(a,b){this.mC(a)&&(a=this.bW(a));this.Kv(void 0===a?void 0:f(this.cb[a]),b)},lf:function(a,b,d){if(this.Ega(b.target)&&(!this.WL||!this.WL.jD)){var h="keyboard"===d;if("contextmenu"==b.type||h||"touch"==d){var k=f(b.target).closest("li");a={launcher:k};this.oa.tab=h?this.Da:a.launcher;if(this.oa.tab){if(this.oa.ME){if(k.hasClass("oj-disabled")&&1==this.oa.Ge.children().length){b.preventDefault();return}k.hasClass("oj-disabled")?this.oa.ME.addClass("oj-disabled"):
this.oa.ME.removeClass("oj-disabled")}if(this.oa.Mm||this.oa.ap)h=!this.oa.LD,this.oa.Mm.hasClass("oj-disabled")!=h&&(h?(this.oa.Mm.addClass("oj-disabled"),this.oa.ap.addClass("oj-disabled")):(this.oa.Mm.removeClass("oj-disabled"),this.oa.ap.removeClass("oj-disabled")),this.oa.Ge.ojMenu("refresh"));this.nf(b,d,a)}else b.preventDefault()}}},kla:function(a){if(!this.aX(a)){var b=f(this.document[0].activeElement).closest("li"),d=this.ww(),h=d.index(b),k=d.length;switch(a.keyCode){case f.ui.keyCode.RIGHT:case f.ui.keyCode.DOWN:h=
(h+1)%k;break;case f.ui.keyCode.UP:case f.ui.keyCode.LEFT:h=((0==h?k:h)-1)%k;break;case f.ui.keyCode.END:h=k-1;break;case f.ui.keyCode.HOME:h=0;break;case 46:this.options.removable&&(b=this.Zs(this.Da))&&(a.preventDefault(),this.gL({target:b,currentTarget:b,preventDefault:f.noop},a));return;default:return}a.preventDefault();clearTimeout(this.gma);var l=f(d[h]);l.focus();if(!a.ctrlKey){b.attr("aria-selected","false");l.attr("aria-selected","true");this.Iw(l);var m=this;this.gma=this._delay(function(){m&&
m.cb&&m.Kv(l,a)},this.delay)}}},$ha:function(a){f(a.target).closest(".oj-tabs-selected").attr("id")===this.element.children(".oj-tabs-selected").attr("id")&&!this.aX(a)&&a.ctrlKey&&a.keyCode===f.ui.keyCode.UP&&(a.preventDefault(),this.Da.focus())},aX:function(a){var b=this.jJ();if(a.ctrlKey&&a.keyCode===f.ui.keyCode.PAGE_UP)return this.Kv(this.nV(b,!1)),!0;if(a.ctrlKey&&a.keyCode===f.ui.keyCode.PAGE_DOWN)return this.Kv(this.nV(b,!0)),!0},mC:function(a){return 0<=a&&a<this.cb.length?f(this.cb[a]).hasClass("oj-disabled"):
!1},nV:function(a,b){var d=this.ww(),h=d.index(this.cb[a]),k=d.length,d=f(d[b?(h+1)%k:((0==h?k:h)-1)%k]);d.focus();return d},bW:function(a){for(var b=a+1,d=this.cb.length-1;b<=d;){if(!this.mC(b))return b;b++}for(b=a-1;0<=b;){if(!this.mC(b))return b;b--}},Hb:function(){return"top"==this.options.edge||"bottom"==this.options.edge},_setOption:function(a,b,d){"selected"===a?(b=this.AW(b),void 0!==b&&this.Kv(b)):"disabledTabs"===a?Array.isArray(b)&&(this.F_(b),a=this.jJ(),this.mC(a)&&this.iB(a),this.refresh()):
"removable"===a||"truncation"===a?b!=this.options[a]&&(this._super(a,b,d),this.refresh()):"reorderable"===a?b!==this.options.reorderable&&(this._super(a,b,d),this.refresh()):"orientation"===a?this.jI||(a=this.UY(b))&&this.DL(a)&&this.refresh():"edge"===a?this.DL(b)&&(this.jI=!0,this._super(a,b,d),this.refresh()):"selectOn"===a?(this.Wt(!0),this._super(a,b,d),this.xj()):("contextMenu"===a&&(this.Op(),b&&this.On(b)),this._super(a,b,d),"translations"===a&&d&&"removeCueText"===d.subkey&&this.Oc&&this.Zs(this.Oc).attr("aria-label",
b?b.removeCueText:""))},refresh:function(){this._super();this.hZ();this.Ld()},Ld:function(){var a=this.element.children(".oj-tabs-selected");this.Da=a.length?this.Oc.children(".oj-selected"):f();this.xaa();this.xj();this.cb.not(this.Da).attr({"aria-selected":"false",tabIndex:"-1"});this.Ph.not(this.Kn(this.Da)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});this.Da.length?(this.Da.addClass("oj-selected").attr({"aria-selected":"true",tabIndex:"0"}),a.show().attr("aria-expanded","true").removeAttr("aria-hidden")):
f(this.cb[0]).attr("tabIndex","0");this.Hb()&&(0<this.cb.length?(this.Fla(),this.u9()):this.oJ(),this.x9());void 0===this.options.selected||0==this.jJ()?this.element.addClass("oj-first-child-selected"):this.element.removeClass("oj-first-child-selected");this.Pka()},u9:function(){var a=this.Oc.uniqueId().attr("id");this.cm=this.oJ().parent().ojConveyorBelt({orientation:"horizontal",contentParent:"#"+a});a=this.cm.parent();if(a.hasClass("oj-tabs-conveyorbelt-wrapper")){var b="0 1 "+this.Pca()+"px";
a.css("flex",b);a.css("-webkit-flex",b);a.css("-ms-flex",b)}},hZ:function(){var a=this,b=this.options.edge;this.AU();this.bba();this.Oc=this.element.children("ul").addClass("oj-tabs-nav oj-helper-clearfix").attr("role","tablist");var d=this.Oc.index();this.element.children(".oj-tabs-facet").each(function(){var a=f(this);a.index()<d?a.addClass("oj-start"):a.removeClass("oj-start")});var h=this.element.children(".oj-tabs-panel");"start"==b||"top"==b?f(h[0]).before(this.Oc):f(h[h.length-1]).after(this.Oc);
this.cb=f();this.Ph=f();this.Oc.children("li").each(function(){var b=f(this).addClass("oj-tabs-tab").attr({role:"tab",tabIndex:"-1"}).removeAttr("aria-hidden"),d=b.children();d.addClass("oj-tabs-tab-content");d=d.children();d.addClass("oj-tabs-anchor").attr({role:"presentation",tabIndex:"-1"});d.children().addClass("oj-tabs-title").removeAttr("aria-hidden");a.cb=a.cb.add(b);var d=d.uniqueId().attr("id"),e=b.attr("data-content"),g=a.element.find(a.oL("#"+e));b.attr({"aria-controls":e,"aria-labelledby":d});
a.Ph=a.Ph.add(g);g.attr("aria-labelledby",d).attr("role","tabpanel")});"start"!=b&&"end"!=b||a.Oc.addClass("oj-tabs-nav-root");this.Xg&&this.F_(this.options.disabledTabs)},xj:function(){var a={keydown:this.kla},d=this.options.selectOn,g=!1;if(d){var h=this;f.each(d.split(" "),function(d,e){"click"==e&&(g=!0);b.v.kE(e)&&(a[e]=h.bB)})}d=this.ww();this._on(d,a);g||this._on(d,{click:function(a){a.preventDefault()}});this.Ph.on("keydown"+this.eventNamespace,this.$ha.bind(this));if(this.options.removable){var k=
{click:this.gL};this._on(this.Zs(d),k)}this._focusable(d);this._hoverable(d);this.Jp(d)},Wt:function(a){var b=this.ww();a||this.Fp(this.Zs(b));this.Fp(b);this.Ph&&this.Ph.off("keydown"+this.eventNamespace)},bB:function(a,b){var d=this.Da,h=f(a.currentTarget).closest("li"),k=d&&h[0]===d[0],l=this.Kn(h),m=d&&d.length?this.Kn(d):f(),d={fromTab:d,fromContent:m,toTab:h,toContent:l};a.preventDefault();var n=b?b:a;h.hasClass("oj-disabled")||this.FO||k||m&&m.length&&!1===this._trigger("beforeDeselect",n,
d)||!this.Xg&&!1===this._trigger("beforeSelect",n,d)||(this.Xg?this.options.selected=this.Iw(h):this.option("selected",this.Iw(h),{_context:{originalEvent:n,Za:!0}}),this.Da=h,l.addClass("oj-tabs-selected"),m&&m.length&&m.removeClass("oj-tabs-selected"),this.xla(n,d))},xla:function(a,d){var g=d.toTab.closest("li"),h=d.toContent,k=d.fromContent;this.FO=!0;var l=d.fromTab.closest("li").removeClass("oj-selected");k.hide();0<k.length&&b.Components.Xo(k[0]);g.addClass("oj-selected");this.Hb()&&0<this.cb.length&&
(0==g.index()?this.element.addClass("oj-first-child-selected"):this.element.removeClass("oj-first-child-selected"));h.show();0<h.length&&b.Components.Hm(h[0]);this.FO=!1;this.Xg||(this._trigger("deselect",a,d),this._trigger("select",a,d));k.attr({"aria-expanded":"false","aria-hidden":"true"});l.attr("aria-selected","false");h.length&&k.length?l.attr("tabIndex","-1"):h.length&&this.cb.filter(function(){return"0"===f(this).attr("tabIndex")}).attr("tabIndex","-1");h.attr("aria-expanded","true").removeAttr("aria-hidden");
g.attr({"aria-selected":"true",tabIndex:"0"})},Kv:function(a,b){if(void 0!==a){var d;this.Da&&a[0]===this.Da[0]||(d=a.find(".oj-tabs-anchor")[0],this.bB({target:d,currentTarget:d,preventDefault:f.noop},b))}},xaa:function(){if(this.options.removable&&this.Hb()){var a=this.A("removeCueText");this.ww().each(function(b){var d=f(this).find("\x3e :first-child");d.addClass("oj-removable");b="ojtabs-id_rm_"+b;f(this).attr("aria-describedby",b);f("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon-nocontext oj-tabs-close-icon").attr({id:b,
tabIndex:"-1","aria-label":a,role:"presentation"}).appendTo(d)})}},ww:function(){return f(this.cb.not(".oj-disabled"))},Zs:function(a){return a.find(".oj-tabs-close-icon")},AU:function(){this.cb&&this.Wt();this.hX&&(b.v.Qh(this.element[0],this.De),this.hX=!1,this.FK=void 0);this.IL&&(b.v.Od()&&this.B0(),this.Oc.sortable("destroy"),this.IL=void 0);var a=this.element.children(".oj-tabs-nav-root"),d=!a.hasClass("oj-tabs-nav");if(this.cb&&(this.Zs(this.cb).remove(),a.length)){var g=a,h=!0,k=this.Oc;a.children().each(function(){var a=
f(this);if(a.hasClass("oj-tabs-conveyorbelt-wrapper"))a=k;else if(!a.hasClass("oj-tabs-facet"))return;h=!1;g.after(a);g=a});h&&d&&a.after(k)}this.cm&&(this.cm.ojConveyorBelt("destroy"),this.cm.remove(),this.Da=this.cm=null);d&&a.remove();this.Oc=this.cb=null},_destroy:function(){this.Op();this.Hb()?this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-tabs-top oj-tabs-bottom oj-first-child-selected"):this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-tabs-start oj-tabs-end oj-helper-clearfix");
var a=this,b,d,h,k;this.cb.each(function(l){b=f(this);b.removeAttr("tabIndex").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-controls").removeAttr("aria-disabled").removeAttr("role").removeAttr("data-content").removeClass("oj-active oj-disabled oj-selected oj-tabs-gen-id oj-tabs-tab").removeUniqueId().css("display","");d=b.children("div").removeClass("oj-tabs-tab-content");h=d.children("a").removeClass("oj-tabs-anchor").removeAttr("tabIndex").removeAttr("role");
k=h.children();k.removeClass("oj-tabs-title").removeAttr("aria-hidden");a.UX?k.prependTo(a.Ph.get(l)):d.hasClass("oj-tabs-gen-div")&&h.hasClass("oj-tabs-gen-a")?(k.prependTo(b),d.remove()):h.hasClass("oj-tabs-gen-a")?(k.prependTo(d),h.remove()):d.hasClass("oj-tabs-gen-div")&&(h.prependTo(b),d.remove())});var l=this.Oc;this.AU();l.removeAttr("tabIndex").removeAttr("role").removeClass("oj-tabs-nav oj-tabs-nav-root oj-helper-clearfix").removeUniqueId();this.UX&&l.remove();this.Ph.each(function(){f(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-tabs-selected oj-tabs-gen-id oj-tabs-panel").removeUniqueId().css("display",
"")});this.element.children(".oj-tabs-facet").removeClass("oj-start")},gL:function(a,b){var d=f(a.currentTarget).closest("li"),h=this.Kn(d),k={tab:d,content:h},l=b?b:a;if(d&&!1!==this._trigger("beforeRemove",l,k)){a.preventDefault();if(d.hasClass("oj-selected")){var m=this.bW(this.cb.index(d));void 0===m?(this.Da=void 0,this.option("selected",void 0,{_context:{originalEvent:l,Za:!0}})):(this.iB(m,l),this.option("selected",this.Iw(f(this.cb[m])),{_context:{originalEvent:l,Za:!0}}))}this.Wt();this.cb=
this.cb.not(d);d.remove();h.remove();this.rM();this.refresh();this._trigger("remove",l,k)}},BD:function(a,b){var d;if("li"==a.prop("tagName").toLowerCase()){d=a;var f=d.children("div");1==f.length&&f.hasClass("oj-tabs-tab-content")?(f=f.children("a"),1!=f.length&&(d.wrapInner("\x3ca href\x3d'#'\x3e\x3c/a\x3e"),f.addClass("oj-tabs-gen-a"))):(f=d.wrapInner("\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e").children(),f.addClass("oj-tabs-gen-div oj-tabs-tab-content"),f.children().addClass("oj-tabs-gen-a"))}else d=
a.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent().parent().parent(),d.addClass("oj-tabs-gen-li"),d.children().addClass("oj-tabs-gen-div oj-tabs-tab-content");b&&d.attr("data-content",b);return d},addTab:function(a){var b,d,h=-1;a.tab&&a.content?(d=a.content,b=this.BD(a.tab,this.QB(d)),void 0!==a.index&&(h=a.index)):(d=a,b=this.BD(f(a).find("\x3e :first-child"),this.QB(d)));a=this.element.children(".oj-tabs-nav-root");a=a.hasClass("oj-tabs-nav")?a:a.length?
a.find(".oj-tabs-nav"):this.element.children(".oj-tabs-nav");var k=!1;a.length||(a=f("\x3cul\x3e"),k=!0);k&&a.prependTo(this.element);0<=h&&h<a.children().length?(h=a.children(":eq("+h+")"),a=this.element.children("#"+h.attr("aria-controls")),h.before(b),a.before(d)):(b.appendTo(a),d.appendTo(this.element));this.refresh();0==this.Da.length&&this.iB(0);var l=this;window.setTimeout(function(){l.cb&&b[0].scrollIntoView(!1)},0)},Rka:function(){this.WL=b.ze.b1(this.Oc)},B0:function(){b.ze.v4(this.Oc)},
Pka:function(){if(this.options.reorderable){var a=this;b.v.Od()&&this.Rka();this.Oc.sortable({axis:a.Hb()?"x":"y",stop:function(b,d){var f=d.item;a.KU(b,f,f.prev())||a.Oc.sortable("cancel")}});this.IL=!0}else this.B0(),this.IL=!1},Ud:function(a,b){var d=b.edge;this.jI="top"==d||"bottom"==d||"start"==d||"end"==d;this._super(a,b)},UY:function(a){return"horizontal"==a?"top":"vertical"==a?"start":null},DL:function(a){if(this.Xg&&!this.jI||!a)a=this.UY(this.options.orientation);var b=this.options.edge;
this.element.removeClass("oj-tabs-top oj-tabs-bottom oj-tabs-start oj-tabs-end");switch(a){case "top":case "bottom":!this.Ph||"start"!=b&&"end"!=b||this.element.removeClass("oj-tabs-vertical oj-helper-clearfix");this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");"bottom"==a?this.element.addClass("oj-tabs-bottom"):this.element.addClass("oj-tabs-top");this.Xg?this.options.orientation="horizontal":"horizontal"!=this.options.orientation&&this.option("orientation","horizontal",{_context:{Za:!0},
changed:!0});break;case "start":case "end":!this.Ph||"top"!=b&&"bottom"!=b||this.element.removeClass("oj-tabs-horizontal");this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");"end"==a?this.element.addClass("oj-tabs-end"):this.element.addClass("oj-tabs-start");this.Xg?this.options.orientation="vertical":"vertical"!=this.options.orientation&&this.option("orientation","vertical",{_context:{Za:!0},changed:!0});break;default:return!1}this.Xg?this.options.edge=a:this.options.edge!=
a&&this.option("edge",a,{_context:{Za:!0},changed:!0});return!0},oJ:function(){var a=this.Oc.parent();a.hasClass("oj-tabs-conveyor")||(a=this.Oc.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"),(0<this.element.children(".oj-tabs-facet").length?a.wrap("\x3cdiv\x3e").wrap("\x3cdiv\x3e").parent().parent().addClass("oj-tabs-conveyorbelt-wrapper"):a).wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));return a},Fqa:function(a){0>a.id.indexOf("ojtabs-id_")&&f(a).attr("id",
"ojtabs-id_"+a.id)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var b=a.subId;a=a.index;if("oj-conveyorbelt"!=b&&("number"!==typeof a||0>a||a>=this.Ph.length))return null;switch(b){case "oj-conveyorbelt":return this.cm?this.cm[0]:null;case "oj-tabs-panel":return this.Kn(this.cb[a])[0];case "oj-tabs-tab":return this.cb[a];case "oj-tabs-title":return f(this.cb[a]).find(".oj-tabs-title")[0];case "oj-tabs-close-icon":case "oj-tabs-close":return f(this.cb[a]).find(".oj-tabs-close-icon")[0]}return null},
getSubIdByNode:function(a){for(var b=[],d=0;d<this.cb.length;d++)b.push(this.Kn(this.cb[d])[0]);for(var f=d=-1,k=a;k;){if(this.cm&&k===this.cm[0])return{subId:"oj-conveyorbelt"};d=Array.prototype.indexOf.call(this.cb,k);if(-1!=d)break;f=b.indexOf(k);if(-1!=f)return{subId:"oj-tabs-panel",index:f};k=k.parentElement}if(-1!=d)for(b=this.getNodeBySubId({subId:"oj-tabs-title",index:d}),f=this.getNodeBySubId({subId:"oj-tabs-close",index:d}),k=a;k;){if(k===b)return{subId:"oj-tabs-title",index:d};if(k===f)return{subId:"oj-tabs-close",
index:d};if(k===this.cb[d])return{subId:"oj-tabs-tab",index:d};k=k.parentElement}return null},Pca:function(){return this.FK+10},BW:function(){var a=this.element.find(".oj-tabs-conveyorbelt-wrapper");return a.length?a[0].clientWidth:this.element[0].clientWidth},WX:function(){return this.FK>this.BW()},$da:function(){var a=Math.floor(this.BW()/this.cb.length);this.options.removable&&(a-=28);return a},OS:function(){var a=this.$da();this.Oc.find(".oj-tabs-title").each(function(){f(this).css("max-width",
""+a+"px").addClass("oj-tabs-title-overflow")})},vja:function(){this.Oc.find(".oj-tabs-title").each(function(){f(this).css("max-width","").removeClass("oj-tabs-title-overflow")})},gra:function(){},Se:function(){this.$X()&&(this.WX()?this.OS():this.vja())},$X:function(){return"auto"==this.options.truncation||"progressive"==this.options.truncation},Fla:function(){this.Hb()&&0<this.cb.length&&(null==this.De&&(this.De=this.Se.bind(this)),b.v.eh(this.element[0],this.De),this.hX=!0,this.FK=this.oJ()[0].scrollWidth,
this.$X()&&this.WX()&&this.OS())},ml:function(){this._super();this.refresh()},gn:function(){this._super();this.refresh()},ni:function(b){return f("\x3ca\x3e").text(this.A(d[b])).attr("href","#").wrap("\x3cli\x3e").parent().attr("id",a[b]).addClass("oj-menu-item")},rha:function(a){if(!a||!a.length)return!1;this.oa.LD=a},DY:function(a,b,d){if(!b||!b.length||!this.oa.LD)return!1;var f=this.oa.LD;this.oa.LD=!1;this.KU(a,f,b,d)},sha:function(a,b){if(!b||!b.length)return!1;var d=this.Zs(b);this.gL({target:d,
currentTarget:d,preventDefault:f.noop},a)},lj:function(a,b){var d=b?b.item.attr("id"):void 0;"ojtabscut"===d?this.rha(this.oa.tab):"ojtabspastebefore"===d?this.DY(a,this.oa.tab,!0):"ojtabspasteafter"===d?this.DY(a,this.oa.tab,!1):"ojtabsremove"===d&&this.sha(a,this.oa.tab)},On:function(a){if(a=a||this.options.contextMenu){var b=f.type(a);if("function"==b){try{a=a()}catch(d){a=null}b=f.type(a)}"string"==b&&a&&f(a).length&&(this.options.contextMenu=a)}this.lA()},pA:function(a,b,d){-1==b.indexOf(d)&&
(b=this.ni(d),a.append(b))},lA:function(){var a=f(this.options.contextMenu);if(a||this.options.reorderable||this.options.removable){var b=this;if(0==a.length){var g=this.options.reorderable?"labelReorder":d.remove,h=this.element.uniqueId().attr("id")+"contextmenu",a=f("\x3cul\x3e");a.css("display","none").attr("id",h).attr("aria-label",this.A(g));f(document.body).append(a);a.ojMenu();this.options.contextMenu="#"+h}var k=[];a.find("[data-oj-command]").each(function(){if(0===f(this).children("a").length){var a=
f(this).attr("data-oj-command").slice(8);f(this).replaceWith(b.ni(a));f(this).addClass("oj-menu-item");k.push(a)}});this.options.reorderable&&(this.pA(a,k,"cut"),this.pA(a,k,"paste-before"),this.pA(a,k,"paste-after"),this.oa.Mm=a.find("#ojtabspastebefore"),this.oa.ap=a.find("#ojtabspasteafter"));this.options.removable&&(this.pA(a,k,"remove"),this.oa.ME=a.find("#ojtabsremove"));this.oa.Ge=a;a.ojMenu("refresh");a.on("ojselect",f.proxy(this.lj,this))}},Op:function(){var a=this.oa;a&&(a.Ge.off("ojselect"),
a.Ge=null)},KU:function(a,b,d,f){var k=this.Kn(b),l={tab:b,content:k};if(!1===this._trigger("beforeReorder",a,l))return!1;var m=this.cb.index(b);if(d.length){if(this.cb.index(d)==m)return!0;m=this.Kn(d);f?(d.before(b),m.before(k)):(d.after(b),m.after(k))}else if(0<this.cb.length){if(0==m)return!0;this.cb.first().before(b);this.Ph.first().before(k)}this.rM();this.refresh();b.focus();this._trigger("reorder",a,l);return!0},oL:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$\x26"):
""},Kn:function(a){return this.element.find(this.oL("#"+f(a).attr("aria-controls")))},QB:function(a){var b=a.attr("id");b||(b=a.uniqueId().attr("id"),a.addClass("oj-tabs-gen-id"));return b},AW:function(a){a=this.RV(a);if(-1!==a)return f(this.cb[a])},RV:function(a){var d=-1;"number"===typeof a?0<=a&&a<this.cb.length&&(d=a):"string"===typeof a&&(a=this.oL(a),b.v.kE(a)&&(a=this.element.find("#"+a),a.length&&(d=this.cb.index(a),-1==d&&(d=this.Ph.index(a)))));return d},jJ:function(){var a=this.options.selected;
return"number"===typeof a?a:this.cb.index(f("#"+a))},Iw:function(a){if(a){var b=a.attr("id");return b?b:this.cb.index(a)}},F_:function(a){var b=(this.Oc?this.Oc:this.element.children("ul")).children("li");b.removeClass("oj-disabled").removeAttr("aria-disabled");var d=[];if(a&&0<a.length)for(var f,k,l=0;l<a.length;l++)if(k=this.AW(a[l]))k.addClass("oj-disabled"),k.attr("aria-disabled","true"),k.find(".oj-tabs-anchor").removeAttr("href"),f=k.attr("id"),d.push(f?f:b.index(k));this.rM(d)},rM:function(a){if(!a){a=
[];var d=this;this.Oc.children().each(function(){var b=f(this);b.hasClass("oj-disabled")&&a.push(d.Iw(b))})}b.b.KT(this.options.disabledTabs,a)||(this.Xg?this.options.disabledTabs=a:this.option({disabledTabs:a},{_context:{Za:!0,Ec:!0},changed:!0}))},Ega:function(a){var b=!1;this.cb.each(function(){if(this===a||f.contains(this,a))return b=!0,!1});return b},bba:function(){var a=this.yV(),b=this,d=this.element.children("ul");0<d.length&&d.children("li").each(function(d){b.BD(f(this),a[d])})},cba:function(){var a=
this.element.children("ul");if(0==a.length){var b=this,d=this.yV(),a=f("\x3cul\x3e");this.element.children().each(function(h){b.BD(f(this).find("\x3e :first-child"),d[h]).appendTo(a)});a.prependTo(this.element)}},x9:function(){var a=this.element.children(".oj-tabs-nav-root"),b=this,d=a.children(".oj-tabs-conveyorbelt-wrapper");a.index();this.element.children(".oj-tabs-facet").each(function(){var h=f(this),k=b.QB(h);0==a.find("#"+k).length&&(h.hasClass("oj-start")?d.before(h):h.appendTo(a))})},yV:function(){var a=
[],b=this;this.element.children(":not(ul):not(.oj-tabs-facet)").each(function(){var d=f(this);d.addClass("oj-tabs-panel");a.push(b.QB(d))});return a}})})()});