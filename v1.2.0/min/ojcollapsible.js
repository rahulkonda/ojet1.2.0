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
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(b,f){(function(){var a=0;b.ya("oj.ojCollapsible",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{expanded:!1,disabled:null,expandOn:"click",expandArea:"header",beforeExpand:null,expand:null,beforeCollapse:null,collapse:null,optionChange:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-collapsible oj-component");this.eZ();this.Ld();this.Xg=!0;var a=this.element[0];this.mI({type:this.options.expanded?"ojexpand":
"ojcollapse",target:a,currentTarget:a,preventDefault:f.noop});this.Xg=void 0},lf:function(a,b,e){this.nf(b,e,{launcher:this.element.find(".oj-collapsible-header-icon").first()})},Daa:function(){var a=this.options.expanded?"oj-collapsible-open-icon":"oj-collapsible-close-icon";(this.ti()?f("\x3cspan\x3e"):f("\x3ca href\x3d'#'\x3e")).addClass("oj-component-icon oj-clickable-icon-nocontext oj-collapsible-header-icon "+a).attr("aria-labelledby",this.header.attr("id")).prependTo(this.header)},wU:function(){this.header.children(".oj-collapsible-header-icon").remove()},
_destroy:function(){this.ek();this.element.removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");this.ti()&&this.rI(this.header).removeAttr("tabIndex");this.header.removeClass("oj-collapsible-header").each(function(){/^oj-collapsible/.test(this.id)&&this.removeAttribute("id")});this.ow().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");this.wU();this.content.css("display","").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function(){/^oj-collapsible/.test(this.id)&&
this.removeAttribute("id")})},ek:function(){this.Wt();this.content&&(b.v.unwrap(this.content),this.dl=null)},ti:function(){return this.element.hasClass("oj-disabled")},HV:function(){return"header"==this.options.expandArea?"\x3e .oj-collapsible-header":"\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon"},_setOption:function(a,b,e){"expanded"===a?b!==this.options.expanded&&this.hka(b):"disabled"===a?(this.header.add(this.header.next()),this.element.toggleClass("oj-disabled",!!b)):"expandOn"===
a||"expandArea"===a?(this.Wt(),this._super(a,b,e),this.xj()):this._super(a,b,e)},wq:function(a){if(!a.altKey&&!a.ctrlKey){var b=f.ui.keyCode;switch(a.keyCode){case b.SPACE:case b.ENTER:this.F0(a)}}},refresh:function(){this._super();this.ek();this.eZ();this.wU();this.Ld()},eZ:function(){this.header=this.element.children(":first-child").addClass("oj-collapsible-header");this.content=this.header.next().addClass("oj-collapsible-content oj-component-content");this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
this.dl=this.content.parent().addClass("oj-collapsible-wrapper");this.options.disabled&&this.element.addClass("oj-disabled");this.ti()&&this.rI(this.header).attr("tabIndex",-1)},Ld:function(){var b=this.header,c=this.content,e=this.options,f="oj-collapsible-"+(this.element.attr("id")||++a),h=b.attr("id"),k=c.attr("id");h||b.attr("id",f+"-header");k||(k=f+"-content",c.attr("id",k));this.Daa();b=this.ow();b.attr("role","button").attr("aria-controls",k).attr("aria-expanded",e.expanded);this.ti()&&b.attr("aria-disabled",
"true");e.expanded?c.removeAttr("aria-hidden"):(this.dl.css({"max-height":0,"overflow-y":"hidden",display:"none"}),this.dl.css("max-height",0),c.attr("aria-hidden","true"));this.xj()},hka:function(a){a?this.expand(!0):this.collapse(!0)},xj:function(){var a={keydown:this.wq},c=this.options.expandOn;if(c){var e=this;f.each(c.split(" "),function(c,f){b.v.kE(f)&&(a[f]=e.F0)})}c=this.element.find(this.HV());this._on(c,a);this._on(this.dl,{transitionend:this.$t,webkitTransitionEnd:this.$t,otransitionend:this.$t,
oTransitionEnd:this.$t});this.ti()||(this._on(this.element,{ojexpand:this.mI,ojcollapse:this.mI,ojfocus:this.kV,ojfocusout:this.kV}),this._hoverable(c),this._focusable(c),this.Jp(c))},Wt:function(){this._off(this.element.find(this.HV()));this.dl&&this._off(this.dl);this._off(this.element.add(this.content))},F0:function(a){this.ti()||a.isDefaultPrevented()||(this.options.expanded?this.collapse(!0,a):this.expand(!0,a),a.preventDefault(),a.stopPropagation(),this.header.find(".oj-collapsible-header-icon").focus())},
mI:function(a){if(!this.ti()&&a.target===this.element[0]&&(this.Xg||!a.isDefaultPrevented())){var c=this.element,e=this.options,f=this.content,h=this.dl,k="ojexpand"===a.type;a.preventDefault();this.Xg?(e.expanded=k)?(c.removeClass("oj-collapsed"),c.addClass("oj-expanded"),b.Components.Hm(h[0])):(c.removeClass("oj-expanded"),c.addClass("oj-collapsed"),h.css("max-height",0),h.hide(),b.Components.Xo(h[0])):(this.L$(k,a),h.KD=h.outerHeight(),k?(h.show(),setTimeout(function(){h.KD+=f.outerHeight();h.addClass("oj-collapsible-transition").css({"max-height":h.KD});
c.removeClass("oj-collapsed");c.addClass("oj-expanded");b.Components.Hm(h[0])},1)):(h.removeClass("oj-collapsible-transition"),h.css({"max-height":h.KD,"overflow-y":"hidden"}),setTimeout(function(){h.addClass("oj-collapsible-transition").css({"max-height":0});c.removeClass("oj-expanded");c.addClass("oj-collapsed");b.Components.Xo(h[0])},10)));this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon",k).toggleClass("oj-collapsible-close-icon",!k||!1).end();k?this.content.removeAttr("aria-hidden"):
this.content.attr("aria-hidden","true");this.ow().attr("aria-expanded",k)}},kV:function(a){if(this.ti())return null;"ojfocusout"==a.type?(this.ow().attr("tabIndex",-1),a.preventDefault(),a.stopPropagation()):"ojfocus"==a.type&&(this.ow().attr("tabIndex",0).focus(),a.preventDefault(),a.stopPropagation())},ow:function(){return this.rI(this.header).first()},rI:function(a){return this.ti()?a.find("span"):a.find("a,:input")},expand:function(a,b){if(!this.ti()){var e={header:this.header,content:this.content};
a&&!1===this._trigger("beforeExpand",b,e)||this._trigger("expand",b,e)}},collapse:function(a,b){if(!this.ti()){var e={header:this.header,content:this.content};a&&!1===this._trigger("beforeCollapse",b,e)||this._trigger("collapse",b,e)}},$t:function(a){this.ti()||("max-height"==(a.originalEvent?a.originalEvent.propertyName:null)&&(a.preventDefault(),a.stopPropagation()),this.options.expanded?this.dl.css({"max-height":9999,"overflow-y":""}):this.dl.hide(),this.dl.removeClass("oj-collapsible-transition"))},
L$:function(a,b){this.option("expanded",a,{_context:{originalEvent:b,Ec:!0,Za:!0}})},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;switch(a.subId){case "oj-collapsible-content":return this.content[0];case "oj-collapsible-header":return this.header[0];case "oj-collapsible-disclosure":case "oj-collapsible-header-icon":return this.header.find(".oj-collapsible-header-icon")[0]}return null},getSubIdByNode:function(a){for(var b=this.getNodeBySubId({subId:"oj-collapsible-disclosure"});a;){if(a===
this.content[0])return{subId:"oj-collapsible-content"};if(a===this.header[0])return{subId:"oj-collapsible-header"};if(a===b)return{subId:"oj-collapsible-disclosure"};a=a.parentElement}return null}})})()});