import{D as x,C as R,v as g,t as k,F as A}from"./element-plus.9458fb52.js";import{_ as y}from"./picker.e7e8a72a.js";import{P as h}from"./index.9f63869e.js";import{p as U,b as I}from"./robot_square.577e07cd.js";import{a as N}from"./lodash-es.0dcbbec0.js";import{d as T,s as c,r as q,b as P,_ as S,o as K,c as j,T as t,K as s,u as l,a as _}from"./@vue.7946e41b.js";const z={class:"edit-popup"},G=_("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D\u9762",-1),Z=T({__name:"edit",emits:["success","close"],setup(H,{expose:f,emit:F}){const d=F,i=c(),r=c(),p=q("add"),v=P(()=>p.value=="edit"?"\u7F16\u8F91\u667A\u80FD\u4F53\u5206\u7C7B":"\u65B0\u589E\u667A\u80FD\u4F53\u5206\u7C7B"),o=S({id:"",name:"",image:"",sort:0,is_enable:1}),b={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0"}]},C=async()=>{var u,e;await((u=i.value)==null?void 0:u.validate()),p.value=="edit"?await U(o):await I(o),(e=r.value)==null||e.close(),d("success")},B=()=>{d("close")};return f({open:(u="add")=>{var e;p.value=u,(e=r.value)==null||e.open(),setTimeout(()=>{var n;u=="add"&&((n=i.value)==null||n.resetFields())},100)},setFormData:async u=>{for(const e in o)u[e]!=null&&u[e]!=null&&(N(o[e],u[e])||(o[e]=u[e]))}}),(u,e)=>{const n=y,m=x,V=R,D=g,E=k,w=A;return K(),j("div",z,[t(h,{ref_key:"popupRef",ref:r,title:l(v),async:!0,width:"550px",onConfirm:C,onClose:B},{default:s(()=>[t(w,{class:"ls-form",ref_key:"formRef",ref:i,rules:b,model:l(o),"label-width":"100px"},{default:s(()=>[t(m,{label:"\u5206\u7C7B\u56FE\u6807",prop:"image"},{default:s(()=>[t(n,{modelValue:l(o).image,"onUpdate:modelValue":e[0]||(e[0]=a=>l(o).image=a),limit:1},null,8,["modelValue"])]),_:1}),t(m,{label:"\u5206\u7C7B\u540D\u79F0",prop:"name"},{default:s(()=>[t(V,{class:"ls-input",modelValue:l(o).name,"onUpdate:modelValue":e[1]||(e[1]=a=>l(o).name=a),placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),t(m,{label:"\u6392\u5E8F",prop:"sort"},{default:s(()=>[_("div",null,[t(D,{modelValue:l(o).sort,"onUpdate:modelValue":e[2]||(e[2]=a=>l(o).sort=a),min:0,max:9999},null,8,["modelValue"]),G])]),_:1}),t(m,{label:"\u72B6\u6001",prop:"sort"},{default:s(()=>[t(E,{modelValue:l(o).is_enable,"onUpdate:modelValue":e[3]||(e[3]=a=>l(o).is_enable=a),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{Z as _};