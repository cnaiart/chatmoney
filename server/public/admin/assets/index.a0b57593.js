import{W as w,M as y,w as C,N as B,L,O as x}from"./element-plus.9458fb52.js";import{e as D}from"./message.d9aa54f6.js";import{_ as F}from"./edit.vue_vue_type_script_setup_true_lang.552e1899.js";import{d as f,s as T,_ as N,ag as R,o,c as S,L as u,u as d,J as r,K as t,T as i,Q as l}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.d9c09296.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.1871ee6b.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./index.9f63869e.js";const V=f({name:"shortLetter"}),yt=f({...V,setup($){const p=T(),e=N({loading:!1,lists:[]}),c=async()=>{try{e.loading=!0,e.lists=await D(),e.loading=!1}catch{e.loading=!1}},g=a=>{var s;(s=p.value)==null||s.open(a)};return c(),(a,s)=>{const n=y,_=w,h=C,E=B,v=L,b=R("perms"),k=x;return o(),S("div",null,[u((o(),r(v,{class:"!border-none",shadow:"never"},{default:t(()=>[i(E,{size:"large",data:d(e).lists},{default:t(()=>[i(n,{label:"\u77ED\u4FE1\u6E20\u9053",prop:"name","min-width":"120"}),i(n,{label:"\u72B6\u6001","min-width":"120"},{default:t(({row:m})=>[m.status==1?(o(),r(_,{key:0},{default:t(()=>[l("\u5F00\u542F")]),_:1})):(o(),r(_,{key:1,type:"danger"},{default:t(()=>[l("\u5173\u95ED")]),_:1}))]),_:1}),i(n,{label:"\u64CD\u4F5C","min-width":"120",fixed:"right"},{default:t(({row:m})=>[u((o(),r(h,{type:"primary",link:"",onClick:z=>g(m.type)},{default:t(()=>[l(" \u8BBE\u7F6E ")]),_:2},1032,["onClick"])),[[b,["notice.sms_config/setConfig"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[k,d(e).loading]]),i(F,{ref_key:"editRef",ref:p,onSuccess:c},null,512)])}}});export{yt as default};