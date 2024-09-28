import{L as n,w as p,C as _}from"./element-plus.9458fb52.js";import{_ as v}from"./picker.e7e8a72a.js";import{d as c,_ as F,o as f,c as x,T as s,K as m,a as o,u as l,Q as V}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.9f63869e.js";import"./vue-drag-resize.1871ee6b.js";import"./index.2ce53bd2.js";import"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import"./index.3b915137.js";import"./index.d9c09296.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./index.vue_vue_type_script_setup_true_lang.04d48163.js";import"./index.vue_vue_type_script_setup_true_lang.f8366df7.js";import"./usePaging.9ff9bac2.js";import"./preview.vue_vue_type_script_setup_true_lang.fdc93781.js";import"./file.vue_vue_type_style_index_0_scoped_ba7daef9_lang.b66d1428.js";import"./vue3-video-play.e85b6285.js";import"./vuedraggable.0170ba82.js";import"./vue.c48aa7bc.js";import"./sortablejs.65032496.js";const E={class:"flex flex-wrap"},h={class:"flex m-4"},A=o("div",{class:"mr-4"},"\u9009\u62E9\u56FE\u7247\uFF1A",-1),D={class:"flex m-4"},w=o("div",{class:"mr-4"},"\u9009\u62E9\u89C6\u9891\uFF1A",-1),C={class:"flex flex-1 m-4"},B=o("div",{class:"mr-4"},"\u591A\u5F20\u56FE\u7247\uFF1A",-1),U={class:"flex-1"},b={class:"flex flex-wrap"},k={class:"flex m-4"},N=o("div",{class:"mr-4"},"\u81EA\u5B9A\u4E49\u9009\u62E9\u5668\u5927\u5C0F\uFF1A",-1),T={class:"flex m-4"},g=o("div",{class:"mr-4"},"\u4F7F\u7528\u63D2\u69FD\uFF1A",-1),y={class:"flex m-4"},z=o("div",{class:"mr-4"},"\u9009\u51FA\u5730\u5740\u4E0D\u5E26\u57DF\u540D\uFF1A",-1),I={class:"flex m-4 items-center"},K=o("div",{class:"w-20 flex-none"},"\u5E26\u57DF\u540D\uFF1A",-1),L={class:"flex m-4 items-center"},Q=o("div",{class:"w-20 flex-none"},"\u4E0D\u5E26\u57DF\u540D\uFF1A",-1),jo=c({__name:"file",setup(j){const e=F({value1:"",value2:[],value3:"",value4:"",value5:"",value6:""});return(q,t)=>{const i=v,a=n,r=p,d=_;return f(),x("div",null,[s(a,{header:"\u57FA\u7840\u4F7F\u7528",shadow:"none",class:"!border-none"},{default:m(()=>[o("div",E,[o("div",h,[A,s(i,{modelValue:l(e).value1,"onUpdate:modelValue":t[0]||(t[0]=u=>l(e).value1=u)},null,8,["modelValue"])]),o("div",D,[w,s(i,{type:"video",modelValue:l(e).value3,"onUpdate:modelValue":t[1]||(t[1]=u=>l(e).value3=u)},null,8,["modelValue"])]),o("div",C,[B,o("div",U,[s(i,{limit:4,modelValue:l(e).value2,"onUpdate:modelValue":t[2]||(t[2]=u=>l(e).value2=u)},null,8,["modelValue"])])])])]),_:1}),s(a,{header:"\u8FDB\u9636\u7528\u6CD5",shadow:"none",class:"!border-none mt-4"},{default:m(()=>[o("div",b,[o("div",k,[N,s(i,{size:"60px",modelValue:l(e).value4,"onUpdate:modelValue":t[3]||(t[3]=u=>l(e).value4=u)},null,8,["modelValue"])]),o("div",T,[g,s(i,{modelValue:l(e).value5,"onUpdate:modelValue":t[4]||(t[4]=u=>l(e).value5=u)},{upload:m(()=>[s(r,null,{default:m(()=>[V("\u9009\u62E9\u6587\u4EF6")]),_:1})]),_:1},8,["modelValue"])]),o("div",y,[z,s(i,{"exclude-domain":!0,modelValue:l(e).value6,"onUpdate:modelValue":t[5]||(t[5]=u=>l(e).value6=u)},null,8,["modelValue"])])]),o("div",null,[o("div",I,[K,s(d,{class:"w-[500px]","model-value":l(e).value5},null,8,["model-value"])]),o("div",L,[Q,s(d,{class:"w-[500px]","model-value":l(e).value6},null,8,["model-value"])])])]),_:1})])}}});export{jo as default};