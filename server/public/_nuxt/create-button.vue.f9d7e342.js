import{a as _,m as p,d as u}from"./entry.dfbfd4fd.js";import{c as a,a as o,b as f,d as b,f as k}from"./useDrawEffect.259be699.js";import{k as g,H as t,I as s,X as h,V as y,u as e,R as n,Z as r,J as x}from"./swiper-vue.2eb6bd20.js";const w={class:"absolute bottom-0 left-0 bg-body p-4 w-full z-10"},B={key:0},S={key:1},v=x("span",{class:"text-base font-bold"},"立即生成",-1),C={key:0,class:"text-sm ml-2"},V={key:1,class:"text-sm ml-2"},T=g({__name:"create-button",props:{disabled:{type:Boolean,default:!1}},emits:["create"],setup(c,{emit:L}){const i=_(),l=p(),d=()=>{f()||b(k.value)};return(N,U)=>{const m=u;return t(),s("div",w,[h(m,{size:"large",type:"primary",class:"w-full",disabled:c.disabled,onClick:d,loading:e(a)},{default:y(()=>[e(a)?(t(),s("div",B,"正在请求中")):(t(),s("div",S,[v,e(o).is_member?(t(),s("span",C,"会员免费")):n("",!0),e(o).power!=0&&!e(o).is_member&&e(l).isLogin?(t(),s("span",V,"消耗"+r(e(o).power||"--")+r(e(i).getTokenUnit),1)):n("",!0)]))]),_:1},8,["disabled","loading"])])}}});export{T as _};