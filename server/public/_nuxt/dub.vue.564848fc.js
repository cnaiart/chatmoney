import{a as D,b as w}from"./el-radio-group.c427f46d.js";import{_ as S}from"./index.a64ca386.js";import{E as B}from"./el-empty.6e01cec2.js";import{E as L}from"./index.17567b0d.js";import{a0 as N,cO as I}from"./entry.dfbfd4fd.js";/* empty css                        *//* empty css                     */import{u as U}from"./asyncData.eaddccf2.js";import{u as $}from"./canvas.94886ee6.js";import R from"./dub-item.0b35de3d.js";import{e as A}from"./empty_con.c3f015fe.js";import{k as F,r as G,aa as O,l as T,H as o,I as r,J as l,X as m,V as i,u as t,S as x,aj as y,U as u,a7 as j,Z as z}from"./swiper-vue.2eb6bd20.js";const H=""+new URL("dub.cdac0986.png",import.meta.url).href,J={class:"h-full flex flex-col"},M={class:"pt-[15px] px-main"},P={class:"flex-1 min-h-0"},X={class:"p-main"},Z={key:0},ce=F({__name:"dub",async setup(q){let s,p;const c=$(),n=G({keyword:"",index:0}),{data:_,refresh:h,pending:K}=([s,p]=O(()=>U(()=>I(n),{lazy:!0},"$O0PtTSN0G7")),s=await s,p(),s),f=T(()=>{var a;return((a=_.value[n.index])==null?void 0:a.list)||[]});N(()=>{h()},1e3);const v=a=>{c.dub=a};return(a,b)=>{const g=w,k=D,V=S,E=B,C=L;return o(),r("div",J,[l("div",null,[l("div",M,[m(V,{class:"my-[-5px]","default-height":42},{default:i(()=>[m(k,{modelValue:t(n).index,"onUpdate:modelValue":b[0]||(b[0]=e=>t(n).index=e),class:"el-radio-group-margin"},{default:i(()=>[(o(!0),r(x,null,y(t(_),(e,d)=>(o(),u(g,{key:d,label:d},{default:i(()=>[j(z(e.type),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})])]),l("div",P,[m(C,null,{default:i(()=>[l("div",X,[t(f).length?(o(),r("div",Z,[(o(!0),r(x,null,y(t(f),e=>(o(),u(R,{"active-id":t(c).dub.Voice,"item-id":e.Voice,key:e.Voice,class:"mb-[15px]",name:`${e.Name}-${e.Desc}`,pic:t(H),url:e.VoiceUrl,disabled:t(c).voiceContent.type===2,onClick:d=>v(e)},null,8,["active-id","item-id","name","pic","url","disabled","onClick"]))),128))])):(o(),u(E,{key:1,image:t(A),description:"暂无数据～"},null,8,["image"]))])]),_:1})])])}}});export{ce as _};