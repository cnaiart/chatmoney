import{N as M,G as O,H as q,D as z,w as H,F as J,L as K,M as Q,b as W,t as X,O as Y}from"./element-plus.9458fb52.js";import{_ as Z}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{u as ee}from"./usePaging.9ff9bac2.js";import{g as te,_ as oe,c as ae,d as le,b as ie}from"./addPop.vue_vue_type_script_setup_true_lang.7335d8f4.js";import{f as y}from"./index.d9c09296.js";import{d as ne,r as b,s as V,i as se,ag as ue,o as n,c as re,T as e,K as t,u as i,Q as r,L as m,J as p,a as me,j as pe,P as de,n as B}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.9f63869e.js";import"./vue-drag-resize.1871ee6b.js";import"./picker.e7e8a72a.js";import"./index.2ce53bd2.js";import"./index.3b915137.js";import"./index.vue_vue_type_script_setup_true_lang.04d48163.js";import"./index.vue_vue_type_script_setup_true_lang.f8366df7.js";import"./preview.vue_vue_type_script_setup_true_lang.fdc93781.js";import"./file.vue_vue_type_style_index_0_scoped_ba7daef9_lang.b66d1428.js";import"./vue3-video-play.e85b6285.js";import"./vuedraggable.0170ba82.js";import"./vue.c48aa7bc.js";import"./sortablejs.65032496.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const ce={class:"flex justify-end mt-4"},ct=ne({__name:"manage",setup(_e){const v=b({name:"",status:""}),d=b(!1),C=V(),w=V(),D=async()=>{d.value=!0,await B(),C.value.open()},x=async a=>{d.value=!0,await B(),C.value.open(a)},S=async a=>{await ae({id:a})},R=async a=>{await y.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF01"),await le({id:a}),_()},L=async()=>{var l;const a=(l=w.value)==null?void 0:l.getSelectionRows().map(g=>g.id);await y.confirm("\u662F\u5426\u786E\u5B9A\u6279\u91CF\u5220\u9664\uFF01"),await ie({id:a}),_()},h=b(!1),P=a=>{console.log(a),h.value=a.length!=0},{pager:c,getLists:_,resetPage:$,resetParams:N}=ee({fetchFun:te,params:v.value});return se(()=>{_()}),(a,l)=>{const g=O,T=q,E=z,s=H,G=J,k=K,u=Q,U=W,A=X,j=Z,f=ue("perms"),I=Y;return n(),re("div",null,[e(k,{class:"!border-none",shadow:"never"},{default:t(()=>[e(G,{ref:"formRef",class:"mb-[-16px]",model:v.value,inline:!0},{default:t(()=>[e(E,{label:"\u524D\u666F\u72B6\u6001"},{default:t(()=>[e(T,{class:"w-[280px]",modelValue:v.value.status,"onUpdate:modelValue":l[0]||(l[0]=o=>v.value.status=o)},{default:t(()=>[e(g,{label:"\u5F00\u542F",value:"1"}),e(g,{label:"\u5173\u95ED",value:"0"})]),_:1},8,["modelValue"])]),_:1}),e(E,null,{default:t(()=>[e(s,{type:"primary",onClick:i($)},{default:t(()=>[r("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(s,{onClick:i(N)},{default:t(()=>[r("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(k,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[m((n(),p(s,{type:"primary",onClick:D},{default:t(()=>[r("+ \u65B0\u589E\u524D\u666F")]),_:1})),[[f,["digital.preposition/add"]]]),m((n(),p(s,{onClick:L,disabled:!h.value},{default:t(()=>[r("\u6279\u91CF\u5220\u9664")]),_:1},8,["disabled"])),[[f,["digital.preposition/batchDel"]]]),m((n(),p(i(M),{class:"mt-2",size:"large",data:i(c).lists,ref_key:"tableRef",ref:w,onSelectionChange:P},{default:t(()=>[e(u,{type:"selection",width:"50"}),e(u,{label:"\u524D\u666F\u56FE","min-width":"120"},{default:t(({row:o})=>[e(U,{"preview-teleported":!0,"preview-src-list":[o.url],class:"w-[80px]",src:o.url},null,8,["preview-src-list","src"])]),_:1}),e(u,{label:"\u72B6\u6001","min-width":"100"},{default:t(({row:o})=>[m(e(A,{modelValue:o.status,"onUpdate:modelValue":F=>o.status=F,"active-value":1,"inactive-value":0,onChange:F=>S(o.id)},null,8,["modelValue","onUpdate:modelValue","onChange"]),[[f,["digital.preposition/status"]]])]),_:1}),e(u,{label:"\u6392\u5E8F",prop:"sort","min-width":"180"}),e(u,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time","min-width":"180"}),e(u,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:t(({row:o})=>[m((n(),p(s,{type:"primary",link:"",onClick:F=>x(o)},{default:t(()=>[r(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[f,["digital.preposition/edit"]]]),m((n(),p(s,{type:"danger",onClick:F=>R(o.id),link:""},{default:t(()=>[r(" \u5220\u9664")]),_:2},1032,["onClick"])),[[f,["digital.preposition/del"]]])]),_:1})]),_:1},8,["data"])),[[I,i(c).loading]]),me("div",ce,[e(j,{modelValue:i(c),"onUpdate:modelValue":l[1]||(l[1]=o=>pe(c)?c.value=o:null),onChange:i(_)},null,8,["modelValue","onChange"])])]),_:1}),d.value?(n(),p(oe,{key:0,ref_key:"addPopRef",ref:C,onSuccess:l[2]||(l[2]=()=>{d.value=!1,i(_)()}),onClose:l[3]||(l[3]=o=>d.value=!1)},null,512)):de("",!0)])}}});export{ct as default};