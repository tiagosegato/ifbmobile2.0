(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"T/z9":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),i=u("cVfQ"),t=function(){function l(l,n){this.activeRoute=l,this.glossarioService=n,this.glossario={},this.glossarioId=null,this.glossarioId=this.activeRoute.snapshot.params.id,this.glossarioId&&this.loadGlossario()}return l.prototype.loadGlossario=function(){var l=this;this.glossarioSubscription=this.glossarioService.getGlossario(this.glossarioId).subscribe(function(n){l.glossario=n})},l.prototype.ngOnDestroy=function(){this.glossarioSubscription&&this.glossarioSubscription.unsubscribe()},l.prototype.ngOnInit=function(){},l}(),s=function(){return function(){}}(),b=u("pMnS"),r=u("oBZk"),a=u("ZZ/e"),e=u("ZYCi"),c=o.pb({encapsulation:0,styles:[[""]],data:{}});function h(l){return o.Gb(0,[(l()(),o.rb(0,0,null,null,11,"ion-header",[],null,null,null,r.L,r.l)),o.qb(1,49152,null,0,a.A,[o.h,o.k],null,null),(l()(),o.rb(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.Z,r.z)),o.qb(3,49152,null,0,a.Ab,[o.h,o.k],null,null),(l()(),o.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.D,r.d)),o.qb(5,49152,null,0,a.k,[o.h,o.k],null,null),(l()(),o.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.Ab(l,8).onClick(u)&&i),i},r.B,r.b)),o.qb(7,49152,null,0,a.f,[o.h,o.k],null,null),o.qb(8,16384,null,0,a.g,[[2,a.gb],a.Gb],null,null),(l()(),o.rb(9,0,null,0,2,"ion-title",[],null,null,null,r.Y,r.y)),o.qb(10,49152,null,0,a.yb,[o.h,o.k],null,null),(l()(),o.Fb(-1,0,[" Detalhes Gloss\xe1rio "])),(l()(),o.rb(12,0,null,null,11,"ion-content",[["padding",""]],null,null,null,r.J,r.j)),o.qb(13,49152,null,0,a.t,[o.h,o.k],null,null),(l()(),o.rb(14,0,null,0,9,"ion-list",[],null,null,null,r.R,r.r)),o.qb(15,49152,null,0,a.N,[o.h,o.k],null,null),(l()(),o.rb(16,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),o.rb(17,0,null,null,2,"ion-label",[],null,null,null,r.Q,r.q)),o.qb(18,49152,null,0,a.M,[o.h,o.k],null,null),(l()(),o.Fb(19,0,[" Sigla: "," "])),(l()(),o.rb(20,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),o.rb(21,0,null,null,2,"ion-label",[],null,null,null,r.Q,r.q)),o.qb(22,49152,null,0,a.M,[o.h,o.k],null,null),(l()(),o.Fb(23,0,[" Nome: "," "]))],null,function(l,n){var u=n.component;l(n,19,0,u.glossario.sigla),l(n,23,0,u.glossario.nome)})}function p(l){return o.Gb(0,[(l()(),o.rb(0,0,null,null,1,"app-detalhes-glossario",[],null,null,null,h,c)),o.qb(1,245760,null,0,t,[e.a,i.a],null,null)],function(l,n){l(n,1,0)},null)}var g=o.nb("app-detalhes-glossario",t,p,{},{},[]),y=u("Ip0R"),d=u("gIcY");u.d(n,"DetalhesGlossarioPageModuleNgFactory",function(){return f});var f=o.ob(s,[],function(l){return o.xb([o.yb(512,o.j,o.bb,[[8,[b.a,g]],[3,o.j],o.x]),o.yb(4608,y.j,y.i,[o.u,[2,y.p]]),o.yb(4608,d.d,d.d,[]),o.yb(4608,a.b,a.b,[o.z,o.g]),o.yb(4608,a.Fb,a.Fb,[a.b,o.j,o.q,y.c]),o.yb(4608,a.Ib,a.Ib,[a.b,o.j,o.q,y.c]),o.yb(1073742336,y.b,y.b,[]),o.yb(1073742336,d.c,d.c,[]),o.yb(1073742336,d.a,d.a,[]),o.yb(1073742336,a.Cb,a.Cb,[]),o.yb(1073742336,e.o,e.o,[[2,e.t],[2,e.m]]),o.yb(1073742336,s,s,[]),o.yb(1024,e.k,function(){return[[{path:"",component:t}]]},[])])})}}]);