import{a1 as f,J as B,K as V,H as x,D,C as h}from"./element-plus.9458fb52.js";import{g as A}from"./@vueuse.927bd09a.js";import{d as C,o as n,c as w,T as l,K as a,a as t,u,Q as m,R as y,J as v,P as b}from"./@vue.7946e41b.js";const g={class:"pt-[10px]"},I={class:"w-80"},R={class:"flex-1 min-w-0"},U={class:"w-full flex"},k={class:"flex-1 max-w-[320px]"},N=t("div",{class:"form-tips"}," \u8F93\u51650-1\u4E4B\u95F4\u7684\u6570\u503C\uFF0C\u652F\u63012\u4F4D\u5C0F\u6570\u70B9\uFF1B\u9AD8\u76F8\u4F3C\u5EA6\u63A8\u8350\u8BBE\u7F6E0.8\u4EE5\u4E0A ",-1),S={class:"flex-1 min-w-0"},J={class:"w-full flex"},K={class:"flex-1 max-w-[320px]"},T=t("div",{class:"form-tips"},"\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A5\uFF0C\u8BF7\u8F93\u51650-20\u4E4B\u95F4\u7684\u6574\u6570\u6570\u503C",-1),z={class:"w-80"},q=C({__name:"search-config",props:{modelValue:{}},emits:["update:modelValue"],setup(r,{emit:p}){const e=A(r,"modelValue",p);return(M,o)=>{const c=x,d=D,i=f,_=B,E=V,F=h;return n(),w("div",g,[l(d,{label:"AI\u63A5\u53E3",prop:"model"},{default:a(()=>[t("div",I,[l(c,{modelValue:u(e).models,"onUpdate:modelValue":o[0]||(o[0]=s=>u(e).models=s),placeholder:"\u8BF7\u9009\u62E9AI\u63A5\u53E3",class:"w-full",clearable:""},{default:a(()=>[m(y(u(e).models),1)]),_:1},8,["modelValue"])])]),_:1}),l(d,{label:"\u76F8\u4F3C\u5EA6",prop:"search_similarity"},{default:a(()=>[t("div",R,[t("div",U,[t("div",k,[l(i,{min:0,max:1,step:.01,modelValue:u(e).search_similarity,"onUpdate:modelValue":o[1]||(o[1]=s=>u(e).search_similarity=s)},null,8,["modelValue"])])]),N])]),_:1}),l(d,{label:"\u5355\u6B21\u641C\u7D22\u6570\u91CF",prop:"search_limits"},{default:a(()=>[t("div",S,[t("div",J,[t("div",K,[l(i,{min:0,max:20,modelValue:u(e).search_limits,"onUpdate:modelValue":o[2]||(o[2]=s=>u(e).search_limits=s)},null,8,["modelValue"])])]),T])]),_:1}),l(d,{label:"\u7A7A\u641C\u7D22\u56DE\u590D"},{default:a(()=>[l(E,{modelValue:u(e).search_empty_type,"onUpdate:modelValue":o[3]||(o[3]=s=>u(e).search_empty_type=s)},{default:a(()=>[l(_,{label:1},{default:a(()=>[m(" AI\u56DE\u590D ")]),_:1}),l(_,{label:2},{default:a(()=>[m(" \u81EA\u5B9A\u4E49\u56DE\u590D ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(e).search_empty_type===2?(n(),v(d,{key:0},{default:a(()=>[t("div",z,[l(F,{modelValue:u(e).search_empty_text,"onUpdate:modelValue":o[4]||(o[4]=s=>u(e).search_empty_text=s),placeholder:"\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9\uFF0C\u5F53\u641C\u7D22\u5339\u914D\u4E0D\u4E0A\u5185\u5BB9\u65F6\uFF0C\u76F4\u63A5\u56DE\u590D\u586B\u5199\u7684\u5185\u5BB9",type:"textarea",autosize:{minRows:6,maxRows:6},maxlength:1e3,"show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1})):b("",!0)])}}});export{q as _};