import{D as i,C as c,F as r}from"./element-plus.9458fb52.js";import{_ as f}from"./picker.e7e8a72a.js";import{d as F,o as V,c as b,T as e,K as n,a}from"./@vue.7946e41b.js";const p=a("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A60*60",-1),E=a("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A710*112",-1),C=F({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(l){return(A,t)=>{const s=f,o=i,d=c,m=r;return V(),b("div",null,[e(m,{"label-width":"80px"},{default:n(()=>[e(o,{label:"\u4F1A\u5458\u56FE\u6807",class:"is-required"},{default:n(()=>[a("div",null,[e(s,{modelValue:l.content.icon,"onUpdate:modelValue":t[0]||(t[0]=u=>l.content.icon=u),"exclude-domain":""},null,8,["modelValue"]),p])]),_:1}),e(o,{label:"\u80CC\u666F\u56FE",class:"is-required"},{default:n(()=>[a("div",null,[e(s,{modelValue:l.content.bg,"onUpdate:modelValue":t[1]||(t[1]=u=>l.content.bg=u),"exclude-domain":""},null,8,["modelValue"]),E])]),_:1}),e(o,{label:"\u6807\u9898\u540D\u79F0",class:"is-required"},{default:n(()=>[e(d,{class:"w-[360px]",modelValue:l.content.title,"onUpdate:modelValue":t[2]||(t[2]=u=>l.content.title=u)},null,8,["modelValue"])]),_:1}),e(o,{label:"\u526F\u6807\u9898\u540D",class:"is-required"},{default:n(()=>[e(d,{class:"w-[360px]",modelValue:l.content.sub_title,"onUpdate:modelValue":t[3]||(t[3]=u=>l.content.sub_title=u)},null,8,["modelValue"])]),_:1}),e(o,{label:"\u6309\u94AE\u6587\u6848",class:"is-required"},{default:n(()=>[e(d,{class:"w-[360px]",modelValue:l.content.btn,"onUpdate:modelValue":t[4]||(t[4]=u=>l.content.btn=u)},null,8,["modelValue"])]),_:1})]),_:1})])}}});export{C as _};