import{w as B,O as h}from"./element-plus.9458fb52.js";import{_ as w}from"./index.c3587517.js";import{a as R,u as T}from"./vue-router.c4b4a189.js";import{i as V,f as q}from"./index.d9c09296.js";import{_ as L}from"./form.vue_vue_type_script_setup_true_lang.b744d74d.js";import{a as M,d as x,b as A}from"./model.de461dbd.js";import{u as N}from"./useLockFn.06f76359.js";import{d as f,s as P,r as S,ag as $,L as l,u as o,o as c,c as j,T as i,j as J,K as a,J as K,Q as d,P as O}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./vue-drag-resize.1871ee6b.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./picker.e7e8a72a.js";import"./index.9f63869e.js";import"./index.2ce53bd2.js";import"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import"./index.3b915137.js";import"./index.vue_vue_type_script_setup_true_lang.04d48163.js";import"./index.vue_vue_type_script_setup_true_lang.f8366df7.js";import"./usePaging.9ff9bac2.js";import"./preview.vue_vue_type_script_setup_true_lang.fdc93781.js";import"./file.vue_vue_type_style_index_0_scoped_ba7daef9_lang.b66d1428.js";import"./vue3-video-play.e85b6285.js";import"./vuedraggable.0170ba82.js";import"./vue.c48aa7bc.js";import"./sortablejs.65032496.js";const Q=f({name:"aiModelEdit"}),Gt=f({...Q,setup(U){const r=R(),e=T(),m=e.query.type,_=e.query.id,u=V(),s=P(),t=S({is_system:0,type:1,channel:"",logo:"",name:"",configs:{},is_enable:0,models:[]}),{lockFn:y,isLock:v}=N(async()=>{t.value=await A({id:e.query.id})}),F=async()=>{await s.value.validate(),await M({...t.value,type:m}),setTimeout(()=>{r.back(),u.removeTab(e.fullPath,r)})},k=async()=>{await q.confirm(`\u786E\u5B9A\u8981\u5220\u9664 ${t.value.name} \u5417\uFF1F\u5220\u9664\u540E\u5DF2\u7ECF\u9009\u62E9\u8BE5\u6A21\u578B\u7684\u7528\u6237\u5C06\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01`),await x({id:e.query.id}),r.back(),u.removeTab(e.fullPath,r)};return y(),(C,p)=>{const n=B,b=w,D=$("perms"),E=h;return l((c(),j("div",null,[i(L,{ref_key:"formRef",ref:s,modelValue:o(t),"onUpdate:modelValue":p[0]||(p[0]=g=>J(t)?t.value=g:null),"header-title":C.$route.meta.title,"current-id":o(_),type:o(m)},null,8,["modelValue","header-title","current-id","type"]),i(b,null,{default:a(()=>[o(t).is_system?O("",!0):l((c(),K(n,{key:0,type:"danger",onClick:k},{default:a(()=>[d(" \u5220\u9664 ")]),_:1})),[[D,["setting.ai.models/del"]]]),i(n,{type:"primary",onClick:F},{default:a(()=>[d("\u4FDD\u5B58")]),_:1})]),_:1})])),[[E,o(v)]])}}});export{Gt as default};