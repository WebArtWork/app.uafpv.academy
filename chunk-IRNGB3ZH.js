import{a as U}from"./chunk-GD3PTTLR.js";import{a as L}from"./chunk-C7TNO6B4.js";import{h as N}from"./chunk-R3HM3236.js";import{$ as w,$a as S,Ab as q,Cb as D,Ka as x,L as u,O as n,P as _,Q as g,U as m,Va as b,W as h,_ as k,ba as v,ca as C,fa as d,gb as M,mb as j,oa as y,qa as I,sb as F,u as f,zb as T}from"./chunk-2Y7ZGU6E.js";var A={formId:"schoolknowledge",title:"Schoolknowledge",components:[{name:"Text",key:"title",focused:!0,fields:[{name:"Placeholder",value:"fill schoolknowledge title"},{name:"Label",value:"Title"}]}]};function $(o,p){if(o&1&&(v(0),y(1),C()),o&2){let e=d().$implicit,i=d();u(),I(" ",i.sks.doc(e.knowledge).title," ")}}function K(o,p){if(o&1&&m(0,$,2,1,"ng-container",2),o&2){let e=p.$implicit;h("ngIf",e.knowledge)}}var l=(()=>{class o{get rows(){return this.knowledge?this.sks.schoolknowledgesByKnowledge[this.knowledge]:this.sks.schoolknowledgesBySchool[this.school]}constructor(e,i,t,r,c,B,E){this.sks=e,this._translate=i,this.route=t,this._alert=r,this._form=c,this._core=B,this._us=E,this.columns=["title","require"],this.form=this._form.getForm("schoolknowledge",A),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(s,a)=>{this._preCreate(s),this.sks.create(s),a()}})},update:s=>{this._form.modal(this.form,[],s).then(a=>{this._core.copy(a,s),this.sks.update(s)})},delete:s=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this schoolknowledge?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this.sks.delete(s)}}]})},buttons:[{icon:"cloud_download",click:s=>{this._form.modalUnique("schoolknowledge","url",s)}},{icon:"auto_stories",hrefFunc:s=>this._roleUrl()+"levels/"+this.school+"/"+s._id}],headerButtons:[{icon:"playlist_add",click:this._bulkManagement(),class:"playlist"},{icon:"edit_note",click:this._bulkManagement(!1),class:"edit"}]}}ngOnInit(){this.route.params.subscribe(e=>{this.school=e.school||"",this.knowledge=e.knowledge||""})}_bulkManagement(e=!0){return()=>{this._form.modalDocs(e?[]:this.rows).then(i=>{if(e)for(let t of i)this._preCreate(t),this.sks.create(t);else{for(let t of this.rows)i.find(r=>r._id===t._id)||this.sks.delete(t);for(let t of i){let r=this.rows.find(c=>c._id===t._id);r?(this._core.copy(t,r),this.sks.update(r)):(this._preCreate(t),this.sks.create(t))}}})}}_preCreate(e){e.__created,this.school&&(e.school=this.school),this.knowledge&&(e.knowledge=this.knowledge)}_roleUrl(){return this._us.role("admin")?"/admin/":this._us.role("schoolowner")?"/owner/":this._us.role("schoolteacher")?"/teacher/":"/"}static{this.\u0275fac=function(i){return new(i||o)(n(U),n(F),n(b),n(j),n(D),n(M),n(L))}}static{this.\u0275cmp=_({type:o,selectors:[["ng-component"]],standalone:!1,decls:2,vars:3,consts:[["title","Levels",3,"columns","config","rows"],["cell","require"],[4,"ngIf"]],template:function(i,t){i&1&&(k(0,"wtable",0),m(1,K,1,1,"ng-template",1),w()),i&2&&h("columns",t.columns)("config",t.config)("rows",t.rows)},dependencies:[x,q,T],encapsulation:2})}}return o})();var O=[{path:"",component:l},{path:":school",component:l},{path:":school/:knowledge",component:l}],se=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275mod=g({type:o})}static{this.\u0275inj=f({imports:[S.forChild(O),N]})}}return o})();export{se as LevelsModule};
