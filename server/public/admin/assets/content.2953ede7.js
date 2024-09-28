import{_ as c}from"./code.7d55339d.js";import{u as r}from"./index.d9c09296.js";import{d as a,o as l,c as i,a as t,Z as e,u as s,M as B,R as F,P as p,bk as m,bj as E}from"./@vue.7946e41b.js";import{_ as C}from"./vue-drag-resize.1871ee6b.js";import"./element-plus.9458fb52.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const n=u=>(m("data-v-86cb3670"),u=u(),E(),u),d={class:"poster-bg rounded-lg flex flex-col"},D=["src"],x={class:"px-[20px] pt-[135px]"},f={class:"bg-white rounded-lg p-[15px] text-tx-primary"},h=n(()=>t("span",{class:"text-[18px] font-bold"}," \u5B87\u5B99\u7684\u5C3D\u5934\u662F\u4EC0\u4E48\uFF1F\u5B87\u5B99\u7684\u5C3D\u5934\u662F\u4EC0\u4E48\uFF1F\u5B87\u5B99\u7684\u5C3D\u5934\u662F\u4EC0\u4E48\uFF1F\u5B87\u5B99\u2026 ",-1)),_=n(()=>t("br",null,null,-1)),g={class:"px-[20px] pt-[10px]"},A={class:"flex items-center justify-between"},v={class:"flex items-center"},b=["src"],y={class:"ml-[10px] text-[16px]"},w=n(()=>t("div",null,"\u674E\u5BCC\u8D35",-1)),I={key:0},S=n(()=>t("div",null,[t("img",{src:c,alt:"",class:"w-[100px] h-[100px]"}),t("div",null,"\u957F\u6309\u8BC6\u522B\u4E8C\u7EF4\u7801")],-1)),k=a({__name:"content",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},height:{type:String,default:"170px"}},setup(u){const o=r();return(U,j)=>(l(),i("div",{class:"h-full poster",style:e(u.styles)},[t("div",d,[t("img",{class:"w-full",style:e({background:u.content.bgColor}),src:u.content.default==2?s(o).getImageUrl(u.content.posterUrl):u.content.poster==1?s(o).getImageUrl(u.content.defaultUrl1):s(o).getImageUrl(u.content.defaultUrl2),alt:""},null,12,D),t("div",{class:"flex-1 min-h-0",style:e({background:u.content.bgColor})},null,4)]),t("div",{class:"w-full h-full poster-contain1 bg-[#BBBBBB]",style:e({color:u.content.textColor})},[t("div",x,[t("div",f,[h,_,t("span",{class:B(["text-[14px]",{"line-clamp-[1]":u.content.showContentType==1}]),style:e({"-webkit-line-clamp":u.content.contentNum})}," \u76EE\u524D\u6211\u4EEC\u5BF9\u5B87\u5B99\u7684\u5C3D\u5934\u8FD8\u6CA1\u6709\u5B8C\u5168\u7684\u4E86\u89E3\uFF0C\u4E5F\u6CA1\u6709\u786E\u51FF\u7684\u8BC1\u636E\u8BC1\u660E\u5B87\u5B99\u662F\u5426\u6709\u5C3D\u5934\u3002\u6839\u636E\u6211\u4EEC\u76EE\u524D\u5BF9\u5B87\u5B99\u7684\u8BA4\u77E5\uFF0C\u5B87\u5B99\u662F\u65E0\u9650\u7684\uFF0C\u6CA1\u6709\u8FB9\u754C\u3002\u4F46\u662F\uFF0C\u6211\u4EEC\u53EA\u80FD\u89C2\u6D4B\u5230\u5B87\u5B99\u4E2D\u53EF\u89C1\u7684\u90E8\u5206\uFF0C\u800C\u5B87\u5B99\u4E2D\u8FD8\u6709\u5F88\u591A\u6211\u4EEC\u65E0\u6CD5\u89C2\u6D4B \u5230\u7684\u6697\u7269\u8D28\u548C\u6697\u80FD\u91CF\uFF0C\u56E0\u6B64\u6211\u4EEC\u5BF9\u5B87\u5B99\u7684\u8BA4\u8BC6\u8FD8\u6709\u5F88\u591A\u672A\u77E5\u548C\u5F85\u63A2\u7D22\u7684\u9886\u57DF\u3002 \u8FD1\u5E74\u6765\uFF0C\u79D1\u5B66\u5BB6\u4EEC\u901A\u8FC7\u5929\u6587\u89C2\u6D4B\u548C\u7406\u8BBA\u6A21\u578B \u7B49\u624B\u6BB5\uFF0C\u63D0\u51FA\u4E86\u4E00\u4E9B\u6709\u5173\u5B87\u5B99\u5C3D\u5934\u7684\u5047\u8BF4\uFF0C\u5982\u5B87\u5B99\u662F\u4E00\u4E2A\u95ED\u5408\u7684\u7403\u9762\u7A7A\u95F4\u7B49\u3002\u4F46\u8FD9\u4E9B\u5047\u8BF4\u8FD8\u9700\u8981\u66F4\u591A\u7684\u79D1\u5B66\u5B9E\u9A8C\u8BC1\u5B9E\u6216\u5426\u5B9A\u3002\u56E0\u6B64\uFF0C\u5B87\u5B99\u7684\u5C3D\u5934\u4ECD\u7136\u662F\u4E00\u4E2A\u5F85\u89E3\u51B3\u7684\u79D1\u5B66\u95EE\u9898\u3002 ",6)])]),t("div",g,[t("div",A,[t("div",v,[t("img",{src:s(o).getImageUrl(u.content.defaultAvatar),alt:"",class:"w-[60px] h-[60px] rounded-full"},null,8,b),t("div",y,[w,u.content.showData==1?(l(),i("div",I,F(u.content.data),1)):p("",!0)])]),S])])],4)],4))}});const Du=C(k,[["__scopeId","data-v-86cb3670"]]);export{Du as default};