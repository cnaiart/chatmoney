import{_ as Q}from"./index.vue.7f39d825.js";import{x as W,bS as F,A as j,F as G,P as R,az as Y,H as z,aG as ee,I as se,T as te,bp as ae}from"./entry.dfbfd4fd.js";import{u as ne}from"./index.15b778d4.js";import{k as E,g as U,b as V,p as ie,H as n,I as f,N as w,T as r,u as e,a as B,i as re,E as oe,o as le,l as c,r as ce,R as $,J as C,_ as D,U as u,V as k,W as ue,X as H,Z as T,a7 as O,aj as pe,S as ve}from"./swiper-vue.2eb6bd20.js";import{useSearch as de}from"./useSearch.142cdb51.js";import{TypeEnums as P}from"./searchEnums.5f291054.js";const me=W({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),fe={[F]:(S,d)=>[S,d].every(j)},Se=E({name:"ElSteps"}),_e=E({...Se,props:me,emits:fe,setup(S,{emit:d}){const s=S,l=G("steps"),{children:p,addChild:v,removeChild:a}=ne(U(),"ElStep");return V(p,()=>{p.value.forEach((i,o)=>{i.setIndex(o)})}),ie("ElSteps",{props:s,steps:p,addStep:v,removeStep:a}),V(()=>s.active,(i,o)=>{d(F,i,o)}),(i,o)=>(n(),f("div",{class:r([e(l).b(),e(l).m(i.simple?"simple":i.direction)])},[w(i.$slots,"default")],2))}});var ye=R(_e,[["__file","steps.vue"]]);const he=W({title:{type:String,default:""},icon:{type:Y},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),ge=E({name:"ElStep"}),Ce=E({...ge,props:he,setup(S){const d=S,s=G("step"),l=B(-1),p=B({}),v=B(""),a=re("ElSteps"),i=U();oe(()=>{V([()=>a.props.active,()=>a.props.processStatus,()=>a.props.finishStatus],([t])=>{q(t)},{immediate:!0})}),le(()=>{a.removeStep(x.uid)});const o=c(()=>d.status||v.value),N=c(()=>{const t=a.steps.value[l.value-1];return t?t.currentStatus:"wait"}),h=c(()=>a.props.alignCenter),_=c(()=>a.props.direction==="vertical"),m=c(()=>a.props.simple),b=c(()=>a.steps.value.length),L=c(()=>{var t;return((t=a.steps.value[b.value-1])==null?void 0:t.uid)===(i==null?void 0:i.uid)}),g=c(()=>m.value?"":a.props.space),K=c(()=>[s.b(),s.is(m.value?"simple":a.props.direction),s.is("flex",L.value&&!g.value&&!h.value),s.is("center",h.value&&!_.value&&!m.value)]),M=c(()=>{const t={flexBasis:j(g.value)?`${g.value}px`:g.value?g.value:`${100/(b.value-(h.value?0:1))}%`};return _.value||L.value&&(t.maxWidth=`${100/b.value}%`),t}),X=t=>{l.value=t},Z=t=>{const y=t==="wait",I={transitionDelay:`${y?"-":""}${150*l.value}ms`},A=t===a.props.processStatus||y?0:100;I.borderWidth=A&&!m.value?"1px":0,I[a.props.direction==="vertical"?"height":"width"]=`${A}%`,p.value=I},q=t=>{t>l.value?v.value=a.props.finishStatus:t===l.value&&N.value!=="error"?v.value=a.props.processStatus:v.value="wait";const y=a.steps.value[l.value-1];y&&y.calcProgress(v.value)},x=ce({uid:i.uid,currentStatus:o,setIndex:X,calcProgress:Z});return a.addStep(x),(t,y)=>(n(),f("div",{style:D(e(M)),class:r(e(K))},[$(" icon & line "),C("div",{class:r([e(s).e("head"),e(s).is(e(o))])},[e(m)?$("v-if",!0):(n(),f("div",{key:0,class:r(e(s).e("line"))},[C("i",{class:r(e(s).e("line-inner")),style:D(p.value)},null,6)],2)),C("div",{class:r([e(s).e("icon"),e(s).is(t.icon||t.$slots.icon?"icon":"text")])},[w(t.$slots,"icon",{},()=>[t.icon?(n(),u(e(z),{key:0,class:r(e(s).e("icon-inner"))},{default:k(()=>[(n(),u(ue(t.icon)))]),_:1},8,["class"])):e(o)==="success"?(n(),u(e(z),{key:1,class:r([e(s).e("icon-inner"),e(s).is("status")])},{default:k(()=>[H(e(ee))]),_:1},8,["class"])):e(o)==="error"?(n(),u(e(z),{key:2,class:r([e(s).e("icon-inner"),e(s).is("status")])},{default:k(()=>[H(e(se))]),_:1},8,["class"])):e(m)?$("v-if",!0):(n(),f("div",{key:3,class:r(e(s).e("icon-inner"))},T(l.value+1),3))])],2)],2),$(" title & description "),C("div",{class:r(e(s).e("main"))},[C("div",{class:r([e(s).e("title"),e(s).is(e(o))])},[w(t.$slots,"title",{},()=>[O(T(t.title),1)])],2),e(m)?(n(),f("div",{key:0,class:r(e(s).e("arrow"))},null,2)):(n(),f("div",{key:1,class:r([e(s).e("description"),e(s).is(e(o))])},[w(t.$slots,"description",{},()=>[O(T(t.description),1)])],2))],2)],6))}});var J=R(Ce,[["__file","item.vue"]]);const ke=te(ye,{Step:J}),Ee=ae(J);const Be=E({__name:"steps",setup(S){const{options:d,result:s}=de(),l=c(()=>{switch(d.value.type){case P.ALL:return"全网";case P.DOC:return"文档";case P.SCHOLAR:return"学术"}}),p=c(()=>[{title:"问题分析"},{title:`${l.value}搜索`},{title:"整理答案"},{title:"完成"}]);return(v,a)=>{const i=Q,o=Ee,N=ke;return n(),u(N,{active:e(s).status,style:{"max-width":"500px"},"align-center":"","process-status":"finish"},{default:k(()=>[(n(!0),f(ve,null,pe(e(p),(h,_)=>(n(),u(o,{key:_,title:h.title},{icon:k(()=>[e(s).status===_?(n(),u(i,{key:0,name:"el-icon-Loading",style:{animation:"loading-rotate 2s linear infinite"},size:24})):e(s).status>_?(n(),u(i,{key:1,name:"el-icon-SuccessFilled",size:24})):(n(),u(i,{key:2,name:"local-icon-circular",size:24}))]),_:2},1032,["title"]))),128))]),_:1},8,["active"])}}});export{Be as _};