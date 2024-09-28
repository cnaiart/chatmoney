import{u as x}from"./index.d9c09296.js";import{d as f,b as a,o as s,c as e,a as t,M as v,u as i,R as r,P as l,S as d,a6 as _,Z as w}from"./@vue.7946e41b.js";import{_ as S}from"./vue-drag-resize.1871ee6b.js";import"./element-plus.9458fb52.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const y={class:"flex flex-col items-center mx-auto max-w-[1200px]"},b={key:0,class:"flex justify-center flex-col mt-4 sm:mt-0"},k={class:"flex items-center"},I=["src"],Q={class:"text-[20px] font-medium ml-2"},A={class:"flex sm:mt-3 sm:flex-col"},C={class:"mt-5 sm:mb-5"},U={class:"grid grid-cols-2 mt-10 sm:mt-0"},B={class:"mt-4 text-center"},D={class:"text-[18px] font-bold"},L={class:"mt-2 text-[16px] text-[#666]"},M={class:"mt-[15px]"},z={class:"mt-4 text-center"},N={class:"text-[18px] font-bold"},T={class:"mt-2 text-[16px] text-[#666]"},V={class:"mt-[15px]"},j={class:"flex items-center sm:m-0 m-5 sm:mt-[25px] mt-[35px]"},E={key:0,class:"mr-10 text-center sm:mr-12"},F=["src"],P={class:"mt-3 text-white"},R={key:1,class:"text-center"},Z=["src"],$={class:"mt-3 text-white"},q=f({__name:"content",props:{prop:{}},setup(u){const m=x(),n=u,h=a(()=>n.prop.columnMenu1.filter(o=>o.isShow)),g=a(()=>n.prop.columnMenu2.filter(o=>o.isShow));return(o,G)=>(s(),e("div",{class:"bg-center bg-cover",style:w({backgroundImage:`url(${i(m).getImageUrl(o.prop.bgImage)})`})},[t("div",y,[t("div",{class:v(["grid grid-cols-1 lg:grid-cols-3 xl:gap-x-10 sm:py-10 lg:max-w-[1150px] lg:mx-auto",{"lg:grid-cols-2":!o.prop.isShowLeft}])},[o.prop.isShowLeft?(s(),e("div",b,[t("div",k,[t("img",{class:"w-[34px] h-[34px]",src:i(m).getImageUrl(o.prop.logoImage),alt:""},null,8,I),t("span",Q,r(i(m).config.web_name),1)]),t("div",A,[t("div",C,r(o.prop.content),1)])])):l("",!0),t("div",U,[t("div",B,[t("div",D,r(o.prop.column1),1),t("div",L,[(s(!0),e(d,null,_(i(h),(p,c)=>(s(),e("ul",{key:c},[t("li",M,r(p.title),1)]))),128))])]),t("div",z,[t("div",N,r(o.prop.column2),1),t("div",T,[(s(!0),e(d,null,_(i(g),(p,c)=>(s(),e("ul",{key:c},[t("li",V,r(p.title),1)]))),128))])])]),t("div",j,[o.prop.rightQrcodeShow1?(s(),e("div",E,[t("img",{class:"w-[120px] h-[120px]",src:i(m).getImageUrl(o.prop.rightQrcode1),alt:"\u7801\u591A\u591A"},null,8,F),t("div",P,r(o.prop.rightQrcodeTitle1),1)])):l("",!0),o.prop.rightQrcodeShow2?(s(),e("div",R,[t("img",{class:"w-[120px] h-[120px]",src:i(m).getImageUrl(o.prop.rightQrcode2),alt:"\u7801\u591A\u591A"},null,8,Z),t("div",$,r(o.prop.rightQrcodeTitle2),1)])):l("",!0)])],2)])],4))}});const Bt=S(q,[["__scopeId","data-v-dd2a3371"]]);export{Bt as default};