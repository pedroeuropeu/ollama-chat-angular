"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[42],{8042:(te,b,l)=>{l.r(b),l.d(b,{ChatAppModule:()=>W});var c=l(9808),h=l(2382),y=l(512),e=l(1223);function x(n,s,t,i,o,r,a){try{var p=n[r](a),f=p.value}catch(ee){return void t(ee)}p.done?s(f):Promise.resolve(f).then(i,o)}var k=l(1135),C=l(2340),Z=l(520);let g=(()=>{class n{constructor(t){this.http=t,this._activeUser={id:1,name:"Ollama GPT",image:"ionibowcher.png",status:"active",messages:[],lastSeen:"2d"},this.activeUser=new k.X(this._activeUser),this.activeUser$=this.activeUser.asObservable()}getChatData(){return this.http.get("assets/demo/data/chat.json").toPromise().then(t=>t.data).then(t=>t)}changeActiveChat(t){this._activeUser=t,this.activeUser.next(t)}sendMessage(t){this._activeUser.messages.push(t),this.activeUser.next(this._activeUser)}getAnswer(t){return this.generateResponse(t)}generateResponse(t){var i=this;return function A(n){return function(){var s=this,t=arguments;return new Promise(function(i,o){var r=n.apply(s,t);function a(f){x(r,i,o,a,p,"next",f)}function p(f){x(r,i,o,a,p,"throw",f)}a(void 0)})}}(function*(){const o={model:C.N.ollamaModel,prompt:t};try{const r=yield i.http.post(C.N.ollamaUrl+"/api/generate",o,{responseType:"text"}).toPromise();return i.processJsonStream(r)}catch(r){throw console.error("Error:",r),r}})()}processJsonStream(t){return t.split("\n").map(r=>{try{return JSON.parse(r)}catch(a){return null}}).filter(r=>null!==r)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(Z.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var v=l(1424);const S=function(n,s){return{"bg-green-400":n,"bg-red-400":s,"bg-yellow-400":"away"}};let O=(()=>{class n{constructor(t){this.chatService=t}ngOnInit(){let t=this.user.messages.filter(i=>123!==i.ownerId);this.lastMessage=t[t.length-1]}changeView(t){this.chatService.changeActiveChat(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["user-card"]],inputs:{user:"user"},decls:12,vars:8,consts:[["tabindex","0",1,"flex","flex-nowrap","justify-content-between","align-items-center","border-1","surface-border","border-round","p-3","cursor-pointer","select-none","hover:surface-hover","transition-colors","transition-duration-150",3,"keydown.enter","click"],[1,"flex","align-items-center"],[1,"relative","md:mr-3"],["alt","user",1,"w-3rem","h-3rem","border-circle","shadow-4",3,"src"],[1,"w-1rem","h-1rem","border-circle","border-2","surface-border","absolute",2,"bottom","2px","right","2px",3,"ngClass"],[1,"flex-column","hidden","md:flex"],[1,"text-900","font-semibold","block"],[1,"block","text-600","text-overflow-ellipsis","overflow-hidden","white-space-nowrap","w-10rem","text-sm"],[1,"text-700","font-semibold","ml-auto","hidden","md:inline"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.NdJ("keydown.enter",function(){return i.changeView(i.user)})("click",function(){return i.changeView(i.user)}),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"img",3)(4,"span",4),e.qZA(),e.TgZ(5,"div",5)(6,"span",6),e._uU(7),e.qZA(),e.TgZ(8,"span",7),e._uU(9),e.qZA()()(),e.TgZ(10,"span",8),e._uU(11),e.qZA()()),2&t&&(e.xp6(3),e.MGl("src","assets/demo/images/avatar/",i.user.image,"",e.LSH),e.xp6(1),e.Q6J("ngClass",e.WLB(5,S,"active"===i.user.status,"busy"===i.user.status)),e.xp6(3),e.Oqu(i.user.name),e.xp6(2),e.Oqu(i.lastMessage.text),e.xp6(2),e.Oqu(i.user.lastSeen))},dependencies:[c.mk],encapsulation:2}),n})();function M(n,s){1&n&&e._UZ(0,"user-card",9),2&n&&e.Q6J("user",s.$implicit)}let I=(()=>{class n{constructor(t){this.chatService=t,this.searchValue="",this.users=[],this.filteredUsers=[]}ngOnInit(){this.chatService.getChatData().then(t=>{this.users=t,this.filteredUsers=this.users})}filter(){let t=[];for(let i=0;i<this.users.length;i++){let o=this.users[i];0==o.name.toLowerCase().indexOf(this.searchValue.toLowerCase())&&t.push(o)}this.filteredUsers=[...t]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["chat-sidebar"]],decls:10,vars:2,consts:[[1,"flex","flex-column","align-items-center","border-bottom-1","surface-border","p-6"],["src","assets/demo/images/avatar/circle/avatar-f-1@2x.png","alt","Asiya Javayant",1,"w-6rem","h-6rem","border-circle","shadow-4"],[1,"text-900","text-xl","font-semibold","mt-4"],[1,"w-full","flex","row-gap-4","flex-column","surface-border","p-4"],[1,"p-input-icon-left","w-full"],[1,"pi","pi-search"],["id","search","type","text","pInputText","","placeholder","Search",1,"w-full",3,"ngModel","ngModelChange","input"],[1,"flex","flex-row","gap-4","md:flex-column","overflow-auto"],[3,"user",4,"ngFor","ngForOf"],[3,"user"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"span",2),e._uU(3,"Asiya Javayant"),e.qZA()(),e.TgZ(4,"div",3)(5,"span",4),e._UZ(6,"i",5),e.TgZ(7,"input",6),e.NdJ("ngModelChange",function(r){return i.searchValue=r})("input",function(){return i.filter()}),e.qZA()(),e.TgZ(8,"div",7),e.YNc(9,M,1,1,"user-card",8),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("ngModel",i.searchValue),e.xp6(2),e.Q6J("ngForOf",i.filteredUsers))},dependencies:[c.sg,h.Fj,h.JJ,h.On,v.o,O],encapsulation:2}),n})();var w=l(845),m=l(9783),u=l(5730),T=l(5787),d=l(1777),_=l(5921);function U(n,s){1&n&&e.GkF(0)}function L(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",5),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw(2);return e.KtG(r.onCloseClick(o))})("keydown.enter",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.hide())}),e._UZ(1,"span",6),e.qZA()}if(2&n){const t=e.oxw(2);e.uIk("aria-label",t.ariaCloseLabel)}}const P=function(n,s){return{showTransitionParams:n,hideTransitionParams:s}},J=function(n,s){return{value:n,params:s}};function D(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",1),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.onOverlayClick(o))})("@animation.start",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.onAnimationStart(o))})("@animation.done",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.onAnimationEnd(o))}),e.TgZ(1,"div",2),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onContentClick())})("mousedown",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onContentClick())}),e.Hsn(2),e.YNc(3,U,1,0,"ng-container",3),e.qZA(),e.YNc(4,L,2,1,"button",4),e.qZA()}if(2&n){const t=e.oxw();e.Tol(t.styleClass),e.Q6J("ngClass","p-overlaypanel p-component")("ngStyle",t.style)("@animation",e.WLB(10,J,t.overlayVisible?"open":"close",e.WLB(7,P,t.showTransitionOptions,t.hideTransitionOptions))),e.xp6(3),e.Q6J("ngTemplateOutlet",t.contentTemplate),e.xp6(1),e.Q6J("ngIf",t.showCloseIcon)}}const B=["*"];let F=(()=>{class n{constructor(t,i,o,r,a,p){this.el=t,this.renderer=i,this.cd=o,this.zone=r,this.config=a,this.overlayService=p,this.dismissable=!0,this.appendTo="body",this.autoZIndex=!0,this.baseZIndex=0,this.focusOnShow=!0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.onShow=new e.vpe,this.onHide=new e.vpe,this.overlayVisible=!1,this.render=!1,this.isOverlayAnimationInProgress=!1,this.selfClick=!1}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.contentTemplate=t.template,this.cd.markForCheck()})}bindDocumentClickListener(){!this.documentClickListener&&this.dismissable&&this.zone.runOutsideAngular(()=>{let t=u.p.isIOS()?"touchstart":"click";this.documentClickListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document",t,o=>{!this.container.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.zone.run(()=>{this.hide()}),this.selfClick=!1,this.cd.markForCheck()})})}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(t,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(t,i)&&(this.destroyCallback=()=>{this.show(null,i||t.currentTarget||t.target)}),this.hide()):this.show(t,i))}show(t,i){this.isOverlayAnimationInProgress||(this.target=i||t.currentTarget||t.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(){this.selfClick=!0}hasTargetChanged(t,i){return null!=this.target&&this.target!==(i||t.currentTarget||t.target)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.container):u.p.appendChild(this.container,this.appendTo))}restoreAppend(){this.container&&this.appendTo&&this.el.nativeElement.appendChild(this.container)}align(){this.autoZIndex&&_.P9.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),u.p.absolutePosition(this.container,this.target);const t=u.p.getOffset(this.container),i=u.p.getOffset(this.target);let o=0;t.left<i.left&&(o=i.left-t.left),this.container.style.setProperty("--overlayArrowLeft",`${o}px`),t.top<i.top&&(u.p.addClass(this.container,"p-overlaypanel-flipped"),this.showCloseIcon&&(this.container.style.marginTop="30px"))}onAnimationStart(t){"open"===t.toState&&(this.container=t.element,this.onShow.emit(null),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(t){switch(t.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&_.P9.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1}this.isOverlayAnimationInProgress=!1}focus(){let t=u.p.findSingle(this.container,"[autofocus]");t&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t.focus(),5)})}hide(){this.isOverlayAnimationInProgress||(this.overlayVisible=!1,this.cd.markForCheck())}onCloseClick(t){this.hide(),t.preventDefault()}onWindowResize(t){this.overlayVisible&&!u.p.isTouchDevice()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new u.V(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&_.P9.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(e.R0b),e.Y36(m.b4),e.Y36(m.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-overlayPanel"]],contentQueries:function(t,i,o){if(1&t&&e.Suo(o,m.jx,4),2&t){let r;e.iGM(r=e.CRH())&&(i.templates=r)}},hostAttrs:[1,"p-element"],inputs:{dismissable:"dismissable",showCloseIcon:"showCloseIcon",style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:"autoZIndex",ariaCloseLabel:"ariaCloseLabel",baseZIndex:"baseZIndex",focusOnShow:"focusOnShow",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},ngContentSelectors:B,decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-overlaypanel-content",3,"click","mousedown"],[4,"ngTemplateOutlet"],["type","button","class","p-overlaypanel-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],["type","button","pRipple","",1,"p-overlaypanel-close","p-link",3,"click","keydown.enter"],[1,"p-overlaypanel-close-icon","pi","pi-times"]],template:function(t,i){1&t&&(e.F$t(),e.YNc(0,D,5,13,"div",0)),2&t&&e.Q6J("ngIf",i.render)},dependencies:[c.mk,c.O5,c.tP,c.PC,T.H],styles:['.p-overlaypanel{position:absolute;margin-top:10px;top:0;left:0}.p-overlaypanel-flipped{margin-top:0;margin-bottom:10px}.p-overlaypanel-close{display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;right:1.25em;margin-left:auto}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after{border-bottom-color:transparent}.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:transparent}\n'],encapsulation:2,data:{animation:[(0,d.X$)("animation",[(0,d.SB)("void",(0,d.oB)({transform:"scaleY(0.8)",opacity:0})),(0,d.SB)("close",(0,d.oB)({opacity:0})),(0,d.SB)("open",(0,d.oB)({transform:"translateY(0)",opacity:1})),(0,d.eR)("void => open",(0,d.jt)("{{showTransitionParams}}")),(0,d.eR)("open => close",(0,d.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),n})(),z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,T.T,m.m8,m.m8]}),n})();function E(n,s){if(1&n&&(e.TgZ(0,"div",23)(1,"div",24),e._UZ(2,"img",25),e.qZA(),e.TgZ(3,"div",26)(4,"p",27),e._uU(5),e.qZA(),e.TgZ(6,"span",28),e._uU(7),e.qZA(),e.TgZ(8,"p",29),e._uU(9),e._UZ(10,"i",30),e.qZA()()()),2&n){const t=e.oxw().$implicit,i=e.oxw();e.xp6(2),e.MGl("src","assets/demo/images/avatar/",i.user.image,"",e.LSH),e.xp6(3),e.Oqu(i.user.name),e.xp6(2),e.Oqu(t.text),e.xp6(2),e.Oqu(i.parseDate(t.createdAt))}}function H(n,s){if(1&n&&(e.TgZ(0,"div",23)(1,"div",31)(2,"span",32),e._uU(3),e.qZA(),e.TgZ(4,"p",29),e._uU(5),e._UZ(6,"i",30),e.qZA()()()),2&n){const t=e.oxw().$implicit,i=e.oxw();e.xp6(3),e.Oqu(t.text),e.xp6(2),e.hij("",i.parseDate(t.createdAt)," ")}}function R(n,s){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,E,11,4,"div",22),e.YNc(2,H,7,2,"div",22),e.qZA()),2&n){const t=s.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",t.ownerId===i.defaultUserId),e.xp6(1),e.Q6J("ngIf",t.ownerId===i.loggedUserId)}}function j(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw(2);return e.MAs(23).hide(),e.KtG(a.onEmojiSelect(r))}),e.qZA()}2&n&&e.Q6J("label",s.$implicit)}function N(n,s){if(1&n&&e.YNc(0,j,1,1,"button",33),2&n){const t=e.oxw();e.Q6J("ngForOf",t.emojis)}}const q=function(n,s,t){return{"bg-green-400":n,"bg-red-400":s,"bg-yellow-400":t}};let Y=(()=>{class n{constructor(t){this.chatService=t,this.defaultUserId=123,this.loggedUserId=456,this.textContent="",this.emojis=["\u{1f600}","\u{1f603}","\u{1f604}","\u{1f601}","\u{1f606}","\u{1f605}","\u{1f602}","\u{1f923}","\u{1f607}","\u{1f609}","\u{1f60a}","\u{1f642}","\u{1f643}","\u{1f60b}","\u{1f60c}","\u{1f60d}","\u{1f970}","\u{1f618}","\u{1f617}","\u{1f619}","\u{1f61a}","\u{1f92a}","\u{1f61c}","\u{1f61d}","\u{1f61b}","\u{1f911}","\u{1f60e}","\u{1f913}","\u{1f9d0}","\u{1f920}","\u{1f973}","\u{1f917}","\u{1f921}","\u{1f60f}","\u{1f636}","\u{1f610}","\u{1f611}","\u{1f612}","\u{1f644}","\u{1f928}","\u{1f914}","\u{1f92b}","\u{1f92d}","\u{1f925}","\u{1f633}","\u{1f61e}","\u{1f61f}","\u{1f620}","\u{1f621}","\u{1f92c}","\u{1f614}","\u{1f61f}","\u{1f620}","\u{1f621}","\u{1f92c}","\u{1f614}","\u{1f615}","\u{1f641}","\u{1f62c}","\u{1f97a}","\u{1f623}","\u{1f616}","\u{1f62b}","\u{1f629}","\u{1f971}","\u{1f624}","\u{1f62e}","\u{1f631}","\u{1f628}","\u{1f630}","\u{1f62f}","\u{1f626}","\u{1f627}","\u{1f622}","\u{1f625}","\u{1f62a}","\u{1f924}"],this.messageComplet="",this.allMessages=[]}ngOnInit(){}sendMessage(){if(""!=this.textContent&&" "!==this.textContent){let t={text:this.textContent,ownerId:this.loggedUserId,createdAt:(new Date).getTime()};this.allMessages.push(t),this.textContent="",this.chatService.generateResponse(t.text).then(i=>{i.forEach(a=>{this.messageComplet+=a.response});let r={text:this.messageComplet,ownerId:this.defaultUserId,createdAt:(new Date).getTime()};this.allMessages.push(r),this.allMessages.sort((a,p)=>p.createdAt+a.createdAt)})}}onEmojiSelect(t){this.textContent+=t}parseDate(t){return new Date(t).toTimeString().split(":").slice(0,2).join(":")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["chat-box"]],inputs:{user:"user"},decls:25,vars:10,consts:[[1,"flex","flex-column","h-full"],[1,"flex","align-items-center","border-bottom-1","surface-border","p-3","lg:p-6"],[1,"relative","flex","align-items-center","mr-3"],["alt","user.name",1,"w-4rem","h-4rem","border-circle","shadow-4",3,"src"],[1,"w-1rem","h-1rem","border-circle","border-2","surface-border","absolute","bottom-0","right-0",3,"ngClass"],[1,"mr-2"],[1,"text-900","font-semibold","block"],[1,"text-700"],[1,"flex","align-items-center","ml-auto"],["pButton","","pRipple","","type","button","icon","pi pi-phone",1,"p-button-rounded","p-button-outlined","p-button-secondary","mr-3"],["pButton","","pRipple","","type","button","icon","pi pi-ellipsis-v",1,"p-button-rounded","p-button-outlined","p-button-secondary"],[1,"p-3","md:px-4","lg:px-6","lg:py-4","mt-2","overflow-y-auto",2,"max-height","53vh",3,"scrollTop"],["chatWindow",""],[4,"ngFor","ngForOf"],[1,"p-3","md:p-4","lg:p-6","flex","flex-column","sm:flex-row","align-items-center","mt-auto","border-top-1","surface-border","gap-3"],["id","message","type","text","pInputText","","placeholder","Type a message",1,"flex-1","w-full","sm:w-auto","border-round",3,"ngModel","ngModelChange","keydown.enter"],[1,"flex","w-full","sm:w-auto","gap-3"],[1,"p-button","p-button-secondary","w-full","sm:w-auto","justify-content-center","text-xl",3,"click"],["pButton","","label","Send","icon","pi pi-send",1,"w-full","sm:w-auto",3,"click"],["styleClass","w-full sm:w-30rem"],["op",""],["pTemplate",""],["class","grid grid-nogutter mb-4",4,"ngIf"],[1,"grid","grid-nogutter","mb-4"],[1,"mr-3","mt-1"],["alt","user.name",1,"w-3rem","h-3rem","border-circle","shadow-4",3,"src"],[1,"col","mt-3"],[1,"text-900","font-semibold","mb-3"],[1,"text-700","inline-block","font-medium","border-1","surface-border","p-3","white-space-normal","border-round",2,"word-break","break-word","max-width","80%"],[1,"text-700","mt-3"],[1,"pi","pi-check","ml-2","text-green-400"],[1,"col","mt-3","text-right"],[1,"inline-block","text-left","font-medium","border-1","surface-border","bg-primary-100","text-primary-900","p-3","white-space-normal","border-round",2,"word-break","break-word","max-width","80%"],["pButton","","pRipple","","type","button","class","p-2 p-button-text text-2xl",3,"label","click",4,"ngFor","ngForOf"],["pButton","","pRipple","","type","button",1,"p-2","p-button-text","text-2xl",3,"label","click"]],template:function(t,i){if(1&t){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3)(4,"span",4),e.qZA(),e.TgZ(5,"div",5)(6,"span",6),e._uU(7),e.qZA(),e.TgZ(8,"span",7),e._uU(9,"Last active 1 hour ago"),e.qZA()(),e.TgZ(10,"div",8),e._UZ(11,"button",9)(12,"button",10),e.qZA()(),e.TgZ(13,"div",11,12),e.YNc(15,R,3,2,"div",13),e.qZA(),e.TgZ(16,"div",14)(17,"input",15),e.NdJ("ngModelChange",function(a){return i.textContent=a})("keydown.enter",function(){return i.sendMessage()}),e.qZA(),e.TgZ(18,"div",16)(19,"button",17),e.NdJ("click",function(a){e.CHM(o);const p=e.MAs(23);return e.KtG(p.toggle(a))}),e._uU(20,"\u{1f600}"),e.qZA(),e.TgZ(21,"button",18),e.NdJ("click",function(){return i.sendMessage()}),e.qZA()()()(),e.TgZ(22,"p-overlayPanel",19,20),e.YNc(24,N,1,1,"ng-template",21),e.qZA()}if(2&t){const o=e.MAs(14);e.xp6(3),e.MGl("src","assets/demo/images/avatar/",i.user.image,"",e.LSH),e.xp6(1),e.Q6J("ngClass",e.kEZ(6,q,"active"===i.user.status,"busy"===i.user.status,"away"===i.user.status)),e.xp6(3),e.Oqu(i.user.name),e.xp6(6),e.Q6J("scrollTop",o.scrollHeight),e.xp6(2),e.Q6J("ngForOf",i.allMessages),e.xp6(2),e.Q6J("ngModel",i.textContent)}},dependencies:[c.mk,c.sg,c.O5,h.Fj,h.JJ,h.On,v.o,w.Hq,m.jx,F],encapsulation:2,changeDetection:0}),n})(),Q=(()=>{class n{constructor(t){this.chatService=t,this.subscription=this.chatService.activeUser$.subscribe(i=>this.activeUser=i)}ngOnDestroy(){this.subscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:5,vars:1,consts:[[1,"flex","flex-column","md:flex-row","gap-5",2,"min-height","81vh"],[1,"md:w-25rem","border-1","surface-border","surface-card","border-round"],[1,"flex-1","border-1","surface-border","surface-card","border-round"],[3,"user"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"chat-sidebar"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"chat-box",3),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("user",i.activeUser))},dependencies:[I,Y],encapsulation:2}),n})(),G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[y.Bz.forChild([{path:"",component:Q}]),y.Bz]}),n})(),K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez]}),n})();var X=l(85);let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[g],imports:[c.ez,h.u5,G,K,v.j,w.hJ,X.TX,z]}),n})()}}]);