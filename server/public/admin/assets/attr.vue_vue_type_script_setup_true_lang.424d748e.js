import{C,D,G as w,H as N,w as U,F as T}from"./element-plus.9458fb52.js";import{_ as L}from"./index.3b915137.js";import{f as O,b as j}from"./index.d9c09296.js";import{_ as q}from"./picker.e7e8a72a.js";import{D as z}from"./vuedraggable.0170ba82.js";import{d as I,_ as S,b as $,o as i,c as _,T as e,K as o,a as d,u as f,J as b,S as G,a6 as H,Q as J}from"./@vue.7946e41b.js";const K={class:"mb-[18px] max-w-[400px]"},Q={class:""},R=d("div",{class:"mb-[15px] pr-[12px] w-[85px]"},[d("span",{class:"text-error"},"*"),d("span",{class:"text-tx-regular"},"\u5956\u52B1\u8BBE\u7F6E")],-1),M={class:"flex items-center bg-fill-light w-full p-4 mb-4"},P={class:"ml-6"},W={class:"flex-1 flex items-center"},X={class:"drag-move cursor-move ml-auto"},ue=I({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(m){const c=m,p=S([{name:"\u5206\u4EAB\u597D\u53CB",type:3,disabled:!1},{name:"\u9080\u8BF7\u65B0\u7528\u6237",type:2,disabled:!1},{name:"\u5206\u4EAB\u7ED8\u753B\u81F3\u5E7F\u573A",type:4,disabled:!1},{name:"\u6BCF\u65E5\u7B7E\u5230",type:1,disabled:!1},{name:"\u89C6\u9891\u5206\u4EAB",type:5,disabled:!1},{name:"\u97F3\u4E50\u5206\u4EAB",type:6,disabled:!1},{name:"\u667A\u80FD\u4F53\u5206\u4EAB",type:7,disabled:!1}]),B=$(()=>p.map(s=>{let a=!1;return c.content.data.some(n=>n.type===s.type)&&(a=!0),{...s,disabled:a}})),F=(s,a)=>{const n=p.find(u=>u.type===s);if(n){const u=c.content.data;u[a].name=n.name,u[a].customName=n.name}},E=()=>{var s;((s=c.content.data)==null?void 0:s.length)<p.length?c.content.data.push({image:"",name:"",customName:"",show:1,type:""}):O.msgError("\u5DF2\u8FBE\u5230\u6DFB\u52A0\u4E0A\u9650")},y=s=>{c.content.data.splice(s,1)};return(s,a)=>{const n=C,u=D,V=q,g=w,h=N,A=j,x=L,v=U,k=T;return i(),_("div",null,[e(k,{"label-width":"85px","label-position":"left"},{default:o(()=>[d("div",K,[e(u,{label:"\u6807\u9898\u540D\u79F0",class:"is-required"},{default:o(()=>[e(n,{modelValue:m.content.title,"onUpdate:modelValue":a[0]||(a[0]=l=>m.content.title=l),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(u,{label:"\u526F\u6807\u9898",class:"is-required"},{default:o(()=>[e(n,{modelValue:m.content.subTitle,"onUpdate:modelValue":a[1]||(a[1]=l=>m.content.subTitle=l),placeholder:"\u8BF7\u8F93\u5165\u526F\u6807\u9898"},null,8,["modelValue"])]),_:1}),d("div",Q,[R,e(f(z),{class:"draggable",modelValue:m.content.data,"onUpdate:modelValue":a[2]||(a[2]=l=>m.content.data=l),animation:"300",handle:".drag-move"},{item:o(({element:l,index:r})=>[(i(),b(x,{key:r,onClose:t=>y(r)},{default:o(()=>[d("div",M,[e(V,{modelValue:l.image,"onUpdate:modelValue":t=>l.image=t,"upload-class":"bg-body","exclude-domain":"",size:"60px"},null,8,["modelValue","onUpdate:modelValue"]),d("div",P,[e(u,{label:"\u4EFB\u52A1\u7C7B\u578B"},{default:o(()=>[e(h,{modelValue:l.type,"onUpdate:modelValue":t=>l.type=t,placeholder:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u7C7B\u578B",onChange:t=>F(t,r)},{default:o(()=>[(i(!0),_(G,null,H(f(B),t=>(i(),b(g,{key:t.type,label:t.name,value:t.type,disabled:t.disabled&&t.type!==l.type},null,8,["label","value","disabled"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024),e(u,{label:"\u81EA\u5B9A\u4E49"},{default:o(()=>[e(n,{modelValue:l.customName,"onUpdate:modelValue":t=>l.customName=t,placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(u,{label:"\u6392\u5E8F",class:"!mb-0"},{default:o(()=>[d("div",W,[d("div",X,[e(A,{name:"el-icon-Rank",size:"18"})])])]),_:1})])])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"])]),e(u,{"label-width":"0"},{default:o(()=>[e(v,{type:"primary",onClick:E},{default:o(()=>[J("\u6DFB\u52A0\u4EFB\u52A1")]),_:1})]),_:1})])]),_:1})])}}});export{ue as _};