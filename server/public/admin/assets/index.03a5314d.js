import{C as J,D as Q,G as W,H as X,w as Y,F as Z,L as ee,M as te,b as ae,t as oe,N as le,O as ue}from"./element-plus.9458fb52.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{g as V,f as x,b as ie}from"./index.d9c09296.js";import{_ as se}from"./index.vue_vue_type_script_setup_true_lang.57e627f4.js";import{d as S,s as re,r as D,_ as me,a3 as de,ag as pe,o as m,c as M,T as e,K as a,u as o,a7 as ce,S as _e,a6 as fe,J as F,Q as d,a as _,L as C,R as E,j as Fe}from"./@vue.7946e41b.js";import{u as ge}from"./usePaging.9ff9bac2.js";import{h as L,i as Ce,j as Ee,k as be,l as ve,g as ye}from"./ai_creation.8718de7e.js";import{_ as Be}from"./imports.vue_vue_type_script_setup_true_lang.f1862457.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.1871ee6b.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./index.9f63869e.js";const he={class:"flex justify-end mt-4"},we=S({name:"aiCreationModel"}),gt=S({...we,setup(ke){const y=re(),B=D([]),i=me({name:"",category_id:"",status:""}),b=D([]),$=n=>{b.value=n},R=async n=>{await x.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await Ee({id:n}),c()},P=async n=>{await x.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await be({ids:n}),c()},U=async n=>{await ve({id:n}),c()},{pager:p,getLists:c,resetPage:h,resetParams:z}=ge({fetchFun:L,params:i});return(async()=>{const{lists:n}=await ye({page_type:0});B.value=n})(),c(),(n,l)=>{const K=J,g=Q,f=W,w=X,s=Y,N=se,T=Z,k=ee,j=ie,A=de("router-link"),u=te,I=ae,q=oe,O=le,G=ne,v=pe("perms"),H=ue;return m(),M("div",null,[e(k,{class:"!border-none",shadow:"never"},{default:a(()=>[e(T,{ref:"formRef",class:"mb-[-16px]",model:o(i),inline:!0},{default:a(()=>[e(g,{label:"\u6A21\u578B\u540D\u79F0"},{default:a(()=>[e(K,{class:"w-[280px]",modelValue:o(i).name,"onUpdate:modelValue":l[0]||(l[0]=t=>o(i).name=t),placeholder:"\u8BF7\u8F93\u5165\u6A21\u578B\u540D\u79F0",clearable:"",onKeyup:ce(o(h),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(g,{label:"\u6240\u5C5E\u7C7B\u76EE"},{default:a(()=>[e(w,{class:"w-[280px]",modelValue:o(i).category_id,"onUpdate:modelValue":l[1]||(l[1]=t=>o(i).category_id=t)},{default:a(()=>[e(f,{label:"\u5168\u90E8",value:""}),(m(!0),M(_e,null,fe(o(B),(t,r)=>(m(),F(f,{key:r,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(g,{label:"\u6A21\u578B\u72B6\u6001"},{default:a(()=>[e(w,{class:"w-[280px]",modelValue:o(i).status,"onUpdate:modelValue":l[2]||(l[2]=t=>o(i).status=t)},{default:a(()=>[e(f,{label:"\u5168\u90E8",value:""}),e(f,{label:"\u5F00\u542F",value:1}),e(f,{label:"\u5173\u95ED",value:0})]),_:1},8,["modelValue"])]),_:1}),e(g,null,{default:a(()=>[e(s,{type:"primary",onClick:o(h)},{default:a(()=>[d("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(s,{onClick:o(z)},{default:a(()=>[d("\u91CD\u7F6E")]),_:1},8,["onClick"]),e(N,{class:"ml-2.5","fetch-fun":o(L),"export-fun":o(Ce),params:o(i),"page-size":o(p).size},null,8,["fetch-fun","export-fun","params","page-size"])]),_:1})]),_:1},8,["model"])]),_:1}),e(k,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[_("div",null,[C((m(),F(A,{to:o(V)("creation.creationModel/add")},{default:a(()=>[e(s,{type:"primary"},{icon:a(()=>[e(j,{name:"el-icon-Plus"})]),default:a(()=>[d(" \u65B0\u589E\u884C\u4E1A\u6A21\u578B ")]),_:1})]),_:1},8,["to"])),[[v,["creation.creationModel/add"]]]),e(s,{class:"ml-2",type:"default",plain:!0,onClick:l[3]||(l[3]=t=>o(y).open())},{default:a(()=>[d(" \u6279\u91CF\u5BFC\u5165 ")]),_:1}),e(s,{type:"default",plain:!0,disabled:!o(b).length,onClick:l[4]||(l[4]=t=>P(o(b).map(r=>r.id)))},{default:a(()=>[d(" \u6279\u91CF\u5220\u9664 ")]),_:1},8,["disabled"])]),C((m(),F(O,{size:"large",class:"mt-4",data:o(p).lists,onSelectionChange:$},{default:a(()=>[e(u,{type:"selection",width:"55"}),e(u,{label:"\u56FE\u6807","min-width":"100"},{default:a(({row:t})=>[e(I,{src:t.image,class:"w-[44px] h-[44px]"},null,8,["src"])]),_:1}),e(u,{label:"\u6A21\u578B\u540D\u79F0",prop:"name","min-width":"120"}),e(u,{label:"\u6A21\u578B\u63CF\u8FF0",prop:"tips","min-width":"150"}),e(u,{label:"\u6240\u5C5E\u7C7B\u76EE",prop:"category_name","min-width":"120"}),e(u,{label:"\u8BBF\u95EE\u6570\u636E/\u6B21","min-width":"160"},{default:a(({row:t})=>[_("div",null,"\u4ECA\u65E5\u8BBF\u95EE\uFF1A"+E(t.day_use_count),1),_("div",null,"\u7D2F\u8BA1\u8BBF\u95EE\uFF1A"+E(t.all_use_count),1)]),_:1}),e(u,{label:"\u4F7F\u7528\u4EBA\u6570","min-width":"160"},{default:a(({row:t})=>[_("div",null,"\u4ECA\u65E5\u4F7F\u7528\uFF1A"+E(t.day_user_count),1),_("div",null,"\u7D2F\u8BA1\u4F7F\u7528\uFF1A"+E(t.all_user_count),1)]),_:1}),e(u,{label:"\u72B6\u6001","min-width":"100"},{default:a(({row:t})=>[e(q,{onChange:r=>U(t.id),modelValue:t.status,"onUpdate:modelValue":r=>t.status=r,"active-value":1,"inactive-value":0},null,8,["onChange","modelValue","onUpdate:modelValue"])]),_:1}),e(u,{label:"\u6392\u5E8F",prop:"sort","min-width":"120"}),e(u,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time","min-width":"100"}),e(u,{label:"\u64CD\u4F5C",width:"150",fixed:"right"},{default:a(({row:t})=>[e(s,{type:"primary",link:""},{default:a(()=>[C((m(),F(A,{to:{path:o(V)("creation.creationModel/edit"),query:{id:t.id}}},{default:a(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["to"])),[[v,["creation.creationModel/edit"]]])]),_:2},1024),C((m(),F(s,{type:"danger",link:"",onClick:r=>R(t.id)},{default:a(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[v,["creation.creationModel/del"]]])]),_:1})]),_:1},8,["data"])),[[H,o(p).loading]]),_("div",he,[e(G,{modelValue:o(p),"onUpdate:modelValue":l[5]||(l[5]=t=>Fe(p)?p.value=t:null),onChange:o(c)},null,8,["modelValue","onChange"])])]),_:1}),e(Be,{ref_key:"importsRef",ref:y,onSuccess:o(c)},null,8,["onSuccess"])])}}});export{gt as default};