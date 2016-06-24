/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdatasource-common"],function(b,f){b.Me=function(a,b){this.Noa=a;this.Yb=b};o_("EmptyNodeSet",b.Me,b);b.Me.prototype.getParent=function(){return this.Noa};b.b.g("EmptyNodeSet.prototype.getParent",{getParent:b.Me.prototype.getParent});b.Me.prototype.ta=function(){return this.Yb};b.b.g("EmptyNodeSet.prototype.getStart",{ta:b.Me.prototype.ta});b.Me.prototype.R=function(){return 0};b.b.g("EmptyNodeSet.prototype.getCount",{R:b.Me.prototype.R});
b.Me.prototype.getData=function(){return null};b.b.g("EmptyNodeSet.prototype.getData",{getData:b.Me.prototype.getData});b.Me.prototype.getMetadata=function(){return null};b.b.g("EmptyNodeSet.prototype.getMetadata",{getMetadata:b.Me.prototype.getMetadata});b.Ne=function(a,b){this.xb=a;this.Yb=b};o_("FlattenedNodeSet",b.Ne,b);b.Ne.prototype.getParent=function(){return this.xb.getParent()};b.b.g("FlattenedNodeSet.prototype.getParent",{getParent:b.Ne.prototype.getParent});b.Ne.prototype.ta=function(){return void 0!=
this.Yb?this.Yb:this.xb.ta()};b.b.g("FlattenedNodeSet.prototype.getStart",{ta:b.Ne.prototype.ta});b.Ne.prototype.R=function(){void 0===this.mE&&(this.mE=this.CV(this.xb,0),void 0!=this.Yb&&(this.mE-=this.Yb));return this.mE};b.b.g("FlattenedNodeSet.prototype.getCount",{R:b.Ne.prototype.R});b.Ne.prototype.CV=function(a,b){var c,e,f,h;c=a.ta();e=a.R();b+=e;if(a.If)for(f=0;f<e;f++)h=a.If(f+c),null!=h&&(b=this.CV(h,b));return b};b.Ne.prototype.getData=function(a){return this.FI(this.xb,a,{index:this.xb.ta()},
this.Ya)};b.b.g("FlattenedNodeSet.prototype.getData",{getData:b.Ne.prototype.getData});b.Ne.prototype.getMetadata=function(a){return this.FI(this.xb,a,{index:this.xb.ta()},this.YI)};b.b.g("FlattenedNodeSet.prototype.getMetadata",{getMetadata:b.Ne.prototype.getMetadata});b.Ne.prototype.YI=function(a,b){return a.getMetadata(b)};b.Ne.prototype.Ya=function(a,b){return a.getData(b)};b.Ne.prototype.FI=function(a,b,c,e){var f,h,k,l;f=a.ta();h=a.R();for(k=0;k<h;k++){l=c.index;if(l===b)return e.call(this,
a,k+f);c.index=l+1;if(a.If&&(l=a.If(k+f),null!=l&&(l=this.FI(l,b,c,e),null!=l)))return l}return null};b.Ig=function(a,b,c){this.Lo=a;this.kO=b;this.jO=this.qca(c)};o_("MergedNodeSet",b.Ig,b);b.Ig.prototype.qca=function(a){var b,c,e;b=this.Lo.ta();for(c=b+this.Lo.R();b<c;b++)if(e=this.Lo.getMetadata(b).key,a===e)return b;return c-1};b.Ig.prototype.getParent=function(){return this.Lo.getParent()};b.b.g("MergedNodeSet.prototype.getParent",{getParent:b.Ig.prototype.getParent});b.Ig.prototype.ta=function(){return this.Lo.ta()};
b.b.g("MergedNodeSet.prototype.getStart",{ta:b.Ig.prototype.ta});b.Ig.prototype.R=function(){return this.Lo.R()+this.kO.R()};b.b.g("MergedNodeSet.prototype.getCount",{R:b.Ig.prototype.R});b.Ig.prototype.getData=function(a){a=this.nW(a);return a.set.getData(a.index)};b.b.g("MergedNodeSet.prototype.getData",{getData:b.Ig.prototype.getData});b.Ig.prototype.getMetadata=function(a){a=this.nW(a);return a.set.getMetadata(a.index)};b.b.g("MergedNodeSet.prototype.getMetadata",{getMetadata:b.Ig.prototype.getMetadata});
b.Ig.prototype.nW=function(a){if(a<=this.jO)return{set:this.Lo,index:a};var b=this.kO.R();return a>this.jO+b?{set:this.Lo,index:a-b}:{set:this.kO,index:a-(this.jO+1)}};b.Qe=function(a,b,c,e){this.xb=a;this.Ij=b;this.Bu=c;this.Ii=e};o_("NodeSetWrapper",b.Qe,b);b.Qe.prototype.getParent=function(){return this.xb.getParent()};b.b.g("NodeSetWrapper.prototype.getParent",{getParent:b.Qe.prototype.getParent});b.Qe.prototype.ta=function(){return null!=this.Bu?this.Bu.start:this.xb.ta()};b.b.g("NodeSetWrapper.prototype.getStart",
{ta:b.Qe.prototype.ta});b.Qe.prototype.R=function(){var a,b;a=this.xb.ta();b=this.xb.R();null!=this.Bu&&(this.Bu.start>a?b=Math.min(0,b-(this.Bu.start-a)):this.Bu.start<a&&(b=0));return b};b.b.g("NodeSetWrapper.prototype.getCount",{R:b.Qe.prototype.R});b.Qe.prototype.getData=function(a){return this.xb.getData(a)};b.b.g("NodeSetWrapper.prototype.getData",{getData:b.Qe.prototype.getData});b.Qe.prototype.getMetadata=function(a){var b;b=this.xb.getMetadata(a);b.index=a;b.parentKey=this.getParent();this.Ij.call(null,
b.key,b);return b};b.b.g("NodeSetWrapper.prototype.getMetadata",{getMetadata:b.Qe.prototype.getMetadata});b.Qe.prototype.If=function(a){return null!=this.Ii&&-1!=this.Ii.indexOf(this.xb.getMetadata(a).key)||!this.xb.If||(a=this.xb.If(a),null==a)?null:new b.Qe(a,this.Ij,null,this.Ii)};b.b.g("NodeSetWrapper.prototype.getChildNodeSet",{If:b.Qe.prototype.If});b.ca=function(a,d){this.zd=a;this.Sy=d||{};b.ca.q.constructor.call(this)};o_("FlattenedTreeDataSource",b.ca,b);b.b.ga(b.ca,b.Pi,"oj.FlattenedTreeDataSource");
b.ca.prototype.Init=function(){var a;b.ca.q.Init.call(this);this.zd.on("change",this.gfa.bind(this));this.eO=parseInt(this.Sy.fetchSize,10);isNaN(this.eO)&&(this.eO=25);this.nr=parseInt(this.Sy.maxCount,10);isNaN(this.nr)&&(this.nr=500);a=this.Sy.expanded;Array.isArray(a)?this.rm=a:("all"===a&&(this.Ii=[]),this.rm=[]);this.qm=[]};b.b.g("FlattenedTreeDataSource.prototype.Init",{Init:b.ca.prototype.Init});b.ca.prototype.handleEvent=function(a,d){return b.ca.q.handleEvent.call(this,a,d)};b.b.g("FlattenedTreeDataSource.prototype.handleEvent",
{handleEvent:b.ca.prototype.handleEvent});b.ca.prototype.Le=function(){delete this.qm;delete this.rm;delete this.Ii;this.zd.off("change");this.zd.Le&&this.zd.Le()};b.b.g("FlattenedTreeDataSource.prototype.Destroy",{Le:b.ca.prototype.Le});b.ca.prototype.qN=function(){return this.eO};b.ca.prototype.t2=function(){return this.rm};b.b.g("FlattenedTreeDataSource.prototype.getExpandedKeys",{t2:b.ca.prototype.t2});b.ca.prototype.ty=function(a){return null!=this.Sy?this.Sy[a]:null};b.b.g("FlattenedTreeDataSource.prototype.getOption",
{ty:b.ca.prototype.ty});b.ca.prototype.getWrappedDataSource=function(){return this.zd};b.b.g("FlattenedTreeDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:b.ca.prototype.getWrappedDataSource});b.ca.prototype.JI=function(a){var b,c;b=this.qN();c=this.nr;return-1===b?-1===a?c:a:-1===a?Math.min(b,a):b};b.ca.prototype.Bo=function(a,b){this.ut()?this.kca(a,b):this.jca(a,b)};b.ca.prototype.jca=function(a,d){var c,e,f,h,k,l;if(a.start>this.Be()){c=this.WI();if(0>this.Be()){a.count=Math.min(c,
a.count);this.zd.Ff(null,a,{success:function(b){this.Nn(b,null,0,a,0,d)}.bind(this),error:function(a){this.Ll(a,d)}.bind(this)});return}if(0<c){e=this.VV();f=e.parent;h=this.zd.Ye(f);k=e.index;l=e.depth;-1===h||k<h-1?(e=this.JI(h),a.start=k+1,a.count=-1===h?e:Math.min(c,Math.min(e,h-a.start)),this.zd.Ff(f,a,{success:function(b){this.Nn(b,f,l,a,h,d)}.bind(this),error:function(a){this.Ll(a,d)}.bind(this)})):k===h-1?(c=new b.Me(null,a.start),null!=d&&null!=d.success&&d.success.call(null,c)):(c=this.aV(f,
l,d,c),c||(c=new b.Me(null,a.start),null!=d&&null!=d.success&&d.success.call(null,c)));return}}this.DN(a,d)};b.ca.prototype.md=function(a,b,c){return this.zd.md(a,b,c)};b.b.g("FlattenedTreeDataSource.prototype.moveOK",{md:b.ca.prototype.md});b.ca.prototype.move=function(a,b,c,e){this.zd.move(a,b,c,e)};b.b.g("FlattenedTreeDataSource.prototype.move",{move:b.ca.prototype.move});b.ca.prototype.WI=function(){return this.nr-(this.Be()+1)};b.ca.prototype.Ll=function(a,b){null!=b&&null!=b.error&&b.error.call(null,
a)};b.ca.prototype.Nn=function(a,d,c,e,f,h){var k;k=[];a=new b.Qe(a,this.By.bind(this),e);this.via(a,d,c,k);-1===f&&0===a.R()&&null!=d&&0<c?(k=this.aV(d,c,h))||null!=h&&null!=h.success&&h.success.call(null,a):0===k.length?null!=h&&null!=h.success&&h.success.call(null,a):(d=[],d.push(k),k={},k.callbacks=h,k.nodeSet=a,k.keys=[],this.r0(d,k))};b.ca.prototype.Ye=function(a){return this.zd.Ye(a)};b.b.g("FlattenedTreeDataSource.prototype.getChildCount",{Ye:b.ca.prototype.Ye});b.ca.prototype.aV=function(a,
b,c,e){var f,h,k,l,m,n,p,r,s;void 0===e&&(e=this.WI());this.vga()&&(f={queueOnly:!0});h=s=this.JI(-1);for(k=this.Be()-1;0<=k;k--)if(l=this.Tg(k),m=l.depth,m<b&&(a=l.parent,n=this.zd.Ye(a),l=l.index,(p=-1===n)||l<n-1)){r={};r.start=l+1;p?(r.count=Math.min(e,Math.max(0,h)),f=void 0):r.count=Math.min(e,Math.min(h,n-r.start));if(0==r.count)break;this.zd.Ff(a,r,{success:function(b){this.Nn(b,a,m,r,n,c)}.bind(this),error:function(a){this.Ll(a,c)}.bind(this)},f);b=m;h=Math.max(0,h-r.count);if(p||0===m||
0===h)break}void 0!=f&&this.zd.Ff(a,{start:r.count,count:0},{success:function(b){this.Nn(b,a,m,r,n,c)}.bind(this),error:function(a){this.Ll(a,c)}.bind(this)});return h!=s};b.ca.prototype.via=function(a,b,c,e){var f,h,k,l;f=a.ta();h=a.R();for(k=0;k<h;k++)l=a.getMetadata(f+k),l=l.key,this.nA(l,c,f+k,b),this.Sw(l)&&e.push(l)};b.ca.prototype.By=function(a,b){this.Sw(a)&&!b.leaf?b.state="expanded":b.state=b.leaf?"leaf":"collapsed"};b.ca.prototype.kca=function(a,b){var c={maxCount:this.nr};0<=this.Be()&&
(c.start=this.Tg(this.Be()).key);this.zd.pu(null,{success:function(c){this.Pea(c,a,b)}.bind(this),error:function(a){this.Ll(a,b)}.bind(this)},c)};b.ca.prototype.jm=function(){return this.zd.jm()};b.b.g("FlattenedTreeDataSource.prototype.getSortCriteria",{jm:b.ca.prototype.jm});b.ca.prototype.Pea=function(a,d,c){var e,f,h;d.start>this.Be()?(e=this.WI(),f=Math.min(e,d.count),a=new b.Qe(a,this.By.bind(this),null,this.Ii),0<=this.Be()?(h=this.VV(),e={index:0,found:!1,count:0},this.QK(a,null,0,h,f,e),
f=e.index+1):(e={count:0},this.QK(a,null,0,null,f,e),f=0),null!=c&&null!=c.success&&(a=null!=e?0===e.count?new b.Me(null,d.start):new b.Ne(a,f):new b.Ne(a),c.success.call(null,a))):this.DN(d,c)};b.ca.prototype.QK=function(a,b,c,e,f,h){var k,l,m,n,p;k=a.ta();l=a.R();for(m=0;m<l&&h.count!=f;m++){n=a.getMetadata(k+m);p=n.key;h.checkDepth&&e.depth===c&&(h.found=!0,h.checkDepth=!1);if(null==e||h.found)this.nA(p,c,k+m,b),h.count+=1,n.state=n.leaf?"leaf":"expanded";null==e||h.found||(p===e.key?n.leaf||this.Sw(p)?
h.found=!0:h.checkDepth=!0:h.index+=1);a.If&&this.Sw(p)&&(n=a.If(m),null!=n&&this.QK(n,p,c+1,e,f,h))}};b.ca.prototype.expand=function(a){this.Xd(a)};b.b.g("FlattenedTreeDataSource.prototype.expand",{expand:b.ca.prototype.expand});b.ca.prototype.Xd=function(a,d){var c,e,f,h;c=this.zd.Ye(a);e=this.JI(c);f=this.nr;if(this.Be()+1===f&&(h=this.Fi(a),h==f-1)){this.CN(a,new b.Me(a,0),0,d);return}0==e?this.CN(a,new b.Me(a,0),0,d):this.zd.Ff(a,{start:0,count:e},{success:function(b){this.CN(a,b,c,d)}.bind(this),
error:function(){this.$na(a)}.bind(this)})};b.ca.prototype.collapse=function(a){var b,c,e,f,h;b=this.Fi(a)+1;c=this.Tg(b-1);e=0;c=c.depth;f=this.Be();for(h=b;h<f+1;h++){var k=this.Tg(h).depth;if(k>c)e+=1;else if(k==c)break}if(0!=e){this.ut()?this.Ii.push(a):this.jja(a);f=[];for(c=0;c<e;c++)f.push({key:this.Tg(b+c).key,index:b+c});this.KZ(b,e);this.CE(f)}this.handleEvent("collapse",{rowKey:a})};b.b.g("FlattenedTreeDataSource.prototype.collapse",{collapse:b.ca.prototype.collapse});b.ca.prototype.Sw=
function(a){return this.ut()?this.Ii&&0<this.Ii.length?-1===this.uV(a):!0:this.rm&&0<this.rm.length?-1<this.IV(a):!1};b.ca.prototype.uV=function(a){return this.TV(this.Ii,a)};b.ca.prototype.IV=function(a){return this.TV(this.rm,a)};b.ca.prototype.TV=function(a,b){var c,e;e=-1;for(c=0;c<a.length;c++)a[c]===b&&(e=c);return e};b.ca.prototype.jja=function(a){a=this.IV(a);-1<a&&this.rm.splice(a,1)};b.ca.prototype.dja=function(a){a=this.uV(a);-1<a&&this.Ii.splice(a,1)};b.ca.prototype.$na=function(a){this.handleEvent("expand",
{rowKey:a})};b.ca.prototype.CN=function(a,d,c,e){var f,h,k,l,m,n,p,r,s,q,t;d=new b.Qe(d,this.By.bind(this));h=f=this.Fi(a)+1;k=d.ta();l=d.R();m=this.Tg(f-1);n=m.depth+1;r=[];for(s=k;s<l;s++)k=d.getMetadata(s),p=k.key,this.Sw(p)&&r.push(p),this.HX(f,k,m.key,s,n),f++;this.ut()?this.dja(a):-1===this.rm.indexOf(a)&&this.rm.push(a);void 0!=e&&(q=e.queue,t=e.prevNodeSetInfo);void 0!=t&&(d=new b.Ig(t.nodeSet,d,a));if(0!=r.length||void 0!==q&&0!=q.length)void 0===q&&(q=[]),0<r.length&&q.push(r),void 0===
t&&(t={},t.firstIndex=h,t.firstKey=a,t.keys=[]),t.nodeSet=d,t.keys.push(a),this.r0(q,t);else{if(void 0!=t){e=t.callbacks;if(null!=e){e.success.call(null,d);return}this.gE(t.firstIndex,t.firstKey,d)}else this.gE(h,a,d);d=this.nr;-1===c&&l===this.qN()||c>l||f==d?this.VH(f):this.Be()>=d&&this.VH(d);if(void 0!=t)for(c=0;c<t.keys.length;c++)this.handleEvent("expand",{rowKey:t.keys[c]});this.handleEvent("expand",{rowKey:a})}};b.ca.prototype.r0=function(a,b){var c,e;c=a[a.length-1];e=c.shift();0===c.length&&
a.pop();this.Xd(e,{prevNodeSetInfo:b,queue:a})};b.ca.prototype.HX=function(a,b,c,e,f){b=b.key;a<=this.Be()?this.nA(b,f,e,c,a):this.nA(b,f,e,c)};b.ca.prototype.VH=function(a,b){var c;void 0==b&&(b=this.Be()+1-a);c=[];for(var e=0;e<b;e++)c.push({row:this.Tg(a+e).key,index:a+e});this.KZ(a,b);this.CE(c)};b.ca.prototype.gfa=function(a){var b,c,e;b=a.operation;c=a.parent;c=Array.isArray(c)?c[c.length-1]:c;e=a.index;"insert"===b?this.Uea(c,e,a.data):"delete"===b?this.Dea(c,e):"refresh"===b&&this.ofa(c)};
b.ca.prototype.Uea=function(a,b,c){var e,f;e=this.Fi(a);f=this.Tg(e).depth+1;e=e+b+1;c=c.getMetadata(c.ta());this.HX(e,c,a,b,f)};b.ca.prototype.Dea=function(a,d){var c,e,f,h,k;c=this.Fi(a);e=this.Tg(c);c+=d;f=this.Tg(c);b.l.assert(f.parent===e&&f.depth===e.depth+1);e=c+1;for(h=this.Be();e<=h;){k=this.Tg(e);if(k.depth!=f.depth)break;e++}this.VH(c,1)};b.ca.prototype.ofa=function(a){null==a&&this.refresh()};b.ca.prototype.ut=function(){var a=this.zd.getCapability("fetchDescendants");return void 0!=this.Ii&&
null!=a&&"disable"!=a};b.ca.prototype.vga=function(){return"enable"===this.zd.getCapability("batchFetch")};b.ca.prototype.refresh=function(){this.U$()};b.ca.prototype.Fi=function(a){var b,c,e;b=this.Be();for(c=0;c<=b;c++)if(e=this.Tg(c),e.key==a)return c;return-1};b.ca.prototype.getKey=function(a){return 0>a||a>this.Be()?null:this.Tg(a).key};b.ca.prototype.Cna=function(){return{start:0,end:this.Be()+1}};b.ca.prototype.xna=function(a){var b;b=[];a=this.Fi(a);for(a=this.kj(a);null!=a;)b.push(a),a=this.Fi(a),
a=this.kj(a);return b.reverse()};b.ca.prototype.DN=function(a,b){null!=b&&null!=b.error&&b.error.call(null)};b.ca.prototype.gE=function(){b.l.Wb()};b.ca.prototype.CE=function(){b.l.Wb()};b.ca.prototype.Be=function(){return this.qm.length-1};b.ca.prototype.VV=function(){return this.qm[this.Be()]};b.ca.prototype.Tg=function(a){return this.qm[a]};b.ca.prototype.kj=function(a){a=this.qm[a];return null!=a?a.parent:null};b.ca.prototype.nA=function(a,b,c,e,f){var h={};h.key=a;h.depth=b;h.index=c;h.parent=
e;void 0===f?this.qm.push(h):this.qm.splice(f,0,h)};b.ca.prototype.KZ=function(a,b){this.qm.splice(a,b)};b.ca.prototype.U$=function(){this.qm.length=0};b.ca.prototype.getCapability=function(a){return this.zd.getCapability(a)};b.b.g("FlattenedTreeDataSource.prototype.getCapability",{getCapability:b.ca.prototype.getCapability});b.ya("oj.ojRowExpander",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{context:null,expand:null,collapse:null},Ik:{root:"oj-rowexpander",icon:"oj-component-icon",
clickable:"oj-clickable-icon-nocontext",expand:"oj-rowexpander-expand-icon",collapse:"oj-rowexpander-collapse-icon",leaf:"oj-rowexpander-leaf-icon",lazyload:"oj-rowexpander-lazyload-icon",toucharea:"oj-rowexpander-touch-area",indent:"oj-rowexpander-indent",iconspacer:"oj-rowexpander-icon-spacer",depth0:"oj-rowexpander-depth-0",depth1:"oj-rowexpander-depth-1",depth2:"oj-rowexpander-depth-2",depth3:"oj-rowexpander-depth-3",depth4:"oj-rowexpander-depth-4",depth5:"oj-rowexpander-depth-5",depth6:"oj-rowexpander-depth-6",
depth7:"oj-rowexpander-depth-7"},lu:{av:7,m6:53},_ComponentCreate:function(){this._super();this.element.addClass(this.Ik.root);this.uX()},uX:function(){var a=this,b;b=this.options.context;this.Q=b.component;this.jc=b.datasource;this.depth=b.depth;this.Oh=b.state;this.Cm=b.key;this.index=b.index;this.uE=b.parentKey;this.C9();this.B9();this.TC();"expanded"===this.Oh||"collapsed"===this.Oh?(f(this.WO).on("touchend",function(b){b.preventDefault();a.wI()}),f(this.WO).on("click",function(b){b.preventDefault();
a.wI()}),f(this.element).on("keypress",function(b){var d=b.keyCode||b.which;if(d===f.ui.keyCode.ENTER||d===f.ui.keyCode.SPACE)a.wI(),b.preventDefault(),b.target.focus()}),this.eE=this.UW.bind(this),f(this.Q.element).on("ojkeydown",this.eE),this.d3=this.Nea.bind(this),this.c3=this.uea.bind(this),this.jc.on("expand",this.d3,this),this.jc.on("collapse",this.c3,this)):"leaf"===this.Oh&&(this.eE=this.UW.bind(this),f(this.Q.element).on("ojkeydown",this.eE),f(this.icon).attr("tabindex",-1));this.b3=this.jea.bind(this);
f(this.Q.element).on("ojactive",this.b3)},refresh:function(){this.element.empty();this.uX()},_destroy:function(){f(this.Q.element).off("ojkeydown",this.eE);f(this.Q.element).off("ojactive",this.b3);this.jc.off("expand",this.d3,this);this.jc.off("collapse",this.c3,this);this.element.removeClass(this.Ik.root);this.element.empty()},_setOption:function(a,b,c){this._super(a,b,c);"context"==a&&this.refresh()},C9:function(){var a,b;b=this.depth-1;if(b<this.lu.av)this.OG(b);else{for(a=1;a<=b/this.lu.av;a++)this.OG(this.lu.av);
a=b%this.lu.av;a<this.lu.av&&this.OG(a)}},OG:function(a){a=f(document.createElement("span")).addClass(this.Ik.indent).addClass(this.Ik["depth"+a]);this.element.append(a)},B9:function(){var a=f(document.createElement("div")).addClass(this.Ik.iconspacer);this.WO=f(document.createElement("div")).addClass(this.Ik.toucharea);this.icon=f(document.createElement("a")).attr("href","#").attr("aria-labelledby",this.UV()).addClass(this.Ik.icon).addClass(this.Ik.clickable);this.element.append(a.append(this.WO.append(this.icon)))},
Kp:function(a){this.icon.addClass(this.Ik[a])},Fq:function(a){this.icon.removeClass(this.Ik[a])},TC:function(){switch(this.Oh){case "leaf":this.Fq("icon");this.Fq("clickable");this.Kp("leaf");break;case "collapsed":this.Kp("expand");this.tA(!1);break;case "expanded":this.Kp("collapse");this.tA(!0);break;case "loading":this.Fq("clickable"),this.Kp("lazyload")}},bL:function(){switch(this.Oh){case "leaf":this.Fq("leaf");this.Kp("icon");this.Kp("clickable");break;case "collapsed":this.Fq("expand");break;
case "expanded":this.Fq("collapse");break;case "loading":this.Fq("lazyload"),this.Kp("clickable")}},jea:function(a,b){var c,e;null!=b.activeKey&&(c=b.activeKey.rowKey,this.Cm!==c||null!=b.previousActiveKey&&b.previousActiveKey.row==b.activeKey.row||!this.Q.PC||(c=this.A("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.jc.getWrappedDataSource().Ye(this.uE)}),e="collapsed"===this.Oh?this.A("accessibleStateCollapsed"):"expanded"===this.Oh?this.A("accessibleStateExpanded"):"",
this.Q.PC({context:c,state:e})))},UW:function(a,d){var c,e,g;if(this.Cm===d.rowKey&&(a=a.originalEvent,c=a.keyCode||a.which,b.v.Io(a)))if(c==f.ui.keyCode.RIGHT&&"collapsed"===this.Oh)this.sK(),this.jc.expand(this.Cm),a.preventDefault();else if(c==f.ui.keyCode.LEFT&&"expanded"===this.Oh)this.sK(),this.jc.collapse(this.Cm),a.preventDefault();else if(a.altKey&&c==this.lu.m6&&this.Q.PC){c=this.jc.xna(this.Cm);if(null!=c&&0<c.length)for(e=[],g=0;g<c.length;g++)e.push({key:c[g],label:this.A("accessibleLevelDescription",
{level:g+1})});c=this.A("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.jc.getWrappedDataSource().Ye(this.uE)});this.Q.PC({context:c,state:"",ancestors:e});a.preventDefault()}},sK:function(){this.bL();this.Oh="loading";this.TC()},Nea:function(a){a=a.rowKey;a===this.Cm&&(this.bL(),this.Oh="expanded",this.TC(),this.tA(!0),this._trigger("expand",null,{rowKey:a}))},uea:function(a){a=a.rowKey;a===this.Cm&&(this.bL(),this.Oh="collapsed",this.TC(),this.tA(!1),this._trigger("collapse",
null,{rowKey:a}))},wI:function(){var a=this.Oh;this.sK();"collapsed"===a?this.jc.expand(this.Cm):"expanded"===a&&this.jc.collapse(this.Cm)},tA:function(a){this.icon.attr("aria-expanded",a)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-rowexpander-disclosure"!==a&&"oj-rowexpander-icon"!==a||null==this.icon?null:this.icon.get(0)},getSubIdByNode:function(a){return a===this.icon.get(0)?{Sra:"oj-rowexpander-disclosure"}:null},gn:function(){this._super();
this.icon.attr("aria-labelledby",this.UV())},UV:function(){return this.element.parent().closest("[id]").attr("id")}})});