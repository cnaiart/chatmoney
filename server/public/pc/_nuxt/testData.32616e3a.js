import{g as V,E as q}from"./entry.df16adda.js";import{E as C,a as D}from"./el-form-item.f85b8636.js";import{E as L}from"./el-image-viewer.ad15677e.js";import{E as S}from"./el-progress.598034ee.js";import{E as N}from"./el-scrollbar.f4d658ff.js";import{E as B}from"./el-card.55a0e076.js";/* empty css                */import{u as T}from"./useLockFn.a803ddfa.js";import{q as M}from"./my_database.5da0ead6.js";import{k as U,a as m,I as n,J as c,a2 as e,a0 as s,K as o,u as t,ae as j,Y as u,Z as J,ap as K,a4 as i,an as P,ao as R}from"./swiper-vue.397ea2eb.js";import{_ as Y}from"./_plugin-vue_export-helper.c27b6911.js";import"./_baseClone.000a3762.js";import"./_getTag.af7a9d71.js";import"./throttle.92cc074e.js";import"./debounce.2369182b.js";import"./position.a44f3ead.js";const Z=""+new URL("empty.dce45c37.png",import.meta.url).href,z=l=>(P("data-v-c4473720"),l=l(),R(),l),A={class:"grid lg:grid-cols-2 gap-4 grid-cols-1 h-full"},G={class:"px-[10px] py-[5px] h-full lg:borderLeft"},H={key:0,class:"flex flex-col items-center justify-center h-full"},O=z(()=>o("div",{class:"mt-[10px] text-[#5a646e]"},"测试结果将在这里展示",-1)),Q={key:0},W={class:"text-sm text-tx-secondary mt-[5px]"},X={class:"text-sm text-tx-secondary"},$=U({__name:"testData",props:{id:{type:Number,default:0},type:{type:String,default:""}},setup(l){const f=l,d=m([]),r=m({kb_id:f.id,question:""}),x=async()=>{d.value=await M({...r.value})},{lockFn:g,isLock:h}=T(x);return(tt,p)=>{const b=V,_=C,y=q,v=D,E=L,k=S,w=N,I=B;return n(),c("div",null,[e(I,{class:"!border-none h-full",shadow:"never","body-style":{height:"100%"}},{default:s(()=>[o("div",A,[o("div",null,[e(v,{"label-width":"90px"},{default:s(()=>[e(_,{label:"测试文本"},{default:s(()=>[e(b,{modelValue:t(r).question,"onUpdate:modelValue":p[0]||(p[0]=a=>t(r).question=a),type:"textarea",rows:"20"},null,8,["modelValue"])]),_:1}),e(_,null,{default:s(()=>[o("div",null,[e(y,{loading:t(h),disabled:t(r).question==""||t(r).kb_id=="",type:"primary",onClick:t(g)},{default:s(()=>[j(" 测试 ")]),_:1},8,["loading","disabled","onClick"])])]),_:1})]),_:1})]),o("div",G,[t(d).length==0?(n(),c("div",H,[e(E,{src:t(Z)},null,8,["src"]),O])):u("",!0),e(w,null,{default:s(()=>[t(d).length!=0?(n(),c("div",Q,[(n(!0),c(J,null,K(t(d),(a,F)=>(n(),c("div",{key:F,class:"p-[10px] border border-solid border-br-light mb-[10px] rounded"},[e(k,{percentage:Math.abs(a.score/1)*100,color:"var(--el-text-color-disabled)"},{default:s(()=>[o("span",null,i(Math.abs(a.score).toFixed(5)),1)]),_:2},1032,["percentage"]),o("div",W,i(a.question),1),o("div",X,i(a.answer),1)]))),128))])):u("",!0)]),_:1})])])]),_:1})])}}});const gt=Y($,[["__scopeId","data-v-c4473720"]]);export{gt as default};