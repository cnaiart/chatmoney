import{_ as J}from"./index.vue.7f39d825.js";import{a as O,m as Q,b as A,j as M,d as T}from"./entry.dfbfd4fd.js";import{E as X}from"./index.6c069afb.js";/* empty css                  */import{u as Z}from"./useCopy.5611cfa5.js";import{d as q}from"./download.f61d7233.js";import{Q as F}from"./qrcode.vue.esm.415e365a.js";import{k as G,a as c,s as K,l as f,E as W,H as m,I as _,J as t,N as Y,X as l,V as r,u as o,_ as E,Z as ee,R as I,a7 as N,e as oe}from"./swiper-vue.2eb6bd20.js";import{_ as te}from"./_plugin-vue_export-helper.c27b6911.js";import"./use-dialog.7d399731.js";import"./isUndefined.aa0326a0.js";import"./refs.cabac943.js";const se={class:"poster-container"},ae={style:{height:"548px"},class:"flex justify-center overflow-hidden"},le={class:"poster-bg flex flex-col"},ne=["src"],re={class:"w-full h-full poster-contain1"},ie={class:"mt-6 px-5 grid grid-cols-2 gap-x-[10px]"},ce={class:"flex-1"},de={class:"flex-1"},pe=G({__name:"poster",setup(ue){const U=O(),{getImageUrl:d,config:fe}=U,i=c(!1),p=c(!1),s=c({}),u=c(!1),v=Q(),x=K(),B=async()=>{var e;u.value=!0;try{const{data:a}=await A({id:9});s.value=((e=JSON.parse(a)[0])==null?void 0:e.content)||{}}finally{u.value=!1}},R=f(()=>`${window.origin}/mobile?user_sn=${v.userInfo.sn}`),z=f(()=>{const e=s.value;if(e.default==1&&e.poster==1)return d(e.defaultUrl1);if(e.default==1&&e.poster==2)return d(e.defaultUrl2);if(e.default==2)return d(e.posterUrl)}),{copy:L}=Z(),P=f(()=>`${window.origin}/?user_sn=${v.userInfo.sn}`),j=async()=>{try{p.value=!0,await q(x.value)}catch{M.msgError("下载失败，请重试")}finally{p.value=!1}};return W(()=>{B()}),(e,a)=>{const g=J,w=T,H=X;return m(),_("div",se,[t("div",{class:"inline-block",onClick:a[0]||(a[0]=n=>i.value=!0)},[Y(e.$slots,"trigger",{},void 0,!0)]),l(H,{modelValue:o(i),"onUpdate:modelValue":a[2]||(a[2]=n=>oe(i)?i.value=n:null),title:"分销海报","show-close":"",class:"!rounded-[15px]",width:"390px"},{default:r(()=>{var n,y,h,k,$,b,V,C,D,S;return[t("div",ae,[o(u)?I("",!0):(m(),_("div",{key:0,ref_key:"posterRef",ref:x,class:"poster h-[548px] overflow-hidden"},[t("div",le,[t("img",{class:"w-full min-h-[548px] rounded-[10px]",src:o(z),alt:""},null,8,ne)]),t("div",re,[t("div",{class:"absolute z-10 bg-white rounded-[10px] p-[5px]",style:E({top:`${((y=(n=o(s))==null?void 0:n.code)==null?void 0:y.y)*1.218}px`,left:`${((k=(h=o(s))==null?void 0:h.code)==null?void 0:k.x)*1.218}px`})},[l(F,{value:o(R),size:110,margin:1},null,8,["value"])],4),o(s).showData?(m(),_("span",{key:0,class:"text-white text-xl absolute z-10",style:E({top:`${((b=($=o(s))==null?void 0:$.data)==null?void 0:b.y)*1.218}px`,left:`${((C=(V=o(s))==null?void 0:V.data)==null?void 0:C.x)*1.218}px`})},ee((S=(D=o(s))==null?void 0:D.data)==null?void 0:S.content),5)):I("",!0)])],512))]),t("div",ie,[t("div",ce,[l(w,{class:"w-full",onClick:a[1]||(a[1]=me=>o(L)(o(P)))},{icon:r(()=>[l(g,{name:"el-icon-DocumentCopy"})]),default:r(()=>[N(" 复制链接 ")]),_:1})]),t("div",de,[l(w,{type:"primary",class:"w-full",loading:o(p),onClick:j},{icon:r(()=>[l(g,{name:"el-icon-Download"})]),default:r(()=>[N(" 下载 ")]),_:1},8,["loading"])])])]}),_:1},8,["modelValue"])])}}});const De=te(pe,[["__scopeId","data-v-c30aafc1"]]);export{De as default};