import{J as g,K as c,D as B,C,F as w}from"./element-plus.9458fb52.js";import{_ as U}from"./picker.339dcc7b.js";import{_ as k}from"./picker.e7e8a72a.js";import{g as E}from"./@vueuse.927bd09a.js";import{d as v,o as I,c as D,T as e,K as o,u as t,j as S,Q as s,a as m}from"./@vue.7946e41b.js";const y=m("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A1920px*645px",-1),T=m("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A600px*460px",-1),G=v({__name:"prop",props:{isShow:{type:Boolean},prop:{}},emits:["update:prop"],setup(F,{emit:b}){const r=F,_=b,a=E(r,"prop",_),p=E(r,"isShow",_);return(z,l)=>{const n=g,f=c,d=B,V=k,i=C,A=U,x=w;return I(),D("div",null,[e(x,{"label-width":"70px"},{default:o(()=>[e(d,{label:"\u662F\u5426\u663E\u793A"},{default:o(()=>[e(f,{modelValue:t(p),"onUpdate:modelValue":l[0]||(l[0]=u=>S(p)?p.value=u:null),class:"ml-4"},{default:o(()=>[e(n,{label:!0},{default:o(()=>[s("\u663E\u793A")]),_:1}),e(n,{label:!1},{default:o(()=>[s("\u4E0D\u663E\u793A")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u80CC\u666F\u56FE\u7247"},{default:o(()=>[m("div",null,[e(V,{modelValue:t(a).bgImage,"onUpdate:modelValue":l[1]||(l[1]=u=>t(a).bgImage=u),"upload-class":"bg-body",size:"100px","exclude-domain":!0},null,8,["modelValue"]),y])]),_:1}),e(d,{label:"\u53F3\u4FA7\u56FE\u7247"},{default:o(()=>[m("div",null,[e(V,{modelValue:t(a).rightImage,"onUpdate:modelValue":l[2]||(l[2]=u=>t(a).rightImage=u),"upload-class":"bg-body",size:"100px","exclude-domain":!0},null,8,["modelValue"]),T])]),_:1}),e(d,{label:"\u6807\u9898\u540D\u79F0"},{default:o(()=>[e(i,{modelValue:t(a).title,"onUpdate:modelValue":l[3]||(l[3]=u=>t(a).title=u)},null,8,["modelValue"])]),_:1}),e(d,{label:"\u7B80\u4ECB\u63CF\u8FF0"},{default:o(()=>[e(i,{modelValue:t(a).desc,"onUpdate:modelValue":l[4]||(l[4]=u=>t(a).desc=u),type:"textarea",rows:10,resize:"none"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u6309\u94AE\u663E\u793A"},{default:o(()=>[e(f,{modelValue:t(a).isShowBtn,"onUpdate:modelValue":l[5]||(l[5]=u=>t(a).isShowBtn=u)},{default:o(()=>[e(n,{label:!0},{default:o(()=>[s("\u663E\u793A")]),_:1}),e(n,{label:!1},{default:o(()=>[s("\u4E0D\u663E\u793A")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u6309\u94AE\u6587\u5B57"},{default:o(()=>[e(i,{modelValue:t(a).btnText,"onUpdate:modelValue":l[6]||(l[6]=u=>t(a).btnText=u)},null,8,["modelValue"])]),_:1}),e(d,{label:"\u8DF3\u8F6C\u94FE\u63A5"},{default:o(()=>[e(A,{modelValue:t(a).link,"onUpdate:modelValue":l[7]||(l[7]=u=>t(a).link=u)},null,8,["modelValue"])]),_:1})]),_:1})])}}});export{G as _};