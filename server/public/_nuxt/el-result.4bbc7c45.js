import{cY as k,aM as y,cZ as b,c_ as C,x as $,F as w,P as I,T as R}from"./entry.dfbfd4fd.js";import{k as m,l as S,H as l,I as a,J as f,N as i,u as e,U as T,T as t,W as B,R as c,Z as p}from"./swiper-vue.2eb6bd20.js";const o={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},d={[o.success]:k,[o.warning]:y,[o.error]:b,[o.info]:C},E=$({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),N=m({name:"ElResult"}),h=m({...N,props:E,setup(v){const _=v,n=w("result"),r=S(()=>{const s=_.icon,u=s&&o[s]?o[s]:"icon-info",g=d[u]||d["icon-info"];return{class:u,component:g}});return(s,u)=>(l(),a("div",{class:t(e(n).b())},[f("div",{class:t(e(n).e("icon"))},[i(s.$slots,"icon",{},()=>[e(r).component?(l(),T(B(e(r).component),{key:0,class:t(e(r).class)},null,8,["class"])):c("v-if",!0)])],2),s.title||s.$slots.title?(l(),a("div",{key:0,class:t(e(n).e("title"))},[i(s.$slots,"title",{},()=>[f("p",null,p(s.title),1)])],2)):c("v-if",!0),s.subTitle||s.$slots["sub-title"]?(l(),a("div",{key:1,class:t(e(n).e("subtitle"))},[i(s.$slots,"sub-title",{},()=>[f("p",null,p(s.subTitle),1)])],2)):c("v-if",!0),s.$slots.extra?(l(),a("div",{key:2,class:t(e(n).e("extra"))},[i(s.$slots,"extra")],2)):c("v-if",!0)],2))}});var M=I(h,[["__file","result.vue"]]);const V=R(M);export{V as E};