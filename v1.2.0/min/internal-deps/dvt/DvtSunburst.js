/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtBaseTreeView'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.OC=function(a,b){this.Init(b===D.p?"sunburstRotationInput":"sunburstRotation");this.Sd=a%360};(0,D.da)("DvtSunburstRotationEvent",D.OC);D.A.q(D.OC,D.Pi,"DvtSunburstRotationEvent");D.OC.TYPE="sunburstRotation";D.OC.TYPE_INPUT="sunburstRotationInput";D.OC.prototype.usa=(0,D.y)("Sd");D.OC.prototype.getStartAngle=D.OC.prototype.usa;
D.ER=function(a,b,c){this.Init(a,b,c)};(0,D.da)("DvtSunburst",D.ER);D.A.q(D.ER,D.FR,"DvtSunburst");D.ER.newInstance=function(a,b,c){return new D.ER(a,b,c)};D.z=D.ER.prototype;D.z.Init=function(a,b,c){D.ER.u.Init.call(this,a,b,c);this.xf=new D.GR;this.Od=2*window.Math.PI};
D.z.pN=function(a){D.ER.u.pN.call(this,a);a=this.v();this.Yoa=(0,D.Ti)()?"url("+a._resources.rotateCursor+"), auto":"url("+a._resources.rotateCursor+") 8 8, auto";this.Sd=(360-a.startAngle)*D.HR/360;this.Sd>window.Math.PI&&(this.Sd-=D.HR);"auto"==a.animationOnDisplay&&(a.animationOnDisplay="fan")};
D.z.kq=function(a){var b=window.Math.max(window.Math.ceil(3*window.Math.min(a.e,a.g)/400),2);a.x+=b;a.y+=b;a.e-=2*b;a.g-=2*b;(0,D.IR)(this,a);this.Fb=D.JR.W(this,a,this.HX);this.Lpa=window.Math.floor(window.Math.min(a.e,a.g)/2);this.Pa&&D.KR.jr(this.Lpa,this.Pa,this.Sd,this.Od,this.v().sorting)};
D.z.Vj=function(a,b){(0,D.LR)(this,a);this.tn&&a.k(this.tn);this.Fb&&(a.k(this.Fb),this.Fb=D.o);this.fy=new D.H(b.x+b.e/2,b.y+b.g/2);if("off"!=this.v().rotation&&(0,D.MR)(this)){var c=(0,D.Jf)()?60:15,c=new D.Zn(this.j(),b.x+b.e/2,b.y+b.g/2,this.Lpa+c);(0,D.Ai)(c);c.setCursor(this.Yoa);a.k(c);this.Ia().La(c,new D.NR(D.o,"_rotationShape"))}c=new D.F(this.j());(0,D.wk)(c,this.fy.x,this.fy.y);a.k(c);if((0,D.MR)(this)){var d=new D.F(this.j());c.k(d);this.Pa.W(d);(0,D.OR)(this,this.Pa);this.Yx=new D.F(this.j());
c.k(this.Yx);this.Ala=new D.F(this.j());c.k(this.Ala)}else(0,D.PR)(this,a)};D.z.CI=function(a,b,c,d){return new D.QR(a,b,c,d)};D.z.j2=function(a,b){if("fan"===this.v().animationOnDisplay&&(0,D.MR)(this)){this.v4(0);var c=new D.vn(this.j(),this,this.uI);(0,D.T)(c.O,"typeNumber",this,this.Jza,this.v4,2*window.Math.PI);return c}return D.ER.u.j2.call(this,a,b)};D.z.i2=function(){var a=D.ER.u.i2.call(this);a&&(0,D.wk)(a,this.fy.x,this.fy.y);return a};
D.z.Ar=function(){if(!this.q1){this.fa.Rj();var a=new D.C(0,0,this.Ma,this.Xa);this.kq(a);this.Vj(this.fa,a);for(var a=this.Qb?this.Qb.getSelection():[],b=0;b<a.length;b++)a[b].qb(D.k)}this.Od<2*window.Math.PI&&this.v4(2*window.Math.PI);D.ER.u.Ar.call(this)};D.z.cV=function(a){this.Yx.k(a);!(0,D.Fq)()&&!(0,D.pj)()&&((0,D.Vz)(this.Yx),(0,D.To)(this.Yx,D.RR))};D.z.Jza=(0,D.y)("Od");D.z.v4=function(a){this.Od=a;this.kq(new D.C(0,0,this.Ma,this.Xa));this.Pa&&(0,D.SR)(this.Pa,D.k)};
D.TR=function(a,b){a.S5=b;a.mL=new D.Re(a.j(),0,0,a.Ma,a.Xa);(0,D.Ai)(a.mL);a.mL.setCursor(a.Yoa);a.k(a.mL);a.Ia().La(a.mL,new D.NR(D.o,"_rotationShape"))};D.UR=function(a,b){var c=b-a.S5;a.S5=b;a.Sd+=c;a.Sd<-window.Math.PI?a.Sd+=2*window.Math.PI:a.Sd>window.Math.PI&&(a.Sd-=2*window.Math.PI);a.kq(new D.C(0,0,a.Ma,a.Xa));a.Pa&&(0,D.SR)(a.Pa,D.k);a.kb(new D.OC(360-window.Math.round(180*a.Sd/window.Math.PI),D.p))};
D.VR=function(a){a.S5=D.o;a.removeChild(a.mL);a.mL=D.o;var b=360-window.Math.round(180*a.Sd/window.Math.PI);a.kb(new D.OC(b,D.p));a.kb(new D.OC(b,D.k))};D.WR=function(a,b,c){return window.Math.atan2(c-a.fy.y,b-a.fy.x)};D.z=D.ER.prototype;D.z.YE=function(a,b){return this.Pa.JD(a-this.fy.x,b-this.fy.y)};D.z.Uu=function(a){(a=D.ER.u.Uu.call(this,a))&&(0,D.wk)(a,this.fy.x,this.fy.y);return a};D.z.Uj=function(){return(0,D.uk)(this.v(),"componentName","DvtUtilBundle","SUNBURST")};D.z.i_=(0,D.ba)("DvtSunburstBundle");
D.z.fq=function(a){return new D.XR(this,a)};
D.XR=function(a,b){this.Init(a,b);var c=this.K.v().nodeDefaults;this.Yr=b.labelDisplay?b.labelDisplay:c.labelDisplay;this.zK=b.labelHalign?b.labelHalign:c.labelHalign;this.vo=b.radius};D.A.q(D.XR,D.dS,"DvtSunburstNode");D.HR=2*window.Math.PI;
D.XR.prototype.W=function(a){if(this.uv){this.YX=a;this.J=this.Q5();a.k(this.J);var b=(0,D.eS)(this);if(!this.ug&&(0==this.vk&&this.Od==D.HR)&&b){var c=window.Math.sqrt(2),d=this.Dj*c-4;this.Jb=-this.Dj/c+2;this.fc=-this.Dj/c+2;var c=this.v()._cf,e=this.K.Gc;e.Or=c;0<d&&0<d&&((0,D.pg)(e,d),(0,D.qg)(e,d),e.Me((0,D.fS)(this)),this.E5=b=D.B.eI(e,b,this.J),c=b.I(),(0,D.wk)(b,this.Jb+(d-c.e)/2,this.fc+(d-c.g)/2))}else this.Vb=this.aP(this.J),this.Vb!=D.o&&(this.J.k(this.Vb),this.hs&&(c=this.Vb.Nb(),this.ls=
new D.Re(this.K.j(),c.x,c.y,c.e,c.g),this.ls.va("#FFFFFF"),this.ls.xa(D.p),this.J.k(this.ls),d=this.Vb.Da(),(0,D.pF)(d)||this.ls.Ja(d),this.J.k(this.Vb)));this.J.kd("img");this.rn();this.Iy(a)}};D.XR.prototype.qb=function(a){D.XR.u.qb.call(this,a);this.Ga()?(this.J.qb(D.k),this.K.cV(this.J)):(this.J.qb(D.p),this.YX&&this.YX.k(this.J))};D.XR.prototype.Xb=function(){this.J&&this.uv&&(this.J.Xb(),this.Ga()?this.K.cV(this.J):this.K.Ala.k(this.J))};
D.XR.prototype.Mb=function(){this.J&&(this.uv&&!this.xc())&&(this.J.Mb(),!this.Ga()&&this.YX&&this.YX.k(this.J))};D.aS=function(a){return"insert"==a.FF||"insertAndReplace"==a.FF};
D.XR.prototype.Vd=function(a){var b,c,d,e;if(a.type==D.rk)return D.XR.u.Vd.call(this,a);b=a.keyCode;if(32==b&&a.ctrlKey)return this;for(e=this;e.ug;)e=e.ug;c=(0,D.gS)(this,e,(0,D.hS)(this));a:{for(d=0;d<c.length;d++)if(this===c[d])break a;d=-1}var f=this.Sd+this.Od/2,f=(0,D.iS)(f);switch(b){case 38:if(this===e||180<f){if(b=this.FX)if(c=b.Sd+b.Od/2,c=(0,D.iS)(c),180<c)return b;a=(0,D.Pm)(this,a,(0,D.jS)(this))}else a=(0,D.kS)(this);break;case 40:if(this===e||0<=f&&180>=f){if(b=this.FX)if(c=b.Sd+b.Od/
2,c=(0,D.iS)(c),0<=c&&180>=c)return b;a=(0,D.Pm)(this,a,(0,D.jS)(this))}else a=(0,D.kS)(this);break;case 37:a=1==c.length?this:0==d?c[c.length-1]:c[d-1];break;case 39:a=1==c.length?this:d==c.length-1?c[0]:c[d+1];break;default:a=this}(0,D.lS)(a);return a};D.kS=function(a){var b=a.ug;b&&(a=b,(0,D.lS)(b));(0,D.lS)(a);return a};D.iS=function(a){a=D.sg.YM(a);0>a?a+=360:360<a&&(a-=360);return a};D.z=D.XR.prototype;
D.z.Je=function(){if(this.J){var a=this.J.I(),b=new D.H(a.x,a.y),b=(0,D.bf)(this.J,b);a.x=b.x;a.y=b.y;return a}return new D.C(0,0,0,0)};D.z.Nj=function(){return this.J?this.J.ya():D.o};D.z.l_=function(){return(0,D.bf)(this.J,(0,D.mS)(0.5*(this.Dj+this.vk),this.Sd+this.Od/2))};D.z.BT=function(a,b,c,d){this.vk=a;this.Dj=b;this.Sd=c;this.Od=d;this.uv=D.k};D.z.II=function(){return this.aC?(0,D.go)():D.XR.u.II.call(this)};
D.z.fn=function(a){var b=D.J.ze(this.qk),c=D.J.xe(this.qk),d=D.J.we(this.qk),e=this.Sd;a&&!(0,window.isNaN)(a[2])&&(a=a[2],a-this.Sd>window.Math.PI?e+=D.HR:this.Sd-a>window.Math.PI&&(e-=D.HR));return[this.vk,this.Dj,e,this.Od,b,c,d]};D.z.Cr=function(a){this.BT(a[0],a[1],a[2],a[3]);this.qk=D.J.fB(window.Math.round(a[4]),window.Math.round(a[5]),window.Math.round(a[6]));(0,D.SR)(this,D.p)};D.z.hf=function(a,b){b.uv&&0<b.Od?D.XR.u.hf.call(this,a,b):this.yg(a)};
D.z.JD=function(a,b){if(this.contains(a,b))return this;for(var c=this.Ic(),d=0;d<c.length;d++){var e=c[d].JD(a,b);if(e)return e}return D.o};D.z.contains=function(a,b){var c=(0,D.nS)(a,b);return window.Math.sqrt(a*a+b*b)>=this.vk&&window.Math.sqrt(a*a+b*b)<=this.Dj&&(0,D.oS)(this,c)};D.oS=function(a,b){for(;b<a.Sd;)b+=D.HR;for(;b-a.Sd>D.HR;)b-=D.HR;return b>=a.Sd&&b<=a.Sd+a.Od};D.mS=function(a,b){return{x:window.Math.cos(b)*a,y:window.Math.sin(b)*a}};
D.nS=function(a,b){var c=window.Math.atan2(b,a);0>c?c+=D.HR:c>D.HR&&(c-=D.HR);return c};
D.XR.prototype.Q5=function(){if(!this.Od||0>=this.Od)return D.o;var a=(0,D.pS)(this),a=new D.Mh(this.K.j(),a);this.K.Ia().La(a,this);a.D(this.ma());a.P(this.II());var b=this.K.v().nodeDefaults,c=this.v();a.ba(new D.ig(c.borderColor||b.borderColor,1,c.borderWidth||b.borderWidth));a.Yp(new D.ig(b.hoverColor,1,3));a.$p(new D.ig(b.selectedInnerColor,1,1.5),new D.ig(b.selectedOuterColor,1,3.5));a.tr(new D.ig(b.hoverColor,1,3));a.Sf(this.Ea());this.aC&&(a.D(0.001),a.xa(D.p));return a};
D.pS=function(a){var b,c,d,e;a.Od<D.HR?(b=(0,D.mS)(a.Dj,a.Sd),c=(0,D.mS)(a.Dj,a.Sd+a.Od),d=(0,D.mS)(a.vk,a.Sd+a.Od),e=(0,D.mS)(a.vk,a.Sd),b=D.K.moveTo(b.x,b.y)+D.K.arcTo(a.Dj,a.Dj,a.Od,1,c.x,c.y)+D.K.lineTo(d.x,d.y)+D.K.arcTo(a.vk,a.vk,a.Od,0,e.x,e.y)+D.K.closePath()):(b=(0,D.mS)(a.Dj,a.Sd),c=(0,D.mS)(a.Dj,a.Sd+a.Od/2),d=(0,D.mS)(a.vk,a.Sd),e=(0,D.mS)(a.vk,a.Sd+a.Od/2),b=D.K.moveTo(b.x,b.y)+D.K.arcTo(a.Dj,a.Dj,a.Od/2,1,c.x,c.y)+D.K.arcTo(a.Dj,a.Dj,a.Od/2,1,b.x,b.y),0<a.vk&&(b+=D.K.moveTo(e.x,e.y)+
D.K.arcTo(a.vk,a.vk,a.Od/2,0,d.x,d.y)+D.K.arcTo(a.vk,a.vk,a.Od/2,0,e.x,e.y)),b+=D.K.closePath());return b};
D.XR.prototype.aP=function(a){if(!this.oD||(!a||!this.Yr||"off"==this.Yr)||this==this.K.Pa&&this.Od<D.HR)return D.o;var b=D.p;if("auto"==this.Yr){if(b=!(0,D.Ti)())(0,D.jG)(),b="Windows"==D.cG;b=b?D.p:D.k}else"rotated"==this.Yr&&(b=D.k);if(b&&this.Od<this.K.Od){var c=window.Math.max(this.vk,10),d=this.Dj-c-6,e=1.1*this.Od*(c+6);if(6>=e)a=D.o;else if(b=new D.Kf(this.K.j(),this.oD,0,0),b.Me((0,D.fS)(this)),(0,D.qS)(this,b),D.Ye.Yb(b,d,e,a)){d=(c+this.Dj)/2;if("inner"==this.zK||"outer"==this.zK)a.k(b),
a=b.I().e,"inner"==this.zK?d=c+4.5+a/2:"outer"==this.zK&&(d=this.Dj-4.5-a/2);a=(0,D.mS)(d,this.Sd+this.Od/2);b.$e();b.Ff();c=this.Sd+this.Od/2;c=c>=D.HR?c-D.HR:c;c=0>c?c+D.HR:c;c>0.5*window.Math.PI&&c<1.5*window.Math.PI&&(c+=window.Math.PI);b.ik(c);(0,D.wk)(b,a.x,a.y);b.xa(D.p);a=b}else a=D.o}else{if(0==this.vk)b={x:0,y:0};else if(b=(0,D.mS)((this.vk+this.Dj)/2,this.Sd+this.Od/2),c=3*(0,D.fS)(this)/2,d=(0,D.nS)(b.x+c/2,b.y),!(0,D.oS)(this,(0,D.nS)(b.x-c/2,b.y))||!(0,D.oS)(this,d))b=D.o;if(b){c=new D.Kf(this.K.j(),
this.oD,b.x,b.y,D.o);c.Me((0,D.fS)(this));(0,D.qS)(this,c);c.$e();c.Ff();c.xa(D.p);for(var d=D.Ye.Ph(c),f=e=b.x,g=b.y-d.g/2,h=b.y+d.g/2,j=D.k;this.contains(e,g)&&this.contains(e,h)&&j;)e--,this.Od>window.Math.PI&&b.x-e>=d.e/2&&(j=D.p);for(j=D.k;this.contains(f,g)&&this.contains(f,h)&&j;)f++,this.Od>window.Math.PI&&f-b.x>=d.e/2&&(j=D.p);e+=3;f-=3;b=2*window.Math.min(b.x-e,f-b.x);b<d.e&&(c.ka((e+f)/2),b=f-e);a=D.Ye.Yb(c,b,d.g,a)?c:D.o}else a=D.i}return a};
D.XR.prototype.uu=function(){if(!this.Vc){var a;a=this.J;var b=this.mb();if(!a||!(0,D.aS)(this)||!this.nf()&&b)a=D.o;else{if(b)var b=this.K.j(),c=this.K.v()._resources,d=new D.Se(b,c.collapse,0,0,16,16),e=new D.Se(b,c.collapseOver,0,0,16,16),c=new D.Se(b,c.collapseDown,0,0,16,16);else b=this.K.j(),c=this.K.v()._resources,d=new D.Se(b,c.expand,0,0,16,16),e=new D.Se(b,c.expandOver,0,0,16,16),c=new D.Se(b,c.expandDown,0,0,16,16);(0,D.Ai)(d);(0,D.Ai)(e);(0,D.Ai)(c);b=new D.Ne(b,d,e,c);b.pa(D.rk,this.Baa,
D.p,this);d=(0,D.mS)(this.Dj,this.Sd+this.Od/2);(0,D.wk)(b,d.x-8,d.y-8);a.k(b);a=(0,D.N)("DvtUtilBundle",this.mb()?"COLLAPSE":"EXPAND");this.K.Ia().La(b,new D.NR(this,this.getId(),a));a=b}this.Vc=a}D.XR.u.uu.call(this)};D.XR.prototype.su=function(){this.Vc&&this.J&&(this.J.removeChild(this.Vc),this.Vc=D.o);D.XR.u.su.call(this)};
D.SR=function(a,b){if(a.J){var c=(0,D.pS)(a);a.J.Sj(c);if(a.ug||!(0==a.vk&&a.Od==D.HR))a.Vb&&a.J.removeChild(a.Vb),a.Vb=a.aP(a.J),a.ls&&(a.J.removeChild(a.ls),a.ls=D.o);a.J.P(a.II());if(b)for(var c=a.Ic(),d=0;d<c.length;d++)(0,D.SR)(c[d],D.k)}};D.XR.prototype.rH=function(){return this.J instanceof D.Zn?new D.Zn(this.K.j(),this.J.Ng(),this.J.Og(),this.J.Lj()):this.J instanceof D.Mh?new D.Mh(this.K.j(),this.J.GA()):D.o};
D.XR.prototype.Baa=function(a){this.qf(!this.mb());var b=this.K,c=this.mb(),d=this.getId();b.pQ=d;c?(c=this.v(),c.nodes&&0<c.nodes.length&&b.W(b.v()),b.kb(new D.bS("sunburstExpand",this.getId()))):(b.W(b.v()),b.kb(new D.bS("sunburstCollapse",this.getId())));this.rn();a.stopPropagation()};D.cS=function(a){return a.vo!=D.o?(0,window.Number)(a.vo):a.ug?1:a.aC?0.25:(0,D.eS)(a)?1:0.5};
D.XR.prototype.oc=function(){var a=this.K.v(),b=[];this.Ea()&&b.push((0,D.N)("DvtUtilBundle",this.Ga()?"STATE_SELECTED":"STATE_UNSELECTED"));(0,D.aS)(this)&&b.push((0,D.N)("DvtUtilBundle",this.mb()?"STATE_EXPANDED":"STATE_COLLAPSED"));this.wu()&&b.push((0,D.uk)(a,"stateDrillable","DvtUtilBundle","STATE_DRILLABLE"));return(0,D.vk)(this.Kc(),b)};D.XR.prototype.rn=function(){!(0,D.af)()&&this.J&&this.J.Rb("label",this.oc())};
D.XR.prototype.$v=function(){var a=D.XR.u.$v.call(this);a.radius=(0,D.cS)(this);return a};
D.KR={};D.A.q(D.KR,D.A,"DvtSunburstLayout");D.KR.jr=function(a,b,c,d,e){var f=D.KR.Zia(b);D.KR.tf(a/f,b,c,d,e,0)};D.KR.tf=function(a,b,c,d,e,f){var g=f+(0,D.cS)(b)*a;b.BT(f,g,c,d);f=b.Ic();if(f!=D.o&&b.mb()){"on"==e&&(f=f.slice(0),f.sort(function(a,b){return b.Zc()-a.Zc()}));(0,D.G)(b.K.j())&&(f=f.slice(0).reverse());var h=0;for(b=0;b<f.length;b++)h+=0<f[b].Zc()?f[b].Zc():0;for(b=0;b<f.length;b++){var j=f[b];if(!(0>=j.Zc())){var l=j.Zc()/h*d;D.KR.tf(a,j,c,l,e,g);c+=l}}}};
D.KR.Zia=function(a){var b=0,c=a.Ic();if(c&&0<c.length){for(var d=0;d<c.length;d++)var e=D.KR.Zia(c[d]),b=window.Math.max(b,e);return b+(0,D.cS)(a)}return(0,D.cS)(a)};
D.bS=function(a,b){this.Init(a);this.ib=b?b:D.o};D.A.q(D.bS,D.Pi,"DvtSunburstExpandCollapseEvent");D.bS.prototype.getId=(0,D.y)("ib");
D.QR=function(a,b,c,d){D.$R.call(this,a,b,c,d)};D.A.q(D.QR,D.$R,"DvtSunburstEventManager");D.z=D.QR.prototype;D.z.bo=function(a){var b=(0,D.Jj)(this,a.target);b&&b.getId&&"_rotationShape"==b.getId()&&!this.KV?(this.KV=D.k,a=(0,D.Pu)(this.$,a.pageX,a.pageY),b=this.K,(0,D.TR)(b,(0,D.WR)(b,a.x,a.y))):D.QR.u.bo.call(this,a)};D.z.Zs=function(a){if(this.KV){a=(0,D.Pu)(this.$,a.pageX,a.pageY);var b=this.K;(0,D.UR)(b,(0,D.WR)(b,a.x,a.y))}else D.QR.u.Zs.call(this,a)};
D.z.eo=function(a){this.KV?(this.KV=D.p,(0,D.VR)(this.K)):D.QR.u.eo.call(this,a)};D.z.Xh=function(a){var b=D.k,c=a.keyCode,d=this.od(),e=this.K;(0,D.aS)(d)&&((0,D.Km)(a)&&!d.mb()||(0,D.Lm)(a)&&d.mb()||a.ctrlKey&&13==c)?(d.Baa(),(0,D.ki)(a)):e&&"off"!=e.v().rotation&&(37==c||39==c)&&!a.ctrlKey&&a.altKey&&a.shiftKey?(c=37==c?-5*(window.Math.PI/180):5*(window.Math.PI/180),(0,D.TR)(e,0),(0,D.UR)(e,c),(0,D.VR)(e),(0,D.ki)(a)):b=D.QR.u.Xh.call(this,a);return b};
D.z.MI=function(a){var b=(0,D.Jj)(this,a.target);b&&(b.getId&&"_rotationShape"==b.getId())&&(0,D.Ru)(a,this.Lwa,this)};D.z.jU=function(a){(0,D.Su)(this.tc,a,"rotateKey")};D.z.iU=function(a){(0,D.Uu)(this.tc,a,"rotateKey")};D.z.Lwa=function(a,b){if(1>=(0,D.Vu)(this.tc,"rotateKey").length){(0,D.Wu)(this.tc,b.identifier,"rotateKey","rotateKey","rotateKey",this.Kwa,this.Jwa,this);(0,D.Dm)(this.tc,b.identifier,D.p);var c=(0,D.Pu)(this.$,b.pageX,b.pageY),d=this.K;(0,D.TR)(d,(0,D.WR)(d,c.x,c.y));a.sD()}};
D.z.Kwa=function(a,b){var c=(0,D.Pu)(this.$,b.pageX,b.pageY),d=this.K;(0,D.UR)(d,(0,D.WR)(d,c.x,c.y));a.preventDefault()};D.z.Jwa=function(){(0,D.VR)(this.K)};
(0,D.Fg)("DvtSunburstBundle",{COLOR:"Color",OTHER:"Other",SIZE:"Size"});
D.GR=function(){this.Init({skyros:D.YR,alta:{}})};D.A.q(D.GR,D.ZR,"DvtSunburstDefaults");D.YR={nodeDefaults:{borderColor:"rgba(255,255,255,0.3)",borderWidth:1,hoverColor:"#FFFFFF",labelDisplay:"auto",labelHalign:"center",selectedInnerColor:"#FFFFFF",selectedOuterColor:"#000000"},rotation:"on",startAngle:90};

  return D;
});