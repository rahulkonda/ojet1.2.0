/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(b){b.Ra=function(f,a){if(!(f instanceof Array)&&"function"!=typeof f&&"function"!=typeof f.Kpa)throw Error("_ERR_DATA_INVALID_TYPE_SUMMARY\n_ERR_DATA_INVALID_TYPE_DETAIL");this.yr=this.Tda(a);null!=a&&(this.columns=a.columns,this.Ai=a.initialSort);b.Ra.q.constructor.call(this,f)};o_("ArrayDataGridDataSource",b.Ra,b);b.b.ga(b.Ra,b.Om,"oj.ArrayDataGridDataSource");b.Ra.prototype.Init=function(){null==this.columns&&(this.columns=this.Mca(this.Fj()));
this.nga();"function"==typeof this.data&&this.data.subscribe(this.fla.bind(this),null,"arrayChange");b.Ra.q.Init.call(this)};b.b.g("ArrayDataGridDataSource.prototype.Init",{Init:b.Ra.prototype.Init});b.Ra.prototype.Tda=function(b){if(null!=b&&null!=b.rowHeader)if(b=b.rowHeader,"object"===typeof b){if(null!=b["default"]&&"none"==b["default"])return}else if(null!=b)return b;return"m_defaultIndex"};b.Ra.prototype.nga=function(){var b;b=this.Fj();for(this.ir=0;this.ir<b.length;this.ir+=1)b[this.ir].ojKey=
this.ir.toString()};b.Ra.prototype.Mca=function(b){var a,d;if("number"!==typeof b.length||0===b.length)return[];d=[];for(a in b[0])b[0].hasOwnProperty(a)&&(void 0!=this.yr&&a==this.yr||d.push(a));return d};b.Ra.prototype.R=function(b){return"row"===b?this.ho():"column"===b?this.columns.length:0};b.b.g("ArrayDataGridDataSource.prototype.getCount",{R:b.Ra.prototype.R});b.Ra.prototype.og=function(){return"exact"};b.b.g("ArrayDataGridDataSource.prototype.getCountPrecision",{og:b.Ra.prototype.og});b.Ra.prototype.NI=
function(b,a){var d;if("row"===b){if(void 0==this.yr)return null;if("m_defaultIndex"==this.yr)return this.LB(a);d=this.Fj();return d[a][this.yr]}if("column"===b)return this.columns[a]};b.Ra.prototype.jda=function(b,a){var d;if("row"===b)return{key:this.LB(a)};if("column"===b)return d=this.NI(b,a),null!=this.Ai&&this.Ai.key===d?{key:this.NI(b,a),sortDirection:this.Ai.direction}:{key:d}};b.Ra.prototype.Gf=function(f,a,d){var c,e,g,h;c=f.axis;e=f.start;g=f.count;e=Math.max(0,e);"column"===c?g=Math.min(this.columns.length,
e+g):(h=this.Fj(),g=void 0===this.yr?e:Math.min(h.length,e+g));c=new b.Cd(e,g,c,this);null!=a&&null!=a.success&&(null==d&&(d={}),a.success.call(d.success,c,f))};b.b.g("ArrayDataGridDataSource.prototype.fetchHeaders",{Gf:b.Ra.prototype.Gf});b.Ra.prototype.Eca=function(b,a){var d=this.columns[a];return this.Fj()[b][d]};b.Ra.prototype.Fca=function(b,a){return{keys:{row:this.LB(b),column:this.columns[a]}}};b.Ra.prototype.ng=function(f,a,d){var c,e,g,h,k,l;for(c=0;c<f.length;c+=1)e=f[c],"row"===e.axis?
(g=e.start,h=Math.min(this.ho(),g+e.count)):"column"===e.axis&&(k=e.start,l=Math.min(this.columns.length,k+e.count));void 0===h||void 0===l?null!=a&&null!=a.error&&(null==d&&(d={}),a.error.call(d.error)):(c=new b.Qf(g,h,k,l,this),null!=a&&null!=a.success&&(null==d&&(d={}),a.success.call(d.success,c,f)))};b.b.g("ArrayDataGridDataSource.prototype.fetchCells",{ng:b.Ra.prototype.ng});b.Ra.prototype.keys=function(b){var a=b.row,d=b.column;return new Promise(function(b){b({row:this.LB(a),column:this.columns[d]})}.bind(this))};
b.b.g("ArrayDataGridDataSource.prototype.keys",{keys:b.Ra.prototype.keys});b.Ra.prototype.tg=function(b){var a=b.row,d=b.column;return new Promise(function(b){b({row:this.KB(a),column:this.columns.indexOf(d)})}.bind(this))};b.b.g("ArrayDataGridDataSource.prototype.indexes",{tg:b.Ra.prototype.tg});b.Ra.prototype.sort=function(b,a,d){var c=[],e=[],g,h;null!=a&&null==d&&(d={});if(null==b)this.mL(a,d);else if(g=b.axis,h=b.key,b=b.direction,"column"===g)void 0==this.sr&&(this.Wha=this.Ai,this.sr=this.data.slice()),
this.Ai={key:h,direction:b},this.Fj().sort(this.IY(b,h)),null!=a&&null!=a.success&&a.success.call(d.success);else if("row"===g){h=this.KB(h);for(g=0;g<this.columns.length;g+=1)c[g]=this.Fj()[h][this.columns[g]];c.sort(this.IY(b));for(g=0;g<this.columns.length;g+=1)e[g]=this.columns[c.indexOf(this.Fj()[h][this.columns[g]])];this.g4=this.columns;this.columns=e;null!=a&&null!=a.success&&a.success.call(d.success)}else null!==a&&null!=a.error&&a.error.call(d.error,"Invalid axis value")};b.b.g("ArrayDataGridDataSource.prototype.sort",
{sort:b.Ra.prototype.sort});b.Ra.prototype.mL=function(b,a){null!=this.sr&&(this.data=this.sr,this.Ai=this.Wha);null!=this.g4&&(this.columns=this.g4);null!=b&&null!=b.success&&b.success.call(a.success)};b.Ra.prototype.getCapability=function(b){return"sort"===b?"column":"move"===b?"row":null};b.b.g("ArrayDataGridDataSource.prototype.getCapability",{getCapability:b.Ra.prototype.getCapability});b.Ra.prototype.IY=function(b,a){if("ascending"===b)return function(b,c){var e,f;void 0!=a&&(b instanceof Array?
(b=b[parseInt(a,10)],c=c[parseInt(a,10)]):(b=b[a],c=c[a]));e=isNaN(b);f=isNaN(c);b instanceof Date&&(b=b.toISOString(),e=!0);c instanceof Date&&(c=c.toISOString(),f=!0);return e&&f?b<c?-1:b===c?0:1:e?1:f?-1:b-c};if("descending"===b)return function(b,c){var e,f;void 0!=a&&(b instanceof Array?(b=b[parseInt(a,10)],c=c[parseInt(a,10)]):(b=b[a],c=c[a]));e=isNaN(b);f=isNaN(c);b instanceof Date&&(b=b.toISOString(),e=!0);c instanceof Date&&(c=c.toISOString(),f=!0);return e&&f?b>c?-1:b===c?0:1:e?-1:f?1:c-
b}};b.Ra.prototype.move=function(b,a){var d,c,e;d=this.KB(b);c=this.data.splice(d,1)[0];this.data instanceof Array&&(d=this.nk("delete",b,null,d,-1,!0),this.handleEvent("change",d));null===a?this.data.push(c):(e=this.KB(a),this.data.splice(e,0,c));this.data instanceof Array&&(d=this.nk("insert",b,null,e,-1),this.handleEvent("change",d));null!=this.sr&&(this.sr=this.data.slice())};b.b.g("ArrayDataGridDataSource.prototype.move",{move:b.Ra.prototype.move});b.Ra.prototype.md=function(){return"valid"};
b.b.g("ArrayDataGridDataSource.prototype.moveOK",{md:b.Ra.prototype.md});b.Ra.prototype.Fj=function(){return"function"===typeof this.data?this.data():this.data};b.Ra.prototype.KB=function(b){var a,d=this.Fj();for(a=0;a<d.length;a++)if(d[a].ojKey===b)return a;return-1};b.Ra.prototype.LB=function(b){var a=this.Fj();return a[b]?a[b].ojKey:null};b.Ra.prototype.nk=function(b,a,d,c,e,g){var h={source:this};h.operation=b;h.keys={row:a,column:d};h.indexes={row:c,column:e};h.silent=g;return h};b.Ra.prototype.fla=
function(b){var a,d,c,e=!1;d=!1;var g=[],h=[];for(a=0;a<b.length;a++){c=b[a];if(void 0!==c.moved){d=!0;c=this.nk("refresh",null,null);this.handleEvent("change",c);break}"added"===c.status&&(e=!0)}if(!d){for(a=0;a<b.length;a++)c=b[a],"deleted"===c.status&&(d=c.value,c=c.index,d=d.ojKey,g.push({row:d,column:-1}),h.push({row:c,column:-1}));0<g.length&&(c={source:this,operation:"delete",keys:g,indexes:h,silent:e},this.handleEvent("change",c));for(a=0;a<b.length;a++)c=b[a],"added"===c.status&&(d=c.value,
c=c.index,null==d.ojKey&&(d.ojKey=this.ir.toString(),this.ir++),d=d.ojKey,c=this.nk("insert",d,null,c,-1),this.handleEvent("change",c))}null!=this.sr&&(this.sr=this.data.slice())};b.Ra.prototype.ho=function(){return this.Fj().length};b.Ra.prototype.H2=function(){return this.yr};b.b.g("ArrayDataGridDataSource.prototype.getRowHeaderKey",{H2:b.Ra.prototype.H2});b.Ra.prototype.Co=function(){return this.columns};b.b.g("ArrayDataGridDataSource.prototype.getColumns",{Co:b.Ra.prototype.Co});b.Ra.prototype.getData=
function(){return this.data};b.b.g("ArrayDataGridDataSource.prototype.getData",{getData:b.Ra.prototype.getData});b.Cd=function(b,a,d,c){this.Yb=b;this.oe=a;this.G3=d;this.Ij=c};o_("ArrayHeaderSet",b.Cd,b);b.Cd.prototype.getData=function(f,a){if(null==this.Ij)return null;b.l.assert(f<=this.oe&&f>=this.Yb,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return this.Ij.NI(this.G3,f)};b.b.g("ArrayHeaderSet.prototype.getData",{getData:b.Cd.prototype.getData});b.Cd.prototype.getMetadata=
function(f,a){if(null==this.Ij)return null;b.l.assert(f<=this.oe&&f>=this.Yb,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return this.Ij.jda(this.G3,f)};b.b.g("ArrayHeaderSet.prototype.getMetadata",{getMetadata:b.Cd.prototype.getMetadata});b.Cd.prototype.pg=function(){return 0<this.R()?1:0};b.b.g("ArrayHeaderSet.prototype.getLevelCount",{pg:b.Cd.prototype.pg});b.Cd.prototype.Rb=function(f,a){b.l.assert(f<=this.oe&&f>=this.Yb,"index out of bounds");b.l.assert(null==a||0==
a,"level out of bounds");return{extent:1,more:{before:!1,after:!1}}};b.b.g("ArrayHeaderSet.prototype.getExtent",{Rb:b.Cd.prototype.Rb});b.Cd.prototype.ie=function(f,a){b.l.assert(f<=this.oe&&f>=this.Yb,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return 1};b.b.g("ArrayHeaderSet.prototype.getDepth",{ie:b.Cd.prototype.ie});b.Cd.prototype.R=function(){return null==this.Ij?0:Math.max(0,this.oe-this.Yb)};b.b.g("ArrayHeaderSet.prototype.getCount",{R:b.Cd.prototype.R});b.Cd.prototype.ta=
function(){return this.Yb};b.b.g("ArrayHeaderSet.prototype.getStart",{ta:b.Cd.prototype.ta});b.Qf=function(b,a,d,c,e){this.Ji=b;this.lr=a;this.Xk=d;this.kr=c;this.Ij=e};o_("ArrayCellSet",b.Qf,b);b.Qf.prototype.getData=function(b){return this.Ij.Eca(b.row,b.column)};b.b.g("ArrayCellSet.prototype.getData",{getData:b.Qf.prototype.getData});b.Qf.prototype.getMetadata=function(b){return this.Ij.Fca(b.row,b.column)};b.b.g("ArrayCellSet.prototype.getMetadata",{getMetadata:b.Qf.prototype.getMetadata});b.Qf.prototype.ta=
function(b){return"row"==b?this.Ji:"column"==b?this.Xk:-1};b.b.g("ArrayCellSet.prototype.getStart",{ta:b.Qf.prototype.ta});b.Qf.prototype.R=function(b){return"row"===b?Math.max(0,this.lr-this.Ji):"column"===b?Math.max(0,this.kr-this.Xk):0};b.b.g("ArrayCellSet.prototype.getCount",{R:b.Qf.prototype.R});b.Qf.prototype.getStartRow=function(){return this.Ji};b.b.g("ArrayCellSet.prototype.getStartRow",{getStartRow:b.Qf.prototype.getStartRow});b.Qf.prototype.getStartColumn=function(){return this.Xk};b.b.g("ArrayCellSet.prototype.getStartColumn",
{getStartColumn:b.Qf.prototype.getStartColumn})});