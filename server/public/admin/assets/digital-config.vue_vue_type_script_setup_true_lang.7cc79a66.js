import{t as _,D as f,b as x}from"./element-plus.9458fb52.js";import{g}from"./@vueuse.927bd09a.js";import{d as v,o as d,c as b,T as l,K as n,a as o,u as t,J as h,M as V,R as w,P as C}from"./@vue.7946e41b.js";const E={class:"pt-[10px]"},k={class:"flex flex-wrap"},y={class:"line-clamp-2 ml-[15px]"},S=v({__name:"digital-config",props:{modelValue:{}},emits:["update:modelValue"],setup(m,{emit:p}){const e=g(m,"modelValue",p);return(D,i)=>{const c=_,r=f,u=x;return d(),b("div",E,[l(r,{label:"\u542F\u7528\u5F62\u8C61",prop:"is_digital"},{default:n(()=>[o("div",null,[l(c,{modelValue:t(e).is_digital,"onUpdate:modelValue":i[0]||(i[0]=a=>t(e).is_digital=a),"inline-prompt":"","active-value":1,"inactive-value":0},null,8,["modelValue"])])]),_:1}),t(e).is_digital?(d(),h(r,{key:0,label:"\u9009\u62E9\u5F62\u8C61",prop:"digital_id"},{default:n(()=>{var a,s;return[o("div",null,[o("div",k,[o("div",{class:V(["flex items-center p-[15px] border border-br-light border-solid w-[260px] rounded-[10px] cursor-pointer h-[80px]",{"!text-primary border-primary":!0}])},[l(u,{class:"w-[50px] h-[50px] rounded-[50%] overflow-hidden border border-solid border-white flex-none",fit:"cover",src:(a=t(e).digital)==null?void 0:a.avatar},null,8,["src"]),o("div",y,w((s=t(e).digital)==null?void 0:s.name),1)])])])]}),_:1})):C("",!0)])}}});export{S as _};