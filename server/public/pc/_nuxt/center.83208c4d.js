import{d as C,c as V,cU as E,f as S,cV as g,g as B,E as U}from"./entry.df16adda.js";import{E as N,a as R}from"./el-form-item.f85b8636.js";/* empty css                */import{_ as P}from"./bindmobilePop.vue.6b346e01.js";import{k as F,a as u,s as T,u as s,I as d,J as $,K as o,a2 as e,a0 as t,e as D,a4 as f,ae as m,$ as J,Y as K,n as Y,an as j,ao as q}from"./swiper-vue.397ea2eb.js";import{_ as z}from"./_plugin-vue_export-helper.c27b6911.js";import"./_baseClone.000a3762.js";import"./_getTag.af7a9d71.js";import"./el-select.b349f79d.js";import"./el-popper.89e34564.js";import"./el-scrollbar.f4d658ff.js";import"./strings.294b5976.js";import"./isEqual.b93d80e7.js";import"./debounce.2369182b.js";import"./el-tag.7a8069da.js";import"./index.e706d27a.js";import"./index.34adc8c7.js";import"./el-dialog.64289190.js";import"./use-dialog.825901d5.js";import"./refs.2a024717.js";const v=n=>(j("data-v-eaa277a6"),n=n(),q(),n),A={class:"w-full p-[20px]"},G=v(()=>o("div",{class:"title pb-[20px] text-[#333333] font-medium text-[16px]"}," 个人信息 ",-1)),H={class:"mt-[30px]"},L={class:"flex items-center"},M=v(()=>o("div",{class:"form-tips"}," 注销你的账户后，你将无法使用我们的任何服务，并且与你的账户相关的所有数据都将永久丢失。此操作不可逆！ ",-1)),O=F({__name:"center",setup(n){const k=C(),p=u(!1),_=T(),a=V(),r=u(s(a.userInfo.nickname)),x=async()=>{p.value=!0,await Y(),_.value.open()},y=async()=>{await E({field:"nickname",value:r.value}),a.getUser()},b=async()=>{await S.confirm("确认注销账号吗？注销后将无法登录！"),await g(),k.push("/"),a.logout()};return(Q,i)=>{const I=B,l=N,c=U,w=R;return d(),$("div",A,[G,o("div",H,[e(w,{"label-width":"90px"},{default:t(()=>[e(l,{label:"用户昵称"},{default:t(()=>[o("div",null,[e(I,{modelValue:s(r),"onUpdate:modelValue":i[0]||(i[0]=h=>D(r)?r.value=h:null)},null,8,["modelValue"])])]),_:1}),e(l,{label:"手机号码"},{default:t(()=>[o("div",L,[o("span",null,f(s(a).userInfo.mobile),1),e(c,{class:"ml-2",type:"primary",link:"",onClick:x},{default:t(()=>[m("点击修改")]),_:1})])]),_:1}),e(l,{label:"注册时间"},{default:t(()=>[o("div",null,f(s(a).userInfo.create_time),1)]),_:1}),e(l,null,{default:t(()=>[e(c,{type:"primary",onClick:y},{default:t(()=>[m("保存")]),_:1})]),_:1}),e(l,{label:"注销账号",class:"mt-[50px]"},{default:t(()=>[o("div",null,[e(c,{link:"",type:"primary",onClick:b},{default:t(()=>[m("立即注销 >")]),_:1}),M])]),_:1})]),_:1})]),s(p)?(d(),J(P,{key:0,onClose:i[1]||(i[1]=()=>{p.value=!1,s(a).getUser()}),ref_key:"bindPopRef",ref:_},null,512)):K("",!0)])}}});const ke=z(O,[["__scopeId","data-v-eaa277a6"]]);export{ke as default};