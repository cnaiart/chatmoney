import{_ as h}from"./index.c3587517.js";import{t as D,D as b,C as A,L as V,F as C,w as g}from"./element-plus.9458fb52.js";import{g as y,s as k}from"./search.d655bffa.js";import{d as c,r as S,_ as I,ag as N,o as u,c as L,T as o,K as a,a as r,u as m,L as R,J as T,Q as U}from"./@vue.7946e41b.js";import"./vue-drag-resize.1871ee6b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.d9c09296.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const z={class:"website-information"},J=r("div",{class:"text-xl font-medium mb-[20px]"},"\u793A\u4F8B\u8BBE\u7F6E",-1),K=r("div",{class:"form-tips"},"\u5F00\u542F\u7684\u8BDD\uFF0C\u524D\u53F0\u663E\u793A\u793A\u4F8B",-1),M={class:"w-[460px]"},Q=r("div",{class:"form-tips"},"\u7528#\u5206\u9694\u4E3A\u4E00\u4E2A\u793A\u4F8B",-1),j=c({name:"searchExample"}),kt=c({...j,setup(q){const n=S(),t=I({example_status:0,example_content:""}),_={},p=async()=>{const s=await y();for(const e in t)t[e]=s[e]},d=async()=>{var s;await((s=n.value)==null?void 0:s.validate()),await k(t),p()};return p(),(s,e)=>{const f=D,l=b,x=A,v=V,E=C,B=g,F=h,w=N("perms");return u(),L("div",z,[o(E,{ref_key:"formRef",ref:n,rules:_,class:"ls-form",model:m(t),"label-width":"120px"},{default:a(()=>[o(v,{shadow:"never",class:"!border-none"},{default:a(()=>[J,o(l,{label:"AI\u641C\u7D22\u793A\u4F8B",prop:"example_status"},{default:a(()=>[r("div",null,[o(f,{modelValue:m(t).example_status,"onUpdate:modelValue":e[0]||(e[0]=i=>m(t).example_status=i),"active-value":1,"inactive-value":0},null,8,["modelValue"]),K])]),_:1}),o(l,{label:"\u793A\u4F8B\u5185\u5BB9",prop:"example_content"},{default:a(()=>[r("div",M,[o(x,{modelValue:m(t).example_content,"onUpdate:modelValue":e[1]||(e[1]=i=>m(t).example_content=i),type:"textarea",rows:10,resize:"none"},null,8,["modelValue"]),Q])]),_:1})]),_:1})]),_:1},8,["model"]),R((u(),T(F,null,{default:a(()=>[o(B,{type:"primary",onClick:d},{default:a(()=>[U("\u4FDD\u5B58")]),_:1})]),_:1})),[[w,["setting.Mindmap/setExampleConfig"]]])])}}});export{kt as default};