import{h,E as w}from"./entry.dfbfd4fd.js";import{E as R,a as y}from"./index.883ed08b.js";import{_ as b}from"./index.b46f9587.js";import{P as k}from"./index.e94bc8a7.js";import"./el-form-item.4ed993c7.js";/* empty css                */import{a as E}from"./digital.2bbc06b8.js";import{k as U,s as f,a as q,f as B,H as C,U as I,V as s,N,X as t,J as l,u as o}from"./swiper-vue.2eb6bd20.js";const P={class:"w-[420px]"},D=l("div",{class:"form-tips"},"建议尺寸：50*50px",-1),F=l("div",{class:"form-tips"},"建议尺寸：280px×187px",-1),K=U({__name:"add",emits:["success"],setup(S,{emit:_}){const c=h(),i=f(),a=q({name:"",avatar:"",image:""}),u=f(),v=B({name:[{required:!0,message:"请输入形象名称"}],avatar:[{required:!0,type:"string",message:"请选择形象头像"}],image:[{required:!0,type:"string",message:"请选择形象封面"}]}),g=async()=>{var e,m;await((e=u.value)==null?void 0:e.validate());const{id:n}=await E(a.value);(m=i.value)==null||m.close(),c.push({path:"/application/digital/edit",query:{id:n}}),_("success")};return(n,e)=>{const m=w,p=R,d=b,V=y,x=k;return C(),I(x,{ref_key:"popRef",ref:i,title:"创建形象",width:"500px",async:"",onConfirm:g},{trigger:s(()=>[N(n.$slots,"default")]),default:s(()=>[t(V,{class:"p-4",ref_key:"formRef",ref:u,model:o(a),"label-width":"100px",rules:o(v)},{default:s(()=>[t(p,{label:"形象名称",prop:"name"},{default:s(()=>[l("div",P,[t(m,{modelValue:o(a).name,"onUpdate:modelValue":e[0]||(e[0]=r=>o(a).name=r),placeholder:"请输入形象名称",clearable:""},null,8,["modelValue"])])]),_:1}),t(p,{label:"形象头像",prop:"avatar"},{default:s(()=>[l("div",null,[l("div",null,[t(d,{modelValue:o(a).avatar,"onUpdate:modelValue":e[1]||(e[1]=r=>o(a).avatar=r)},null,8,["modelValue"])]),D])]),_:1}),t(p,{label:"形象封面",prop:"image"},{default:s(()=>[l("div",null,[l("div",null,[t(d,{modelValue:o(a).image,"onUpdate:modelValue":e[2]||(e[2]=r=>o(a).image=r)},null,8,["modelValue"])]),F])]),_:1})]),_:1},8,["model","rules"])]),_:3},512)}}});export{K as _};