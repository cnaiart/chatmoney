import{d,u as a,E as A}from"./el-popper.89e34564.js";import{I as T,ae as U,K as $,R as D,J as I,cj as V,T as O}from"./entry.df16adda.js";import{d as f}from"./dropdown.16adff52.js";import{k as g,l as n,a as H,u as p,I as u,$ as J,a0 as c,J as K,_ as L,a4 as v,Y as b,S as m,ae as j,T as z}from"./swiper-vue.397ea2eb.js";const F=T({trigger:d.trigger,placement:f.placement,disabled:d.disabled,visible:a.visible,transition:a.transition,popperOptions:f.popperOptions,tabindex:f.tabindex,content:a.content,popperStyle:a.popperStyle,popperClass:a.popperClass,enterable:{...a.enterable,default:!0},effect:{...a.effect,default:"light"},teleported:a.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),Y={"update:visible":t=>U(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},q="onUpdate:visible",G=g({name:"ElPopover"}),M=g({...G,props:F,emits:Y,setup(t,{expose:r,emit:s}){const o=t,w=n(()=>o[q]),l=$("popover"),i=H(),y=n(()=>{var e;return(e=p(i))==null?void 0:e.popperRef}),P=n(()=>[{width:D(o.width)},o.popperStyle]),E=n(()=>[l.b(),o.popperClass,{[l.m("plain")]:!!o.content}]),C=n(()=>o.transition===`${l.namespace.value}-fade-in-linear`),k=()=>{var e;(e=i.value)==null||e.hide()},S=()=>{s("before-enter")},B=()=>{s("before-leave")},N=()=>{s("after-enter")},R=()=>{s("update:visible",!1),s("after-leave")};return r({popperRef:y,hide:k}),(e,_)=>(u(),J(p(A),z({ref_key:"tooltipRef",ref:i},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":p(E),"popper-style":p(P),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":p(C),"onUpdate:visible":p(w),onBeforeShow:S,onBeforeHide:B,onShow:N,onHide:R}),{content:c(()=>[e.title?(u(),K("div",{key:0,class:L(p(l).e("title")),role:"title"},v(e.title),3)):b("v-if",!0),m(e.$slots,"default",{},()=>[j(v(e.content),1)])]),default:c(()=>[e.$slots.reference?m(e.$slots,"reference",{key:0}):b("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Q=I(M,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const h=(t,r)=>{const s=r.arg||r.value,o=s==null?void 0:s.popperRef;o&&(o.triggerRef=t)};var W={mounted(t,r){h(t,r)},updated(t,r){h(t,r)}};const X="popover",Z=V(W,X),re=O(Q,{directive:Z});export{re as E};