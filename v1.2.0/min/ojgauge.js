/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtGauge"],function(b,f,a,d,c){b.ya("oj.dvtBaseGauge",f.oj.dvtBaseComponent,{Wz:function(){this._super();this.options._thresholdColors=[this.options._threshold1,this.options._threshold2,this.options._threshold3];this.options._threshold1=null;this.options._threshold2=null;this.options._threshold3=null},hf:function(){this._super();this.option("rawValue",this.options.value,{_context:{Ec:!0,Za:!0}})},bi:function(){var a=
this._super();a["oj-gauge-metric-label"]={path:"metricLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-gauge-tick-label"]={path:"tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-gauge-threshold1"]={path:"_threshold1",property:"color"};a["oj-gauge-threshold2"]={path:"_threshold2",property:"color"};a["oj-gauge-threshold3"]={path:"_threshold3",property:"color"};return a},di:function(){return["input","optionChange"]},ei:function(){var a=this.options.translations,b=this._super();b["DvtGaugeBundle.EMPTY_TEXT"]=
a.labelNoData;b["DvtUtilBundle.GAUGE"]=a.componentName;return b},hi:function(a){var b=a&&a.getType?a.getType():null;b===c.DvtValueChangeEvent.TYPE?this.gc("value",a.getNewValue()):b===c.DvtValueChangeEvent.TYPE_INPUT?(b=a.getNewValue(),this._trigger("input",null,{value:b}),this.gc("rawValue",a.getNewValue())):this._super(a)},_setOption:function(a,c,d){"rawValue"===a?b.r.error("'rawValue' is a read-only option and cannot be set"):("value"===a&&this.option("rawValue",c,{_context:{Ec:!0,Za:!0}}),this._super(a,
c,d))},ai:function(a){var b=a.subId;if("oj-dialgauge-tooltip"==b||"oj-ledgauge-tooltip"==b||"oj-ratinggauge-tooltip"==b||"oj-statusmetergauge-tooltip"==b)b="tooltip";"oj-ratinggauge-item"==b&&null!=a.index&&(b="item["+a.index+"]");return b}},!0);b.ya("oj.ojLedGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{},jf:function(a,b,d){return c.DvtLedGauge.newInstance(a,b,d)},$f:function(a){var b={};"tooltip"==a&&(b.subId="oj-ledgauge-tooltip");return b},ye:function(){var a=this._super();a.push("oj-ledgauge");
return a},bg:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getMetricLabel:function(){return this.na.getAutomation().getMetricLabel()}});b.ya("oj.ojRatingGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},jf:function(a,
b,d){return c.DvtRatingGauge.newInstance(a,b,d)},$f:function(a){var b={};"tooltip"==a?b.subId="oj-ratinggauge-tooltip":0==a.indexOf("item")&&(b.subId="oj-ratinggauge-item",b.index=this.Ah(a));return b},ye:function(){var a=this._super();a.push("oj-ratinggauge");return a},bg:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=
this.element.data("title"));this._super()},gc:function(a,b){this._superApply(arguments);"value"==a&&this.gc("changed",!0)}});b.ya("oj.ojDialGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},jf:function(a,b,d){return c.DvtDialGauge.newInstance(a,b,d)},$f:function(a){var b={};"tooltip"==a&&(b.subId="oj-dialgauge-tooltip");return b},ye:function(){var a=this._super();a.push("oj-dialgauge");return a},bg:function(){this.element.attr("title")?(this.options.shortDesc=
this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this.qka();this._super()},qka:function(){var a=this.options.background,c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"),width:200,height:200},{src:b.ba.hb("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"),width:400,height:400}],d=this.options.indicator,f=
[{src:b.ba.hb("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"),width:374,height:575}];"string"===typeof a&&("rectangleAlta"===a?c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"),width:200,height:154},{src:b.ba.hb("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"),width:400,height:309}]:"domeAlta"===a?c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"),width:200,height:154},{src:b.ba.hb("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"),
width:400,height:309}]:"circleAntique"===a?c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"),width:200,height:200},{src:b.ba.hb("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"),width:400,height:400}]:"rectangleAntique"===a?c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"),width:200,height:168},{src:b.ba.hb("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"),width:400,height:335}]:"domeAntique"===a?c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"),
width:200,height:176},{src:b.ba.hb("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"),width:400,height:352}]:"circleLight"===a?c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/light-circle-200x200.png"),width:200,height:200},{src:b.ba.hb("resources/internal-deps/dvt/gauge/light-circle-400x400.png"),width:400,height:400}]:"rectangleLight"===a?c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"),width:200,height:154},{src:b.ba.hb("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"),
width:400,height:307}]:"domeLight"===a?c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/light-dome-200x200.png"),width:200,height:138},{src:b.ba.hb("resources/internal-deps/dvt/gauge/light-dome-400x400.png"),width:400,height:276}]:"circleDark"===a?c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"),width:200,height:200},{src:b.ba.hb("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"),width:400,height:400}]:"rectangleDark"===a?c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"),
width:200,height:154},{src:b.ba.hb("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"),width:400,height:307}]:"domeDark"===a&&(c=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"),width:200,height:138},{src:b.ba.hb("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"),width:400,height:276}]),this.options._backgroundImages=c);"string"===typeof d&&("needleAntique"===d?f=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"),width:81,height:734}]:
"needleDark"===d?f=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"),width:454,height:652}]:"needleLight"===d&&(f=[{src:b.ba.hb("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"),width:454,height:652}]),this.options._indicatorImages=f)},getMetricLabel:function(){return this.na.getAutomation().getMetricLabel()}});b.ya("oj.ojStatusMeterGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},jf:function(a,b,d){return c.DvtStatusMeterGauge.newInstance(a,
b,d)},$f:function(a){var b={};"tooltip"==a&&(b.subId="oj-statusmetergauge-tooltip");return b},ye:function(){var a=this._super();a.push("oj-statusmetergauge");return a},bg:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getMetricLabel:function(){return this.na.getAutomation().getMetricLabel()}})});