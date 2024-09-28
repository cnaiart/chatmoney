import{K as E,J as oe,a6 as S,cc as U,by as G,bA as re,bz as Ne,cd as Oe,I as ve,ac as J,as as Ae,M as Q,bo as ze,a1 as Le,F as Te,az as Ce,P as de,V as He,S as We,bN as De,ce as je,ak as xe,T as Re,bg as fe}from"./entry.df16adda.js";import{k as L,I as z,$ as he,a0 as Y,S as B,T as ke,aE as Fe,u as Ve,a6 as Se,l as p,g as be,i as ee,a as x,r as ge,b as Z,p as pe,E as Me,o as Ee,m as b,G as D,W as qe,X as Ge,Z as ye,w as Je,L as Ke,n as Ue,t as Ze,ac as Xe,J as te,K as me,_ as ne,ae as Qe,a4 as Ye}from"./swiper-vue.397ea2eb.js";import{E as we}from"./el-popper.89e34564.js";const et=L({name:"ElCollapseTransition"}),tt=L({...et,setup(e){const o=E("collapse-transition"),n={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,r)=>(z(),he(Se,ke({name:Ve(o).b()},Fe(n)),{default:Y(()=>[B(t.$slots,"default")]),_:3},16,["name"]))}});var X=oe(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);X.install=e=>{e.component(X.name,X)};const nt=X;let ot=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",t=>{let r=!1;switch(t.code){case S.down:{this.gotoSubIndex(this.subIndex+1),r=!0;break}case S.up:{this.gotoSubIndex(this.subIndex-1),r=!0;break}case S.tab:{U(o,"mouseleave");break}case S.enter:case S.space:{r=!0,t.currentTarget.click();break}}return r&&(t.preventDefault(),t.stopPropagation()),!1})})}},at=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new ot(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case S.down:{U(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case S.up:{U(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case S.tab:{U(o.currentTarget,"mouseleave");break}case S.enter:case S.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},st=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(t=>{t.nodeType===1&&new at(t,o)})}};const lt=L({name:"ElMenuCollapseTransition",setup(){const e=E("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,t){G(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",t()},onAfterEnter(n){re(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),Ne(n,e.m("collapse"))?(re(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),G(n,e.m("collapse"))):(G(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),re(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){G(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function ut(e,o,n,t,r,C){return z(),he(Se,ke({mode:"out-in"},e.listeners),{default:Y(()=>[B(e.$slots,"default")]),_:3},16)}var rt=oe(lt,[["render",ut],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function $e(e,o){const n=p(()=>{let r=e.parent;const C=[o.value];for(;r.type.name!=="ElMenu";)r.props.index&&C.unshift(r.props.index),r=r.parent;return C});return{parentMenu:p(()=>{let r=e.parent;for(;r&&!["ElMenu","ElSubMenu"].includes(r.type.name);)r=r.parent;return r}),indexPath:n}}function it(e){return p(()=>{const n=e.backgroundColor;return n?new Oe(n).shade(20).toString():""})}const _e=(e,o)=>{const n=E("menu");return p(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":it(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},ct=ve({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:J},expandOpenIcon:{type:J},collapseCloseIcon:{type:J},collapseOpenIcon:{type:J}}),K="ElSubMenu";var Ie=L({name:K,props:ct,setup(e,{slots:o,expose:n}){Ae({from:"popper-append-to-body",replacement:"teleported",scope:K,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},p(()=>e.popperAppendToBody!==void 0));const t=be(),{indexPath:r,parentMenu:C}=$e(t,p(()=>e.index)),c=E("menu"),f=E("sub-menu"),l=ee("rootMenu");l||Q(K,"can not inject root menu");const m=ee(`subMenu:${C.value.uid}`);m||Q(K,"can not inject sub menu");const v=x({}),g=x({});let I;const _=x(!1),ae=x(),q=x(null),N=p(()=>a.value==="horizontal"&&O.value?"bottom-start":"right-start"),H=p(()=>a.value==="horizontal"&&O.value||a.value==="vertical"&&!l.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?k.value?e.expandOpenIcon:e.expandCloseIcon:ze:e.collapseCloseIcon&&e.collapseOpenIcon?k.value?e.collapseOpenIcon:e.collapseCloseIcon:Le),O=p(()=>m.level===0),j=p(()=>{var i;const d=(i=e.teleported)!=null?i:e.popperAppendToBody;return d===void 0?O.value:d}),se=p(()=>l.props.collapse?`${c.namespace.value}-zoom-in-left`:`${c.namespace.value}-zoom-in-top`),le=p(()=>a.value==="horizontal"&&O.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),k=p(()=>l.openedMenus.includes(e.index)),A=p(()=>{let i=!1;return Object.values(v.value).forEach(d=>{d.active&&(i=!0)}),Object.values(g.value).forEach(d=>{d.active&&(i=!0)}),i}),R=p(()=>l.props.backgroundColor||""),F=p(()=>l.props.activeTextColor||""),W=p(()=>l.props.textColor||""),a=p(()=>l.props.mode),s=ge({index:e.index,indexPath:r,active:A}),u=_e(l.props,m.level+1),M=p(()=>a.value!=="horizontal"?{color:W.value}:{borderBottomColor:A.value?l.props.activeTextColor?F.value:"":"transparent",color:A.value?F.value:W.value}),h=()=>{var i,d,y;return(y=(d=(i=q.value)==null?void 0:i.popperRef)==null?void 0:d.popperInstanceRef)==null?void 0:y.destroy()},w=i=>{i||h()},P=()=>{l.props.menuTrigger==="hover"&&l.props.mode==="horizontal"||l.props.collapse&&l.props.mode==="vertical"||e.disabled||l.handleSubMenuClick({index:e.index,indexPath:r.value,active:A.value})},$=(i,d=e.showTimeout)=>{var y;i.type!=="focus"&&(l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||e.disabled||(m.mouseInChild.value=!0,I==null||I(),{stop:I}=Ce(()=>{l.openMenu(e.index,r.value)},d),j.value&&((y=C.value.vnode.el)==null||y.dispatchEvent(new MouseEvent("mouseenter")))))},T=(i=!1)=>{var d,y;l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||(I==null||I(),m.mouseInChild.value=!1,{stop:I}=Ce(()=>!_.value&&l.closeMenu(e.index,r.value),e.hideTimeout),j.value&&i&&((d=t.parent)==null?void 0:d.type.name)==="ElSubMenu"&&((y=m.handleMouseleave)==null||y.call(m,!0)))};Z(()=>l.props.collapse,i=>w(!!i));{const i=y=>{g.value[y.index]=y},d=y=>{delete g.value[y.index]};pe(`subMenu:${t.uid}`,{addSubMenu:i,removeSubMenu:d,handleMouseleave:T,mouseInChild:_,level:m.level+1})}return n({opened:k}),Me(()=>{l.addSubMenu(s),m.addSubMenu(s)}),Ee(()=>{m.removeSubMenu(s),l.removeSubMenu(s)}),()=>{var i;const d=[(i=o.title)==null?void 0:i.call(o),b(Te,{class:f.e("icon-arrow"),style:{transform:k.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&l.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>D(H.value)?b(t.appContext.components[H.value]):b(H.value)})],y=l.isMenuPopup?b(we,{ref:q,visible:k.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:N.value,teleported:j.value,fallbackPlacements:le.value,transition:se.value,gpuAcceleration:!1},{content:()=>{var V;return b("div",{class:[c.m(a.value),c.m("popup-container"),e.popperClass],onMouseenter:ue=>$(ue,100),onMouseleave:()=>T(!0),onFocus:ue=>$(ue,100)},[b("ul",{class:[c.b(),c.m("popup"),c.m(`popup-${N.value}`)],style:u.value},[(V=o.default)==null?void 0:V.call(o)])])},default:()=>b("div",{class:f.e("title"),style:[M.value,{backgroundColor:R.value}],onClick:P},d)}):b(ye,{},[b("div",{class:f.e("title"),style:[M.value,{backgroundColor:R.value}],ref:ae,onClick:P},d),b(nt,{},{default:()=>{var V;return qe(b("ul",{role:"menu",class:[c.b(),c.m("inline")],style:u.value},[(V=o.default)==null?void 0:V.call(o)]),[[Ge,k.value]])}})]);return b("li",{class:[f.b(),f.is("active",A.value),f.is("opened",k.value),f.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:k.value,onMouseenter:$,onMouseleave:()=>T(!0),onFocus:$},[y])}}});const dt=ve({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:de(Array),default:()=>He([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),ie=e=>Array.isArray(e)&&e.every(o=>D(o)),pt={close:(e,o)=>D(e)&&ie(o),open:(e,o)=>D(e)&&ie(o),select:(e,o,n,t)=>D(e)&&ie(o)&&Ke(n)&&(t===void 0||t instanceof Promise)};var mt=L({name:"ElMenu",props:dt,emits:pt,setup(e,{emit:o,slots:n,expose:t}){const r=be(),C=r.appContext.config.globalProperties.$router,c=x(),f=E("menu"),l=E("sub-menu"),m=x(-1),v=x(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),g=x(e.defaultActive),I=x({}),_=x({}),ae=p(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),q=()=>{const a=g.value&&I.value[g.value];if(!a||e.mode==="horizontal"||e.collapse)return;a.indexPath.forEach(u=>{const M=_.value[u];M&&N(u,M.indexPath)})},N=(a,s)=>{v.value.includes(a)||(e.uniqueOpened&&(v.value=v.value.filter(u=>s.includes(u))),v.value.push(a),o("open",a,s))},H=a=>{const s=v.value.indexOf(a);s!==-1&&v.value.splice(s,1)},O=(a,s)=>{H(a),o("close",a,s)},j=({index:a,indexPath:s})=>{v.value.includes(a)?O(a,s):N(a,s)},se=a=>{(e.mode==="horizontal"||e.collapse)&&(v.value=[]);const{index:s,indexPath:u}=a;if(!(xe(s)||xe(u)))if(e.router&&C){const M=a.route||s,h=C.push(M).then(w=>(w||(g.value=s),w));o("select",s,u,{index:s,indexPath:u,route:M},h)}else g.value=s,o("select",s,u,{index:s,indexPath:u})},le=a=>{const s=I.value,u=s[a]||g.value&&s[g.value]||s[e.defaultActive];u?g.value=u.index:g.value=a},k=()=>{var a,s;if(!c.value)return-1;const u=Array.from((s=(a=c.value)==null?void 0:a.childNodes)!=null?s:[]).filter(i=>i.nodeName!=="#comment"&&(i.nodeName!=="#text"||i.nodeValue)),M=64,h=Number.parseInt(getComputedStyle(c.value).paddingLeft,10),w=Number.parseInt(getComputedStyle(c.value).paddingRight,10),P=c.value.clientWidth-h-w;let $=0,T=0;return u.forEach((i,d)=>{$+=i.offsetWidth||0,$<=P-M&&(T=d+1)}),T===u.length?-1:T},A=(a,s=33.34)=>{let u;return()=>{u&&clearTimeout(u),u=setTimeout(()=>{a()},s)}};let R=!0;const F=()=>{const a=()=>{m.value=-1,Ue(()=>{m.value=k()})};R?a():A(a)(),R=!1};Z(()=>e.defaultActive,a=>{I.value[a]||(g.value=""),le(a)}),Z(()=>e.collapse,a=>{a&&(v.value=[])}),Z(I.value,q);let W;Je(()=>{e.mode==="horizontal"&&e.ellipsis?W=We(c,F).stop:W==null||W()});{const a=h=>{_.value[h.index]=h},s=h=>{delete _.value[h.index]};pe("rootMenu",ge({props:e,openedMenus:v,items:I,subMenus:_,activeIndex:g,isMenuPopup:ae,addMenuItem:h=>{I.value[h.index]=h},removeMenuItem:h=>{delete I.value[h.index]},addSubMenu:a,removeSubMenu:s,openMenu:N,closeMenu:O,handleMenuItemClick:se,handleSubMenuClick:j})),pe(`subMenu:${r.uid}`,{addSubMenu:a,removeSubMenu:s,mouseInChild:x(!1),level:0})}return Me(()=>{e.mode==="horizontal"&&new st(r.vnode.el,f.namespace.value)}),t({open:s=>{const{indexPath:u}=_.value[s];u.forEach(M=>N(M,u))},close:H,handleResize:F}),()=>{var a,s;let u=(s=(a=n.default)==null?void 0:a.call(n))!=null?s:[];const M=[];if(e.mode==="horizontal"&&c.value){const P=De(u),$=m.value===-1?P:P.slice(0,m.value),T=m.value===-1?[]:P.slice(m.value);T!=null&&T.length&&e.ellipsis&&(u=$,M.push(b(Ie,{index:"sub-menu-more",class:l.e("hide-arrow")},{title:()=>b(Te,{class:l.e("icon-more")},{default:()=>b(je)}),default:()=>T})))}const h=_e(e,0),w=b("ul",{key:String(e.collapse),role:"menubar",ref:c,style:h.value,class:{[f.b()]:!0,[f.m(e.mode)]:!0,[f.m("collapse")]:e.collapse}},[...u,...M]);return e.collapseTransition&&e.mode==="vertical"?b(rt,()=>w):w}}});const vt=ve({index:{type:de([String,null]),default:null},route:{type:de([String,Object])},disabled:Boolean}),ft={click:e=>D(e.index)&&Array.isArray(e.indexPath)},ce="ElMenuItem",ht=L({name:ce,components:{ElTooltip:we},props:vt,emits:ft,setup(e,{emit:o}){const n=be(),t=ee("rootMenu"),r=E("menu"),C=E("menu-item");t||Q(ce,"can not inject root menu");const{parentMenu:c,indexPath:f}=$e(n,Ze(e,"index")),l=ee(`subMenu:${c.value.uid}`);l||Q(ce,"can not inject sub menu");const m=p(()=>e.index===t.activeIndex),v=ge({index:e.index,indexPath:f,active:m}),g=()=>{e.disabled||(t.handleMenuItemClick({index:e.index,indexPath:f.value,route:e.route}),o("click",v))};return Me(()=>{l.addSubMenu(v),t.addMenuItem(v)}),Ee(()=>{l.removeSubMenu(v),t.removeMenuItem(v)}),{parentMenu:c,rootMenu:t,active:m,nsMenu:r,nsMenuItem:C,handleClick:g}}});function bt(e,o,n,t,r,C){const c=Xe("el-tooltip");return z(),te("li",{class:ne([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...f)=>e.handleClick&&e.handleClick(...f))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(z(),he(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:Y(()=>[B(e.$slots,"title")]),default:Y(()=>[me("div",{class:ne(e.nsMenu.be("tooltip","trigger"))},[B(e.$slots,"default")],2)]),_:3},8,["effect"])):(z(),te(ye,{key:1},[B(e.$slots,"default"),B(e.$slots,"title")],64))],2)}var Pe=oe(ht,[["render",bt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const gt={title:String},Mt="ElMenuItemGroup",yt=L({name:Mt,props:gt,setup(){return{ns:E("menu-item-group")}}});function It(e,o,n,t,r,C){return z(),te("li",{class:ne(e.ns.b())},[me("div",{class:ne(e.ns.e("title"))},[e.$slots.title?B(e.$slots,"title",{key:1}):(z(),te(ye,{key:0},[Qe(Ye(e.title),1)],64))],2),me("ul",null,[B(e.$slots,"default")])],2)}var Be=oe(yt,[["render",It],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const wt=Re(mt,{MenuItem:Pe,MenuItemGroup:Be,SubMenu:Ie}),$t=fe(Pe);fe(Be);fe(Ie);export{$t as E,wt as a};