import{_ as h}from"./index.c3587517.js";import{t as k,D as A,C as M,w as L,L as N,F as S}from"./element-plus.9458fb52.js";import{_ as U}from"./index.3b915137.js";import{g as I,s as R}from"./mind_map.6386eacd.js";import{d as v,r as T,_ as $,ag as z,o as p,c as f,T as t,K as o,a as s,u as a,S as J,a6 as K,J as x,Q as F,L as Q}from"./@vue.7946e41b.js";import"./vue-drag-resize.1871ee6b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.d9c09296.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const j={class:"website-information"},q=s("div",{class:"text-xl font-medium mb-[20px]"},"\u793A\u4F8B\u8BBE\u7F6E",-1),G=s("div",{class:"form-tips"},"\u5F00\u542F\u7684\u8BDD\uFF0C\u524D\u53F0\u663E\u793A\u793A\u4F8B\u6309\u94AE",-1),H={class:"w-[460px]"},O=v({name:"mindMapExample"}),Ie=v({...O,setup(P){const i=T(),e=$({is_example:0,example_content:[]}),B={},u=async()=>{const n=await I();for(const m in e)e[m]=n[m]},E=async()=>{var n;await((n=i.value)==null?void 0:n.validate()),await R(e),u()};return u(),(n,m)=>{const w=k,_=A,D=M,b=U,c=L,C=N,y=S,V=h,g=z("perms");return p(),f("div",j,[t(y,{ref_key:"formRef",ref:i,rules:B,class:"ls-form",model:a(e),"label-width":"120px"},{default:o(()=>[t(C,{shadow:"never",class:"!border-none"},{default:o(()=>[q,t(_,{label:"\u601D\u7EF4\u5BFC\u56FE\u793A\u4F8B",prop:"is_example"},{default:o(()=>[s("div",null,[t(w,{modelValue:a(e).is_example,"onUpdate:modelValue":m[0]||(m[0]=l=>a(e).is_example=l),"active-value":1,"inactive-value":0},null,8,["modelValue"]),G])]),_:1}),t(_,{label:"\u793A\u4F8B\u5185\u5BB9",prop:"example_content"},{default:o(()=>[s("div",H,[(p(!0),f(J,null,K(a(e).example_content,(l,r)=>(p(),x(b,{class:"mb-4 block",key:r,onClose:d=>a(e).example_content.splice(r,1)},{default:o(()=>[t(D,{modelValue:a(e).example_content[r],"onUpdate:modelValue":d=>a(e).example_content[r]=d,type:"textarea",rows:10,resize:"none"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["onClose"]))),128)),t(c,{type:"primary",onClick:m[1]||(m[1]=l=>a(e).example_content.push(""))},{default:o(()=>[F(" \u6DFB\u52A0\u793A\u4F8B ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["model"]),Q((p(),x(V,null,{default:o(()=>[t(c,{type:"primary",onClick:E},{default:o(()=>[F("\u4FDD\u5B58")]),_:1})]),_:1})),[[g,["setting.Mindmap/setExampleConfig"]]])])}}});export{Ie as default};