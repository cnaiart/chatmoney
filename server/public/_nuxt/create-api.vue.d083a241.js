import{E}from"./entry.dfbfd4fd.js";import{E as k,a as C}from"./index.883ed08b.js";import"./el-form-item.4ed993c7.js";/* empty css                */import{P as V}from"./index.e94bc8a7.js";import{k as h,s as f,r as y,f as I,H as b,I as F,X as l,V as s,u as o}from"./swiper-vue.2eb6bd20.js";const N=h({__name:"create-api",emits:["confirm"],setup(P,{expose:i,emit:u}){const n=f(),r=f(),t=y({name:""}),c=I({name:[{required:!0,message:"请输入接口名称"}]}),_=()=>{var e;(e=r.value)==null||e.open()},d=()=>{var e;(e=r.value)==null||e.close()},v=async()=>{var e;await((e=n.value)==null?void 0:e.validate()),u("confirm",t)};return i({open:_,close:d}),(e,a)=>{const R=E,w=k,x=C;return b(),F("div",null,[l(V,{ref_key:"popupRef",ref:r,title:"创建API",async:!0,width:"550px",onConfirm:v,onClose:a[1]||(a[1]=m=>{var p;return(p=o(n))==null?void 0:p.resetFields()})},{default:s(()=>[l(x,{ref_key:"formRef",ref:n,model:o(t),rules:o(c),"label-width":"84px"},{default:s(()=>[l(w,{label:"接口名称",prop:"name"},{default:s(()=>[l(R,{modelValue:o(t).name,"onUpdate:modelValue":a[0]||(a[0]=m=>o(t).name=m),placeholder:"接口名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},512)])}}});export{N as _};