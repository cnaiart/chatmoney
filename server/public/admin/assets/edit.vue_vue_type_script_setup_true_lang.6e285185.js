import{C as k,D as h,t as x,F as g}from"./element-plus.9458fb52.js";import{P as R}from"./index.9f63869e.js";import{e as A,a as S}from"./type.a845e3cd.js";import{d as U,s as c,r as I,b as N,_ as P,o as T,c as q,T as u,K as l,u as a,a as f}from"./@vue.7946e41b.js";const K={class:"edit-popup"},j=f("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u8D8A\u524D\u9762",-1),M=U({__name:"edit",emits:["success","close"],setup(z,{expose:_,emit:v}){const m=v,i=c(),n=c(),r=I("add"),B=N(()=>r.value=="add"?"\u65B0\u589E\u7C7B\u522B":"\u7F16\u8F91\u7C7B\u522B"),t=P({id:"",name:"",sort:0,status:1}),F={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]},C=async()=>{var o,e;await((o=i.value)==null?void 0:o.validate()),r.value=="edit"?await A(t):await S(t),(e=n.value)==null||e.close(),m("success")},V=(o="add")=>{var e;r.value=o,(e=n.value)==null||e.open()},D=async o=>{for(const e in t)o[e]!=null&&o[e]!=null&&(t[e]=o[e])},E=()=>{m("close")};return _({open:V,setFormData:D}),(o,e)=>{const p=k,d=h,w=x,y=g;return T(),q("div",K,[u(R,{ref_key:"popupRef",ref:n,title:a(B),async:!0,width:"550px",onConfirm:C,onClose:E},{default:l(()=>[u(y,{ref_key:"formRef",ref:i,model:a(t),"label-width":"84px",rules:F},{default:l(()=>[u(d,{label:"\u7C7B\u522B\u540D\u79F0",prop:"name"},{default:l(()=>[u(p,{placeholder:"\u8BF7\u8F93\u5165\u7C7B\u522B\u540D\u79F0",modelValue:a(t).name,"onUpdate:modelValue":e[0]||(e[0]=s=>a(t).name=s)},null,8,["modelValue"])]),_:1}),u(d,{label:"\u6392\u5E8F"},{default:l(()=>[f("div",null,[u(p,{class:"ls-input",modelValue:a(t).sort,"onUpdate:modelValue":e[1]||(e[1]=s=>a(t).sort=s)},null,8,["modelValue"]),j])]),_:1}),u(d,{label:"\u72B6\u6001"},{default:l(({row:s})=>[u(w,{modelValue:a(t).status,"onUpdate:modelValue":e[2]||(e[2]=b=>a(t).status=b),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{M as _};