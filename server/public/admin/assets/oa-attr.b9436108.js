import{_ as B}from"./index.3b915137.js";import{P as A}from"./index.9f63869e.js";import{c as M,w as R}from"./element-plus.9458fb52.js";import{d as $,s as L,a3 as y,o as s,c as r,a6 as g,L as N,U as V,u as n,T as t,K as p,a,S as v,R as b,Q as U,bk as O,bj as j}from"./@vue.7946e41b.js";import{u as K}from"./useMenuOa.886360a0.js";import{_ as Q}from"./oa-menu-form.vue_vue_type_script_setup_true_lang.89b21fc7.js";import{_ as D}from"./oa-menu-form-edit.vue_vue_type_script_setup_true_lang.0e85680b.js";import{_ as q}from"./vue-drag-resize.1871ee6b.js";import"./index.d9c09296.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./@element-plus.7d8ec931.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./wx_oa.c3dadaae.js";const z=i=>(O("data-v-0242043a"),i=i(),j(),i),G=z(()=>a("div",{class:"text-base oa-attr-title"},"\u83DC\u5355\u914D\u7F6E",-1)),H={class:"flex items-center w-full p-4 mt-4 rounded bg-fill-light"},J={class:"flex-1"},W={class:"mr-auto"},X=$({__name:"oa-attr",setup(i){const d=L(),{menuList:x,menuIndex:u,handleAddSubMenu:T,handleEditSubMenu:k,handleDelMenu:w,handleDelSubMenu:C}=K(d);return(Y,_)=>{const E=y("EditPen"),c=M,m=R,S=y("Delete"),F=A,P=B;return s(!0),r(v,null,g(n(x),(e,f)=>N((s(),r("div",{key:f,class:"flex-1 oa-attr min-w-0"},[G,t(P,{onClose:_[0]||(_[0]=o=>n(w)(n(u)))},{default:p(()=>[a("div",H,[t(Q,{ref_for:!0,ref_key:"menuRef",ref:d,modular:"master",name:e.name,"onUpdate:name":o=>e.name=o,menuType:e.has_menu,"onUpdate:menuType":o=>e.has_menu=o,visitType:e.type,"onUpdate:visitType":o=>e.type=o,url:e.url,"onUpdate:url":o=>e.url=o,appId:e.appid,"onUpdate:appId":o=>e.appid=o,pagePath:e.pagepath,"onUpdate:pagePath":o=>e.pagepath=o},{default:p(()=>[a("div",J,[a("ul",null,[(s(!0),r(v,null,g(e.sub_button,(o,l)=>(s(),r("li",{class:"flex",key:l,style:{padding:"8px"}},[a("span",W,b(o.name),1),t(D,{modular:"edit",subItem:o,onEdit:h=>n(k)(h,l)},{default:p(()=>[t(m,{link:""},{default:p(()=>[t(c,null,{default:p(()=>[t(E)]),_:1})]),_:1})]),_:2},1032,["subItem","onEdit"]),t(F,{onConfirm:h=>n(C)(n(u),l)},{trigger:p(()=>[t(m,{link:""},{default:p(()=>[t(c,{class:"ml-5"},{default:p(()=>[t(S)]),_:1})]),_:1})]),default:p(()=>[U(" \u662F\u5426\u5220\u9664\u5F53\u524D\u5B50\u83DC\u5355\uFF1F ")]),_:2},1032,["onConfirm"])]))),128))]),t(D,{modular:"add",onAdd:n(T)},{default:p(()=>[t(m,{type:"primary",link:"",disabled:e.sub_button.length>=5},{default:p(()=>[U(" \u6DFB\u52A0\u5B50\u83DC\u5355("+b(e.sub_button.length)+"/5) ",1)]),_:2},1032,["disabled"])]),_:2},1032,["onAdd"])])]),_:2},1032,["name","onUpdate:name","menuType","onUpdate:menuType","visitType","onUpdate:visitType","url","onUpdate:url","appId","onUpdate:appId","pagePath","onUpdate:pagePath"])])]),_:2},1024)],512)),[[V,f===n(u)]])),128)}}});const je=q(X,[["__scopeId","data-v-0242043a"]]);export{je as default};