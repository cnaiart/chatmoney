import{W as U,w as V,M as P,N as z,L as S,O as G}from"./element-plus.9458fb52.js";import{M as h,f as J,b as K}from"./index.d9c09296.js";import{e as Q,a as W}from"./menu.40370a0f.js";import{u as j}from"./usePaging.9ff9bac2.js";import{_ as q}from"./edit.vue_vue_type_script_setup_true_lang.b54a2e66.js";import{d as N,s as x,r as H,ag as I,o as i,c as v,T as n,K as t,a as T,L as c,J as u,Q as m,u as p,P as E,n as D}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.1871ee6b.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./picker.vue_vue_type_script_setup_true_lang.cc4e2c9f.js";import"./index.9f63869e.js";const X={class:"menu-lists"},Y={key:0},Z={key:1},ee={key:2},te={class:"flex"},oe=N({name:"menu"}),We=N({...oe,setup(ae){const b=x(),d=x();let y=!1;const _=H(!1),{pager:k,getLists:C}=j({fetchFun:W,params:{page_type:0}}),g=async a=>{var o,s;_.value=!0,await D(),a&&((o=d.value)==null||o.setFormData({pid:a})),(s=d.value)==null||s.open("add")},$=async a=>{var o,s;_.value=!0,await D(),(o=d.value)==null||o.open("edit"),(s=d.value)==null||s.getDetail(a)},L=async a=>{await J.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await Q({id:a}),C()},R=()=>{y=!y,w(k.lists,y)},w=(a,o=!0)=>{var s;for(const l in a)(s=b.value)==null||s.toggleRowExpansion(a[l],o),a[l].children&&w(a[l].children,o)};return C(),(a,o)=>{const s=K,l=V,r=P,B=U,A=z,M=S,f=I("perms"),O=G;return i(),v("div",X,[n(M,{class:"!border-none",shadow:"never"},{default:t(()=>[T("div",null,[c((i(),u(l,{type:"primary",onClick:o[0]||(o[0]=e=>g())},{icon:t(()=>[n(s,{name:"el-icon-Plus"})]),default:t(()=>[m(" \u65B0\u589E ")]),_:1})),[[f,["auth.menu/add"]]]),n(l,{onClick:R},{default:t(()=>[m(" \u5C55\u5F00/\u6298\u53E0 ")]),_:1})]),c((i(),u(A,{ref_key:"tableRef",ref:b,class:"mt-4",size:"large",data:p(k).lists,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[n(r,{label:"\u83DC\u5355\u540D\u79F0",prop:"name","min-width":"150","show-overflow-tooltip":""}),n(r,{label:"\u7C7B\u578B",prop:"type","min-width":"80"},{default:t(({row:e})=>[e.type==p(h).CATALOGUE?(i(),v("div",Y,"\u76EE\u5F55")):e.type==p(h).MENU?(i(),v("div",Z,"\u83DC\u5355")):e.type==p(h).BUTTON?(i(),v("div",ee,"\u6309\u94AE")):E("",!0)]),_:1}),n(r,{label:"\u56FE\u6807",prop:"icon","min-width":"80"},{default:t(({row:e})=>[T("div",te,[n(s,{name:e.icon,size:20},null,8,["name"])])]),_:1}),n(r,{label:"\u6743\u9650\u6807\u8BC6",prop:"perms","min-width":"150","show-overflow-tooltip":""}),n(r,{label:"\u72B6\u6001",prop:"is_disable","min-width":"100"},{default:t(({row:e})=>[e.is_disable==0?(i(),u(B,{key:0},{default:t(()=>[m("\u6B63\u5E38")]),_:1})):(i(),u(B,{key:1,type:"danger"},{default:t(()=>[m("\u505C\u7528")]),_:1}))]),_:1}),n(r,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),n(r,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"update_time","min-width":"180"}),n(r,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:t(({row:e})=>[e.type!==p(h).BUTTON?c((i(),u(l,{key:0,type:"primary",link:"",onClick:F=>g(e.id)},{default:t(()=>[m(" \u65B0\u589E ")]),_:2},1032,["onClick"])),[[f,["auth.menu/add"]]]):E("",!0),c((i(),u(l,{type:"primary",link:"",onClick:F=>$(e)},{default:t(()=>[m(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[f,["auth.menu/edit"]]]),c((i(),u(l,{type:"danger",link:"",onClick:F=>L(e.id)},{default:t(()=>[m(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["auth.menu/delete"]]])]),_:1})]),_:1},8,["data"])),[[O,p(k).loading]])]),_:1}),p(_)?(i(),u(q,{key:0,ref_key:"editRef",ref:d,onSuccess:p(C),onClose:o[1]||(o[1]=e=>_.value=!1)},null,8,["onSuccess"])):E("",!0)])}}});export{We as default};