import{M as h,C as b,t as E,N as A}from"./element-plus.9458fb52.js";import{u as D}from"./vue-router.c4b4a189.js";import{h as v}from"./@vueuse.927bd09a.js";import{a as y}from"./member.00ce7679.js";import{d as B,i as w,o as x,c as C,T as t,K as a,u as F,a as p}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.d9c09296.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.1871ee6b.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const M=p("div",{class:"font-medium text-xl mb-4"},"\u5E94\u7528\u9650\u5236",-1),U=p("span",null,"\u6B21",-1),Vt=B({__name:"app-limits",props:{modelValue:{}},emits:["update:modelValue"],setup(r,{emit:s}){const{query:m}=D(),n=r,d=s,{modelValue:u}=v(n,d),c=async()=>{try{const{apply_list:e}=await y();u.value.apply_list=e}catch(e){console.log("\u83B7\u53D6\u6A21\u578B\u5217\u8868\u5931\u8D25=>",e)}};return w(()=>{!(m!=null&&m.id)&&c()}),(e,g)=>{const l=h,_=b,f=E,V=A;return x(),C("div",null,[M,t(V,{size:"large",data:F(u).apply_list},{default:a(()=>[t(l,{label:"\u6A21\u578B\u540D\u79F0",prop:"name","min-width":"150"}),t(l,{label:"\u4F7F\u7528\u4E0A\u9650/\u5929","min-width":"150"},{default:a(({row:o})=>[t(_,{modelValue:o.day_limit,"onUpdate:modelValue":i=>o.day_limit=i,placeholder:"\u4E3A\u7A7A\u6216\u4E3A0\u8868\u793A\u4E0D\u9650\u5236",clearable:"",type:"number",class:"w-[250px]"},{append:a(()=>[U]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),t(l,{label:"\u4F1A\u5458\u514D\u8D39","min-width":"150"},{default:a(({row:o})=>[t(f,{modelValue:o.status,"onUpdate:modelValue":i=>o.status=i,"active-value":1,"inactive-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data"])])}}});export{Vt as default};